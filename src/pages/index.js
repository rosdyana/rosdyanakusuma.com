import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

//mui components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//components
import Header from "../components/common/Header";
import Menu from "../components/common/Menu";

//styling
import theme from "../assets/css/theme";

const IndexPage = () => {
    return (
        <div className="App">
            <Helmet
                title="Rosdyana Kusuma"
                meta={[
                    { name: "description", content: "Rosdyana Kusuma" },
                    { name: "keywords", content: "rosdyana, rosdyana kusuma, linkedin, twitter, github, resume" },
                ]}
            >
                <html lang="en" />
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header />

                <Menu />
            </ThemeProvider>
        </div>
    );
};

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default IndexPage;
