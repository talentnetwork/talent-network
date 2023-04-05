import {Poppins} from "next/font/google";

import ContractForm from "@/components/ContractForm";
import OurTeam from "@/components/OurTeam";

export const popnis = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
  variable: "--font-popnnis"
});


export async function getServerSideProps() {
  try{
      const response = await fetch("https://api.talentnetwork.ir/api/our_team");
      const ourTeam = await response.json();
      return { props: { ourTeam } }
  }catch(e){
      return { props: { }} ;
  }

}




export default  function Home({ourTeam}) {
  
  return (<div className={`${popnis.className}`}>
    <OurTeam  ourTeam={ourTeam} />
    <div className="container  mx-auto ">
      <ContractForm/>
    </div>
    
    </div>
  )

}
