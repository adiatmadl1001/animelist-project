import prisma from "@/libs/prisma"

export async function POST(req) {
  const { anime_mal_id, user_email, anime_title, anime_image } = await req.json()
  const data = { anime_mal_id, user_email, anime_title, anime_image }

  const createCollection = await prisma.collection.create({ data })

  if (!createCollection) return Response.json({ status: 500, isCreated: false })
  else return Response.json({ status: 200, isCreated: true })
}
