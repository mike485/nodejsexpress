var myRandomNumber = function(length) { 
    var text = ""; 
    var possible = "qwertyuiopasdfghjklzxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM"; 
    for(var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length)); 
       }
        return text; 
     }
     var rs = myRandomNumber(2); 
     console.log("This is my new random number: " + rs); 


