import Link from "next/link";
import React from "react";
import { Card } from "../Card/Card";

export const ListMovie = (props) => {
  const { listmovie } = props;
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {listmovie && listmovie.map((movie) => <Card movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
