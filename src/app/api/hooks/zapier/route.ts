export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let payload: any = {}

    if (contentType.includes('application/json')) {
      payload = await request.json()
    } else {
      const text = await request.text()
      try {
        payload = JSON.parse(text)
      } catch {
        payload = { raw: text }
      }
    }

    console.log('[zapier webhook] payload:', JSON.stringify(payload))

    return new Response(JSON.stringify({ ok: true, received: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  } catch (err) {
    console.error('Error in Zapier webhook:', err)
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}