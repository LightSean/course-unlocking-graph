import React, {useEffect, useRef, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Tree from 'react-d3-tree';
import {Button, Container, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {calculateTree, courseNameToNumber, reverseFireFox, courseNumberToName} from "../utils/TreeBuilder";
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import Tooltip from '@material-ui/core/Tooltip';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import screenfull from "screenfull";
import {useHistory} from 'react-router-dom'
import queryString from 'query-string'


// wow
const mobileAndTabletCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 3),
    },
    tree:{
        marginTop: theme.spacing(3)
    },
    tree_container: {
        minHeight: 500,
    },
    but: {
        maxHeight: 40
    },
    main_container: {

    },
    control_panel: {
        marginBottom: theme.spacing(4)
    },
    zoom: {
        paddingTop: 7,
    },
    low_button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

export function CourseTree(props) {
    const is_cell = mobileAndTabletCheck()
    const is_fullscreen_enabled = screenfull.isEnabled;
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const [dimensions, setDimensions] = useState({
        x: 30,
        y: 30
    })
    const [tree_data, setTreeData] = useState({})
    const [current_course, setCurrentCourse] = useState('');
    const [current_course_url, setCurrentCourseUrl] = useState('');
    const [zoom, setZoom] = useState(0.8)
    const tree_container_ref = useRef(null);
    const main_container_ref = useRef(null);

    const toggleFullScreen = async () => {
        try{
            if(main_container_ref && main_container_ref.current){
                await screenfull.toggle(main_container_ref.current);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    const nodeClicked = (nodeData, evt) => {
        const course_number = courseNameToNumber(nodeData.name);
        const url = `https://ug3.technion.ac.il/rishum/course/${course_number}`;
        setCurrentCourse(reverseFireFox(nodeData.name));
        setCurrentCourseUrl(url);
    }
    const newSearchClicked = () => {
        history.push(`${process.env.PUBLIC_URL}/`);
    }
    const gotoCourseClicked = () => {
        window.open(current_course_url, "_blank")
    }
    const centerTree = async () => {
        if(tree_container_ref.current){
            const dimensions = tree_container_ref.current.getBoundingClientRect();
            let width  = dimensions.width / 2;
            // Trick so it will work even if the component width was not changed!
            await setDimensions({
                x: 30,
                y: 30
            })
            setDimensions({
                x: width,
                y: 30
            })
        }
    }
    const zoomOut = () => {
        let old_zoom = zoom
        if(old_zoom < 0.3){
            setZoom(0)
        }else{
            setZoom(old_zoom - 0.3)
        }
    }
    const zoomIn = () => {
        setZoom(zoom + 0.3)
    }
    function disableScroll() {
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }
    function enableScroll() {
        window.onscroll=function(){};
    }

    useEffect( () => {
        centerTree();
        const parsed = queryString.parse(window.location.search)
        if(!parsed || !parsed.num){
            alert('problem with getting course number. please choose course again');
            history.push(`${process.env.PUBLIC_URL}/`);
            return;
        }
        if(!courseNumberToName(parsed.num, parsed.allcourses)){
            alert('problem with finding course based on course number. please choose course again');
            history.push(`${process.env.PUBLIC_URL}/`);
            return;
        }
        if(!parsed.allcourses){
            alert('problem getting type of courses preferences. looking only at active courses by default');
        }
        let res = calculateTree(parsed.num, {}, parsed.allcourses);
        setTreeData(res);
        window.addEventListener('resize', centerTree);
    }, [history]);

    const dark_styles = {
        links: {
            stroke: '#ff8080',
            strokeWidth: 2,
            strokeOpacity: 1 ,
        },
        leafNode: {
            attributes: {
                fill: 'black'
            }
        },
        nodes: {
            node:{
                circle: {
                    fill: '#ff8080',
                    strokeWidth: 1.4,
                    stroke: '#424242'
                },
                name: {
                    fill: '#e0e0eb',
                    strokeWidth: 0,
                }
            },
            leafNode: {
                name: {
                    fill: '#e0e0eb',
                    strokeWidth: 0,
                },
                circle: {
                    fill: '#424242',
                    strokeWidth: 1.4,
                    stroke: '#ff8080'
                },
            }
        },
    }
    const light_main = '#9489C5'
    const light_styles = {
        links: {
            stroke: light_main,
            strokeWidth: 2,
            strokeOpacity: 1 ,
        },
        leafNode: {
            attributes: {
                fill: 'black'
            }
        },
        nodes: {
            node:{
                circle: {
                    fill: light_main,
                    strokeWidth: 1.2,
                    stroke: theme.palette.background.paper
                },
                name: {
                    strokeWidth: 0.5,
                }
            },
            leafNode: {
                name: {
                    strokeWidth: 0.5,
                },
                circle: {
                    fill: theme.palette.background.paper,
                    strokeWidth: 1.4,
                    stroke: light_main
                },
            }
        },
    }

    return(
        <div ref={main_container_ref}>
            <Container maxWidth={'sm'} className={classes.tree}>
                <Paper elevation={3} className={classes.control_panel}>
                    <Grid spacing={0} container>
                        <Grid item xs={12} >
                            <Typography  variant="h5" align="center" color="textPrimary" >
                                Control Pannel
                            </Typography>
                        </Grid>
                        <Grid item container justify={'center'} xs={12} md={12} spacing={0} wrap={"nowrap"}>
                            <Tooltip arrow title="zoom in">
                                <IconButton onClick={zoomIn}> <ZoomInIcon fontSize="large"/></IconButton>
                            </Tooltip>
                            <Tooltip arrow title="re-center tree">
                                <IconButton onClick={centerTree}> <CenterFocusStrongIcon fontSize="large"/> </IconButton>
                            </Tooltip>
                            <Tooltip arrow title="zoom out">
                                <IconButton onClick={zoomOut}> <ZoomOutIcon fontSize="large"/> </IconButton>
                            </Tooltip>
                        </Grid>
                        {is_cell && is_fullscreen_enabled && (
                            <Grid style={{marginBottom : theme.spacing(1)}} item container justify={'center'} xs={12}>
                                <Button onClick={toggleFullScreen} variant="outlined" color="primary">
                                    fullScreen
                                </Button>
                            </Grid>
                        )}
                        <Grid item container justify={'center'} xs={12}>
                            <Button onClick={gotoCourseClicked} variant="text" color="primary">
                                {current_course === '' ? ('Clicking on node tree will give you a link') : (`עבור אל ${current_course}`)}
                            </Button>
                        </Grid>
                        <Grid className={classes.low_button} item container justify={'center'} xs={12}>
                            <Button style={{justifySelf:'center'}} onClick={newSearchClicked} variant="text" color="primary">
                                new search
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Container maxWidth={'xl'}>
                <Paper elevation={3} onTouchStart={disableScroll} onTouchEnd={enableScroll} ref = {tree_container_ref}>
                    <Grid container className={classes.main_container}>
                        <Grid item xs={12} className={classes.tree_container}>
                            <Tree
                                initialDepth={0}
                                styles={theme.palette.type === 'dark'? dark_styles : light_styles}
                                translate={dimensions}
                                data={tree_data}
                                orientation={'vertical'}
                                transitionDuration={0}
                                separation={{siblings: 1.9, nonSiblings: 1.5}}
                                textLayout={{textAnchor: "start", x: 15, y: 0, transform: undefined }}
                                collapsible={true}
                                zoom={zoom}
                                onClick={nodeClicked}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}