import { CalculosService } from './../calculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  inputvalue: any = '';
  inputtemp: any = '';
  confere: any = '';


  constructor(private services: CalculosService) { }

  ngOnInit(): void {

  }
  getval(event)
  {   
    switch (event) {
      case "C":
        this.inputvalue = ''
        break;
      case "BACK":
        this.inputvalue = this.services.limpar(this.inputvalue)
        break;
      case "+":
        if(this.inputtemp != '')
        {
          this.inputtemp = this.services.confere(this.inputtemp, this.inputvalue, this.confere)
          this.inputvalue = '';
          this.confere = "+"
          break;
        }
        this.inputtemp = this.inputvalue;
        this.inputvalue = '';
        this.confere = "+"
        break;
      case "-":
        if(this.inputtemp != '')
        {
          this.inputtemp = this.services.confere(this.inputtemp, this.inputvalue, this.confere)
          this.inputvalue = '';
          this.confere = "-"
          break;
        }
        this.inputtemp = this.inputvalue;
        this.inputvalue = '';
        this.confere = "-"
        break;
      case "/":
        if(this.inputtemp != '')
        {
          this.inputtemp = this.services.confere(this.inputtemp, this.inputvalue, this.confere)
          this.inputvalue = '';
          this.confere = "/"
          break;
        }
        this.inputtemp = this.inputvalue;
        this.inputvalue = '';
        this.confere = "/"
        break;
      case "x":
        if(this.inputtemp != '')
        {
          this.inputtemp = this.services.confere(this.inputtemp, this.inputvalue, this.confere)
          this.inputvalue = '';
          this.confere = "x"
          break;
        }
        this.inputtemp = this.inputvalue;
        this.inputvalue = '';
        this.confere = "x"
        break;
      case "=":
        this.inputvalue = this.services.confere(this.inputtemp, this.inputvalue, this.confere)
        this.inputtemp = '';
        break;
      default:
        this.inputvalue += event 
        console.log(this.inputtemp);
        
        console.log(this.inputvalue + " Entrada");
        break;
    }
 
  }


}
