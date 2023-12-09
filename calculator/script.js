let input = document.getElementById('inputBox');
// to get response of all btn use this
let btn = document.querySelectorAll('button');

let string ="";
// make an array of all btn
let arr = Array.from(btn);

// apply event listener on each btn

arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            // evaluate the expression
            string = eval(string);
            // show it to the text field
            input.value = string;
        }
        //AC - ALL CLEAR
        else if(e.target.innerHTML =='AC'){
            string ="";
            //whatever in the string show to the input field
            input.value = string;
        }
        //DEL = delete only the last char
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            //TO SHOW THE RESULT ON THE SCREEN
            input.value =string;

        }
        else{
        // add the input in the string till user dont press =
        string += e.target.innerHTML;
        input.value =string;


        }
      
    })
})


