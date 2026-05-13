import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { MongoClient } from 'mongodb';

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

    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('Missing MONGO_URI environment variable');
    }

    const client = await MongoClient.connect(mongoUri);
    const db = client.db('website');

    await db.collection('contacts').insertOne(payload);
    await client.close();

    await fetch(process.env.NEXT_SLACK_WEBHOOK_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: `New Contact Form Submission:\n${Object.entries(payload)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')}`
      })
    });

    return res.status(200).json({ success: true });
  } catch (e: any) {
    Sentry.captureException(e);
    return res.status(500).json({ error: e?.message || 'Unknown error' });
  }
}
