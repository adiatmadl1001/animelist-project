"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useState, useEffect } from "react"
import { getAnimeData } from "@/libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const hotAnime = await getAnimeData("top/anime", `page=${page}`)
        setTopAnime(hotAnime)
    }

    useEffect(() =>{
        fetchData()
    },[page])

    return(
        <>
            <HeaderMenu title={`ANIME TER-HOT🔥 #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page