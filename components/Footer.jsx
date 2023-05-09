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
        40200 KISUMU KENYA

         <br/> KENYA
      </div>
      <div className={style.cardItem}>
        CONTACT@NESBIT

        <br/> 0729053095
      </div>
    </div>
    <div className={style.cardS}>
      <div className={style.cardItem}>
        FOLLOW US :

        <br/>__FB __IN __BE __TW
      </div>
      <div className={style.cardItem}>
        @ 2023 NESBIT SIMBA 

        <br/>
        ALL RIGHTS RESERVED
      </div>
    </div>

 
    
    </div>
  )
}

export default Footer
