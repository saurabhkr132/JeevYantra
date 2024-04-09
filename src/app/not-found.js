"use client";
import React from "react";
import { useRouter } from "next/navigation";

// import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  const btnControl = () => {
    router.push("/", { scroll: false });
  };

  return (
    <>
    <div className="not-found">
      <h2>The page is not available.</h2>
      <button className="home-btn" onClick={btnControl}>
        Go to Home
      </button>
    </div>
    </>
  );
}
