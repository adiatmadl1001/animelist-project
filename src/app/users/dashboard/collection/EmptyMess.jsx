import React from "react"

const EmptyMess = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/bookmark-documents--v3.png"
          alt="bookmark-documents--v3"
        />
        <h1 className="text-color-primary text-2xl mt-4">
          You don't add anything to the collection
        </h1>
      </div>
    </>
  )
}

export default EmptyMess
