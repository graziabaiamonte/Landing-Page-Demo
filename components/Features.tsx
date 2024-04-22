import { FEATURES } from "@/constants"
import Image from "next/image"


function Features() {
  return (
    <section className='flex-col flexCenter py-24 '>
      <div className='max-container padding-container relative
            flex'>
          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative">
              <h2 className="bold-40 lg:bold-64 text-white fontHeader">
                Our Features
              </h2>
            </div>

            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem 
                title = {feature.title}
                key = {feature.title}
                icon = {feature.icon}
                variant = {feature.variant}
                description = {feature.description}
                />
              ))}
            </ul>

          </div>
      </div>
    </section>
  )
}



type FeatureItem = {
  title : string;
  icon : string;
  variant : string;
  description: string;
}

const FeatureItem = ({title, icon, variant, description}:FeatureItem) => {
  return(
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-white">
        <Image 
          src={icon}
          alt="mac"
          width={28}
          height={28}
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize colorText">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-white
         lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features
