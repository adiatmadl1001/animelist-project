"use client"

import { Alien } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    
    return(
        <div className="min-h-screen mx-auto max-w-xl flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-2">
                    <Alien size={40} className="text-color-primary "/>
                    <h1 className="text-color-primary text-2xl font-bold">404 NOT FOUND</h1>
                </div>
                <button onClick={()=>router.back()} className="flex text-color-primary hover:text-color-lighto transition-all underline">Back to Home</button>
            </div> 
        </div>
    )
}

export default Page