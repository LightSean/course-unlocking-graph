import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
const courses_data = require('../data/coursesData/courseData.json')


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4, 0, 3),
    },
    headlines: {
        paddingTop: theme.spacing(1)
    },
    formControl: {
        marginBottom: theme.spacing(1),
        minWidth: 250,
    },
    button:{
        marginBottom: theme.spacing(1)
    }
}));


export function KdamForm(props) {
    const starter_course = 'Please choose faculty';
    const classes = useStyles();
    const [faculty, setFaculty] = useState('');
    // const [type_of_search, setTypeOfSearch] = useState('');
    const [course_list, setCourseList] = useState([{courseName:starter_course, courseNumber:'000000'}])
    const [courseObj, setCourseObj] = useState({courseName:starter_course, courseNumber:'000000'});
    const [faculty_required, setFacultyRequired] = useState(false);
    const [course_required, setCourseRequired] = useState(false);
    const history = useHistory();
    useEffect(() => {
        let faculty_from_list = {};
        if(faculty !== ''){
            let i;
            for (i = 0; i < courses_data.length; i++){
                faculty_from_list = courses_data[i].faculty;
                if(faculty_from_list.name === faculty && faculty_from_list.courses){
                    let res = faculty_from_list.courses.map((course) => {
                        return {
                            courseName: `${course.courseName} ${course.courseNumber}`,
                            courseNumber: course.courseNumber
                        }
                    })
                    setCourseList(res);
                    break;
                }
            }
        }
    }, [faculty]);

    const searchClicked = () => {
        let ok = true;
        if(faculty === ''){
            setFacultyRequired(true);
            ok = false;
        }
        if(courseObj.courseNumber === '000000'){
            setCourseRequired(true)
            alert('Please choose course and then click search!');
            ok = false;
        }
        if(!ok){
            return;
        }
        history.push(`/tree?num=${courseObj.courseNumber}`)
    }

    return(
        <div className={classes.container}>
            <Container maxWidth={'sm'}>
                <Paper elevation={3} >
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" className={classes.headlines} gutterBottom>
                        Let's get started
                    </Typography>
                    <Grid container alignItems={'center'} direction={'column'}>
                        <Grid item>
                            <FormControl error={faculty_required} required={faculty_required} className={classes.formControl}>
                                <InputLabel>Faculty</InputLabel>
                                <Select
                                    value={faculty}
                                    onChange={(e) => setFaculty(e.target.value)}
                                >
                                    <MenuItem value={'cs'}>מדעי המחשב</MenuItem>
                                    <MenuItem value={'industrial'}>תעשייה וניהול</MenuItem>
                                    <MenuItem value={'electric'}>הנדסת חשמל</MenuItem>
                                    <MenuItem value={'math'}>מתמטיקה</MenuItem>
                                    <MenuItem value={'physics'}>פיזיקה</MenuItem>
                                    <MenuItem value={'civil'}>הנדסה אזרחית</MenuItem>
                                    <MenuItem value={'farming_eng'}>הנדסה חקלאית</MenuItem>
                                    <MenuItem value={'chemical_eng'}>הנדסת חומרים</MenuItem>
                                    <MenuItem value={'aviro'}>אווירונאוטיקה וחלל</MenuItem>
                                    <MenuItem value={'mechanical'}>הנדסת מכונות</MenuItem>
                                    <MenuItem value={'chemistry'}>כימיה</MenuItem>
                                    <MenuItem value={'materials'}>הנדסת חומרים</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {/*<Grid item>*/}
                        {/*    <FormControl className={classes.formControl}>*/}
                        {/*        <InputLabel>Type of search</InputLabel>*/}
                        {/*        <Select*/}
                        {/*            value={type_of_search}*/}
                        {/*            onChange={(e) => setTypeOfSearch(e.target.value)}*/}
                        {/*        >*/}
                        {/*            <MenuItem value={1}>What courses im unlocking</MenuItem>*/}
                        {/*            <MenuItem value={2}>What courses need for this course</MenuItem>*/}
                        {/*        </Select>*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}
                        <Grid item>
                            <FormControl error={course_required} required={course_required} className={classes.formControl}>
                                <Autocomplete
                                    fullWidth={true}
                                    autoHighlight={true}
                                    options={course_list}
                                    getOptionLabel={(option) => option.courseName}
                                    onChange={(e, val_obj) => {
                                        if(val_obj){
                                            setCourseObj(val_obj);
                                        }else{
                                            setCourseObj({courseName:starter_course, courseNumber:'000000'})
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params} label={'Course'} margin="normal"/>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item className={classes.button}>
                            <Button onClick={searchClicked} variant="contained" color="primary">
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}