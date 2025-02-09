"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchInput() {
  const router = useRouter();

  const [searchQueryValue, setSearchQueryValue] = useState("");



  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`/search/${encodeURIComponent(searchQueryValue.trim())}`);

    console.log(`/search/${searchQueryValue.trim()}`, "w/URI");

    if (searchQueryValue.trim()) {
      router.push(`/search/${encodeURIComponent(searchQueryValue.trim())}`);
    }
  };

  return (
    <form className="relative flex-1 max-w-80" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search Courses..."
        value={searchQueryValue}
        onChange={(e) => {
          setSearchQueryValue(e.target.value);
        }}
        className="w-full rounded-full bg-secondary/80 px-4 py-1 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <SearchIcon className="h-4 w-4 absolute top-1/4 right-3 text-muted-foreground" />
    </form>
  );
}

export default SearchInput;
