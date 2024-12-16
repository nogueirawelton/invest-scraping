import { getSingleFii } from "../../services/getSingleFii";

interface SearchParams {
  params: {
    ticker: string;
  };
}

export async function GET(request: Request, { params }: SearchParams) {
  const { ticker } = params;
  const fii = await getSingleFii(ticker);

  return Response.json(fii);
}
