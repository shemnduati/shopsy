import React from 'react';
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women3.png";
import Img4 from "../../assets/women/women4.png";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Men wear",
        rating: 4.6,
        author: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.2,
        author: "Red",
        aosDelay: "100"
    },
    {
        id: 3,
        img: Img3,
        title: "Gooogles",
        rating: 4.7,
        author: "brown",
        aosDelay: "400"
    },
    {
        id: 3,
        img: Img4,
        title: "Printed T-shirts",
        rating: 4.4,
        author: "yellow",
        aosDelay: "600"
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* header section  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary'>Top Selling products for you</p>
                <h1 className='text-3xl font-bold'>Products</h1>
                <p className='text-sm text-gray-400'>Lorem His Life will forever be changed dolor, sit amet, consectetur adipiscing ElementInternals, sed do
                eisumod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {/* body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* Cards section */}
                    {ProductsData.map((data)=>(

                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products