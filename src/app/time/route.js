// export const dynamic = 'force-dynamic' // {This is force to time making dynamic in server side}

export async function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString()
  })
}