import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import Banner from "@/components/Banner"
import { getAnimeData, getNestedAnimeData, randomize } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeData("top/anime", "limit=10")
  let recomendedAnime = await getNestedAnimeData(
    "recommendations/anime",
    "entry"
  )
  recomendedAnime = randomize(recomendedAnime, 5)

  return (
    <>
      <section>
        <Banner/>
      </section>
      <section>
        <Header title="HOT🔥" linkHref="/hot" linkSee="See All" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended👍" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  )
}
export default Page
