var string = 'awesome';
 var i = 0;

 var letter = prompt('Write a letter which u wanna find:');
 while (i < string.length) {
   if (string[i] == letter) {
     alert('Ur letter is on ' + (i + 1) + ' position');
     break;
   }
   i++;
 }

 if (string[i] != letter) {
   alert('-1');
 }
