import logo from "../assets/DigivoterHeader.jpg";

export const Header = () => {
  return (
    <div className="fixed flex justify-between h-12 bg-white shadow-lg w-[100vw]">
      <div className="flex items-center justify-center">
        <img className="ml-10 w-7" src={logo} />
        <h1 className="ml-4 text-2xl font-bold text-[#5544D7]">DigiVoter</h1>
      </div>
      <div>English</div>
    </div>
  );
};

export default Header;
