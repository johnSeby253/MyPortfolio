import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '@/components/Cards'

const Home = () => {
  return (
    <>

      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center bg-[#fff] relative top-[12vh] z-0 ">

        {/* ::::::::::home Section:::::::: */}

        <div className="w-full h-full bg-primary ">
          <div className="w-full flex flex-col items-center justify-center text-blue-900 ">

            <div className="w-[95%] h-[30%] pt-5 pl-4 flex   items-end">
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
                <i className="fa-solid fa-code fa-2xl " style={{ color: '#556B2F' }}></i>
              </div>

              <div className="flex justify-end p-3">
                <h1 className='text-4xl font-bold '>DEVELOPER</h1>
              </div>

            </div>

          </div>

        </div>


        {/* ::::::::: About Section ::::::::: */}

        <div className="w-full bg-secondary flex flex-col items-center justify-center text-white p-5">
          <div className=" text-content flex items-center justify-center flex-col">
            <div className="textHed flex items-center justify-center p-5">
              <p className='text-3xl font-bold'>About Me</p>
            </div>
            <div className="imag bg-amber-200 w-[50%] h-[200px] rounded-3xl"
              style={{
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YUW5q526GJNU93Ys35QqBk8rSRM9uHlvoQ&s')",
                backgroundPosition: "center",
                backgroundSize: "cover",      // makes the image cover the div
                backgroundRepeat: "no-repeat", // prevents tiling
              }}>

            </div>
            <div className="textpara text-center ">
              <p className='text-lg p-3 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis non sunt optio beatae quaerat maxime tempora!
                Voluptatem ad ab quisquam optio voluptatum,
                saepe ex eaque dolores, neque, dolore dignissimos hic.</p>
            </div>

          </div>

          <div className="w-full flex flex-col items-center justify-center text-content  py-14">

            <div className="w-[90%] flex items-center justify-start  mb-1">
              <div className="no w-[35%] flex items-center justify-end">
                <p className='p-5 text-4xl font-bold'>1+</p>
              </div>
              <div className="txt w-[65%] ps-5 text-2xl border-l-2 border-l-white">
                <p>Year Experiences in Software Field</p>
              </div>
            </div>

            <div className="w-[90%] flex items-center justify-start mb-1">
              <div className="no w-[35%] flex items-center justify-end">
                <p className='p-5 text-4xl font-bold'>4+</p>
              </div>
              <div className="txt w-[65%] ps-5 text-2xl  border-l-2 border-l-white">
                <p>Websites Created</p>
              </div>
            </div>

            <div className="w-[90%] flex items-center justify-start  mb-1">
              <div className="no  w-[35%] flex items-center justify-end">
                <p className='p-5 text-4xl font-bold'>34+</p>
              </div>
              <div className="txt w-[65%] ps-5 text-2xl   border-l-2 border-l-white">
                <p>Websites Created and Maintained</p>
              </div>
            </div>



          </div>

          <div className="bttn bg-amber-400 px-6 py-3 viewmore">
            <button>View More</button>
          </div>




        </div>


        {/* :::::::::::: Work Section :::::::::: */}


        <div className="w-full h-full flex items-center justify-center flex-col py-4">
          <div className="w-full -amber-200 h-[150px]  flex items-center justify-center ">
            <div className="border-2 border-[#556B2F] p-5 headingRadius box-shadow1">
              <p className='text-4xl font-bold txt-primary'>My Major Works</p>
            </div>

          </div>
          <div className="w-full h-full">
            <Cards />
          </div>


          <div className="w-full h-full flex items-center justify-center ">
            <button className='bg-amber-300 px-12  py-5 viewmore'>View More</button>
          </div>
        </div>


        {/* :::::::::::: Contact Section ::::::::::: */}
        <div className="w-full h-[400px] bg-secondary flex items-center justify-center">
          <div className="w-[80%]">
            <form class="max-w-sm mx-auto">
              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>






        </div>




      </div>
    </>

  )
}

export default Home
