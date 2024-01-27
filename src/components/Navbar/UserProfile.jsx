"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { SealCheck, User, SignOut, GithubLogo } from "@phosphor-icons/react"

export const SignInUser = () => {
  return (
    <span className="flex justify-center gap-2 p-2">
      <Link
        href="/api/auth/signin"
        className="font-bold text-color-primary hover:text-color-lighto text-xl"
      >
        Sing In
      </Link>
      <GithubLogo size={24} color="#eeeeee" weight="duotone" />
    </span>
  )
}

export const UserProfile = ({ imageProfile, nameProfile, userEmail }) => {
  const [isOpen, setIsOpen] = useState(false)
  const profileRef = useRef()
  useEffect(()=>{
    const handler = (e) => {
      if (!profileRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)
  })

  return (
    <>
      <div className="flex justify-center p-2">
        <div className="relative inline-block" ref={profileRef}>
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-slate-100 ring-slate-100 transition hover:shadow-md hover:ring-2 overflow-hidden"
          >
            <Image
              src={imageProfile}
              width={100}
              height={100}
              className="w-full object-cover"
              alt="..."
            />
          </button>
          {isOpen && (
            <>
              <div className="absolute right-0 mt-3 flex w-max flex-col gap-3 rounded-xl bg-color-suci p-4 text-slate-100 modal-profile">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center justify-center rounded-lg h-12 w-12 overflow-hidden border-2 border-slate-600">
                    <Image
                      src={imageProfile}
                      width={100}
                      height={100}
                      className="w-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1 text-sm font-semibold">
                      <span>{nameProfile}</span>
                      <SealCheck size={16} color="#030303" weight="fill" />
                    </div>
                    <div className="text-xs text-slate-400">{userEmail}</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <a
                    href="/users/dashboard"
                    className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800"
                  >
                    <User size={24} color="#030303" weight="fill" />
                    <span>Profile</span>
                  </a>
                </div>
                <div className="border-t border-slate-500/30"></div>
                <button className="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400">
                  <SignOut size={24} color="#030303" weight="fill" />
                  <span>
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
