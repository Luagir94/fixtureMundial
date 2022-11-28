import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import { envs } from '../../configs/constants'
const MatchStatistics = () => {
  const { fixture, id1, id2 } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [teams, setTeams] = useState<any>([])




  useEffect(() => {
    const getStatic = async () => {
      const urls = [`fixtures/statistics?fixture=${fixture}&team=${id1}`, `fixtures/statistics?fixture=${fixture}&team=${id2}`]
      Promise.all(urls.map(url => axios({
        method: 'GET',
        url: `${envs.apiUrl}${url}`,
        headers: {
          "X-RapidAPI-Host": "v3.football.api-sports.io",
          "X-RapidAPI-Key": `${envs.apiKey}`
        }
      }).then(resp => resp.data.response[0]))).then(res => {

        setTeams(res)
        setLoading(false)
      })
    }
    (fixture && id1 && id2) && getStatic()
  }, [fixture, id1, id2])

  return (
    <>
    
        <h2 className={styles.h2}>Statistics</h2>
      {loading ? <div style={{width:'100%',height:'70vh',
      alignItems: 'center', justifyContent:'center',
      position:'relative', display : 'flex'}}
      
      ><img src='/assets/loader.gif'className={styles.loader}/></div> : <div className={styles.container2}>
        {teams.map((x: any) => <div className={styles.team}>
          <div>{x?.team?.name} <img src={x?.team?.logo} alt="" /></div>
          {x?.statistics.map((y: any) => <div key={x?.team?.name + y?.type}> <span>{y?.type}:</span>{y?.value || 0}</div>)}
        </div>)}
      </div>

      }



      <button onClick={() => navigate('/fixture')} className={styles.goBack}> Go Back</button>
  
    </>
  )
}

export default MatchStatistics

