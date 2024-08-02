'use client'
import { useState } from 'react';

import Quiz from '../app/components/quiz';
import Footer from '../app/components/footer';

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleButtonClick = () => {
    setShowQuiz(!showQuiz);
  }
  return (
    <main className=" mx-auto overflow-hidden">
      <div className=" mx-auto font-['TT norms']">
        {!showQuiz && (
          <>
            <section className="bg-[#a4b69e] bg-auto bg-[url('/images/hero.jpeg')] px-8 pb-8 lg:pl-[138px] lg:min-h-[750px] pt-5">
            <svg width="40px" height="38px" viewBox="0 0 40 38" className="mb-3">
                <g id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Home-D" transform="translate(-620.000000, -11.000000)" fill="#0B3B3C">
                    <g id="nav-bar-white">
                      <path d="M630.721479,46.6112689 C630.04212,46.6112689 629.617521,46.0958049 629.617521,45.2525502 C629.617521,41.2678528 637.524075,32.2169179 645.411437,24.5448278 C644.077854,33.1613124 635.266478,46.6112689 630.721479,46.6112689 M659.02427,11.0029031 C657.938908,11.0290584 655.712308,11.113299 653.759065,11.1413226 C653.071978,11.1511733 652.797516,11.4598572 652.885578,11.9029693 C652.989351,12.4251419 653.333446,12.8117823 653.851203,12.8254544 C654.517909,12.8431177 655.410842,12.7317877 656.555732,12.6754858 C653.953022,14.6780673 650.803936,17.3102452 647.554985,20.2387935 C647.173355,17.2924969 645.807418,14.936139 643.119788,14.936139 C639.213471,14.936139 635.307155,20.8805333 633.608757,24.1924102 C633.438917,21.4749728 632.250038,18.9273752 629.70244,18.9273752 C624.405815,18.9273752 620,30.9800593 620,32.7836735 C620,33.400277 620.705175,33.873281 621.129775,33.873281 C621.639294,33.873281 621.804888,33.6185212 621.974728,33.0240818 C624.182646,25.8058886 627.494523,20.7956134 629.70244,20.7956134 C630.806399,20.7956134 631.655599,22.0694122 631.655599,25.0416094 C631.655599,27.2284671 631.283055,28.556275 631.283055,29.0744563 C631.283055,29.8841678 631.995278,30.3066444 632.419878,30.3066444 C632.929397,30.3066444 633.099237,30.0518846 633.353997,29.4574452 C635.901595,23.1733711 640.062671,16.8892971 643.034868,16.8892971 C644.498463,16.8892971 645.494149,18.7588091 645.576266,22.048437 C636.665194,30.3157308 627.687121,40.2781111 627.687121,45.1790095 C627.687121,47.218701 628.8118,48.3945872 630.63656,48.3945872 C637.187961,48.3945872 647.441362,32.1121268 647.664532,22.3893905 C651.310399,18.9588805 654.78685,15.9632454 657.288676,14.0571329 C656.903479,15.0129066 656.515226,15.9425249 656.317702,16.6364056 C656.173083,17.1440569 656.261145,17.7022355 656.885052,17.9448517 C657.27959,18.098302 657.631243,17.8758967 657.785882,17.4349076 C658.726031,14.7523723 659.210414,13.6520649 659.785492,12.1173072 C660.161602,11.1134688 660.121435,10.976493 659.02427,11.0029031" id="manual-symblol-green">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <div className=" x-4 column-3 w-9/12 lg:w-6/12 lg:mt-[149px]">
                <h1 className="text-[45px] leading-[4rem] md:text-7xl lg:text-8xl text-[#0B3B3C] tracking-[-0.03em]font-['TT norms']">Be good to yourself</h1>
                <p className="font-sans text-base lg:text-[18px] lg:leading-[30px] font-light py-5 md:py-8 text-[#0B3B3C]">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
                <button className="bg-red-900 hover:bg-white py-4 px-8 tracking-[0.15rem] font-bold text-[10px] text-white hover:text-red-900 border border-transparent hover:border-red-900 uppercase" onClick={handleButtonClick}>Take the quiz</button>
              </div>
            </section>

            <section className="p-5 text-center lg:text-left container">
              <h2 className="text-3xl md:text-5xl text-[#0B3B3C] text-center font-['TT norms'] py-3 lg:py-10 tracking-[-0.03em] w-full text-center">What we can help with</h2>
              <div className="relative lg:flex">
                <img src="https://placehold.it/370x445" className="z-2 m-auto" />
                <div className="py-7 text-[#0B3B3C] relative lg:w-[372px]">
                  <span className="uppercase text-sm py-5">Hair Loss</span>
                  <h3 className="text-[28px] tracking-[-0.03rem] pb-[22px]">Hair loss needn’t be irreversible. We can help! </h3>
                  <p className="text-[18px] leading-[30px]">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
                </div>
                <span className="text-[360px] md:text-[450px] font-normal absolute text-[#E8EFE9] -z-10 leading-none -bottom-[6.75rem] left-1/2 -translate-x-1/2">01</span>

              </div>
            </section>


            <section className="p-5 text-center lg:text-left container">
              <div className="relative mb-[100px] lg:flex lg:flex-row-reverse ">
                <img src="https://placehold.it/370x445" className="z-2 m-auto" />
                <div className="py-7 text-[#0B3B3C] relative lg:w-[372px]">
                  <span className="uppercase text-sm py-5">Erecetile dysfunction</span>
                  <h3 className="text-[28px] tracking-[-0.03rem]">Erections can be a tricky thing. But no need to feel down!</h3>
                  <p className="text-[18px] leading-[30px]">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
                </div>
                <span className="text-[360px] md:text-[450px] font-normal absolute text-[#E8EFE9] -z-10 leading-none -bottom-[6.75rem] left-1/2 -translate-x-1/2">02</span>

              </div>
            </section>
            <Footer />
          </>
        )}
        {showQuiz && <Quiz />}
      </div>
    </main>
  );
}
