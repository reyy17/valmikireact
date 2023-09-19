import React from "react";
import Slider from "react-slick";
import "./topCategories.css";
import CategoryCard from "./categoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopCategories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        &lt;
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-next-arrow`} onClick={onClick}>
        &gt;
      </div>
    );
  }

  return (
    <div className="topCategories">
      <h2 className="categoryHeading">Top Categories</h2>
      <div className="categories-carousel">
        <Slider {...settings}>
        <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg"
            }
            title={"Design"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg"
            }
            title={"Development"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg"
            }
            title={"Marketing"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg"
            }
            title={"IT and Software"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg"
            }
            title={"Personal Development"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg"
            }
            title={"Business"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg"
            }
            title={"Photography"}
          />
          <CategoryCard
            imgSrc={
              "https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg"
            }
            title={"Music"}
          />


        </Slider>
      </div>
    </div>
  );
}

export default TopCategories;
