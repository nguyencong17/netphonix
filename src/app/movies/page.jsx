"use client";
import { ListMovie } from "@/components/ListMovie/ListMovie";
import { useEffect, useState } from "react";
import useSWR from "swr";

// SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

function Movies(props) {
  // const [listmovie, setListMovie] = useState([]);

  // Fetch By Axios Client
  // ================================================
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await movieAPIs.getAllMovies(1);
  //       setListMovie(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   };
  //   fetchData();
  // }, [])

  // Fetch By Fetch WEBAPI
  // ================================================
  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1');
  //       const datamovie = await res.json();
  //       setListMovie(datamovie.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   data();
  // }, []);

  // Fetch By useSWR
  // ================================================
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1",
    fetcher
  );
  const listmovie = data?.results;
  console.log("Check movie data by useSWR : ", listmovie);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <ListMovie listmovie={listmovie} />
    </div>
  );
}

export default Movies;
