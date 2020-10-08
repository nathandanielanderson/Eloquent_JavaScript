let quotes = /^[']|\s'|'(\W)|'$/g;
let string = "'Hello world isn't what I'm writing', she said.\n He responded, 'But you are, can't you see that?'";

console.log(string.replace(quotes, '"$1'));
