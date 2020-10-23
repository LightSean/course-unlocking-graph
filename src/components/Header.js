import React, {useEffect} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Container, Link} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 3),
    },
    large: {

    },
    avatar_container: {
        marginBottom: theme.spacing(1),
    },

}));



export function Header(props) {
    const classes = useStyles();
    const theme = useTheme();

    useEffect( () => {
        document.body.style.overflow = null;
    }, []);

    return(
        <div className={classes.container}>
            <Container maxWidth={'md'}>
                <Hidden smDown>
                    <Grid container justify="center" className={classes.avatar_container}>
                        <Grid item>
                            <img alt={'tree_graph_pic'} src={theme.palette.type === 'dark' ? (require(`../data/pics/seanTheMan2.png`)) : (require(`../data/pics/seanTheMan.png`))} className={classes.large}/>
                        </Grid>
                    </Grid>
                </Hidden>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Kdam Tree Graph
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    A little experiment using {<Link underline={'always'} color={'textSecondary'} href={'https://reactjs.org/'}>React.js</Link>} with
                    the {<Link underline={'always'} color={'textSecondary'} href={'https://material-ui.com/'}>Mateial-UI</Link>} framework.<br/> This
                    application answers the question "After i will finish my course, what courses can i take?"
                </Typography>
            </Container>
        </div>
    )
}
