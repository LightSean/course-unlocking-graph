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
import {courseNumberToName} from "../utils/TreeBuilder";
const all_courses_data = require('../data/coursesData/allCourses.json');
const active_courses_data = require('../data/coursesData/activeCourses.json');


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

const starter_course_string = 'Please choose faculty';
const empty_course_obj = {courseName: '', courseNumber: '000000'}
const starter_course_obj = {courseName: starter_course_string, courseNumber: '000000'}

export function KdamForm(props) {
    const classes = useStyles();
    const [faculty, setFaculty] = useState('');
    const [all_courses, setAllCourses] = useState(false);
    const [course_list, setCourseList] = useState([starter_course_obj, empty_course_obj])
    const [courseObj, setCourseObj] = useState(starter_course_obj);
    const [faculty_required, setFacultyRequired] = useState(false);
    const [course_required, setCourseRequired] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const courses_data = all_courses ? all_courses_data : active_courses_data;
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
                    // res.push(starter_course_obj);
                    res.push(empty_course_obj);
                    setCourseList(res);
                    break;
                }
            }
        }
    }, [faculty, all_courses]);

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
        history.push(`${process.env.PUBLIC_URL}/tree?num=${courseObj.courseNumber}&allcourses=${all_courses}`)
    }

    const changedFacultyOption = (e) => {
        setFaculty(e.target.value);
        setCourseObj(empty_course_obj);
    }

    const changedTypeOfCourses = (e) => {
        const exists = courseNumberToName(courseObj.courseNumber, !all_courses);
        if(!exists){
            setCourseObj(empty_course_obj);
        }
        setAllCourses(e.target.value)
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
                                    onChange={changedFacultyOption}
                                >
                                    <MenuItem value={'cs'}>מדעי המחשב</MenuItem>
                                    <MenuItem value={'industrial'}>תעשייה וניהול</MenuItem>
                                    <MenuItem value={'electric'}>הנדסת חשמל</MenuItem>
                                    <MenuItem value={'math'}>מתמטיקה</MenuItem>
                                    <MenuItem value={'physics'}>פיזיקה</MenuItem>
                                    <MenuItem value={'civil'}>הנדסה אזרחית</MenuItem>
                                    <MenuItem value={'chemical_eng'}>הנדסה כימית</MenuItem>
                                    <MenuItem value={'aviro'}>אווירונאוטיקה וחלל</MenuItem>
                                    <MenuItem value={'mechanical'}>הנדסת מכונות</MenuItem>
                                    <MenuItem value={'chemistry'}>כימיה</MenuItem>
                                    <MenuItem value={'materials'}>הנדסת חומרים</MenuItem>
                                    <MenuItem value={'bio_and_food_eng'}>הנדסת ביוטכנולוגיה ומזון</MenuItem>
                                    <MenuItem value={'bio_med'}>הנדסה ביו-רפואית</MenuItem>
                                    <MenuItem value={'education'}>חינוך למדע וטכנולוגיה</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Type of courses</InputLabel>
                                <Select
                                    value={all_courses}
                                    onChange={changedTypeOfCourses}
                                >
                                    <MenuItem value={false}>Only active courses</MenuItem>
                                    <MenuItem value={true}>All courses</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl error={course_required} required={course_required} className={classes.formControl}>
                                <Autocomplete
                                    value={courseObj}
                                    fullWidth={true}
                                    autoHighlight={true}
                                    options={course_list}
                                    getOptionLabel={(option) => option.courseName}
                                    onChange={(e, val_obj) => {
                                        if(val_obj){
                                            setCourseObj(val_obj);
                                        }else{
                                            if(faculty){
                                                setCourseObj(empty_course_obj)
                                            }else{
                                                setCourseObj(starter_course_obj)
                                            }
                                        }
                                    }}
                                    getOptionSelected={((option, value) => option.courseName === value.courseName)}
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