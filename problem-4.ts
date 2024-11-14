{
    // problem 4 

    type Circle = {
        shape : 'circle',
        radius : number,
    }

    type Rectangle = {
        shape : 'rectangle',
        width: number,
        height: number
    }

    const calculateShapeArea = (shape: Circle | Rectangle)  => {
        
        if(shape.shape === 'circle'){
            const area = Math.PI * shape.radius * shape.radius
            return Number(area.toFixed(2))
        }
        else if(shape.shape === 'rectangle'){
            return  shape.height * shape.width
        }
    }

    const circleArea = calculateShapeArea({shape:"circle", radius: 5})
    console.log(circleArea)


    const rectangleArea = calculateShapeArea({shape:"rectangle", height: 4, width:6})
    console.log(rectangleArea)

    // 
}