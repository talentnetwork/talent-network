import { Poppins } from "next/font/google";

import ContractForm from "@/components/ContractForm";
import OurTeam from "@/components/OurTeam";
import WorkSamples from "@/components/WorkSamples";
import OurServices from "@/components/servicesSction/OurServices";
import Services from "@/components/servicesSction/Services";
import Hero from "@/components/Hero/Hero";





export const popnis = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
  variable: "--font-popnnis",
});

// export async function getServerSideProps() {
//   try {
//     const response = await fetch("http://localhost:1337/api/teams");
//     const ourTeam = await response.json();
   
     
//     const worksResponse = await fetch(
//       "http://localhost:1337/api/works"
//     );
//     const workSamples = await worksResponse.json();

//     return { props: {ourTeam,workSamples} };
//   } catch (e) {
//     return { props: {} };
//   }
// }


export default function Home() {
 
  return (
    <div className={`${popnis.className} dark:bg-bgDark-400 `}>
      <Hero />
      <div className='container  mx-auto'>
        <OurTeam  />
        <WorkSamples  />
        <Services />
    
        <ContractForm />
      </div>
    </div>
  );
}
