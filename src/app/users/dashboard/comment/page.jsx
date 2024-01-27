import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import EmptyMess from "./EmptyMess"

const Page = async () => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  })

  return (
    <>
      <section className="w-full mt-4 px-2">
        <Header title={"My Comment"} />
        <div className="grid grid-cols-1 px-4 py-8 gap-4">
          {comments == "" ? (
            <EmptyMess />
          ) : (
            comments.map((comment) => {
              return (
                <Link
                  key={comment.id}
                  href={`/anime/${comment.anime_mal_id}`}
                  className="flex justify-between text-color-primary bg-color-dark rounded-lg p-4"
                >
                  <div className="flex flex-col">
                  <p className="text-sm">{comment.anime_title}</p>
                  <p className="italic">{comment.comment}</p>

                  </div>
                  <div className="star-rating mt-2">
                    {[...Array(comment.rating)].map((star, index) => {
                      return (
                        <button
                          type="button"
                          id="star-button"
                          key={index}
                          className="on"
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      )
                    })}
                  </div>
                </Link>
              )
            })
          )}
        </div>
      </section>
    </>
  )
}

export default Page
