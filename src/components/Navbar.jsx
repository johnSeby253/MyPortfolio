import React, { useState } from 'react'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = (checkValue) => {
        setSidebar(checkValue);
    };




    return (
        <>
            <div className="navs">
                <div className="w-full h-[12vh] flex justify-center items-center bg-primary border-b-2 border-gray-300 ">
                    {/* <div className="barnd_Menus w-[90%] h-full flex items-center justify-center">
         <div className="brandName w-[20%] px-8">
                <h1 className='text-3xl'>𝓘𝓽'𝓼 𝓶𝓮...<br/>
                <span className='px-16 italic'>𝓙𝓸𝓱𝓷...!</span> </h1>
            </div>
            <div className="brand_menus w-[80%] flex align-items-center justify-center ">
                <ul className='flex justify-around w-[60%]'>
                    <li>Home</li>
                    <li>Works</li>
                    <li>About me</li>
                    <li>Contact me</li>
                </ul>
            </div>

        </div> */}

                    <div className="w-[95%] h-full bg- flex items-center  justify-between p-3">
                        <div className="brandName txt-primary ">
                            <h1 className='text-2xl'>𝓘𝓽'𝓼 𝓶𝓮...<br />
                                <span className='px-12 italic'>𝓙𝓸𝓱𝓷...!</span> </h1>
                        </div>
                        <div className="menu_icon">
                            <i className="fa-solid fa-bars fa-2xl pointer " style={{ color: '#556B2F' }}
                                onClick={() => handleSidebar(true)}
                            ></i>
                        </div>
                    </div>


                </div>

                <div className={`sidebarOverlay bg-overlaycolor w-full absolute h-[88vh] flex items-start justify-end ${sidebar ? "" : "hidden"}`}>
                    <div className="sidebar w-[250px] bg-primary  h-fit  txt-primary font-bold  ">
                        <div className=" flex justify-end items-center p-5">
                            <i className="fa-solid fa-xmark fa-2xl mt-2 pointer" style={{ color: '#556B2F' }}
                                onClick={() => handleSidebar(false)}></i>
                        </div>
                        <ul className='flex flex-col justify-around items-center h-full p-3 '>
                            <li className='p-3'>Home</li>
                            <li className='p-3'>Works</li>
                            <li className='p-3'>About</li>
                            <li className='p-3'>Contact</li>
                        </ul>
                    </div>
                </div>


            </div>



        </>


    )
}

export default Navbar
