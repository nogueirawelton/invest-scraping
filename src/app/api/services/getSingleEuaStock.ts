import * as cheerio from "cheerio";

export async function getSingleEuaStock(ticker: string) {
  const site = await (
    await fetch(`https://statusinvest.com.br/acoes/eua/${ticker}`)
  ).text();

  const $ = cheerio.load(site);

  const dy = +$("[title='Dividend Yield com base nos últimos 12 meses']")
    .find("strong")
    .text()
    .replace("%", "")
    .replace(",", ".");

  return {
    dy,
  };
}
