import Landing from "./components/landing";

export default function Home() {
  return (
    <main>
      <video
        src="/Edited.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="object-cover w-screen h-screen"
      ></video>

      <div className="absolute bg-[rgba(0,0,0,.7)] inset-0" />
      <div className="container mx-auto w-full h-full">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-full w-full">
          <Landing label={"DDT Studio Interactive"}/>
        </div>
      </div>
    </main>
  )
}
