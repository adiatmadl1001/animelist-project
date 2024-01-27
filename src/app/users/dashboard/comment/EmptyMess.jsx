import React from "react"

const EmptyMess = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <img
          width={96}
          height={96}
          src="https://img.icons8.com/external-thin-kawalan-studio/96/FFFFFF/external-comment-cross-chat-thin-kawalan-studio-5.png"
          alt="external-comment-cross-chat-thin-kawalan-studio-5"
        />
        <h1 className="text-color-primary text-2xl">You haven't commented yet</h1>
      </div>
    </>
  )
}

export default EmptyMess
