import { getSingleStock } from "../../services/getSingleStock";

interface SearchParams {
  params: {
    ticker: string;
  };
}

export async function GET(request: Request, { params }: SearchParams) {
  const { ticker } = params;

  const stock = await getSingleStock(ticker);

  return Response.json(stock);
}
