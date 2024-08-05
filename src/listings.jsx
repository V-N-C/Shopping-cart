import PropTypes from "prop-types";
import { getImageURL } from "./img-util.js";
import { getImage } from "./listingdata.jsx";
import "./App.css";

export default function Listings({ handleInc, handleDec }) {
  const renderImage = getImage();

  return (
    <>
      <div className="row mx-5 px-4 mt-5 gap-4">
        {/* Called Dynamically all the Listings Data from listingdata.jsx */}
        {renderImage.map((img) => (
          <div
            className="card text-center mb-3"
            key={img.id}
            style={{ width: "15rem" }}
          >
            {/* If img.sale is true button is Add to Cart the badge sale is Visible   */}
            {img.sale ? (
              <span className="badge position-absolute top-0 end-0 w-3 text-bg-dark">
                Sale
              </span>
            ) : (
              <span>
              </span>
            )}
              <img
                src={getImageURL(img.listingimg)}
                key={img.listingimg}
                className="card-img-top"
                alt={img.text}
              />
            <div className="card-body ">
              <h5 className="card-title" key={img.text}>
                {img.desc}
              </h5>
              <p className="card-text">
                <s>{img.discprice}</s> {img.currprice}
              </p>
              {/* img.sale is false Button name is View Options */}
              {img.sale ? (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    //Function recevied for increment and decrement
                    {
                      img.isClick ? handleDec() : handleInc();
                      img.isClick = !img.isClick;
                    }
                  }}
                >
                  {img.isClick ? "Remove from Cart" : "Add to Cart"}
                </button>
              ) : (
                <button className="btn btn-outline-dark">{img.btnname}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Listings.propTypes = {
  image: PropTypes.string,
  count: PropTypes.number,
  handleInc: PropTypes.func,
  handleDec: PropTypes.func,
};