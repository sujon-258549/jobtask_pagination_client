import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const ImageMarque2 = () => (
    <>
        <div className="bg-slate-300 mt-10 border-y-2 border-gray-950">
            <h1 className="text-center text-3xl font-bold py-10 md:text-5xl"> 
                Product Carousel
            </h1>
        </div>
        <Marquee play={true} direction={"rite"} pauseOnHover={true} speed={150} loop={100}>
            <div className="flex gap-5 py-10">
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/09/Xiaomi-Redmi-14R-Green-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Symphony-G27-Lite-Dark-Ash-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Symphony-ATOM-5-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/09/Benco-V91c-Rainbow-White-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/09/Benco-V91-Plus-Volcanic-Grey-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/08/Apple-iPhone-16-Pro-White-Titanium-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/11/Apple-iPhone-16-Plus-Pink-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/11/Apple-iPhone-16-Plus-Pink-300x300.webp" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/Oppo-F27-Emerald-Green-300x300.webp" alt="" />
                {/* <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Oppo-A3x-4G-Nebula-Red-300x300.webp" alt="" />
            <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Oppo-A3-4G-Starlight-White-300x300.webp" alt="" /> */}
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Oppo-A3-4G-Starlight-White-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/09/Oppo-A80-Moonlight-Purple-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/11/Google-Pixel-9-Peony-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Google-Pixel-9-Pro-XL-Hazel-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Google-Pixel-9-Pro-XL-Hazel-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/08/Google-Pixel-9-Pro-XL-Hazel-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/05/Oppo-A1i-Purple-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/05/Oppo-A1s-Green-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/05/Oppo-Reno12-China-Peach-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/05/Oppo-Reno12-China-Peach-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/05/Oppo-Reno12-Pro-China-Black-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/Oppo-Reno12-F-Amber-Orange-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/07/Oppo-A3-Black-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/03/OnePlus-Nord-CE4-Dark-Chrome-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/OnePlus-Nord-CE4-Lite-Mega-Blue-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/OnePlus-Nord-CE4-Lite-India-Ultra-Orange-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/OnePlus-Ace-3-Pro-Green-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2024/06/OnePlus-Watch-2-China-Green-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/10/OnePlus-Open-Emerald-Dusk-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/02/OnePlus-12R-Cool-Blue-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/11/OnePlus-Nord-N30-SE-Cyan-300x300.webp" alt="" />
                <img className="w-[200px]" src="https://www.mobiledokan.co/wp-content/uploads/2023/05/OnePlus-Ace-2-Pro-Green-300x300.jpg" alt="" />
            </div>
        </Marquee></>
);

export default ImageMarque2;