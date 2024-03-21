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
            <div className="my-6 flex justify-center gap-6">
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "secure" ? "bg-gray-500" : "bg-gray-200"
                }`}
                aria-label="Secure Slide"
                aria-selected={tab === "secure"}
                onClick={() => handleTabChange("secure")}
                tabIndex={tab === "global" ? 0 : -1}
              ></button>
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "global" ? "bg-gray-500" : "bg-gray-200"
                }`}
                aria-label="Global Slide"
                aria-selected={tab === "global"}
                onClick={() => handleTabChange("global")}
                tabIndex={tab === "multi-chain" ? 0 : -1}
              ></button>
              <button
                type="button"
                className={`relative h-2 w-2 rounded-full ${
                  tab === "multi-chain" ? "bg-gray-500" : "bg-gray-200"
                }`}
                aria-label="Multi-chain Slide"
                aria-selected={tab === "multi-chain"}
                onClick={() => handleTabChange("multi-chain")}
                tabIndex={tab === "secure" ? 0 : -1}
              ></button>
            </div>
            <div
              className="border-b border-b-grayMid/40 py-4 flex flex-row justify-between z-50"
              role="tablist"
              aria-orientation="horizontal"
            >
              <div
                className={`text-center font-semibold text-[24px] ml-4 cursor-pointer ${
                  tab === "secure" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("secure")}
                role="tab"
                aria-selected={tab === "secure"}
                tabIndex={tab === "secure" ? 0 : -1}
              >
                Güvenli
              </div>
              <div
                className={`text-center font-semibold text-[24px] cursor-pointer ${
                  tab === "global" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("global")}
                role="tab"
                aria-selected={tab === "global"}
                tabIndex={tab === "global" ? 0 : -1}
              >
                Global
              </div>
              <div
                className={`text-center font-semibold text-[24px] cursor-pointer mr-4 ${
                  tab === "multi-chain" ? "text-[#144B44]" : "text-[#AAAAAA]"
                } transition-colors`}
                onClick={() => handleTabChange("multi-chain")}
                role="tab"
                aria-selected={tab === "multi-chain"}
                tabIndex={tab === "multi-chain" ? 0 : -1}
              >
                Çoklu Zincir
              </div>
            </div>
            <div className="min-h-[35vh]">
              <div className="block p-8" role="tabpanel" tabIndex={0}>
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
