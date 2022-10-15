
function anagrama(wordA ,wordB) {
    wordA = wordA.toLowerCase();
    wordB = wordB.toLowerCase();    
    console.log(wordA, wordB);
    
    wordA = wordA.split("");
    wordB = wordB.split("");
    console.log(wordA, wordB);
    
    wordA = wordA.sort();
    wordB = wordB.sort();
    console.log(wordA, wordB);

    wordA = wordA.join("");
    wordB = wordB.join("");
    console.log(wordA, wordB);

    if(wordA !== wordB){
        return false;
    } else if (wordA === wordB){
        return true;
    }
}

console.log(anagrama('aMOr', 'mAro'));