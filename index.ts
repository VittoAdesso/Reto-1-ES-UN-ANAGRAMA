
function anagram(wordA: string ,wordB: string): boolean {
    wordA = wordA.toLowerCase();
    wordB = wordB.toLowerCase();
    
    wordA.split("");
    wordB.split("");

    wordA.sort();
    wordB.sort();

    wordA.concat();
    wordB.concat();

    if(wordA !== wordB){
        return false;
    } else if (wordA === wordB){
        return true;
    }
}

console.log(anagram('amor', 'roma'));