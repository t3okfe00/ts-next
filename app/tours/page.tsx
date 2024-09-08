import Link from "next/link";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log("Data", data);
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour) => {
        return (
          <Link
            href={`/tours/${tour.id}`}
            key={tour.id}
            className="hover:text-blue-400"
          >
            <h2>{tour.name}</h2>;
          </Link>
        );
      })}
    </section>
  );
}

export default ToursPage;
