"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        placeholder="Cari Anime"
        className="py-2 px-4 rounded-full border-none text-sm w-full "
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button className="absolute top-1.5 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
