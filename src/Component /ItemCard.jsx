import React from "react";

const ItemCard = ({ cardDetails }) => {
  const { image, title, actualPrice, mrp } = cardDetails;
  return (
    <div className="border border-black rounded-2xl overflow-hidden">
      <img
        src={image}
        alt=""
        className="max-h-[20rem] w-[320px] object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h1 className="max-w-[15rem]">{title}</h1>
        <p>₹{actualPrice}</p>
      </div>
    </div>
  );
};

export default ItemCard;
