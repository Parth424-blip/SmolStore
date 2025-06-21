"use client";

import Link from "next/link";
import { useEffect } from "react";

useEffect;

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h3>Something went wrong</h3>
      <div className="pa`ge-container">
        <button onClick={reset}>Reset</button>
        <Link href={"./"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
