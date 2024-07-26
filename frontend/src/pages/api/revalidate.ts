// http://localhost:3000/[lang]/api/revalidate?path=/&secret=8648E55E51AA8E21BD3F9F4FEBAF3

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.body.entry.slug;
  let pathToRevalidate =
    ' http://localhost:3000/[lang]/api/revalidate?path=/&secret=8648E55E51AA8E21BD3F9F4FEBAF3';

  if (req.query.secret !== process.env.REVALIDATE) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {
    console.log('pathToRevalidate: ', pathToRevalidate);
    await res.revalidate(pathToRevalidate);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
