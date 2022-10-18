import React, { useState } from "react";

const SingleReview = ({ review }) => {
  const { img, icon, title, name } = review;

  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClick);
  };

  return (
    <div>
      <div>
        <img className="w-80" src={img} alt="" />
      </div>
      <div className="flex gap-3 py-4">
        <div>
          <img className="w-10" src={icon} alt="" />
        </div>
        <div className="w-56">
          <h2 className="text-md font-semibold">{name}</h2>
          <p className="text-justify text-sm">
            {title} <span onClick={() => handleClick()}
            style={{
              fontFamily: "poppins",
            }}> {isClick === true ? (
              <p>doloribus necessitatibus nemo non consequuntur.</p>
            ) : (
              <button>see more</button>
            )}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
