import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import EmptyMess from "../collection/EmptyMess"

const Page = async () => {
  const user = await authUserSession()
  const collected = await prisma.collection.findMany({
    where: { user_email: user.email },
  })

  return (
    <>
      <section className="w-full mt-4 px-2">
        <Header title={"My Collection"} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
          {collected == "" ? (
            <EmptyMess />
          ) : (
            collected.map((collect, i) => {
              return (
                <Link
                  key={i}
                  href={`/anime/${collect.anime_mal_id}`}
                  className="relative"
                >
                  <Image
                    src={collect.anime_image}
                    alt={collect.anime_image}
                    width={350}
                    height={350}
                    className="w-full"
                  />
                  <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-primary h-16">
                    <h2 className="text-xl text-center">
                      {collect.anime_title}
                    </h2>
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
