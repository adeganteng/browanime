
import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedkeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedkeyword}`)

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title={`Pencarian untuk ${decodedkeyword}...`}
        />
        {searchAnime.data.length > 0 ? (
          <AnimeList api={searchAnime} />
        ) : (
            <div>
             <h1 className="text-3xl text-color-primary">Anime Tidak Ditemukan</h1>
            </div>
        )}
        
      </section>
      {/* Anime Terbaru */}
    </>
  );
};

export default Page;
