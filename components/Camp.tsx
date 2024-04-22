import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined:string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}:CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-20">
        <div className=" flexCenter gap-4 ">
          <div className="rounded-full p-4 bg-white/75 ">
            <Image
              src="/Landing-page-demo/code.svg"
              alt="map"
              width={28}
              height={28}
              priority
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
           {PEOPLE_URL.map((url) => (
            <Image
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
              className="inline-block h-10 w-10 rounded-full" 
            />
           ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container
      relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start
        justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage = "bg-bg-img-1"
          title= "lorem ipssum dolo"
          subtitle="lorm ipsum dolor sit amet"
          peopleJoined="50+ Joined"
        />

        <CampSite
          backgroundImage = "bg-bg-img-2"
          title= "lorem ipssum dolo"
          subtitle="lorm ipsum dolor sit amet"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="transparentBlur p-8 lg:max-w-[500px]
            xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full
            overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>lorem</strong> lorem ipsume 
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deserunt doloribus, eos nam repudiandae beatae nihil voluptas. 
            Obcaecati a, rem molestias dolores amet ipsa deserunt omnis!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Camp
