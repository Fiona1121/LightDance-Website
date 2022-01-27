import * as React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import ParticleText from "../components/particle-text";
import Gallery from "../components/gallery";

import "./index.css";
import Slider from "../components/slider";
import Info from "../components/info";

const playgroundStyle = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    display: "block",
    top: 0,
    left: 0,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
};

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulSite {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `).allContentfulSite.edges[0].node;
    const sliderRef = React.useRef(null);
    const introRef = React.useRef(null);
    const handleEnter = () => sliderRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <main>
            <title>Home Page</title>
            <div className="header">
                <ParticleText text={data.title.replace(" ", "\n")} />
                <div className="playground" style={playgroundStyle}>
                    <div id="enter" className="enter-button" onClick={handleEnter}>
                        Enter
                    </div>
                </div>
            </div>
            <div id="slider" ref={sliderRef}>
                <Slider intreRef={introRef}></Slider>
            </div>
            <div className="section" id="intro" ref={introRef}>
                <Gallery />
            </div>
            <div className="section info" id="info">
                <Info />
            </div>
        </main>
    );
};

export default IndexPage;
