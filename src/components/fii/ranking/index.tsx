import { FII } from "@/@types/FII";
import { Skeleton } from "../../ui/skeleton";
import { RankingTable } from "./ranking-table";

export async function Ranking() {
  const allFiis: Array<FII> = await (await fetch("/api/fii/ranking")).json();

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <header className="flex justify-between items-center">
        <h2 className="font-bold text-slate-950">Ranking</h2>
      </header>

      <div className="mt-4 flex-1 overflow-hidden border-t py-4 flex flex-col gap-2 border-zinc-200">
        <RankingTable items={allFiis} />
      </div>
    </div>
  );
}

export function RankingFallback() {
  return (
    <>
      <header className="flex justify-between items-center">
        <h2 className="font-bold text-slate-950">Ranking</h2>
      </header>

      <div className="mt-4 border-t py-4 flex flex-col gap-2 border-zinc-200">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </>
  );
}
