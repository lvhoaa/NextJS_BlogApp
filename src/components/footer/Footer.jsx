import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png"  width={15} height={15} className={styles.icon} alt="lamma dev FB"/>
          <Image src="/2.png"  width={15} height={15} className={styles.icon} alt="lamma dev IG"/>
          <Image src="/3.png"  width={15} height={15} className={styles.icon} alt="lamma dev twitter"/>
          <Image src="/4.png"  width={15} height={15} className={styles.icon} alt="lamma dev YTB"/>
        </div>
    </div>
  )
}

export default Footer;