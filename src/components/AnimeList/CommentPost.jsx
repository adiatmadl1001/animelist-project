import prisma from "@/libs/prisma"

const CommentPost = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } })
  
  
  return (
    <>
      <div className="flex flex-col space-y-4 mb-4">
        <h1 className="text-color-primary text-xl font-bold">{comments.length} Comment</h1>
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="flex justify-between text-color-primary bg-color-dark rounded-lg p-2"
            >
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{comment.username}</h1>
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
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CommentPost
