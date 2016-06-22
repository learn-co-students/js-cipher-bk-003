'use strict';

var atbash = {
	encode: function(word){
    let plain = "abcdefghijklmnopqrstuvwxyz";
    let cipher = "zyxwvutsrqponmlkjihgfedcba";
    let ciphed = "";
    let array = word.replace(/[\s,.]+/g, "").split("");
    for(let i = 0; i < array.length; ++i){
      let place = plain.indexOf(array[i].toLowerCase());
      if(isNaN(array[i])){
        if(i%5 === 0 && i != 0){
          ciphed += " " + cipher[place];
        }else{
          ciphed += cipher[place];
        }
      }else{
        ciphed += array[i]; 
      }
   }
    return ciphed;
  }

}