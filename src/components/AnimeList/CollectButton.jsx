"use client"
import { BookmarkSimple } from "@phosphor-icons/react"
import { useState } from "react"

const CollectButton = ({ anime_mal_id, user_email, anime_title, anime_image }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleButtonCollect = async (e) => {
    e.preventDefault()
    const data = { anime_mal_id, user_email, anime_title, anime_image }

    const res = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    })
    const collect = await res.json()
    if (collect.isCreated) {
      setIsAdded(true)
    }
  }
  return (
    <>
      {isAdded ? (
        <div className="flex flex-row py-1.5 px-2 rounded-lg border-2 border-color-primary text-color-primary">
          <span>has been saved</span>
          <BookmarkSimple size={24} color="#f8f7f7" />
        </div>
      ) : (
        <div className="flex flex-row py-1.5 px-2 rounded-lg bg-color-primary text-black hover:bg-color-lighto cursor:pointer">
          <button onClick={handleButtonCollect}>add to collection</button>
          <BookmarkSimple size={24} color="#00000" weight="fill" />
        </div>
      )}
    </>
  )
}

export default CollectButton
