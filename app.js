var name;
name =prompt ('please inter your name');
alert ('hello '+ name +' weclom to our web site');
var time;
time = prompt('what is the time in your country?')
if (time<12){time='am'}else{time='pm'}
var x
x = confirm ("you want to turn on notification for our website?")
console.log(x)
if (x == true) {alert('thank you')} else {alert('no thanks,git out')}

var age = prompt ('please inter your age')
while (age === '') {age = prompt ('please inter your age')}
console.log(age)
var y = prompt ('how many stars can you give for this web page please inter a value from 1 to 10')

for (let z=1 ; z <= y ; z++) {
    document.write( z +"<p>    * </p>");}
