import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";



const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"Lihat Semua"}
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Rekomendasi */}
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
