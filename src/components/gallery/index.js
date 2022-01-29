import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";

const Gallery = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const data = useStaticQuery(graphql`
        query GalleryQuery {
            allContentfulSite {
                edges {
                    node {
                        video {
                            title
                            embedId
                        }
                    }
                }
            }
        }
    `).allContentfulSite.edges[0].node.video;
    return (
        <div className="vertical-center">
            <div className="title">Video Gallery</div>
            <div className="video-gallery">
                <div className="video-container">
                    <iframe
                        key="lightdance-video"
                        title="lightdance-video"
                        width="800"
                        height="500"
                        src={`https://www.youtube.com/embed/${data[currentVideo].embedId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-label">
                    {data.map((video, index) => (
                        <div
                            className={
                                index === currentVideo
                                    ? "video-title video-active btn from-right"
                                    : "video-title btn from-right"
                            }
                            onClick={() => setCurrentVideo(index)}
                        >
                            {video.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
