let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button")
let string =""
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click' , (e) =>{
    if(e.target.innerHtml == '='){
        string = eval(string);
        input.value = string;
    }
    else if(e.target.innerHtml =='ac'){
        string = ""
        input.value = string;
    }
    else if(e.target.innerHTML.toLowerCase() =="del") {
        string = string.substring(0, string.
        length-1);
        input.value = string;
    }
    
    else{
        string += e.target.innerHtml;
        input.value = string;
        
    }
});
});
