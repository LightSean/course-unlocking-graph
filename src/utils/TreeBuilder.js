import activeCoursesData from "../data/coursesData/activeCourses.json";
import allCoursesData from "../data/coursesData/allCourses.json"

const is_fire_fox = typeof InstallTrigger !== 'undefined';

const faculty_prefix_dict = {
    '01': 'civil',
    '03':'mechanical',
    '04': 'electric',
    '05': 'chemical_eng',
    '06': 'bio_and_food_eng',
    '08': 'aviro',
    '09': 'industrial',
    '10': 'math',
    '19': 'math',
    '11': 'physics',
    '12': 'chemistry',
    '13': 'biology',
    '20': 'architecture',
    '21': 'education',
    '23': 'cs',
    '27': 'md',
    '31': 'materials',
    '32': 'humanities',
    '33': 'bio_med',
}

export const courseNumberToName = (number, all_courses = 'false') => {
    const coursesData = all_courses === 'true' ? allCoursesData : activeCoursesData;
    let prefix = number.substring(0, 2);
    let target_faculty = faculty_prefix_dict[prefix];
    for (const obj of coursesData){
        if(obj.faculty.name !== target_faculty){
            continue;
        }
        if(obj.faculty.courses){
            for(const course_item of obj.faculty.courses){
                if(course_item.courseNumber === number){
                    return course_item.courseName;
                }
            }
        }
    }
}

export function reverseFireFox(name){
    if(is_fire_fox){
        return name;
    }
    return name.split("").reverse().join("");
}

export const courseNameToNumber = (name, all_courses = 'false') => {
    const coursesData = all_courses === 'true' ? allCoursesData : activeCoursesData;
    let corrected_name = reverseFireFox(name);
    for (const obj of coursesData){
        if(!obj.faculty.courses){
            continue;
        }
        for(const course_item of obj.faculty.courses){
            if(course_item.courseName === corrected_name){
                return course_item.courseNumber;
            }
        }
    }
}

function appendTree(data, visited, styles, all_courses = 'false'){
    const coursesData = all_courses === 'true' ? allCoursesData : activeCoursesData;
    let finished = [];
    for (const obj of coursesData){
        if(!obj.faculty.courses){
            continue;
        }
        for(const courseItem of obj.faculty.courses){
            if(!courseItem.kdams){
                continue;
            }
            for(const kdam of courseItem.kdams){
                if(String(courseNumberToName(kdam, all_courses)) === undefined || kdam !== data.number || visited.has(courseItem.courseNumber)){
                    continue;
                }
                visited.add(courseItem.courseNumber)
                finished.push({'name': courseNumberToName(courseItem.courseNumber, all_courses), 'number': courseItem.courseNumber});
            }
        }
    }
    let childrenArray = [];
    if(finished.length > 0){
        for(const item of finished){
            childrenArray.push(appendTree({faculty: data.faculty, number: item.number, optionGroup: item.optionGroup}, visited, {...styles, first_level:false}, all_courses));
        }
    }
    return {
        name: reverseFireFox(courseNumberToName(data.number, all_courses)),
        _collapsed: !styles.first_level,
        nodeSvgShape: {
            shape: 'circle',
            strokeWidth: 0,
            shapeProps: {
                cx: 0,
                cy: 0,
                r: 11,
            },
        },
        children: childrenArray
    };
}

export const calculateTree = (number, styles, all_courses = 'false') => {
    let data = {
        number: number
    }
    let visited = new Set();
    return appendTree(data, visited, {...styles, first_level:true}, all_courses)
}

