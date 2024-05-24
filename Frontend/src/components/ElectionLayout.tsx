import { Outlet } from "react-router-dom"
import { Container } from "./Container"
import { useEffect, useState } from "react"
import client from "../api/client";
import { useDispatch, useSelector } from "react-redux";
import { getElectionsState, updateElections, updateLiveElectionId } from "../store/election";


function ElectionLayout() {
  const dispatch = useDispatch();
  const {elections} = useSelector(getElectionsState);
  const [liveElection,setLiveElection] = useState('No Live Elections');
  
  useEffect(
  ()=>{
   const getAllElection = async()=>{
    const { data } = await client.get("/elections/get-all");
    dispatch(updateElections(data.elections));
  };
  getAllElection();
  const liveElec = elections?.find((item) => item.status === "LIVE");
  if(liveElec) setLiveElection(liveElec.electionName);
  dispatch(updateLiveElectionId(liveElec?._id))
},[])

  return (
    <Container className="items-center text-center w-3/4 ml-12">
       <h2 className=' mt-10 font-bold text-lg text-[#000000]'>LIVE ELECTIONS</h2>
       <Container 
       className="py-2 my-2 bg-white shadow-sm rounded-xl ml-20"
       width="[80%]">
        <h3 className="font-semibold text-[#070707] text-sm"> {liveElection} </h3>
       </Container>
       <Outlet/>
    </Container>
  )
}

export default ElectionLayout