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
import {kdam_url} from "../utils/Resources";

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
    const [faculty, setFaculty] = useState(localStorage.getItem('faculty') ? localStorage.getItem('faculty') : '');
    const [all_courses, setAllCourses] = useState(localStorage.getItem('courses_type') ? localStorage.getItem('courses_type') : false);
    const [course_list, setCourseList] = useState([starter_course_obj, empty_course_obj])
    const [courseObj, setCourseObj] = useState(localStorage.getItem('course') ? JSON.parse(localStorage.getItem('course')) : starter_course_obj);
    const [faculty_required, setFacultyRequired] = useState(false);
    const [course_required, setCourseRequired] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const fetchWithLoading = async (arg) => {
        await setLoading(true);
        let res = await fetch(arg);
        let formatted = await res.json();
        await setLoading(false);
        return formatted;
    }

    useEffect(() => {
        const onEffect = async () => {
            if(faculty !== ''){
                let res = await fetchWithLoading(`${kdam_url}/all_courses_for_faculty?faculty=${faculty}&is_all_courses=${all_courses}`);
                // formatted.push(empty_course_obj); may do it here and not in the backend later
                setCourseList(res);
            }
        }
        onEffect();
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
        localStorage.removeItem('course');
        localStorage.setItem('faculty', e.target.value);
    }

    const changedTypeOfCoursesFunction = async (e) => {
        setAllCourses(e.target.value);
        localStorage.setItem('courses_type', e.target.value);
        let formatted = await fetchWithLoading(`${kdam_url}/course_exists?number=${courseObj.courseNumber}&is_all_courses=${!all_courses}`);
        if(!formatted.exists){
            setCourseObj(empty_course_obj);
        }
    }

    const changedTypeOfCourses = (e) => {
        changedTypeOfCoursesFunction(e);
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
                            <FormControl disabled={loading} error={faculty_required} required={faculty_required} className={classes.formControl}>
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
                                    <MenuItem value={'architecture'}>ארכיטקטורה ובינוי ערים</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl disabled={loading} className={classes.formControl}>
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
                                    disabled={loading}
                                    value={courseObj}
                                    fullWidth={true}
                                    autoHighlight={true}
                                    options={course_list}
                                    getOptionLabel={(option) => option.courseName}
                                    onChange={(e, val_obj) => {
                                        if(val_obj){
                                            localStorage.setItem('course', JSON.stringify(val_obj));
                                            setCourseObj(val_obj);
                                        }else{
                                            if(faculty){
                                                localStorage.setItem('course', JSON.stringify(empty_course_obj));
                                                setCourseObj(empty_course_obj)
                                            }else{
                                                localStorage.setItem('course', JSON.stringify(starter_course_obj));
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