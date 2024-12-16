"use client";

import { FII } from "@/@types/FII";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface RankingProviderProps {
  ranking: Array<FII>;
  currentRanking: string;
  onChangeCurrentRanking: (current: string) => void;
}

const rankingContext = createContext({} as RankingProviderProps);

export function RankingProvider({
  children,
  initial,
}: {
  children: ReactNode;
  initial: string;
}) {
  const [current, setCurrent] = useState(initial);
  const [ranking, setRanking] = useState([]);

  function onChangeCurrentRanking(current: string) {
    setCurrent(current);
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fii/ranking/${current}`)
      .then((response) => {
        setRanking(response.data.rankingRows);
      });
  }, [current]);
  return (
    <rankingContext.Provider
      value={{
        ranking,
        currentRanking: current,
        onChangeCurrentRanking,
      }}
    >
      {children}
    </rankingContext.Provider>
  );
}

export function useRanking() {
  return useContext(rankingContext);
}
