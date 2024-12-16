"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { FII } from "@/@types/FII";
import { Badge } from "@/components/ui/badge";
import { parseBigNumber } from "@/utils/parseBigNumber";
import Link from "next/link";

interface RankingTableProps {
  items: Array<FII>;
}

export function RankingTable({ items }: RankingTableProps) {
  return (
    <ScrollArea className="pr-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Código</TableHead>
            <TableHead className="whitespace-nowrap">DY</TableHead>
            <TableHead className="whitespace-nowrap">P/VP</TableHead>
            <TableHead className="whitespace-nowrap">Preço</TableHead>
            <TableHead className="whitespace-nowrap">
              Valor Patrimonial
            </TableHead>
            <TableHead className="whitespace-nowrap">CAGR</TableHead>
            <TableHead className="whitespace-nowrap">Patrimônio</TableHead>
            <TableHead className="whitespace-nowrap">Segmento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.ticker}>
              <TableCell>
                <Link
                  href={`https://statusinvest.com.br/fundos-imobiliarios/${item.ticker}`}
                  target="_blank"
                  className="hover:underline"
                >
                  {item.ticker}
                </Link>
              </TableCell>

              <TableCell>{item.dy.toFixed(2)}%</TableCell>

              <TableCell>{item.p_vp.toFixed(2)}</TableCell>

              <TableCell>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>

              <TableCell>
                {item.valorpatrimonialcota.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>

              <TableCell>
                {item.cota_cagr ? item.cota_cagr.toFixed(2) : "N/A"}
              </TableCell>

              <TableCell>{parseBigNumber(item.patrimonio)}</TableCell>

              <TableCell>
                <Badge variant="outline">{item.segment.split(" ")[0]}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
