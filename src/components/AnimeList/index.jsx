import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 min-h-32 px-4">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer shadow-lg text-color-primary hover:text-color-accent transition-all bg-slate-800"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="image"
              width={600}
              height={600}
              className="w-full max-h-64 object-cover"
              priority={true}
            />
            <p className="font-bold md:text-xl lg:text-lg text-sm p-4">
              {anime.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
