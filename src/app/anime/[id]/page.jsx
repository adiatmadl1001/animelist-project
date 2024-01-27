import Image from "next/image"
import CollectButton from "@/components/AnimeList/CollectButton"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentPost from "@/components/AnimeList/CommentPost"
import { getAnimeData } from "@/libs/api-libs"
import VideoTrailer from "@/components/Utilities/VideoTrailer"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async ({ params: { id } }) => {
  const animeDetails = await getAnimeData(`anime/${id}`)
  const user = await authUserSession()
  const collected = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  })

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-2xl text-center font-bold text-color-primary">
          {animeDetails.data.title} - {animeDetails.data.year}
        </h3>
      </div>
      {!collected && user && (
        <div className="flex items-center justify-center">
          <CollectButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_title={animeDetails.data.title}
            anime_image={animeDetails.data.images.webp.image_url}
          />
        </div>
      )}
      <div className="pt-4 flex items-center justify-center">
        <Image
          src={animeDetails.data.images.webp.image_url}
          alt={animeDetails.data.images.jpg.image_url}
          width={200}
          height={200}
        />
      </div>
      <div className="mt-4 grid sm:grid-flow-col items-center justify-center flex flex-row md:space-x-4 text-color-primary">
        <div className="flex p-2">
          <div>
            📺 {animeDetails.data.type} - {animeDetails.data.episodes} episode
          </div>
        </div>
        <div className="flex p-2">
          <div> ⭐{animeDetails.data.score}</div>
        </div>
        <div className="flex p-2">
          <div>😁{animeDetails.data.rating}</div>
        </div>
      </div>
      <div className="px-4 pt-4">
        <p className="text-center text-color-primary">
          {animeDetails.data.synopsis}
        </p>
      </div>
      <div className="p-4">
        <CommentPost anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            anime_title={animeDetails.data.title}
            username={user?.name}
          />
        )}
      </div>
      <div className="fixed top-10 left-5">
        <VideoTrailer youtubeId={animeDetails.data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default Page
