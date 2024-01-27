export const getAnimeData = async(resource, query) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const animeApi = await res.json() 
    return animeApi
}

export const getNestedAnimeData = async (resource, objectProperty) =>{
    const res = await getAnimeData(resource)
    return res.data.flatMap(item => item[objectProperty])
}

export const randomize = (data, gap) =>{
    const first = Math.floor(Math.random() * (data.length-gap)+1)
    const second = first + gap
    const res = {
        data: data.slice(first, second)
    }
    return res

}