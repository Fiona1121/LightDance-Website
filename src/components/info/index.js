import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
    const data = useStaticQuery(graphql`
        query InfoQuery {
            allContentfulSite {
                edges {
                    node {
                        links
                    }
                }
            }
        }
    `).allContentfulSite.edges[0].node.links;
    return (
        <div className="vertical-center">
            <div className="title">Contact Us!</div>
            <div className="wrapper">
                <div className="icon-container">
                    <div className="icon email">
                        <div className="tooltip">Email</div>
                        <button
                            onClick={() => {
                                window.open(`mailto:${data.filter((link) => link.includes("gmail"))[0]}`);
                            }}
                        >
                            <FontAwesomeIcon className="fab fa-envelope" icon={faEnvelope}></FontAwesomeIcon>
                        </button>
                    </div>

                    <div className="icon github">
                        <div className="tooltip">Github</div>
                        <a href={data.filter((link) => link.includes("github"))[0]}>
                            <FontAwesomeIcon className="fab fa-github" icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="icon youtube">
                        <div className="tooltip">Youtube</div>
                        <a href={data.filter((link) => link.includes("youtube"))[0]}>
                            <FontAwesomeIcon className="fab fa-youtube" icon={faYoutube}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
