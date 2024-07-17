'use client'
import { useEffect, useState } from "react";
import { Masthead } from "./components/Masthead/Masthead";
import { ListMovie } from "./components/ListMovie/ListMovie";
import movieAPIs from "./apis/movieAPIs";

export default function Home() {
  const [listmovie, setListMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await movieAPIs.getAllMovies(1);
      setListMovie(response.data.results);
    };
    fetchData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Masthead />
      <ListMovie listmovie={listmovie} />
    </main>
  );
}
