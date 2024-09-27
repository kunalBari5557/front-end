// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    res.status(200).json({ message: 'Login successful', user: username });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
