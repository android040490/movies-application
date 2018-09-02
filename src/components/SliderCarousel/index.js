import React, {Component} from 'react';
import Slider from "react-slick";
import {Link} from  "react-router";

export default class SliderCarousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        cssEase: "linear"
      };
      return (
        <div className="carousel">
          <Slider {...settings}>
            {this.props.movies.map( item => {
                return(
                  <Link to={`/film/${item.id}`} className="carousel__item" key={item.id}>
                    <div className="carousel__item-img"><img src={`https://image.tmdb.org/t/p/w250_and_h141_face${item.backdrop_path}`} alt=""/></div>
                    <h3 className="carousel__item-title">{item.title}</h3>
                  </Link>
                ) 
              })
            }
          </Slider>
        </div>
      );
    }
  }