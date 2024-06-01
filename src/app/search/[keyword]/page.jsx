
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedkeyword = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedkeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title={`Pencarian untuk ${decodedkeyword}...`}
        />
        {response && searchAnime.data.length > 0 ? (
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