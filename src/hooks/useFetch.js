import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                if(!response.ok) {
                    throw new Error("Network response was not okay")
                }
                const result = await response.json()
                setLoading(false)
                setData(result)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data, loading, error}
}