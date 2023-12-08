import "./hero.css";
import IMAGES from "../assets/images/images";
function Hero() {
  return (
    <>
      <div>
        <div className="   h-screen bg-orange-300 flex justify-evenly">
          <div className=" pt-40  leading-10">
            <p>TOP FASHION , TOP QUALITY</p>
            <p className="text-6xl pt-4 ">
              Shop Latest<br></br> Fashion Fits.
            </p>
            <button className=" px-8 bg-red-400 mt-10 ">
              Latest Collection <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div>
            <img src={IMAGES.bannerImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
