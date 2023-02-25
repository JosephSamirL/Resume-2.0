import { Inter } from 'next/font/google'
import { AllExperiencesDocument, AllExperiencesQuery, AllProfilesDocument, AllProfilesQuery, useAllExperiencesQuery, useAllProfilesQuery } from 'generated/graphql'
import Header from '@/components/Header'
import client from '../../lib/client';
import Resume from '@/components/Resume';
const inter = Inter({ subsets: ['latin'] })
interface Props {
  data: AllProfilesQuery
  expreienceData: AllExperiencesQuery
}
export default function Home(props:Props) {
  console.log(props.expreienceData)
  return (
    <>
      <Header data={{links:props.data?.allProfile[0].link as [{name:string , url:string}],  project:"",name: props.data?.allProfile[0].name as string ,description: props.data?.allProfile[0].summary as string ,github:""}} />
      <Resume data={{skillmessage: props.data?.allProfile[0].title as string , education:[{school: "MSA" , degree:"", graduated:"", description:"" }], work:props.expreienceData.allExperience.map(item=>({company:item.nameOfCompany , title:item.role , description: item.responsibilities?.map(item=>item).join(" ") , years:(item.startDate + " -- "+(item.endDate? item.endDate: "Present"))})), skills:[{name:"", level:""}]}}/>
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