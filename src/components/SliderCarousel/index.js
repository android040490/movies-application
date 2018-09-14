import React, {Component} from 'react';
import Slider from "react-slick";
import {Link, withRouter} from  "react-router";
import MediaQuery from 'react-responsive';

class SliderCarousel extends Component {

    renderSlider(settings, category){
      return(
        <Slider {...settings}>
            {this.props.movies.map( item => {
                return(
                  <Link to={`/movie?category=${category}&movieId=${item.id}`} className="carousel__item" key={item.id}>
                    <div className="carousel__item-img"><img src={`https://image.tmdb.org/t/p/w250_and_h141_face${item.backdrop_path}`} alt=""/></div>
                    <h3 className="carousel__item-title">{item.title}</h3>
                  </Link>
                ) 
              })
            }
        </Slider>
      )
    }

    render() {
      let { category } = this.props.location.query
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
          <MediaQuery maxWidth={599}>
             {this.renderSlider({...settings, slidesToShow : 1, slidesToScroll : 1 , dots: false}, category)}
          </MediaQuery>
          <MediaQuery minWidth={600} maxWidth={999}>
             {this.renderSlider({...settings, slidesToShow : 2, slidesToScroll : 2, dots: false}, category)}
          </MediaQuery>
          <MediaQuery minWidth={1000}>
             {this.renderSlider({...settings}, category)}
          </MediaQuery>
        </div>
      );
    }
  }

  export default withRouter(SliderCarousel);