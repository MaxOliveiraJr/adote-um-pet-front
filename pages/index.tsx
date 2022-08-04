import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function MeuComponent(){
  return <div>Curso da T</div>
}

const Home: NextPage = () => {
  return (
    <div>
     <MeuComponent />
    </div>
  )
}

export default Home
