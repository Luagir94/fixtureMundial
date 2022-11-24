import React from 'react'
import styles from './index.module.scss'

const Home = () => {
  return (
  <>
    <h2 className={styles.h2}>Welcome to World Cup Fixture</h2>
    <div  className={styles.container}>
   
      <div style={{width:'100%',height:'70vh',
     alignItems: 'center', justifyContent:'center',
     position:'relative', display : 'flex'}}
     
     ><img src='/assets/loader.gif'className={styles.loader}/></div>
     
     
      </div>
    </> 
  )
}

export default Home