import React from 'react'
import styles from './index.module.scss'
type Props = {
    children?: React.ReactNode
  };


  const Layout = (props : Props)=> {
    return <>
      <div>
          <header className={styles.header}>
            <img src="/assets/qatarLogo.webp" alt="" />
          </header>
          <main>
          {props.children}
          </main>
      </div>
      </>
    
  }
  
  export default Layout