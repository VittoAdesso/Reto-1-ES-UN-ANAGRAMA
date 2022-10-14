
function anagrama(wordA: string ,wordB: string): boolean {
    if(wordA.toLowerCase() === wordB.toLowerCase()){
        return false;
    }
    return true;
}

console.log(anagrama('amor', 'roma'));