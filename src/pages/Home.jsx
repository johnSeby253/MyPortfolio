import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>

      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center bg-primary  ">
        {/* <div className="content w-full h-screen    flex justify-around ">
          <div className="homeTxt flex items-center justify-center w-[60%] h-full">
            <div className="w-[85%] h-full ">
              <div className="w-full h-[30%]   flex px-10 items-end">
                <h1 className='text-5xl font-bold'>Hey There,<br /> I'm John</h1>
              </div>
              <div className="w-full h-[40%] flex items-center justify-center">
                <div className="w-[50%] h-full  px-10 flex items-center justify-center">
                  <p className='font-bold leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit laborum odio praesentium harum repudiandae, quod quasi
                    culpa dignissimos repellat voluptates molestias enim reiciendis
                    facilis vitae reprehenderit aliquid corporis beatae consectetur.</p>
                </div>
                <div className="w-[50%] h-full   flex  flex-col p-5 border-l-2 border-gray-300  ">
                  <div className="w-full h-full flex items-center justify-start">
                    <p className='font-bold'> <span className='font-bold text-2xl p-2  '>1+</span>  Year Experinces in Software Field</p>
                  </div>
                    <div className="w-full h-full flex items-center justify-start">
                    <p className='font-bold'> <span className='font-bold text-2xl p-2   '>5+</span> 
                    Happy Clients</p>
                  </div>
                    <div className="w-full h-full flex items-center justify-start">
                    <p className='font-bold'> <span className='font-bold text-2xl p-2  '>34+</span>  
                     <span className='p-2'>Websites Created and maintained</span></p>
                  </div>
                </div>

              </div>
              <div className="w-full h-[30%]  flex items-center justify-start px-10">
                <button className='bg-amber-900 px-5 py-3 rounded-lg text-white font-bold'>About Me</button>
                </div>

            </div>

          </div>
          <div className="homeTxt w-[40%] h-full flex items-end justify-center">
            <div className="w-[90%] h-[80%] bg-amber-300">
              <img src="https://cdn.shopify.com/s/files/1/0029/1887/5193/files/business_suit_480x480.jpg?v=1700345704" width={"100%"} alt="" />
            </div>
          </div>

        </div> */}
        {/* <div className="extra w-full h-[330px] flex items-center justify-center flex-col bg-white">
          <div className="projects">
            <h1>My Projects`</h1>
          </div>
          <div className="cards w-[80%] h-full bg-amber-300">

          </div>
        </div> */}

        <div className="w-full h-[88vh] bg-red-300">
          <div className="w-full flex flex-col items-center justify-center text-blue-900 ">

            <div className="w-[95%] h-[30%] px-3 py-5 flex   items-end">
              <h1 className='text-4xl font-bold'>Hey There,<br /> I'm John</h1>
            </div>



            <div className="w-full flex items-center justify-center">
              <div className="w-[90%] h-[500px] flex items-baseline-last justify-center ">
                <img className='' src="https://cdn.shopify.com/s/files/1/0029/1887/5193/files/business_suit_480x480.jpg?v=1700345704"
                  style={{ width: "90%", height: "90%" }} alt="" />
              </div>
            </div>

            <div className="w-[90%] p-5 flex flex-col">
              <div className="flex p-3">
                <h1 className='text-4xl font-bold '>SOFTWARE</h1>
              </div>

              <div className=" p-3 rounded-full  flex items-center justify-center">
                <i class="fa-solid fa-code fa-2xl " style={{ color: '#556B2F' }}></i>
              </div>

              <div className="flex justify-end p-3">
                <h1 className='text-4xl font-bold '>DEVELOPER</h1>
              </div>

            </div>

          </div>

        </div>

        <div className="w-full bg-amber-400 h-[410px] flex items-center justify-center">
          <div className="text-content bg-blue-700">
            <div className="textHed flex items-center justify-center flex-col">
              <p className='text-2xl font-bold'>About Me</p>
            </div>
            <div className="textpara text-center ">
              <p className='text-md font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis non sunt optio beatae quaerat maxime tempora!
                Voluptatem ad ab quisquam optio voluptatum,
                saepe ex eaque dolores, neque, dolore dignissimos hic.</p>
            </div>

          </div>


        </div>
      </div>
    </>

  )
}

export default Home
