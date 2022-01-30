import React from "react";
import { useEffect } from "react";

//mui components
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

//mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

//styling
import { commonWidthMainMenu, commonSpacingTop } from "../../assets/css/sizingcss";
import { commonBorderColor, commonStyles } from "../../assets/css/menucss";

function Menu() {
    const [start, setStart] = React.useState(false);

    useEffect(() => {
        let timer1 = setTimeout(() => setStart(true), 1);

        // this will clear Timeout when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            clearTimeout(timer1);
        };
    }, []);
    return (
        <div>
            <Slide direction="left" in={start} mountOnEnter unmountOnExit {...(start ? { timeout: 2000 } : {})}>
                <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                    <Grid
                        item
                        sx={{
                            ...commonWidthMainMenu,
                            ...commonSpacingTop,
                        }}
                    ></Grid>
                    <Grid item sx={commonWidthMainMenu}>
                        <List>
                            <div>
                                <Button
                                    component="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://rosdyanakusuma.wordpress.com/"
                                    sx={{
                                        ...commonWidthMainMenu,
                                        ...commonSpacingTop,
                                        ...commonStyles,
                                        ...commonBorderColor,
                                    }}
                                    size="large"
                                    startIcon={<WebIcon />}
                                >
                                    Blog
                                </Button>
                            </div>
                            <div>
                                <Button
                                    component="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/rosdyanakusuma/"
                                    sx={{
                                        ...commonWidthMainMenu,
                                        ...commonSpacingTop,
                                        ...commonStyles,
                                        ...commonBorderColor,
                                    }}
                                    size="large"
                                    startIcon={<GitHubIcon />}
                                >
                                    LinkedIn
                                </Button>
                            </div>
                            <div>
                                <Button
                                    component="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://twitter.com/rosdyana_kusuma"
                                    sx={{
                                        ...commonWidthMainMenu,
                                        ...commonSpacingTop,
                                        ...commonStyles,
                                        ...commonBorderColor,
                                    }}
                                    size="large"
                                    startIcon={<TwitterIcon />}
                                >
                                    Twitter
                                </Button>
                            </div>
                            <div>
                                <Button
                                    component="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/file/d/16UhJjslT6rZ3h7UL1pZNxtwy-t_Zfak4/view?usp=sharing"
                                    sx={{
                                        ...commonWidthMainMenu,
                                        ...commonSpacingTop,
                                        ...commonStyles,
                                        ...commonBorderColor,
                                    }}
                                    size="large"
                                    startIcon={<ContactPageIcon />}
                                >
                                    Resume
                                </Button>
                            </div>
                            <div>
                                <Button
                                    component="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://github.com/rosdyana"
                                    sx={{
                                        ...commonWidthMainMenu,
                                        ...commonSpacingTop,
                                        ...commonStyles,
                                        ...commonBorderColor,
                                    }}
                                    size="large"
                                    startIcon={<GitHubIcon />}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </List>
                    </Grid>
                </Grid>
            </Slide>
        </div>
    );
}

export default Menu;
