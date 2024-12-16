import Link from "next/link";
import { Briefcase, Building, Coins, Home } from "lucide-react";
import { NavLink } from "../global/navlink";

export function Menu() {
  return (
    <menu className="mt-4 flex flex-col gap-2 py-4 border-t border-zinc-200">
      <NavLink href="/">
        <Home />
        Home
      </NavLink>

      <NavLink href="fiis">
        <Building />
        Fundos Imobiliários
      </NavLink>

      <NavLink href="acoes">
        <Briefcase />
        Ações
      </NavLink>

      <NavLink href="cripto">
        <Coins />
        Criptomoedas
      </NavLink>
    </menu>
  );
}
