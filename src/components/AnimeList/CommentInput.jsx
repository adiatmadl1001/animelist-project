"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CommentInput = ({ anime_mal_id, user_email, anime_title, username }) => {
  const [comment, setComment] = useState("")
  const [isAdded, setIsAdded] = useState(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const router = useRouter()

  const handleCommentInput = (event) => {
    setComment(event.target.value)
  }

  const handleClickRating = (event) => {
    setRating(event)
  }

  const handleClickSend = async (event) => {
    if (comment.length <= 3 || !rating) return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      const data = {
        anime_mal_id,
        user_email,
        anime_title,
        comment,
        username,
        rating,
      }

      const res = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      })
      const postComment = await res.json()
      if (postComment.isCreated) {
        setIsAdded(true)
        setComment("")
        setRating(0)
        router.refresh()
      }

      toast.success("Comment Posted !", {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const givenRating = (index += 1)
            return (
              <button
                type="button"
                id={index}
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => handleClickRating(givenRating)}
                onMouseEnter={() => setHover(givenRating)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            )
          })}
        </div>
        <textarea
          placeholder="write comment..."
          value={comment}
          className="w-full h-32 text-xl p-4"
          onChange={handleCommentInput}
          onKeyDown={handleClickSend}
        />
        <button
          onClick={handleClickSend}
          className="w-52 px-3 py-2 rounded-lg bg-color-lighto font-semibold"
        >
          Posting Comment
        </button>
        <ToastContainer/>
      </div>
    </>
  )
}

export default CommentInput
