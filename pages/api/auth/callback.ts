import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: "Code OAuth manquant" });
  }

  try {
    const response = await fetch("https://auth.calendly.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID,
        client_secret: process.env.CALENDLY_CLIENT_SECRET,
        code,
        redirect_uri: process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }

    res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
