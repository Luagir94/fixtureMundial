import React from 'react'
import styles from './index.module.scss'
import Card from '../../Components/card'
import useFetch from '../../hooks/useFetch'
  const CardsContainer = (props : any)=> {
      const  {response, error, loading} = useFetch('fixtures', "league=1&season=2022")
    return<>
    <h2 className={styles.h2}>Matches</h2>
    <div  className={styles.container}>
   
     {!loading ? response?.response.sort((b : any, a:any) => new Date(b.fixture.date).valueOf() - new Date(a.fixture.date).valueOf()).map( (x : any)  => <Card key={x.fixture?.id} {...x}/>)
     : <div style={{width:'100%',height:'100vh',paddingBottom:'100%',
     alignItems: 'center', justifyContent:'center',
     position:'relative', display : 'flex'}}
     
     ><img src='/assets/loader.gif'className={styles.loader}/></div>
     }
     
      </div>
    </> 
    
    
  }
  
  export default CardsContainer