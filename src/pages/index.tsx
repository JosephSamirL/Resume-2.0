import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useAllExperiencesQuery, useAllProfilesQuery } from 'generated/graphql'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data,loading}= useAllProfilesQuery()
  const {data:expreienceData,loading:experienceLoading}= useAllExperiencesQuery({
  variables: {
     limit: 10
  },
})
  
  return (
    <>
      <Header data={{project:"",name: data?.allProfile[0].name as string ,description: data?.allProfile[0].summary as string ,github:""}} />
    </>
  )
}
