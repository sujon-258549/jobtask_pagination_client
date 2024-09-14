import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css'

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2023-12/product-family.jpg.webp?itok=G24kIif4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.laptopstores.in/images/lenovo-banner.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2022/04/20/narzo-50.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.yugatech.com/wp-content/uploads/2023/04/PR-Banner-narzo-software-updates.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://fdn.gsmarena.com/imgroot/news/22/03/realme-narzo-50a-prime-launch-date/-1220x526/gsmarena_001.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/05/18132844/Realme-Narzo-50-5G-features-1024x576.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.yugatech.com/wp-content/uploads/2022/07/Launch-PR-narzo-50-5G.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://content.box.co.uk/website-assests/Lenovo-Banner.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://portal.motionview.com.bd/ck_upload/mceu_42325839361694417671264_1694417671.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://portal.motionview.com.bd/ck_upload/mceu_20928569331694417653669_1694417653.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.notebookcheck.net/fileadmin/_processed_/6/6/csm_Screenshot_2022_01_26_124315_ebd96df98f.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-9/section01-header.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://portal.motionview.com.bd/ck_upload/mceu_87954682711694417640311_1694417640.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://waltonbd.com/image/catalog/category-banner/computer/karonda-2022.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://waltonbd.com/image/catalog/home-page/slider/worldwide-web-view.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://waltonbd.com/image/catalog/home-page/full-block/tamarind-desktop.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://eplaza.waltonbd.com/image/cache/data/Computer/Laptop/laptop-2-1920x750.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.theinsidersnet.com/site/public/images/pl_12/402/202105/041820_10052021_311_C21_Website_SG_Monitors_USA_Banner.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKMsaZ_o3xWyDxZE1jjNCd4AtVLpfGGCQww&s" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.laptopstorehp.com/images/hp-laptop-banner.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.vodacombusiness.co.za/sites/vodacombusinesscoza/files/styles/extra_large_landscape/public/2022-08/VB_DesktopBanner_1920x720_SamsungGalaxyS22Sultra.jpg?itok=Mbt3Qbd0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.computerlounge.co.nz/Data/Media/Images/Brand/Samsung/samsung-brand-banner.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://i.pinimg.com/originals/12/ce/29/12ce299313163f40c0ac9b66db93ef58.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://images.samsung.com/is/image/samsung/assets/my/online-store/secretsale/BLANK-04-eStore-MON-LOOP-58percent-off-Main-Banner-PC-1440X640.png?imwidth=1366" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.vodacombusiness.co.za/sites/vodacombusinesscoza/files/styles/extra_large_landscape/public/2022-08/VB_DesktopBanner_1920x720_SamsungGalaxyS22Sultra.jpg?itok=Mbt3Qbd0" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://images.samsung.com/is/image/samsung/assets/my/samsung-experience-store/about/Eureka_Launch_Dotcom_Desktop_banner_1440x640.jpg?imwidth=1366" />
                    </SwiperSlide>

                </div>
            </Swiper>
        </>
    );
}
