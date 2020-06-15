import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }
  limpar(inputvalue) {
    let ba = '';

    let x =  inputvalue.length -1;
    for (let index = 0; index < x; index++) {
     ba += inputvalue[index]
    }
    return inputvalue = ba;
  }

  confere(x, y, mat){
    
    switch (mat) {
      case "+":
        return parseFloat(x) + parseFloat(y)
      case "-":
        return x - y
      case "x":
        return x * y
      case "/":
        return x / y 
    }
  }
}
