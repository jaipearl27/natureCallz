import React from "react";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <section className="relative h-screen z-[0]">
        <div className="bg-black/30 w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-emerald-500 text-2xl">
              SEARCH TODAY AND CONTRIBUTE TO MOTHER EARTH.
            </div>
            <div className="text-white text-5xl">
              Searching & Contributing with just one click
            </div>
            <div className="text-slate-50 text-xl">
              Keep track of your impact.
            </div>
          </div>
        </div>
        <img src="/banner.jpg" className="sm:w-full sm: h-full" />
      </section>
      <section className="h-screen w-screen py-10 space-y-10">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-emerald-600 text-2xl">WHY CHOOSE US?</div>
          <div className="text-gray-800 text-5xl">
            Why you should choose NatureCallz
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <div className="relative w-[30%]  border border-emerald-700 rounded-lg hover:-translate-y-3 transition duration-300">
            <div className="absolute top-0 left-0 rounded-lg h-full bg-black/30  flex flex-col justify-between">
              <div className="p-4 space-y-6">
                <div className="text-emerald-400 text-lg font-semibold">01</div>
                <div className="text-slate-100 text-xl font-semibold">
                  Search for good cause
                </div>
                <div className="sm:text-slate-50 px-3 text-black text-xl w-full ">
                  NatureCallz was created in order to make your serach valuable
                  not only for your own needs but also for planet earth.
                </div>
              </div>
            </div>
            <img src="/whyChoose1.png" className="!w-full !h-full rounded-lg" />
          </div>
          <div className="relative w-[30%]  border border-emerald-700 rounded-lg hover:-translate-y-3 transition duration-300">
            <div className="absolute top-0 left-0 rounded-lg h-full bg-black/30 flex flex-col justify-between">
              <div className="p-4 space-y-6">
                <div className="text-emerald-400 text-lg font-semibold">02</div>
                <div className="text-slate-100 text-xl font-semibold">
                  Benefit for planet earth
                </div>
                <div className="text-slate-50 text-xl">
                  By searching with NatureCallz your serach will be translated
                  to do good for our planet.
                </div>
              </div>
            </div>
            <img
              src="/whyChoose2.webp"
              className="!w-full !h-full rounded-lg"
            />
          </div>
          <div className="relative w-[30%]  border border-emerald-700 rounded-lg hover:-translate-y-3 transition duration-300">
            <div className="absolute top-0 left-0 rounded-lg h-full bg-black/30 flex flex-col justify-between">
              <div className="p-4 space-y-6">
                <div className="text-emerald-400 text-lg font-semibold">03</div>
                <div className="text-slate-100 text-xl font-semibold">
                  Search revenues
                </div>
                <div className="text-slate-50 text-xl">
                  Some of the revenues will be shared with oragnizations related
                  to the cause of preserving our planet green and clean.
                </div>
              </div>
            </div>
            <img src="/whyChoose3.png" className="!w-full !h-full rounded-lg" />
          </div>
        </div>
      </section>

      <section>
  <div className="mb-20 relative">
    <Banner img="/background-1.png" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-white">WE DON'T COLLECT ANY DATA ON OUR USERS.</p>
      <h1 className="text-center text-[50px] text-white">Your Privacy is Our First Priority</h1>
      <p className="text-center text-white">You can just sit back, relax, search, and make an impact today!</p>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
