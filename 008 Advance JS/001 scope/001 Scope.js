// scope

var b = "can I access this?"

function bb() {
    var a="hello"
}

// root scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(fun);
};

function funnerFunction(){
    //child scope
    var fun = "Bye";
    console.log(fun);
}

function funnestFunction(){
    // child scope
    fun = "AAAHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);