import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const slackWebhookUrl = process.env.NEXT_SLACK_WEBHOOK_URL;

async function notifySlack(message: string) {
  if (!slackWebhookUrl) return;

  try {
    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message })
    });
  } catch (slackError) {
    console.error('Slack notification failed:', slackError);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const uri = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB || 'website';

  if (!uri) {
    const errorMessage = 'Missing MONGO_URI environment variable';
    await notifySlack(`MongoDB ping cron failed: ${errorMessage}`);
    return res.status(500).json({ error: errorMessage });
  }

  const client = new MongoClient(uri, {
    serverApi: { version: '1', strict: true, deprecationErrors: true }
  });

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.command({ ping: 1 });
    return res.status(200).json({ success: true, database: dbName });
  } catch (error: any) {
    const errorMessage = error?.message || 'MongoDB ping failed';
    await notifySlack(
      `MongoDB ping cron failed for database '${dbName}': ${errorMessage}`
    );
    return res.status(500).json({ error: errorMessage });
  } finally {
    await client.close();
  }
}
