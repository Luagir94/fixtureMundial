import React,{useEffect} from 'react'
import styles from './index.module.scss'
import Card from '../card'
import { JsxElement } from 'typescript'
import useFetch from '../../hooks/useFetch'
import CardStanding from '../cardStanding'
  const CardsContainerStandings = (props : any)=> {
      const  {response, error, loading} = useFetch('standings', "league=1&season=2022")
      
      useEffect(() => {
     console.log(response.response);
     
      }, [response])
    return <>
    <h2 className={styles.h2}>Standings</h2>
    <div  className={styles.container}>

     {!loading && response?.response[0]?.league?.standings.map( (x : any, i: any)  => <CardStanding key={`dsasdad${i}`} standings={x}/>)}
     
      </div>
    </>
    
    
  }
  
  export default CardsContainerStandings
