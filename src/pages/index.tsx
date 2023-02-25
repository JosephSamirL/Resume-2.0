import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AllProfilesDocument, AllProfilesQuery, useAllExperiencesQuery, useAllProfilesQuery } from 'generated/graphql'
import Header from '@/components/Header'
import client from '../../lib/client';
const inter = Inter({ subsets: ['latin'] })
interface Props {
  data: AllProfilesQuery
}
export default function Home(props:Props) {
  
//   const {data:expreienceData,loading:experienceLoading}= useAllExperiencesQuery({
//   variables: {
//      limit: 10
//   },
// })
  
  return (
    <>
      <Header data={{links:props.data?.allProfile[0].link as [{name:string , url:string}],  project:"",name: props.data?.allProfile[0].name as string ,description: props.data?.allProfile[0].summary as string ,github:""}} />
    </>
  )
}
export async function getStaticProps() {
    const { data } = await client.query({
    query: AllProfilesDocument,
  });
    return {
    props: {
      data,
    },
    revalidate: 120,
  }
}