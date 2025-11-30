export async function POST(req: Request) {
  const data = await req.json();

  console.log("Zapier event received:", data);

  return new Response(
    JSON.stringify({ status: "ok", received: true }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
