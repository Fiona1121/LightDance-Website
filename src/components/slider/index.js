import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import "./index.scss";

const Slider = ({ introRef }) => {
    const [maxSlide, setMaxSlide] = useState(0);
    const [showArrows, setShowArrows] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const data = useStaticQuery(graphql`
        query SliderQuery {
            allContentfulSite {
                edges {
                    node {
                        slider {
                            backgroundImg {
                                file {
                                    url
                                }
                            }
                            caption
                            discription
                            sectionLink
                        }
                    }
                }
            }
        }
    `).allContentfulSite.edges[0].node.slider;

    const nextSlide = () => {
        goToSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        goToSlide(currentSlide - 1);
    };

    const goToSlide = (index) => {
        setCurrentSlide((index + maxSlide) % maxSlide);
    };

    useEffect(() => {
        setMaxSlide(data.length);
        setShowArrows(data.length > 1 ? true : false);
    }, []);
    return (
        <div className="slider-wrapper is-loaded is-animate">
            <section className="slideshow" id="js-header">
                {data.map((slide, index) => (
                    <div
                        className={`slideshow__slide js-slider-home-slide ${
                            index == currentSlide ? "is-current" : ""
                        } ${index === (currentSlide - 1 + maxSlide) % maxSlide ? "is-prev" : ""} ${
                            index === (currentSlide + 1) % maxSlide ? "is-next" : ""
                        }`}
                        data-slide={(index + 1).toString()}
                    >
                        <div
                            className="slideshow__slide-background-parallax background-absolute js-parallax"
                            data-speed="-1"
                            data-position="top"
                            data-target="#js-header"
                        >
                            <div className="slideshow__slide-background-load-wrap background-absolute">
                                <div className="slideshow__slide-background-load background-absolute">
                                    <div className="slideshow__slide-background-wrap background-absolute">
                                        <div className="slideshow__slide-background background-absolute">
                                            <div className="slideshow__slide-image-wrap background-absolute">
                                                <div
                                                    className="slideshow__slide-image background-absolute"
                                                    style={{
                                                        backgroundImage: `url(${
                                                            "https:" + slide.backgroundImg.file.url
                                                        })`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slideshow__slide-caption">
                            <div className="slideshow__slide-caption-text">
                                <div
                                    className="container js-parallax"
                                    data-speed="2"
                                    data-position="top"
                                    data-target="#js-header"
                                >
                                    <h1 className="slideshow__slide-caption-title">{slide.caption}</h1>
                                    <p className="slideshow__slide-discription">{slide.discription}</p>
                                    <a
                                        className="slideshow__slide-caption-subtitle -load o-hsub -link"
                                        href={slide.sectionLink}
                                    >
                                        <p className="slideshow__slide-caption-subtitle-label" key={index}>
                                            See More
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="c-header-home_footer">
                    <div className="o-container">
                        <div className="c-header-home_controls -nomobile o-button-group">
                            <div
                                className="js-parallax is-inview"
                                data-speed="1"
                                data-position="top"
                                data-target="#js-header"
                            >
                                <button
                                    className="o-button -white -square -left js-slider-home-button js-slider-home-prev"
                                    type="button"
                                    onClick={() => prevSlide()}
                                >
                                    <span className="o-button_label">
                                        <svg className="o-button_icon" role="img">
                                            <use
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="#arrow-prev"
                                            ></use>
                                        </svg>
                                    </span>
                                </button>
                                <button
                                    className="o-button -white -square js-slider-home-button js-slider-home-next"
                                    type="button"
                                    onClick={() => nextSlide()}
                                >
                                    <span className="o-button_label">
                                        <svg className="o-button_icon" role="img">
                                            <use
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="#arrow-next"
                                            ></use>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <div className="container">
                        {data.map((slide, index) => (
                            <span
                                className={`pagination__item js-pagination-item ${
                                    index === currentSlide ? "is-current" : ""
                                } data-slide=${index + 1}`}
                                onClick={() => {
                                    if (!isAnimating) {
                                        // preventClick();
                                        goToSlide(index);
                                    }
                                }}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol viewBox="0 0 18 18" id="arrow-next">
                    <path
                        id="arrow-next-arrow.svg"
                        d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"
                    />
                </symbol>
                <symbol viewBox="0 0 18 18" id="arrow-prev">
                    <path
                        id="arrow-prev-arrow.svg"
                        d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"
                    />
                </symbol>
            </svg>
        </div>
    );
};

export default Slider;
