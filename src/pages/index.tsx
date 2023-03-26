import { Inter } from 'next/font/google'
import { AllExperiencesDocument, AllExperiencesQuery, AllProfilesDocument, AllProfilesQuery, useAllExperiencesQuery, useAllProfilesQuery } from 'generated/graphql'
import Header from '@/components/Header'
import client from '../../lib/client';
import Resume from '@/components/Resume';
import About from '@/components/About';
import Parallax from '@/components/Parallax';
import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })
interface Props {
  data: AllProfilesQuery
  expreienceData: AllExperiencesQuery
}
export default function Home(props:Props) {

  return (
    <>
      <Nav/>
    <Parallax  overlayOpacity={0.5} backgroundImage={`https://i.ibb.co/hgTBHQQ/markus-spiske-Nsy-U41-Qcsx-M-unsplash.jpg`} content={<Header data={{links:props.data?.allProfile[0].link as [{name:string , url:string}],  project:"",name: props.data?.allProfile[0].name as string ,description: props.data?.allProfile[0].summary as string ,github:""}} />}/>
      
      <About data={{name: props.data.allProfile[0].name as string , profilepic: props.data.allProfile[0].profilePicture?.asset?.url as string , bio: props.data.allProfile[0].about as string, address:{state:"egypt" , street:"ramsees", city: "cairo", zip:"1232"} , phone: props.data.allProfile[0].number as string , email: props.data.allProfile[0].email as string, resumedownload: props.data.allProfile[0].resume?.asset?.url as string }}/>
      <Resume data={{skillmessage: props.data?.allProfile[0].title as string , education:[{school: "MSA" , degree:"Computer Engineering", graduated:"2021", description:"" }], work: (props.expreienceData.allExperience.map(item=>({company:item.nameOfCompany as string , title:item.role as string , description: item.responsibilities?.map(item=>item).join(" ") as string , years:(item.startDate + " -- "+(item.endDate? item.endDate: "Present")) as string})) as unknown as [{company: string, title: string, years: string, description: string}]), skills:props.data.allProfile[0].skill?.map(item=>({name:item?.name as string , level: item?.level as string , color: item?.color as string})) as [{name:string , level:string , color: string}]}}/>
    </>
  )
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: AllProfilesDocument,
  });
  const { data: experienceData } = await client.query({
    query: AllExperiencesDocument,
    variables: {
      limit: 10,
    }
  });

  return {
    props: {
      data,
      experienceData
    }
  }
}






