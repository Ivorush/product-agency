import React from 'react'
import style from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className={style.container}>
    <div className={style.cardL}>
        <h1 className={style.title}>AV0CAD0 CREATIVES</h1>
        <h1 className={style.linkTitle}>
        
            <span className={style.linkText}>WORK WITH US </span>
            <Image src="/img/link.png" alt="" width="100px" height= "100px"/>
        
        </h1>
    </div>
    <div className={style.cardS}>
      <div className={style.cardItem}>
        40200 NAIROBI KENYA

         <br/> KENYA
      </div>
      <div className={style.cardItem}>
        CONTACT@IVORUSH 

        <br/> 0707391082
      </div>
    </div>
    <div className={style.cardS}>
      <div className={style.cardItem}>
        FOLLOW US :

        <br/>__FB __IN __BE __TW
      </div>
      <div className={style.cardItem}>
        @ 2022 IVORUSH RANDA 

        <br/>
        ALL RIGHTS RESERVED
      </div>
    </div>

 
    
    </div>
  )
}

export default Footer
