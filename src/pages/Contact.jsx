import React from 'react'
import NavMenu from "../components/main/NavMenu";

const Contact = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
          <p className="text-center mb-4">Feel free to reach out via email or connect with me on LinkedIn.</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:"/>
                    </div>
                    </div>
      </div>
    );
}

export default Contact