const is_fire_fox = typeof InstallTrigger !== 'undefined';

export function reverseFireFox(name){
    if(is_fire_fox){
        return name;
    }
    return name.split("").reverse().join("");
}

export const buildTree = (data, first) => {
    let children_array = data.children ? data.children.map((course) => buildTree(course, false)) : []
    return {
        name: reverseFireFox(data.name),
        number: data.number,
        _collapsed: !first,
        nodeSvgShape: {
            shape: 'circle',
            strokeWidth: 0,
            shapeProps: {
                cx: 0,
                cy: 0,
                r: 11,
            },
        },
        children: children_array
    }
}

