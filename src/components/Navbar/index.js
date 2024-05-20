import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-400">
      <nav className="flex md:flex-row flex-col justify-between gap-2 p-4 items-center">
        <Link
          href={"/"}
          className="font-bold text-white text-2xl hover:bg-gradient-to-r from-green-400 via-sky-200 to-cyan-300 hover:bg-clip-text hover:text-transparent transition-all"
        >
          BrowAnimeList
        </Link>
        <input
          type="search"
          name="search"
          placeholder="Cari Anime"
          className="py-2 px-4 rounded-full border-none text-sm "
        />
      </nav>
    </header>
  );
};

export default Navbar;