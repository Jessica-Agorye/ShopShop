import "./card.css";

function Card({ name, description, imageUrl, price }) {
  return (
    <>
      <div className="theBox ">
        <img src={imageUrl} className=" h-96"></img>
        <p className=" text-xl font-bold mt-6"> {name}</p>
        <p>{description}</p>
        <p className=" text-gray-800">{price}</p>
      </div>
    </>
  );
}

export default Card;
