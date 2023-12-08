import IMAGES from "../assets/images/images";

function NewsLetter() {
  return (
    <>
      <div className="  h-96 bg-orange-300 mx-60 mt-32">
        <div className="flex">
          <div className=" ml-40  pt-28  leading-10 ">
            <p className="text-4xl ">Exclusive Offers In Your Email!</p>
            <p>Subscribe to our newsletter and get exciting updates</p>

            <div>
              <input className=""></input>
              <button className=" px-8 bg-red-400 mt-6">
                Check now <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div>
            <img src={IMAGES.newsletterImg}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
