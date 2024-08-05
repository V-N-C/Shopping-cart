import car1 from "./images/car1.jpg";
import car2 from "./images/car2.jpg";
import car3 from "./images/car3.jpg";
export default function Carousel() {
  return (
    <>
      <div className="pt-5 mt-5">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={car1} className="d-block w-100" alt="Summer Offer" />
            </div>
            <div className="carousel-item">
              <img
                src={car2}
                className="d-block w-100"
                alt="upcoming powerpacked"
              />
            </div>
            <div className="carousel-item">
              <img
                src={car3}
                className="d-block w-100"
                alt="upcoming loafers"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}