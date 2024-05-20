import { NavLink } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaCheckSquare } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { IconContext } from "react-icons";
import { MdPoll } from "react-icons/md";

export const Drawer = () => {
  return (
    <div className="relative col-span-2 ">
    <nav className=" h-screen bg-[#F2F3F6] flex flex-col  items-start  px-5 pt-7 drop-shadow-2xl fixed  text-[#9A9FA3] text-sm font-bold">
      <NavLink
        to="information"
        className={({ isActive }) =>
          isActive
            ? "flex py-2 px-3 my-2 shadow-xl  w-[100%] bg-[#00BDDA] text-[#E5F8FB] rounded-md"
            : "flex py-2 px-3 w-[100%] my-2"
        }
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <HiOutlineInformationCircle />
        </IconContext.Provider>
        <h3 className="ml-2">Information</h3>
      </NavLink>
      <NavLink
        to="voter-registration"
        className={({ isActive }) =>
          isActive
            ? "flex py-2 px-3 my-2 shadow-xl w-[100%] bg-[#00BDDA] text-[#E5F8FB] rounded-md"
            : "flex py-2 px-3 w-[100%] my-2"
        }
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <FaCheckSquare />
        </IconContext.Provider>
        <h3 className="ml-2">Voter Registration</h3>
      </NavLink>
      <NavLink
        to="voting-area"
        className={({ isActive }) =>
          isActive
            ? "flex py-2 px-3 my-2 shadow-xl w-[100%] bg-[#00BDDA] text-[#E5F8FB] rounded-md"
            : "flex py-2 px-3 w-[100%] my-2"
        }
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <MdHowToVote />
        </IconContext.Provider>
        <h3 className="ml-2">Voting Area</h3>
      </NavLink>
      <NavLink
        to="voting-result"
        className={({ isActive }) =>
          isActive
            ? "flex py-2 px-3 my-2 shadow-xl w-[100%] bg-[#00BDDA] text-[#E5F8FB] rounded-md"
            : "flex py-2 px-3 w-[100%] my-2"
        }
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <MdPoll />
        </IconContext.Provider>
        <h3 className="ml-2">Result</h3>
      </NavLink>
    </nav>
    </div>
  );
};
