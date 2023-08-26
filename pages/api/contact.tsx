import { sendSlackMessage } from '@/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') throw new Error('true');
    const payload = {
      ...req.body,
      date: new Date()
    };

    let slackMessage = 'New Contact Form Submission\n';

    Object.keys(payload).forEach((key) => {
      slackMessage += `${key}: ${payload[key]}\n`;
    });

    sendSlackMessage(process.env.NEXT_SLACK_WEBHOOK_URL || '', slackMessage);

    const response = await fetch('https://api.justinbond.dev/contact/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_CONTACT_TOKEN}`
      })
    }).then((res) => res.json());

    if (response?.acknowledged) {
      res.status(200).json({ success: true });
    } else {
      throw new Error(response.error);
    }
  } catch (e: any) {
    res.status(400).json({ error: e?.message });
  }
};

export default handler;
