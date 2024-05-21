import { Outlet } from "react-router-dom"
import { Container } from "./Container"


function ElectionLayout() {
  return (
    <Container className="items-center text-center w-3/4 ml-12">
       <h2 className=' mt-10 font-bold text-lg text-[#000000]'>LIVE ELECTIONS</h2>
       <Container 
       className="py-2 my-2 bg-white shadow-sm rounded-xl ml-20"
       width="[80%]">
        <h3 className="font-semibold text-[#070707] text-sm">Parliamentary General Elections (Lok Sabha) </h3>
       </Container>
       <Outlet/>
    </Container>
  )
}

export default ElectionLayout