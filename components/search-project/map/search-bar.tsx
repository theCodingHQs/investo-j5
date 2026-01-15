"use client";
import {
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import {
  Building2,
  Factory,
  LoaderCircle,
  LucideProps,
  MapPin,
  Search,
} from "lucide-react";
import { SearchResult } from "./types";
import { useDebounce } from "react-haiku";
import { cn } from "@/lib/utils";
import { useSearchProject } from "@/hooks/useSearchLocation";

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

  const { data: results = [], isFetching } = useSearchProject(debouncedQuery);

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
    setQuery(result.title);
    setShowResults(false);
  };

  const optionIcon: {
    [key: string]: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  } = {
    project: Factory,
    builder: Building2,
    location: MapPin,
  };
  return (
    <div
      ref={containerRef}
      className={cn(" w-full min-w-[250px]", props.className)}
    >
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
        <div className="absolute z-10 w-full left-0 mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
          {results.map((result, index) => {
            const Icon = optionIcon[result.label as string];
            return (
              <button
                key={index}
                onClick={() => handleSelectResult(result)}
                className="w-full text-left px-3 py-2 hover:bg-blue-50 transition-colors border-b last:border-b-0"
              >
                {/* Main line */}
                <div className="text-sm font-medium text-gray-900 leading-tight truncate">
                  {result.label === "builder" && result.name}
                  {result.label === "project" && result.title}
                  {result.label === "location" &&
                    `${result.locality}${
                      result.locality && result.city ? ", " : ""
                    }${result.city}`}
                </div>

                {/* Meta line */}
                <div className="text-xs text-gray-500 capitalize flex gap-1 items-end">
                  <Icon size={18} />
                  <span>{result.label}</span>
                </div>
              </button>
            );
          })}
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
