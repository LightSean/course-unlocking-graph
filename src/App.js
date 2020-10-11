import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MyAppBar} from "./components/MyAppBar";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import {Header} from "./components/Header";
import {KdamForm} from "./components/KdamForm";
import {CourseTree} from "./components/CourseTree";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Footer from "./components/Footer";
function App() {
    const [dark_mode, setDarkMode] = useState(localStorage.getItem('dark_mode') ? localStorage.getItem('dark_mode')  === 'true' : false);
    const dark_theme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: '#bf4040'
            },
            secondary: {
                main: '#ff8080',
                light: '#ff8080',
                dark: '#ff8080'
            }
        },
    });
    const light_theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#ff8080',
                light: '#ff8080',
                dark: '#ff8080'
            },
            primary: {
                main: '#554B8E'

            }
        }
    });
    const toggleTheme = () => {
        localStorage.setItem('dark_mode', (!dark_mode).toString());
        setDarkMode(!dark_mode)
    }

    return (
        <Router>
            <ThemeProvider theme={dark_mode? dark_theme : light_theme}>
                    <CssBaseline />
                    <MyAppBar dark_mode={dark_mode} toggleTheme={toggleTheme}/>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                    >
                        <Route path={`${process.env.PUBLIC_URL}/tree`}>
                            <CourseTree/>
                        </Route>
                        <Route path={`${process.env.PUBLIC_URL}/`}>
                            <Header/>
                            <KdamForm/>
                        </Route>
                    </AnimatedSwitch>
                    <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default App;
