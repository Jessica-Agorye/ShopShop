import IMAGES from "../assets/images/images";

function Footer() {
  return (
    <>
      <div className="  h-screen  mt-48">
        <div
          className=" flex justify-center
        ml-24 gap-4"
        >
          <img src={IMAGES.navImage} alt="" className=" w-14" />
          <p className=" pt-6 font-bold text-2xl">SHOP-SHOP</p>
        </div>

        <p className=" text-center  mt-20 font-bold  text-xl">LOCATIONS</p>
        <div className="flex justify-center gap-6 mt-20  ">
          <div className="mr-28 leading-10">
            <p className=" font-medium">Lagos</p>
            <p>4th Ikeja Allen Avenue, Lagos</p>
            <p>+(234)-67895098</p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Map
            </p>
          </div>
          <div className="leading-10 ">
            <p className="font-medium">Ibadan</p>
            <p>14th Onise Iyanu Avenue, Lagos</p>
            <p>+(234)-67895098</p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Map
            </p>
          </div>
          <div className="ml-28 leading-10">
            <p className="font-medium">Abuja</p>
            <p>25th Kado Estate, Abuja</p>
            <p>+(234)-67895098</p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Map
            </p>
          </div>
        </div>

        <div className=" mt-24">
          <div className="flex gap-6 justify-center">
            <p style={{ fontSize: "24px" }}>
              <i class="fa-brands fa-square-facebook"></i>
            </p>
            <p style={{ fontSize: "24px" }}>
              <i class="fa-brands fa-square-twitter"></i>
            </p>
            <p style={{ fontSize: "24px" }}>
              <i class="fa-brands fa-square-instagram"></i>
            </p>
          </div>
        </div>

        <div className="flex justify-center   mt-20">
          <input
            type="text"
            placeholder="E-mail"
            className=" border-2 border-black  h-14  w-64  p-8"
          />
          <button className=" bg-black text-white px-10">
            Subscribe <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default Footer;
