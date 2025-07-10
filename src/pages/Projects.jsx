import React from 'react'
import NavMenu from "../components/main/NavMenu";

const Projects = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
          <p className="text-center text-lg">
            Here are some of my projects. Click on the links to view them.
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="https://example.com/project1" className="text-blue-500 hover:underline">
                Project 1
              </a>
            </li>
            <li>
              <a href="https://example.com/project2" className="text-blue-500 hover:underline">
                Project 2
              </a>
            </li>
            <li>
              <a href="https://example.com/project3" className="text-blue-500 hover:underline">
                Project 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Projects