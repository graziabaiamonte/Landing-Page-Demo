
import Image from "next/image"
import Button from "./Button"

function Hero() {
  return (
    <section className='max-container padding-container flex flex-col gap-20
        py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='hero-map'></div>

        {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
      
          
            <h1 className="bold-52 lg:bold-88 text-white fontHeader uppercase ">Lorem ipsum dolor sit.</h1>
            <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dicta magni suscipit cum natus a neque quidem quia minus pariatur quaerat!</p>

            <div className="my-11 flex flex-wrap gap-5">
                
                <div className="flex items-center gap-2">

                    {/* /* The code `{Array(5).fill(1).map((_, index) => (<Image ... />))}` is creating an
                    array of length 5 filled with the value 1 using `Array(5).fill(1)`. Then, it is
                    mapping over this array to render an `<Image />` component for each element in the
                    array. This code snippet is generating 5 `<Image />` components, each displaying an
                    image of a star. */}
                    
                    {Array(5).fill(1).map((_, index) => (
                        <Image
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                        />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 text-white">
                    198k 
                    <span className="regular-16 lg:regular-20 ml-1">Excellent reviews</span></p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button
                    type="button" 
                    title="Download App" 
                    variant="btn_fuxia"
                />

                <Button
                    type="button" 
                    title="How it work?" 
                    icon="/play.svg"
                    variant="btn_purple"
                />  
            </div>
        </div>


        {/* {RIGHT} */}
        <div className="relative flex flex-1 items-start  bg-cover bg-center custom rounded-3xl ">
            <div className="opacity"></div>
           <div className="absolute -bottom-5 -left-5 z-20 flex w-[70%] h-[40%] flex-col gap-8 rounded-3xl px-7 py-8 transparentBlur">
               <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-black">Location</p>
                        <Image src="/close.svg" alt="close" width={24} height={24}/>
                    </div>
                    <p className="bold-20 text-white">Lorem, ipsum dolor.</p>
                </div>

                <div className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-black">Distance</p>
                        <p className="bold-20 text-white">173.45</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="regular-16 block text-black">Elevation</p>
                        <p className="bold-20 text-white">2km</p>
                    </div>
                </div>
               
           </div>
        </div>
    </section>
  )
}

export default Hero
