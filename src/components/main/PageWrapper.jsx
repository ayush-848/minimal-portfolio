import React from 'react'

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFF9DB] flex justify-center items-start px-4 py-20 relative overflow-hidden">

      {/* Vertical Label */}
      <span className="absolute top-1/2 left-2 -translate-y-1/2 rotate-[-90deg] opacity-30 font-bold tracking-widest text-black/20 select-none">
        NOTES
      </span>

      {/* Paperclip */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-10 bg-gradient-to-b from-[#d4d4d4] to-[#a1a1a1] rounded-b-xl border-[3px] border-black shadow-[0px_4px_0px_black] flex justify-center items-center z-10">
        <div className="w-4 h-4 bg-[#FFF9DB] border-2 border-black rounded-full shadow-[1px_1px_0px_black]" />
      </div>

      {/* Notepad Body */}
      <div className="relative w-full max-w-3xl bg-[#FEFEFE] border-[3px] border-black rounded-[1.5rem] shadow-[10px_10px_0px_#000] p-8
        bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]
        bg-[size:26px_26px]">

        {/* Curl */}
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#FFF9DB] border-t-[3px] border-l-[3px] border-black rounded-tl-full shadow-[-4px_-4px_0px_#000]" />

        {/* Washi Tape Corners */}
        <div className="absolute -top-3 -left-3 rotate-[-6deg] w-16 h-6 bg-yellow-300 border-2 border-black rounded-md shadow-[2px_2px_0px_black] opacity-80" />
        <div className="absolute -bottom-3 -right-3 rotate-[5deg] w-16 h-6 bg-pink-300 border-2 border-black rounded-md shadow-[2px_2px_0px_black] opacity-80" />

        {children}
      </div>
    </div>
  )
}

export default PageWrapper
