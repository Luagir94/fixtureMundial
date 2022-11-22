import React from 'react'
import styles from './index.module.scss'
import dayjs from 'dayjs'

const stateMatch = (): string => {
   const day = dayjs("2022-11-20T16:00:00+00:00").format('DD/MM/YYYY')
   console.log(day);

   return day
}



const CardStanding = ({standings} : any) => {
   // return <div className={styles.card}>
   //     <div>
   //         <div>
   //             <div>
   //                 {props?.teams?.home?.name}
   //                 <img src={props?.teams?.home?.logo} alt="" />
   //             </div>
   //             <div>
   //                 <div>
   //                     {props?.goals?.home}
   //                 </div>
   //             </div>
   //         </div>
   //         <div>
   //             <div>
   //             </div>
   //         </div>
   //         <div>
   //             <div>
   //                 <div>
   //                     {props?.goals?.away}
   //                 </div>
   //             </div>
   //             <div>
   //                 {props?.teams?.away?.name}
   //                 <img src={props?.teams?.away?.logo} alt="" />
   //             </div>

   //         </div>
   //     </div>
   //     <div>
   //     </div>
   // </div>

   return <div className={styles.card}>
      <div className={styles.title}>{standings[0].group}</div>
      <div className={styles.cardRow}>
         <div>#</div>
         <div>T</div>
         <div>M</div>
         <div>W</div>
         <div>L</div>
         <div>D</div>
         <div>Pts</div>
         <div>GF</div>
         <div>GA</div>
         <div>DG</div>
      </div>

      {standings?.map((x: any) => <div className={styles.cardRow} key={x.team.name}>
         <div>{x.rank}</div>
         <div>
            
            <img src={x?.team.logo} alt="" /></div>
         <div>{x?.all?.played}</div>
         <div>{x?.all?.win}</div>
         <div>{x?.all?.lose}</div>
         <div>{x?.all?.draw}</div>
         <div>{x?.points}</div>
         <div>{x?.all?.goals.for}</div>
         <div>{x?.all?.goals.against}</div>
         <div>{x?.goalsDiff}</div>
      </div>)}

   </div>
}

export default CardStanding