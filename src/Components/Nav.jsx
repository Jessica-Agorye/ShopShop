import IMAGES from "../assets/images/images";

function Nav() {
  return (
    <>
      <div className=" flex justify-between nav-container   h-16   mx-5 mt-5">
        <div className="page-tite flex ml-8">
          <img src={IMAGES.navImage} alt="" className="  w-14" />
          <p className=" font-bold   text-2xl ml-4 mt-2">Shop-Shop</p>
        </div>

        <div className=" ">
          <ul className="flex justify-between gap-x-4 mt-4">
            <li className="">
              <a href="#" className="border-b-4 border-indigo-500 pb-1">
                Shop
              </a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
          </ul>
        </div>

        <div className=" mr-4 mt-2">
          <button className="border border-black px-8 py-2  rounded-lg mr-4">
            Login
          </button>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </>
  );
}

export default Nav;
