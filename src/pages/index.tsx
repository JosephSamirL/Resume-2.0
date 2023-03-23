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
      
      <About data={{name: props.data.allProfile[0].name as string , profilepic: props.data.allProfile[0].profilePicture?.asset?.url as string , bio: "I am a senior front-end developer with 3.5 years of experience creating visually stunning and functional websites. I have a strong eye for detail and take great care to ensure that my designs are pixel-perfect and meet client specifications. I am also a fast learner, constantly seeking out new programming languages and technologies to stay up-to-date in this rapidly-evolving field. I pride myself on being a collaborative team player, always willing to go above and beyond to achieve the best possible results. If you're looking for a talented and passionate front-end developer to join your team, I would be honored to contribute my skills and expertise to your organization.", address:{state:"egypt" , street:"ramsees", city: "cairo", zip:"1232"} , phone: props.data.allProfile[0].number as string , email: props.data.allProfile[0].email as string, resumedownload:"" }}/>
      <Resume data={{skillmessage: props.data?.allProfile[0].title as string , education:[{school: "MSA" , degree:"Computer Engineering", graduated:"2021", description:"" }], work: (props.expreienceData.allExperience.map(item=>({company:item.nameOfCompany as string , title:item.role as string , description: item.responsibilities?.map(item=>item).join(" ") as string , years:(item.startDate + " -- "+(item.endDate? item.endDate: "Present")) as string})) as unknown as [{company: string, title: string, years: string, description: string}]), skills:[{name:"", level:""}]}}/>
    </>
  )
}
export async function getStaticProps() {
    const { data } = await client.query({
    query: AllProfilesDocument,
  });
  const {data:expreienceData} = await client.query({
    query: AllExperiencesDocument,
    variables: {
      limit: 10,
    }
    
  })
    return {
    props: {
      data,
      expreienceData
    },
    revalidate: 60,
  }
}