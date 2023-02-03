import React from "react";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import { Carousel } from "react-responsive-carousel";

import "./styles.css";

const SpinspaLandingPage = () => {
  return (
    <LandingPageLayout>
      <Carousel
        renderArrowNext={(clickHandler) => (
          <img
            src="images/arrow_next.png"
            alt="Arrow Next"
            className="arrows arrow_next"
            onClick={clickHandler}
          />
        )}
        renderArrowPrev={(clickHandler) => (
          <img
            src="images/arrow_prev.png"
            alt="Arrow Prev"
            className="arrows arrow_prev"
            onClick={clickHandler}
          />
        )}
        showThumbs={false}
        showStatus={false}
        autoPlay
        showArrows
        infiniteLoop
      >
        <div className="carouselItem">
          <img src="images/hero.png" alt="Hero" className="carouselImgItem" />
          <div className="carouselDescItem">
            <h4 className="heroTitle">Welcome to Beauty Spa</h4>
            <p className="heroDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non
              pretium dui arcu varius neque
            </p>
            <button className="heroBookNowBtn">Book Now</button>
          </div>
        </div>

        <div className="carouselItem">
          <img src="images/hero.png" alt="Hero" className="carouselImgItem" />
          <div className="carouselDescItem">
            <h4 className="heroTitle">Welcome to Beauty Spa</h4>
            <p className="heroDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non
              pretium dui arcu varius neque
            </p>
            <button className="heroBookNowBtn">Book Now</button>
          </div>
        </div>

        <div className="carouselItem">
          <img src="images/hero.png" alt="Hero" className="carouselImgItem" />
          <div className="carouselDescItem">
            <h4 className="heroTitle">Welcome to Beauty Spa</h4>
            <p className="heroDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non
              pretium dui arcu varius neque
            </p>
            <button className="heroBookNowBtn">Book Now</button>
          </div>
        </div>
      </Carousel>
      <div className="aboutUsSection">
        <img src="images/about_us.png" alt="About Us" className="aboutUsImg" />
        <div className="aboutUsDescContainer">
          <h4 className="aboutUs">About Us</h4>
          <p className="aboutUsSubTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas, lorem ut suscipit facilisis, nisi neque{" "}
          </p>
          <div className="aboutUsDescWrapper">
            <p className="aboutUsDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non
              pretium dui arcu varius neque. Proin nec tortor a velit varius
              luctus sed ut mauris. Nulla eget ornare nibh. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Aenean blandit erat magna, sit amet accumsan nisl
              condimentum ac.
            </p>
          </div>
          <button className="bookNowBtn">Book Now</button>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default SpinspaLandingPage;
