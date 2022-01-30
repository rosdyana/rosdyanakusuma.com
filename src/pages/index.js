import React from "react";
import PropTypes from "prop-types";

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
