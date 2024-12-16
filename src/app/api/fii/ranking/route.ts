import { getAllFiis } from "../../services/getAllFiis";

export async function GET() {
  const fiis = await getAllFiis();
  const ranking = fiis.sort((a, b) => b.patrimonio - a.patrimonio);

  return Response.json(ranking);
}
