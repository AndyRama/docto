import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token d'authentification requis" });
  }

  try {
    // D'abord, obtenir l'ID de l'utilisateur
    const userResponse = await fetch("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const userData = await userResponse.json();
    const userId = userData.resource.uri;

    // Ensuite, obtenir les événements pour cet utilisateur
    const eventsResponse = await fetch(
      `https://api.calendly.com/scheduled_events?user=${userId}&status=active`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await eventsResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
