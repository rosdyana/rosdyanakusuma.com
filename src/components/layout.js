import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { blue } from "@mui/material/colors";

// import Navigation from "./Navigation";

const Layout = (props) => {
    const { children } = props;

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={(data) => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: "description", content: "Rosdyana Kusuma" },
                            { name: "keywords", content: "sample, something" },
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <Container maxWidth="md" display="flex" flexDirection="column">
                        <AppBar position="static">
                            <Toolbar>
                                <Avatar sx={{ bgcolor: blue[200] }}>RK</Avatar>
                            </Toolbar>
                        </AppBar>
                        <Box component="main">{children}</Box>
                    </Container>
                </>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
