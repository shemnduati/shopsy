import React from 'react';
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        {/* Upper Navbar */}
        <div>
            <div>
                <div>
                    <a href='#'>
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                 {/* search bar and order but ton */}
                 <div>
                    <div>
                        <input type="text" placeholder="Search"
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px]'
                        />
                    </div>
                 </div>
            </div>
        </div>
        {/*  Lower Navbar */}
        <div></div>
    </div>
  )
}

export default Navbar