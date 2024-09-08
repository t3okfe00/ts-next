"use client";
import React, { useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl font-bold"> {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-500 rounded"
      >
        {count}increment
      </button>
    </div>
  );
}

export default CounterPage;
