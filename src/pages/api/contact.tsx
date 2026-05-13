import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { MongoClient } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error('Missing MONGO_URI');
}

const mongoClient = new MongoClient(mongoUri);

const clientPromise =
  global._mongoClientPromise ??
  (global._mongoClientPromise = mongoClient.connect());

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const payload = {
      ...req.body,
      date: new Date()
    };

    if (!payload.email || !payload.message) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const client = await clientPromise;
    const db = client.db('website');

    await db.collection('contacts').insertOne(payload);

    const slackUrl = process.env.NEXT_SLACK_WEBHOOK_URL;
    if (slackUrl) {
      fetch(slackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New Contact Form Submission:\n${Object.entries(payload)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')}`
        })
      }).catch(console.error);
    }

    return res.status(200).json({ success: true });
  } catch (e: any) {
    Sentry.captureException(e);
    return res.status(500).json({ error: e?.message || 'Unknown error' });
  }
}
