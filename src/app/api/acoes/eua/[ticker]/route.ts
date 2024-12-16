import { getSingleEuaStock } from "@/app/api/services/getSingleEuaStock";

interface SearchParams {
  params: {
    ticker: string;
  };
}

export async function GET(request: Request, { params }: SearchParams) {
  const { ticker } = params;

  const stock = await getSingleEuaStock(ticker);

  return Response.json(stock);
}
