import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  let googleSearchApi = "https://www.google.com/search?q=";

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      let searchUrl = googleSearchApi + search;
      window.location.assign(searchUrl);
      setSearch("");
    }
  };

  return (
    <>
      <section className="relative h-10 w-4/5 md:h-50 md:w-1/3">
        <form onSubmit={handleSearch} autoComplete="off" className="relative size-full rounded-full">
          <input
            type="search"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glassmorphism size-full rounded-full pl-12 pr-2 text-13 outline-0 md:text-base focus:ring-0 focus:border-white"
          />
          <label htmlFor="search" className="absolute left-0 top-0 h-full w-12">
            <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" className="absolute-y-center left-4 size-4 md:size-5" />
          </label>
        </form>
      </section>
    </>
  );
};

export default Search;
