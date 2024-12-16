export default function Home() {
  return (
    <>
      <div className="flex gap-8 flex-1">
        <div className="border flex-1 border-zinc-200 rounded-sm p-4"></div>

        <div className="flex-1 flex-col flex gap-8 max-w-sm">
          <div className="border flex-1 border-zinc-200 rounded-sm p-4">
            <h2 className="font-bold text-slate-950">Últimos Relatórios</h2>
          </div>
          <div className="border flex-1 border-zinc-200 rounded-sm p-4">
            <h2 className="font-bold text-slate-950">Destaques</h2>
          </div>
        </div>
      </div>
    </>
  );
}
