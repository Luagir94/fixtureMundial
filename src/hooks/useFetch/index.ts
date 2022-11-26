import { useEffect, useState, } from 'react'
import { envs } from '../../configs/constants'
import axios from "axios"

const useFetch= (route: string, params? : string) : any => {
    const [loading, setLoading] = useState<Boolean>(true)
    const [response, setResponse] = useState([])
    const [error, setError] = useState<String | unknown>(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            if (!params) {
                try {
                    const request = await axios({
                        method: 'GET',
                        url: `${envs.apiUrl}${route}`,
                        headers:{
                            "X-RapidAPI-Host": "v3.football.api-sports.io",
                            "X-RapidAPI-Key": `${envs.apiKey}`
                        }
                    })
                    setResponse(request.data)
                    setLoading(false)
                } catch (error) {
                    setError(error);
                    setLoading(false)
                }
            } else {
                try {
                    const request = await axios({
                        method: 'GET',
                        url: `${envs.apiUrl}${route}?${params}`,
                        headers:{
                            "X-RapidAPI-Host": "v3.football.api-sports.io",
                            "X-RapidAPI-Key": `${envs.apiKey}`
                        }
                    })
                    setResponse(request.data)
                    setLoading(false)
                } catch (error) {
                    setError(error);
                    setLoading(false)
                }
            }
           
        };
        route &&  fetchData()
    }, [route,params]);

    return { response, error, loading }
}

export default useFetch
