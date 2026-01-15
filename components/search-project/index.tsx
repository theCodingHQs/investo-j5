"use client";

import React, { useMemo, useState } from "react";
// import { properties } from "./data/properties";
// import SearchBar from "./SearchBar";
import { Location, SearchResult } from "./map/types";
import locationsData from "./data/locations.json";
import SearchBar from "./map/search-bar";
import Map from "./map";
import Select from "../ui/select";
import { useProjectListing } from "@/hooks/useGetProject";
import {
  ChevronDown,
  ChevronsDown,
  ChevronsUp,
  ChevronUp,
  MapPin,
} from "lucide-react";

const SearchProject = () => {
  const [filters, setFilters] = useState({
    location: "",
  });
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
  });
  const { data } = useProjectListing("project info --- godrej-woodsville");

  const { projects, prices, property_types, pinnedLocations } = useMemo(() => {
    const projects = data?.projects || [];
    const prices = Array.from(
      new Set(projects.map((p) => p.minimum_price).filter(Boolean))
    ).map((price) => ({
      value: String(price),
      label: String(price),
    }));

    const property_types = Array.from(
      new Set(projects.map((p) => p.property_type))
    ).map((type) => ({
      value: String(type),
      label: String(type),
    }));

    const pinnedLocations = projects.map((p) => p.location);

    // const bhks = projects.map((p) => p.configuration);

    return {
      projects,
      prices,
      pinnedLocations,
      property_types: property_types,
    };
  }, [data]);

  // const pinnedLocations = locationsData as Location[];

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const filteredResults = projects.filter((item) => {
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
        <div className=" relative rounded-2xl overflow-hidden shadow h-full border">
          <Map pinnedLocations={pinnedLocations} searchResult={searchResult} />
        </div>
      </div>
      <div className="w-full h-page overflow-auto  px-2">
        <div className="w-full  p-5 rounded-xl mb-6 bg-[#EBF7FC] sticky top-0 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <SearchBar onSearchResult={setSearchResult} />
            <Select placeholder="Price" options={prices} />
            <Select placeholder="Buy" options={[]} />
            <Select placeholder="Property Type" options={property_types} />
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
                  <div className="flex items-center flex-wrap justify-between ">
                    {(item?.locality?.city || item?.locality?.locality) && (
                      <div className="flex gap-1 items-center text-gray-600">
                        <MapPin size={18} />
                        <span className=" flex flex-col  mt-1">
                          <span className="text-sm">
                            {item?.locality?.city}, {item?.locality?.locality}
                          </span>
                        </span>
                      </div>
                    )}
                    {(item.minimum_price || item.maximum_price) && (
                      <div className="text-md flex w-full justify-end gap-4 font-semibold mt-2 text-gray-700">
                        {item.minimum_price && (
                          <span className="flex gap-1 items-center">
                            <ChevronsDown />
                            &#8377; {item.minimum_price}
                          </span>
                        )}
                        {item.minimum_price && item.maximum_price && "-"}
                        {item.maximum_price && (
                          <span className="flex gap-1 items-center">
                            <ChevronsUp />
                            &#8377; {item.maximum_price}
                          </span>
                        )}
                      </div>
                    )}
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
                    {/* {item.units.map((unit, index) => (
                      <tr key={unit.unit}>
                        <td>{unit.unit}</td>
                        <td>{unit.size}</td>
                        <td>{unit.price}</td>
                      </tr>
                    ))} */}
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
