import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "./Arrows.scss";
import "./Carousel.scss";
import "./CarouselDots.scss";
import "./CarouselItem.scss";

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isDown: false,
    };
    // const carousel = document.getElementsByClassName(
    //   "BrainhubCarousel__track"
    // )[0];
  }

  toggleClass() {
    const carousel = document.getElementsByClassName(
      "BrainhubCarousel__track"
    )[0];
    // carousel.style.transitionDuration = "0ms";
    this.setState((prevState) => ({ isDown: !prevState.isDown }));
    // this.carousel.style.transitionDuration = "0ms";
    if (this.state.isDown == true && window.screen.width < 640) {
      carousel.style.transitionDuration = "500ms,500ms";
    } else if (this.state.isDown == false || this.state.isDown == true) {
      carousel.style.transitionDuration = "0ms";
    }
    // console.log(document.getElementsByClassName("BrainhubCarousel__track"));
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=5e281cdff124a44e9179b1d9d2116c49&page=1"
    )
      .then((res) => res.json())
      .then(
        (json) => {
          this.setState({
            isLoaded: true,
            items: json,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row">
          <Carousel
            className={this.state.isDown ? "btnDown" : "btnUp"}
            plugins={[
              "arrows",
              // "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  "arrows",
                  "clickToChange",
                  // "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  "arrows",
                  "clickToChange",
                  // "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
            }}
          >
            {Object.values(items.results).map((item) =>
              item.title != null && item.backdrop_path != null ? (
                <a
                  onMouseDown={(e) => this.toggleClass(e)}
                  onMouseUp={(e) => this.toggleClass(e)}
                  key={item.id}
                  href="#"
                  className="mdCarousel__container"
                >
                  <div className="mdCarousel__text">
                    <h2 className="heading-secondry">{item.title}</h2>
                  </div>
                  <img
                    className="carousel-image"
                    key={item.id}
                    alt="sd"
                    src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                  />
                </a>
              ) : null
            )}
          </Carousel>
        </div>
      );
    }
  }
}

export default MyCarousel;
