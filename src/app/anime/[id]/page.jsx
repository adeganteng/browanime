import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-color-primary p-2 hover:bg-color-accent">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-color-primary p-2 hover:bg-color-accent">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-color-primary p-2 hover:bg-color-accent">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-color-primary p-2 hover:bg-color-accent">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-color-primary p-2 hover:bg-color-accent">
          <h3>Popularity</h3>
          <p>{anime.data.popularity}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-2 lg:flex-nowrap flex-wrap text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={300}
          height={250}
                  className="w-full object-cover rounded"
                  quality={100}
                  priority
        />

        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
