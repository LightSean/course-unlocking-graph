import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import DarkModeToggle from "react-dark-mode-toggle";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    mode_switch: {
        display: 'flex',
        alignItems: 'center',
        flexGrow:1
    },
    nuu: {
        display: 'flex',
        flex:1,
        border: 'solid'
    },
    headline: {
        justifySelf: 'center'
    },
    github_icon:{
        // marginRight: theme.spacing(2),
    },
    home_icon:{
        marginRight: theme.spacing(2),
    }
}));


export function MyAppBar(props) {
    const classes = useStyles();
    const history = useHistory();

    const gotoHomeClicked = () => {
        const regex = new RegExp(`${process.env.PUBLIC_URL.substring(1)}\\/\\w+`);
        let m = regex.exec(window.location);
        if(!m){
            return;
        }
        history.push(history.push(`${process.env.PUBLIC_URL}/`))
    }


    const gotoGithubClicked = () => {
        window.open('https://github.com/LightSean/course-unlocking-graph', "_blank")
    }

    const gotoGithubMiddleMouse = (e) => {
        if(e.button === 1){
            gotoGithubClicked();
        }
    }

    return(
        <AppBar color={'primary'} position={'sticky'}>
            <Toolbar>
                    <div className={classes.mode_switch}>
                        <DarkModeToggle
                            onChange={props.toggleTheme}
                            checked={props.dark_mode}
                            size={55}
                            className={classes.icon}
                        />
                    </div>
                <Tooltip title={'Navigate to home page'}>
                    <IconButton className={classes.home_icon} onClick={gotoHomeClicked}  color={'inherit'}>
                        <HomeIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Navigate to github code'}>
                    <IconButton className={classes.github_icon} color={'inherit'} onClick={gotoGithubClicked} onMouseDown={gotoGithubMiddleMouse}>
                        <GitHubIcon/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}