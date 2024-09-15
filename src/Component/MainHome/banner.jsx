import React from 'react';

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto pt-10 md:pt-20'>

            <div className="relative h-[1200px] md:h-screen w-full">
                <img
                    src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
                    alt="Background Image"
                    className="absolute rounded-md inset-0 w-full h-full object-cover filter blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-md" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className="flex flex-col gap-5 group mx-2 cursor-pointer">
                            <div className="bg-gradient-to-r aspect-square items-center justify-center flex">
                            <img className='w-full h-96 hover:ease-in-out transition duration-700 hover:duration-1000 cursor-pointer object-center object-cover hover:scale-110 sm:hover:scale-150 aspect-square rotate-0 hover:-rotate-[360deg] hover:stroke-lime-600 fill-lime-600 hover:-translate-y-12 hover:-skew-y-12 hover:skew-x-12' src="https://i.ibb.co.com/qJXHY6d/ezgif-7-023f4e5cca-removebg-preview.png" alt="" />
            
                            </div>
                        </div>  <div className="flex flex-col gap-5 group mx-2 cursor-pointer">
                            <div className="bg-gradient-to-r aspect-square items-center justify-center flex">
                            <img className='w-full h-96 hover:ease-in-out transition duration-700 hover:duration-1000 cursor-pointer object-center object-cover hover:scale-110 sm:hover:scale-150 aspect-square rotate-0 hover:-rotate-[360deg] hover:stroke-lime-600 fill-lime-600 hover:-translate-y-12 hover:-skew-y-12 hover:skew-x-12' src="https://i.ibb.co.com/vZLfjBB/ezgif-7-6d563ce23b-removebg-preview.png" alt="" />
            
                            </div>
                        </div>  <div className="flex flex-col gap-5 group mx-2 cursor-pointer">
                            <div className="bg-gradient-to-r aspect-square items-center justify-center flex">
                            <img className='w-full h-96 hover:ease-in-out transition duration-700 hover:duration-1000 cursor-pointer object-center object-cover hover:scale-110 sm:hover:scale-150 aspect-square rotate-0 hover:-rotate-[360deg] hover:stroke-lime-600 fill-lime-600 hover:-translate-y-12 hover:-skew-y-12 hover:skew-x-12' src="https://i.ibb.co.com/sRp2hCb/a-HR0c-HM6-Ly9zd-GF0a-WMt-MDEu-ZGFy-YXou-Y29t-Lm-Jk-L3-Av-NGI5-MTA5-Yj-Ay-Yjkz-OTVj-NDQw-Zj-Bk-ZTY1.png" alt="" />
            
                            </div>
                        </div>
                       
        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;
