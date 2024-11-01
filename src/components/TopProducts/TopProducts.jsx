import React from 'react';
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual wear",
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
        ullum rutrum sapien. Praesent quis rhoncus justo. Integer nec orn
        dolore magna aliqaua`,
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
        ullum rutrum sapien. Praesent quis rhoncus justo. Integer nec orn
        dolore magna aliqaua`,
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
        ullum rutrum sapien. Praesent quis rhoncus justo. Integer nec orn
        dolore magna aliqaua`,
    },
];
const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
            <div className="text-left mb-24">
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Rated Products for you
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>
                    Best Products
                </h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Explore our top selling products and discover the best deals for you.
                </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data) => (
                        <div 
                            className='rounded-2xl bg-white dark:bg-gray-800
                                     hover:bg-black/80 dark:hover:bg-primary
                                     hover:text-white
                                      relative shadow-xl duration-300 group max-w-[300px]'
                        >
                            <div className='h-[100px]'>
                                <img 
                                    src={data.img} 
                                    alt=''
                                    className='max-w-[140px] block mx-auto transform -translate-y-20 
                                                group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                            </div>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts