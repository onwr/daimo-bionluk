import React, { useState } from "react";
import bg from "../images/bg2.jpg";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import pixelBg from "../images/pixel-bg.svg";

const WhySlide = () => {
  const [tab, setTab] = useState("secure");
  const [slideImage, setSlideImage] = useState(slide1);

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "var(--primaryDark)",
  };

  const handleTabChange = (selectedTab) => {
    if (selectedTab === tab) {
      setTab("secure");
      setSlideImage(slide1);
    }

    if (selectedTab === "secure") {
      setTab("secure");
      setSlideImage(slide1);
    } else if (selectedTab === "global") {
      setTab("global");
      setSlideImage(slide2);
    } else if (selectedTab === "multi-chain") {
      setTab("multi-chain");
      setSlideImage(slide3);
    }
  };

  return (
    <div id="features">
      <div
        className="w-full flex flex-col-reverse md:min-h-[90vh] md:grid md:grid-cols-2 md:items-center md:justify-items-center"
        style={backgroundImageStyle}
      >
        <div className="flex  flex-col flex-1 w-full justify-center items-center bg-cover bg-no-repeat min-h-[80vh] py-24">
          <div>
            <h2 className="font-medium text-[32px] px-10 leading-tight md:text-[40px] lg:text-[65px] text-[#111111] pb-3">
              Neden Daimo?
            </h2>
            <p className="font-normal text-left text-sm md:text-[18px] px-10 lg:text-[24px] text-[#535353] pb-8 leading-snug tracking-wide max-w-xl">
              Güvenli, denetlenmiş ve tamamen açık kaynaklı.
              <br />
              En güvenli, en hızlı stablecoin'e giden yol.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-4 lg:space-x-10">
            <div
              onClick={() => handleTabChange("multi-chain")}
              className={`bg-[#144B44] w-12 h-12 flex justify-center items-center text-white rounded-full px-3 py-3 text-[18px] hover:bg-[#144B44] hover:text-white transition-colors cursor-pointer`}
            >
              ←
            </div>
            <img
              loading="lazy"
              width="800"
              height="800"
              decoding="async"
              className="w-[260px]"
              src={slideImage}
            />
            <div
              onClick={() => handleTabChange("global")}
              className={`bg-[#144B44] w-12 h-12 flex justify-center items-center text-white rounded-full px-3 py-3 font-bold text-[18px] hover:bg-[#144B44] hover:text-white transition-colors cursor-pointer`}
            >
              →
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-1 w-full justify-center bg-white items-center bg-cover bg-no-repeat min-h-full">
          <div className="max-w-md">
            <div className="relative w-auto h-full">
              <img
                alt="Pixel Background"
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
                className="absolute top-[0px] left-[-100px] z-[-5]"
                src={pixelBg}
              />
            </div>
            <div className="my-10 flex justify-center mr-5 md:mr-10 gap-6">
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "secure" ? "bg-gray-500" : "bg-gray-200"
                }`}
                onClick={() => handleTabChange("secure")}
              ></button>
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "global" ? "bg-gray-500" : "bg-gray-200"
                }`}
                onClick={() => handleTabChange("global")}
              ></button>
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "multi-chain" ? "bg-gray-500" : "bg-gray-200"
                }`}
                onClick={() => handleTabChange("multi-chain")}
              ></button>
            </div>
            <div className="border-b border-b-gray-300/40 text-lg flex flex-row my-6 justify-evenly">
              <div
                className={`text-center font-semibold ml-3 md:ml-0 md:text-[24px] cursor-pointer ${
                  tab === "secure" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("secure")}
              >
                Güvenli
              </div>
              <div
                className={`text-center font-semibold md:text-[24px] cursor-pointer ${
                  tab === "global" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("global")}
              >
                Global
              </div>
              <div
                className={`text-center font-semibold md:text-[24px] cursor-pointer ${
                  tab === "multi-chain" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("multi-chain")}
              >
                Çoklu Zincir
              </div>
            </div>

            <div className="min-h-[35vh]">
              <div className="block p-8">
                {tab === "secure" && (
                  <>
                    <h3 className="text-[38px] font-medium">
                      Anahtarlarınız, paralarınız.
                    </h3>
                    <p className="mt-2 text-xl text-[#777]">
                      Tohum cümlesi yok.
                    </p>
                    <p className="mt-2 text-xl text-[#777]">
                      Anahtarlarınız telefonunuzdaki güvenli donanımda yaşıyor.
                      Güvenli geçiş anahtarları.
                    </p>
                    <p className="mt-2 text-xl text-[#777]">
                      Kendi saklama özgürlüğü, daha önce hiç olmadığı kadar
                      kolay.
                    </p>
                  </>
                )}
                {tab === "global" && (
                  <>
                    <h3 className="text-[38px] font-medium">
                      Global ile İlgili Metin
                    </h3>
                    <p className="mt-2 text-xl text-[#777]">
                      Global ile ilgili detay ler buraya gelebilir.
                    </p>
                  </>
                )}
                {tab === "multi-chain" && (
                  <>
                    <h3 className="text-[38px] font-medium">
                      Çoklu Zincir ile İlgili Metin
                    </h3>
                    <p className="mt-2 text-xl text-[#777]">
                      Çoklu Zincir ile ilgili detaylar buraya gelebilir.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySlide;
