"use client";

import SearchBar from "./map/search-bar";
import Select from "../ui/select";
import { SearchResult } from "./map/types";
import { DropdownFilter } from "../ui/dropdown-filter";
import { useState } from "react";

const Filters = ({
  setSearchResult,
  bedrooms = [1, 2, 3, 4, 5],
  budgetMinMax,
  propertyTypes = [],
  filters,
  setFilters,
}: {
  bedrooms?: number[];
  budgetMinMax?: { min?: number; max?: number };
  propertyTypes: {
    value: string | number | null;
    label: string;
  }[];
  filters?: {
    bedrooms?: (string | number)[];
    propertyType?: string | number | null;
    budget?: [number, number];
    area?: [number, number];
    projectStatus?: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      bedrooms?: (string | number)[];
      propertyType?: string | number | null;
      budget?: [number, number];
      area?: [number, number];
      projectStatus?: string;
    }>
  >;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResult | null>>;
}) => {
  const setSelectedCategories = (value: (string | number)[]) => {
    setFilters((prev) => ({
      ...prev,
      bedrooms: value,
    }));
  };

  const setSelectedSort = (value: string | number | null) => {
    setFilters((prev) => ({
      ...prev,
      propertyType: value,
    }));
  };

  const setPriceRange = (value: [number, number]) => {
    setFilters((prev) => ({
      ...prev,
      budget: value,
    }));
  };

  return (
    <div className="w-full  z-10  sticky top-0 ">
      <pre>{JSON.stringify(filters)}</pre>
      <div className="flex p-5 flex-col lg:flex-row shadow-lg items-center gap-4 rounded-xl  bg-primary/10 backdrop-blur-xl">
        <SearchBar onSearchResult={setSearchResult} />

        <DropdownFilter
          type="checkbox"
          label="Bedrooms"
          data={bedrooms}
          getValue={(item) => item as number}
          getLabel={(item) => String(item)}
          onChange={setSelectedCategories}
          value={filters?.bedrooms || []}
        />

        <DropdownFilter
          type="radio"
          label="Property type"
          data={propertyTypes}
          getValue={(item) => item.value!}
          getLabel={(item) => item.label}
          value={filters?.propertyType || ""}
          onChange={setSelectedSort}
        />

        <DropdownFilter
          type="range"
          label="Budget"
          min={budgetMinMax?.min || 10}
          max={budgetMinMax?.max || 10000}
          step={10}
          value={
            filters?.budget || [
              budgetMinMax?.min || 10,
              budgetMinMax?.max || 10000,
            ]
          }
          onChange={setPriceRange}
          showScale
        />

        <button className="bg-white border h-full border-primary text-back text-primary p-4 py-2 rounded">
          Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
