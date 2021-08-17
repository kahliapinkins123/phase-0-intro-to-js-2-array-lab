// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function appendCat(name){
    const catAppend = [...cats, name];
    return catAppend;
}

function prependCat(name){
    const catPrepend = [name,...cats];
    return catPrepend;
}

function removeLastCat(){
    const removedLast = cats.slice(0,2);
    return removedLast;
}

function removeFirstCat(){
    const removedFirst = cats.slice(1);
    return removedFirst;
}