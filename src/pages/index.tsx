import { Inter } from 'next/font/google'
import { AllExperiencesDocument, AllExperiencesQuery, AllProfilesDocument, AllProfilesQuery, useAllExperiencesQuery, useAllProfilesQuery } from 'generated/graphql'
import Header from '@/components/Header'
import client from '../../lib/client';
import Resume from '@/components/Resume';
import About from '@/components/About';
import Parallax from '@/components/Parallax';
import { useEffect, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
interface Props {
  data: AllProfilesQuery
  expreienceData: AllExperiencesQuery
}
export default function Home(props:Props) {
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const elementRef = useRef(null);
   useEffect(() => {
    
    const resizeObserver = new window.ResizeObserver(entries => {
      for (let entry of entries) {
       
        setScreenHeight(entry.contentRect.height)
        setScreenWidth(entry.contentRect.width)
      }
    });

    resizeObserver.observe(elementRef.current as unknown as Element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div ref={elementRef}>
    <Parallax  overlayOpacity={0.5} backgroundImage={`https://source.unsplash.com/random/${screenWidth}×${screenHeight}/?coding`} content={<Header data={{links:props.data?.allProfile[0].link as [{name:string , url:string}],  project:"",name: props.data?.allProfile[0].name as string ,description: props.data?.allProfile[0].summary as string ,github:""}} />}/>
      
      <About data={{name: props.data.allProfile[0].name as string , profilepic: props.data.allProfile[0].profilePicture?.asset?.url as string , bio: "dhhdhd", address:{state:"egypt" , street:"ramsees", city: "cairo", zip:"1232"} , phone: props.data.allProfile[0].number as string , email: props.data.allProfile[0].email as string, resumedownload:"" }}/>
      <Resume data={{skillmessage: props.data?.allProfile[0].title as string , education:[{school: "MSA" , degree:"Computer Engineering", graduated:"2021", description:"" }], work: (props.expreienceData.allExperience.map(item=>({company:item.nameOfCompany as string , title:item.role as string , description: item.responsibilities?.map(item=>item).join(" ") as string , years:(item.startDate + " -- "+(item.endDate? item.endDate: "Present")) as string})) as unknown as [{company: string, title: string, years: string, description: string}]), skills:[{name:"", level:""}]}}/>
    </div>
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