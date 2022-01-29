import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Navigation from "./Navigation";

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
                        <Navigation siteTitle={data.site.siteMetadata.title} />
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
