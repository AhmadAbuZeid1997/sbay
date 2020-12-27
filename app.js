var a
function ask(message)
{ a= prompt(message)
while (a===''||a===null||a===undefined) {a= prompt(message)
    
}
}
ask('inter your name please')
var z=a
ask('inter your age please')
var x=a
alert('hello '+z+' your age is '+x)
ask('what is your time now?')
var y=a
if (y>12) {y='pm'
    
} else {y='am'
    
}
document.write("<p> "+y+" </p>")
ask('how many stars we deserve (1-5)?')
var v=a
for (let i = 0; i < v; i++) {
    document.write("<p> * </p>");
    
}

