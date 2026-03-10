import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, personal_phone } = req.body;

    const params = new URLSearchParams();
    params.append("name", name ?? "");
    params.append("email", email ?? "");
    params.append("personal_phone", personal_phone ?? "");

    const response = await fetch(
      "https://www.cityurbanismo.com.br/rdstation.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao repassar para rdstation" });
  }
}