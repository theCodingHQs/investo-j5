"use client";
import { useState, useRef, useEffect, HTMLAttributes } from "react";
import { LoaderCircle, Search } from "lucide-react";
import { SearchResult } from "./types";
import { useDebounce } from "react-haiku";
import { cn } from "@/lib/utils";
import { useSearchLocation } from "@/hooks/useSearchLocation";

interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
  onSearchResult: (result: SearchResult) => void;
}

export default function SearchBar({
  onSearchResult,
  ...props
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: results = [], isFetching } = useSearchLocation(debouncedQuery);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (debouncedQuery?.trim()) {
      setShowResults(true);
    }
  }, [debouncedQuery]);

  const handleSelectResult = (result: SearchResult) => {
    onSearchResult(result);
    setQuery(result.display_name);
    setShowResults(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", props.className)}>
      <div className="relative">
        <div className="rounded-full border bg-white border-gray-300">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query?.trim() && setShowResults(true)}
            placeholder="Search properties"
            className="w-full h-10 px-4 text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isFetching ? (
          <LoaderCircle className="animate-spin absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-1 text-[#0095DA]" />
        ) : (
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-2 rounded-full bg-[#0095DA] text-white" />
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleSelectResult(result)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b last:border-b-0"
            >
              <div className="text-sm font-medium text-gray-900">
                {result.display_name}
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && results.length === 0 && !isFetching && query?.trim() && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border px-4 py-3">
          <div className="text-sm text-gray-500">No results found</div>
        </div>
      )}
    </div>
  );
}
