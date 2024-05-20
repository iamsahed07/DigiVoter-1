import { Outlet } from "react-router-dom"
import { Container } from "./Container"


function ElectionLayout() {
  return (
    <Container className="items-center col-span-10 text-center ">
       <h2 className=' mt-10 font-bold text-lg text-[#000000]'>LIVE ELECTIONS</h2>
       <Container 
       className="py-2 my-2 bg-white shadow-sm rounded-xl"
       width="[80%]">
        <h3 className="font-semibold text-[#070707] text-sm">Parliamentary General Elections (Lok Sabha) </h3>
       </Container>
       <Outlet/>
    </Container>
  )
}

export default ElectionLayout