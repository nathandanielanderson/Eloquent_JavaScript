var size = 8;
var boardStr = "";

for(var i = 0; i < size; i += 1) {
    for(var j = 0; j < size; j += 1) {
        if(boardStr.length % 2 === 0) {
            boardStr += " ";
        }else {
            boardStr += "#";
        }
    }
    boardStr += "\n";
}

console.log(boardStr);