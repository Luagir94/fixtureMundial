import React from 'react'
import styles from './index.module.scss'
import dayjs from 'dayjs'
import { useNavigate } from "react-router-dom";
const stateMatch = (): string => {
   const day = dayjs("2022-11-20T16:00:00+00:00").format('DD/MM/YYYY')
   console.log(day);
   
   return day
}



const Card = (props: any) => {
   const navigate = useNavigate()

    return <div className={styles.card} onClick={() => navigate(`/statistics/${props?.fixture?.id}/${props?.teams?.home?.id}/${props?.teams?.away?.id}`)}>
        <div className={styles.mainContainer}>
            <div  className={styles.countryContainer}>
                <div  className={styles.country}>
                {props?.teams?.home?.name}
                <div>
                    <img src={props?.teams?.home?.logo} alt="" />

                    </div>                </div>
                <div className={styles.goals}>
                    <div>
                    {props?.goals?.home}
                    </div>
                </div>
            </div>
            <div className={styles.state}>
                <div >
                {(props?.fixture?.status?.elapsed !== 90  &&  props?.fixture?.status?.elapsed !== null )? `${props?.fixture?.status?.elapsed} min.` : props?.fixture?.status?.elapsed === 90 ? 'Finished' : dayjs(props?.fixture?.date).format('DD/MM/YYYY HH:mm')}

                </div>
            </div>
            <div className={styles.countryContainer}>
            <div className={styles.goals}   >
                    <div >
                    {props?.goals?.away}
                    </div>
                </div>
                <div className={styles.country}>
                {props?.teams?.away?.name}
                    <div>
                    <img src={props?.teams?.away?.logo} alt="" />

                    </div>
             
                </div>

            </div>
        </div>
        <div className={styles.extrasContainer}>
            <div><p><span>City:</span> {props?.fixture?.venue?.city}</p></div>
            <div><p><span>Stadium:</span> {props?.fixture?.venue?.name}</p></div>
            <div><p><span>Referee:</span> {props?.fixture?.referee}</p></div>
        </div>
    </div>
}

export default Card