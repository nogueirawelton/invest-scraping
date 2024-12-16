import { getAllFiis } from "../services/getAllFiis";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const s = searchParams.get("s");

  const fiis = await getAllFiis();

  return Response.json(
    fiis.filter((item) =>
      !!s ? item.ticker.toLowerCase().includes(s.toLowerCase() as string) : true
    )
  );
}
