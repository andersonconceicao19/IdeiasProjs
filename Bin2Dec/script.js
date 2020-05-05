let text ="";   
       function getChar(bytes) {
        /**
         * Prende o usuario em digitar apenas 1 ou 0
        */
           for (let index = 0; index < bytes.length; index++)
           {
               if(bytes.length < 9)
                {                
                    if(bytes[index] === "1" || bytes[index] === "0")
                    {  
                        let xd = binarytodecimalService(bytes);
                        document.getElementById('Resuldado').innerHTML = `valor em decimal: ${xd}`
                        
                    }
                    else
                    {
                        alert(`O valor "${bytes[index]}" não é aceito para efeito de converção. gentileza, preecher novamente`)  
                        document.getElementById('Resuldado').innerHTML = ""
                        document.getElementById("bytesId").value = text;

                    }
                }
                else
                {
                    alert("Só é aceito a entrada de 8 caracter")                    
                    return document.getElementById("bytesId").value = text;
                }
             
           }
           text = bytes;  
       }

       function binarytodecimalService(param)
       {
           let b; 
           let result;
           let trava = false
           let c = 0; 
           let d= 0;

           let iterador = parseInt(param.length)  - 1         
            
           for (let i = iterador; i >= 0; i--) 
           {
              
               c++
               if(trava) 
               {
                    b = parseInt(param[c - 1]);                      
                    result = (b * (Math.pow(2, i)))
                    //console.log("true i "+ i +" -> Valor de b: " + b + " e da potencia calculada " + (b * (Math.pow(2, i))) );
               }
               else
               {
                b = parseInt(param[c - 1]);
                result = (b * (Math.pow(2, i)));   
                //console.log("False i "+ i +" -> Valor de b: " + b + " e da potencia calculada " + (b * (Math.pow(2, i))) );
                
                trava = true;               
               }
              d = result + d;                                      
           }
          
           
           return d;
           
       }
      