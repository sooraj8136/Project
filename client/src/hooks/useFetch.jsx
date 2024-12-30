import { useEffect, useState } from "react"
import { axiosInstance } from "../config/axiosInstance"

export const useFetch = (url) => {

    const [data, setData] = useState()
    const [error, seterror] = useState({})

    const fetchData = async () => {

        try {
            const response = await axiosInstance({
                method: "GET",
                url: url
            })
            console.log("Products ---- ", response)
            setData(response?.data?.data)

        } catch (error) {
            console.log(error)
            console.log(seterror)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return [data, error]

}