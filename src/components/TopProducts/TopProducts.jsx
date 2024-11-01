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
            <div className="text-left mb-10">
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
            <div className='grid gird-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5'>
                {
                    ProductsData.map((data) => (
                        <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className='space-y-3'
                        >
                           <img 
                                src={data.img} 
                                alt=''
                                className='h-[220px] w-[150px]
                                object-cover rounded-md'
                            />
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