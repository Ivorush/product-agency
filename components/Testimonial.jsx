import React from 'react'
import style from "../styles/Testimonial.module.css"
import Circle from './Circle'
import Image from "next/image"
import { users } from '../data'
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  return (
    <div className={style.container}>
     
         <div className={`${style.circle} ${style.circle1}`} >
     
         </div>
        <h1 className={style.title}>Testimonial</h1>
        <div className={style.wrapper}>
            {users.map(user=>(
                <div key={user.id} className={style.card}>
                    <Image src={`/img/${user.logo}`} width = "30" height = "30" alt= " ">

                    </Image>
                    <p className={style.comment}>
                        {user.comment}
                    </p>
                    <div className={style.person}>
                        <Image src={`/img/${user.avatar}`}
                        objectFit="cover" className={style.avatar} width="45" height="45" alt= " "/>
                    </div>
                    <div className={style.info}>
                        <span className={style.username}>{user.name}</span>
                        <span className={style.jobTitle}>{user.title}</span>
                    </div>

                </div>

            ))}
        </div>
    </div>
  )
}

export default Testimonial