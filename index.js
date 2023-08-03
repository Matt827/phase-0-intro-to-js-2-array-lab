const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveLastCat = name => cats.pop(name)

const destructivelyRemoveFirstCat = name => cats.shift(name)

function appendCat(name) {
    const cat = [...cats, name]
    return cat
}

function prependCat(name) {
    const cat = [name, ...cats]
    return cat
}

function removeLastCat() {
    const cat = cats.slice(0, cats.length-1)
    return cat
}

function removeFirstCat() {
    const cat = cats.slice(1)
    return cat
}


console.log(cats)
console.log(cat)