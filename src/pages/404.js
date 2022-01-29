import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
    color: "white",
    padding: "3rem",
    paddingTop: "5rem",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: "1rem",
    maxWidth: 360,
    fontWeight: 500,
};

const paragraphStyles = {
    marginBottom: 48,
    fontWeight: 500,
};

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <title>404 Not found</title>
            <h1 style={headingStyles}>Page not found!</h1>
            <p style={paragraphStyles}>
                <Link to="/" style={{ color: "white" }}>
                    Go home
                </Link>
                .
            </p>
        </main>
    );
};

export default NotFoundPage;
