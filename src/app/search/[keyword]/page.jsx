import { getAnimeData } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeData("anime",`q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Search for ${decodedKeyword} . . .`}/>
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
export default Page
