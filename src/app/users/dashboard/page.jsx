import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const user = await authUserSession()

  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold text-color-primary mb-4">
          Welcome, {user?.name}{" "}
        </h1>
        <Image src={user?.image} alt="..." width={150} height={150} />
        <div className="flex flex-wrap gap-4 py-8">
          <Link
            className="bg-color-primary text-black hover:bg-color-lighto font-bold text-xl px-4 py-3 "
            href="dashboard/collection"
          >
            My Collection
          </Link>
          <Link
            className="bg-color-primary text-black hover:bg-color-lighto font-bold text-xl px-4 py-3 "
            href="dashboard/comment"
          >
            My Comment
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
