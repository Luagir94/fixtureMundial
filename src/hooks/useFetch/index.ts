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
                            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                            "x-rapidapi-key": `${envs.apiKey}`
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
                            "x-rapidapi-host": "v3.football.api-sports.io",
                            "x-rapidapi-key": `${envs.apiKey}`
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
