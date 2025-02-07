"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (term: string) => {
    router.push(`/?${createQueryString("q", term)}`);
  };

  const clearSearch = () => {
    router.push("/");
  };

  return (
    <header className="border-b border-amber-200">
      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-xl font-light text-amber-800 hover:text-amber-600 transition-colors"
        >
          ToolBox
        </Link>
        <nav className="flex items-center">
          <div className="relative mr-6">
            <input
              type="text"
              defaultValue={searchParams.get("q") ?? ""}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search tools..."
              className="pl-8 pr-10 py-2 w-64 border border-amber-200 rounded-md bg-yellow-50 focus:outline-none focus:border-amber-400"
              aria-label="Search tools"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-amber-400 w-4 h-4"
              aria-hidden="true"
            />
            {searchParams.get("q") && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/about"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
