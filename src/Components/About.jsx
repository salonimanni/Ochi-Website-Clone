import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black'>
    <h1 className="font-[Nueue_Montreal] text-[3.5vw] leading-[3.3vw] tracking-tight">
    Ochi is a strategic partner for fast-grow­ing tech <br />
     businesses that need to raise funds, sell prod­ucts,<br />
     ex­plain com­plex ideas, and hire great peo­ple.
    </h1>
    <div className="w-full border-t-[1px] flex flex-col md:flex-row justify-between mt-16 border-[#a1b562] bg-[#CDEA68]">
      <h2 className="mt-6 md:mt-0">What you can expect:</h2>
      <h2 className="mt-10 md:mt-0">We create tailored presentations to help<br /> you persuade your colleagues, clients, or<br /> investors. Whether it’s live or digital,<br />delivered for one or a hundred people.</h2>
      <h2 className="mt-7 md:mt-0">We believe the mix of strategy and<br /> design (with a bit of coffee) is what<br />makes your message clear, convincing,<br />and captivating.</h2>
    </div>
    <div className='w-full  flex gap-5 flex-col md:flex-row border-t-[1px] pt-9 mt-20 border-[#a1b562]  bg-[#CDEA68] '>
      <div className='w-1/2'>
       <h1 className='text-[4vw]  '>Our Approach:</h1>
       <button className='flex items-center gap-10 px-10 py-6 text-white rounded-full bg-zinc-900 mt-7'> 
        Read More
        <div className= 'w-3 h-3 rounded-full bg-zinc-100'>
        </div>
        </button>
    
       </div>
       <div className='w-full md:w-1/2 h-[70vh] mt-5 bg-[#badb44] bg-cover bg-center rounded-3xl'
  style={{
    backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>
    </div>
    </div>
    
  )
}
 
export default About;