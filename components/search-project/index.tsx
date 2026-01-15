"use client";

import React, { useState } from "react";
import { properties } from "./data/properties";
// import SearchBar from "./SearchBar";
import { Location, SearchResult } from "./map/types";
import locationsData from "./data/locations.json";
import SearchBar from "./map/search-bar";
import Map from "./map";
import Select from "../ui/select";

const SearchProject = () => {
  const [filters, setFilters] = useState({
    location: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
  });
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const pinnedLocations = locationsData as Location[];

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const filteredResults = properties.filter((item) => {
    if (
      appliedFilters.location &&
      !item.location
        .toLowerCase()
        .includes(appliedFilters.location.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex  bg-white">
      <div className="min-w-[40%] h-page sticky top-0 left-0 py-4 px-2">
        <div className="rounded-2xl overflow-hidden shadow h-full border">
          <Map pinnedLocations={pinnedLocations} searchResult={searchResult} />
        </div>
      </div>
      <div className="w-full h-page overflow-auto  px-2">
        <div className="w-full  p-5 rounded-xl mb-6 bg-[#EBF7FC] sticky top-0 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <SearchBar onSearchResult={setSearchResult} />
            <Select placeholder="Price" options={[]} />
            <Select placeholder="Buy" options={[]} />
            <Select placeholder="Property Type" options={[]} />
            <Select placeholder="BHK" options={[]} />
            <button className="bg-white border h-full border-[#0095DA] text-back text-[#0095DA] p-4 py-2 rounded">
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-start">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-white min-w-[30%] flex-1 rounded-xl shadow-md flex flex-col justify-between   overflow-hidden hover:shadow-xl transition"
            >
              <div className="">
                <img
                  src={
                    "https://imageio.forbes.com/b-i-forbesimg/houzz/files/2013/12/contemporary-exterior.jpg?height=496&width=500&fit=bounds"
                  }
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg  text-gray-700">{item.title}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 mt-1">
                      {item.location}
                    </span>
                    <span className="text-md font-semibold mt-2 text-gray-700">
                      {item.priceRange}
                    </span>
                  </div>
                  {/* Units Section */}
                </div>
              </div>
              <div className="p-4 ">
                <table className="w-full text-start text-gray-500">
                  <thead>
                    <tr>
                      <th className="font-normal text-start">unit</th>
                      <th className="font-normal text-start">size</th>
                      <th className="font-normal text-start">price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.units.map((unit, index) => (
                      <tr key={unit.unit}>
                        <td>{unit.unit}</td>
                        <td>{unit.size}</td>
                        <td>{unit.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No properties found matching the applied filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchProject;
