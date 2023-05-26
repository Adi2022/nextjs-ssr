import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';
const index = () => {
  return (
    <div className={styles.container}>

        <h1>Welcome to Home Page....</h1>
        <p>This is Home Page</p>
        <button><Link href='/todo'>All Todos</Link></button>
    </div>
  )
}

export default index