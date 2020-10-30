import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import {Container, Divider} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3),
    },
    divider: {
        marginBottom: theme.spacing(2)
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <Container className={classes.footer}>
            <Divider className={classes.divider} />
            <Typography variant="h6" align="center" gutterBottom>
                Up to date with winter 2020-2021
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                This is not an official Technion site. Just a small self student project
            </Typography>
        </Container>
    );
}

export default Footer;












