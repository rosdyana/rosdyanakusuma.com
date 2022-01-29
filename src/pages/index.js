import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px",
    },
}));

const onClickBtn = (title) => {
    switch (title) {
        case "LinkedIn":
            window.open("https://www.linkedin.com/in/rosdyanakusuma/", "_blank");
            break;
        case "Twitter":
            window.open("https://twitter.com/rosdyana_kusuma", "_blank");
            break;
        case "GitHub":
            window.open("http://github.com/rosdyana", "_blank");
            break;
        case "Resume":
            window.open("https://drive.google.com/file/d/16UhJjslT6rZ3h7UL1pZNxtwy-t_Zfak4/view?usp=sharing", "_blank");
            break;
        case "Blog":
            window.open("https://rosdyanakusuma.wordpress.com/", "_blank");
            break;
        default:
            break;
    }
};

const IndexPage = (props) => {
    const classes = useStyles();

    return (
        <Layout>
            <Paper className={classes.root}>
                <Grid className={classes.paper} container alignItems="center" direction="row">
                    <Grid item container direction="column" justify="center" alignItems="center" xs={12}>
                        <Box sx={{ "& button": { m: 1 } }}>
                            <div>
                                <Button
                                    onClick={() => {
                                        onClickBtn("Blog");
                                    }}
                                    sx={{ minWidth: "100%" }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<WebIcon />}
                                >
                                    Blog
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        onClickBtn("LinkedIn");
                                    }}
                                    sx={{ minWidth: "100%" }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<LinkedInIcon />}
                                >
                                    LinkedIn
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        onClickBtn("Twitter");
                                    }}
                                    sx={{ minWidth: "100%" }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<TwitterIcon />}
                                >
                                    Twitter
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        onClickBtn("Resume");
                                    }}
                                    sx={{ minWidth: "100%" }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<ContactPageIcon />}
                                >
                                    Resume
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        onClickBtn("GitHub");
                                    }}
                                    sx={{ minWidth: "100%" }}
                                    variant="outlined"
                                    size="large"
                                    startIcon={<GitHubIcon />}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </Box>
                        <br></br>
                        <div>
                            <Typography variant="subtitle1">© Rosdyana Kusuma 2022</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>
    );
};

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default IndexPage;
