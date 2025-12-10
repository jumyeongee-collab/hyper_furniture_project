export default async function handler(req, res) {
  const body = req.body;
  const zapierUrl = "https://hooks.zapier.com/hooks/catch/25560989/ukzaj3v/";

  const zapResp = await fetch(zapierUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!zapResp.ok) {
    return res.status(500).json({ error: "Zapier request failed" });
  }

  return res.status(200).json({ status: "ok" });
}
