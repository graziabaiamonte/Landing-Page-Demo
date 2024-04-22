import Image from "next/image"

function Guide() {
  return (
  <section className='flexCenter flex-col'>
    <div className='padding-container max-container w-full pb-24'>
     

      <p className="uppercase regular-18 -mt-1 mb-3 colorText">
        We are here for you
      </p>

      <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
        <h2 className="text-white bold-40 lg:bold-64 xl:max-w-[390px]">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="regular-16 text-white xl:max-w-[520px]">
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Fuga, 
          quasi veniam eum voluptate nisi qui reprehenderit, 
          laboriosam minima distinctio voluptatem mollitia quod! 
          Soluta praesentium recusandae fugit magni sed et quasi 
          reiciendis a ea eius? Nesciunt quis voluptatem architecto assumenda 
          laboriosam!
        </p>
      </div>
    </div>

    <div className="flexCenter max-container relative w-full h-[800px]">

      <Image
        src="/mac.jpg"
        alt="mac"
        width={1440}
        height={380}
        className="w-full object-cover object-center 2xl:rounded-5xl h-3/4"
      />

      <div className="absolute flex transparentBlur py-8 pl-5 pr-7 gap-3 
        rounded-3xl border shadow-md md:left-[5%] lg:top-20 h-[40%] lg:w-[25%] sm: w-[70%]">
        <div className="flexBetween flex-col">

          <div className="flex w-full flex-col">
            <div className="flexBetween w-full">
              <p className="regular-16 ">Lorem, ipsum dolor.</p>
              
            </div>
            <p className="bold-20 mt-2">lorem ipsum</p>
          </div>

          <div className="flex w-full flex-col">
              <p className="regular-16">Lorem, ipsum dolor.</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">lorem ipsum</h4>
          </div>
          
        </div>

      </div>

    </div>
  </section>
  )
}

export default Guide
