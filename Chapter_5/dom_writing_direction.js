function characterScript(code) {
    for(let script of SCRIPTS) {
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for(let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}


function dominantDirectionOf(string) { //returns "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom)
    //dominant direction is the direction of the majority of characters that have a script associated with them
    // each script has a .direction property
    let scripts = countBy(string, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none").reduce((a,b) => a.count > b.count ? a : b);


    return scripts.name;
}

// Finding the direction with the highest character count can be done with reduce. 
//If it’s not clear how, refer back to the example earlier in the chapter, 
//where reduce was used to find the script with the most characters.

console.log(textScripts('今天明天"woof", сегодня завтра'));