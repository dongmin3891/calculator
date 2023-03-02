import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRecoilState } from 'recoil'
import { counting, ICounting, TCount, user } from '@/stores/atom'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [user2, setUser2] = useRecoilState(user);
  const [atomCount, setAtomCount] = useRecoilState<TCount>(counting);
  
  const handleCount = () => {
    setAtomCount((prevState) => prevState + 1);
  }
  console.log("home ====>", atomCount);
  
  return (
    <>
      <div>
        <p>{atomCount}</p>
        <button onClick={handleCount}>증가</button>
      </div>
      <div>
        <Link href='/test'>
        test로 이동
        </Link>
      </div>
    </>
  )
}
