import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import {Toolbar} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));


export function MyAppBar(props) {
    const classes = useStyles();
    return(
        <AppBar color={'primary'} position={'sticky'}>
            <Toolbar>
                <AccountTreeIcon className={classes.icon}/>
                <Switch
                    checked={props.dark_mode}
                    onChange={props.toggleTheme}
                    color="secondary"
                />
                <Typography variant="h6" color="inherit" noWrap>
                    Toggle dark / light mode
                </Typography>
            </Toolbar>
        </AppBar>
    )
}