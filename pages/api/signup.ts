// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // Simulate signup API
  if (username && password) {
    res.status(200).json({ message: 'Signup successful', user: username });
  } else {
    res.status(400).json({ message: 'Please fill in all fields' });
  }
}
