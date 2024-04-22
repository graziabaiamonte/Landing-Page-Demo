import Button from "./Button"
import Image from "next/image"

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start
          justify-center gap-12">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
              Get App!
            </h2>
            <p className="regular-16 text-gray-10">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
              <Button
                type="button"
                title="Download App"
                icon="/Landing-page-demo/apple.svg"
                variant="btn_white"
                full
              />

              <Button
                type="button"
                title="Play Store"
                icon="/Landing-page-demo/android.svg"
                variant="btn_white"
                full
              />
            </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/Landing-page-demo/mobile.png"
            alt="phone"
            width={550}
            height={870}
            priority
          />
        </div>

      </div>

    </section>
  )
}

export default GetApp
