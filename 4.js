function randomize(input){
    let getValue = []
    let values =[]
    
    for (let i = 2; i < 30; i++) {
        
        
        let prima = true;
        if (i % 2 === 0 && i != 2) {
            
            prima = false
        }if (i % 3 === 0 && i !=3) {
            prima = false
        }
        if (i % 5 === 0 && i !=5) {
            prima = false
        }
        if (prima == true) {
            values.push(i)
           
        }
    }
    
    console.log(values)

    
    for (let j = 0; j < input; j++) {
        let value = values[Math.floor(Math.random()*values.length)]
        getValue.push(value)
    }
    let sum = getValue.reduce(summary)
    function summary(total, num) {
        return total + num;
      }

      return (`array: [${getValue}]
sum: ${sum}`)

    
}



console.log(randomize(7))


