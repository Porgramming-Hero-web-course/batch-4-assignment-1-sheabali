{
    // problem 2

    const removeDuplicates = (numbers:number[]) => {

        const remove = numbers.filter((num:number,index:number) => numbers.indexOf(num) === index)

        return remove;
    }

   const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])

    console.log(result)

    // 
}