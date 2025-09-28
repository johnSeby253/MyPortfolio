import React, { useState } from 'react'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = (checkValue) => {
        setSidebar(checkValue);
    };




    return (
        <>
            <div className="navs">
                <div className="w-full h-[12vh] flex justify-center items-center bg-primary border-b-5 fixed z-10 top-0">
  

                    <div className="w-[95%] h-full  flex items-center  justify-between p-3">
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

                <div className={`sidebarOverlay bg-overlaycolor w-full fixed h-full flex items-start justify-end z-20 top-[12vh] ${sidebar ? "" : "hidden "}`}>
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
