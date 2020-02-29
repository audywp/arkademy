function sequence (input){
    
    let values = [input];
    
    let i
    
    for (let i = 0; i < input; i++) {
        value = values[i]
        if (value % 2 === 0) {
            values[i+1] = value / 2
        }else if (value % 2 === 1) {
            values[i+1] = value * 3 + 1
        }else if (input < 0 ){
            return 'Parameter harus bilangan positif!'
        }else {
            return 'anda tidak memasukan angka'
        }
    }

    
    
    
    return `array: [${values}]
count: ${values.length}`
}


console.log(sequence(5))