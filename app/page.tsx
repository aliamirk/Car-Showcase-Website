import Image from "next/image";
import Hero from "../components/Layout/Hero";
import SearchBar from "../components/UI/SearchBar";
import CustomFilter from "../components/UI/CustomFilter";
import { fetchCars } from "../library";
import CarCard from "../components/Car/CarCard";
import { Suspense } from "react";

export default async function Home() {
  const allCars = await fetchCars();
  // console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Container */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Heading */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {/* Rendering Cars */}

        {/* Displaying Cars If no Error */}

        <Suspense fallback="Loading...">
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper ">
                {allCars.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            // IF Error
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                Oops, No Results Found
              </h2>
              {allCars.message}
            </div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
