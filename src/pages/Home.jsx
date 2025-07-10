import NavMenu from "../components/main/NavMenu";
import React from "react";

const Home = () => {
  return (
    <div
      className="bg-[#FFF9DB] dark:bg-[#20294B]
      sm:border-x-2 border-x-0 border-y-2 
      sm:shadow-shadow shadow-none 
      flex flex-col justify-between 
      sm:p-8 p-4 border-border 
      min-h-screen
      bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] 
      bg-[size:30px_30px]"
    >
      <NavMenu />
     <div>
      Hi It AYUSH
     </div>
    </div>
  );
};

export default Home;
