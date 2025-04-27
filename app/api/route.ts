export async function GET() {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_KEY}`
  );

  return Response.json(await response.json());
}
