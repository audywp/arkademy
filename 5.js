function triangle(input){
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < i; j++) {
          document.write("&nbsp;&nbsp;&nbsp;");
        }
        for (let j = input; j > i; j--) {
          document.write("*");
          if (j > i + 1) document.write("&nbsp;");
        }
        document.write('<br>')
      }
}

console.log(triangle(8))