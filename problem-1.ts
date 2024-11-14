{
    // problem 1

const numArray = (num: number[]) : number => {
    
   const sumArray = num.reduce((elem:number, num: number) => elem + num)
    return sumArray
}

const result =  numArray([1, 2, 3, 4, 5,])

console.log(result)

    //
}
