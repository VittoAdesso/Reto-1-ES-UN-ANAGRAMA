
function anagrama(wordA ,wordB) {
    if(wordA.toLowerCase() == wordB.toLowerCase()){
        return false
    }
    return wordA.toLowerCase().toString().toCharArray().sortedArray().contentEquals(wordB.toLowerCase().toString().sortedArray())
}

console.log(anagrama('amor', 'mar'));