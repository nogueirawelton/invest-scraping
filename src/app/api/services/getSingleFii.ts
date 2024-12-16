import * as cheerio from "cheerio";

export async function getSingleFii(ticker: string) {
  const site = await (
    await fetch(`https://statusinvest.com.br/fundos-imobiliarios/${ticker}`)
  ).text();

  const $ = cheerio.load(site);

  const variacao = +$(
    "[title='Variação do valor do ativo com base no dia anterior']"
  )
    .find("b")
    .text()
    .replace("%", "")
    .replace(",", ".");

  const valorizacaoAnual = +$(
    "[title='Valorização no preço do ativo com base nos últimos 12 meses']"
  )
    .find("strong")
    .text()
    .replace("%", "")
    .replace(",", ".");

  const valorizacaoMensal = +$(
    "[title='Valorização no preço do ativo com base no mês atual']"
  )
    .find("b")
    .text()
    .replace("%", "")
    .replace(",", ".");

  const ultimoRelatorio = $(
    "div.lh-3:contains(Relatórios, Relatório Gerencial)"
  )[0];

  const dataRelatorio = ultimoRelatorio
    ? $(ultimoRelatorio).next().text().replaceAll("\n", "")
    : null;

  const urlRelatorio = ultimoRelatorio
    ? $(ultimoRelatorio).next().next().next().find("a").attr("href")
    : null;

  return {
    variacao,
    valorizacaoAnual,
    valorizacaoMensal,
    relatorio: {
      data: dataRelatorio,
      url: urlRelatorio,
    },
  };
}
