import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container  ">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        {/* filters */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container ">
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
