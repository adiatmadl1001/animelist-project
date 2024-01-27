"use client"
import { ArrowCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
  const router = useRouter()

  const handleBack = (event) => {
    event.preventDefault()
    router.back()
  }
  return (
    <>
      <div className=" flex justify-between items-center mb-4">
        <button onClick={handleBack}>
          <ArrowCircleLeft size={30} color="#faf6ef" weight="fill" />
        </button>
        <h1 className="text-xl text-color-primary font-bold ">{title}</h1>
      </div>
    </>
  )
}

export default Header
