{
    // 
    
    const countWordOccurrences = (sentence:string, word: string) : number  => {

        const lowerWord = word.toLocaleLowerCase();
        const lowerSentence = sentence.toLocaleLowerCase();

        const words = lowerSentence.split(' ')

        const count = words.filter((word) => word === lowerWord).length ;

        return count

    }
    

    console.log(countWordOccurrences("I love typescript", "typescript"))
    // 

}