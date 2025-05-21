//////// Num Vocali

function numVocals(str) {
    let count= 0;
    let vocals = "aeiou"
    
    for (let i =0; i < str.length; i++) {
    const strLetter = str[i].toLowerCase()
        if (vocals.includes(strLetter)) {
            count++
        }    
        
    }

    return count
}

export default numVocals

//////// 
