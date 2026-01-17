"use client";

import React, { useMemo, useState } from "react";
// import { properties } from "./data/properties";
// import SearchBar from "./SearchBar";
import { SearchResult } from "./map/types";
import SearchBar from "./map/search-bar";
import Map from "./map";
import Select from "../ui/select";
import { useProjectListing } from "@/hooks/useGetProject";
import ProjectCard from "./project-card";
import Filters from "./filters";

const SearchProject = () => {
  const [filters, setFilters] = useState<{
    bedrooms?: (string | number)[];
    propertyType?: string | number | null;
    budget?: [number, number];
    area?: [number, number];
    projectStatus?: string;
  }>({});

  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
  });

  const { data } = useProjectListing("project info --- godrej-woodsville");

  const { projects, prices, property_types, pinnedLocations } = useMemo(() => {
    const projects = data?.projects || [];
    console.log(projects);

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

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const filteredResults = projects.filter((item) => {
    if (
      appliedFilters.location &&
      !item.address
        ?.toLowerCase()
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
      <div className="w-full h-page overflow-auto mt-4 px-2">
        <Filters
          propertyTypes={property_types}
          setSearchResult={setSearchResult}
          setFilters={setFilters}
          filters={filters}
        />
        <div className="flex flex-wrap gap-4 justify-start py-4">
          {filteredResults.map((item) => (
            <ProjectCard project={item} />
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
