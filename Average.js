function processData() {
    // Get input value
    var a = document.getElementById('a').value;
    var a = parseFloat(a);
    var b = document.getElementById('b').value;
    var b = parseFloat(b);
    var c = document.getElementById('c').value;
    var c = parseFloat(c);
    var d = document.getElementById('d').value;
    var d = parseFloat(d);

    // Process the data (Here we are just converting it to uppercase)
let sum = a+b+c+d;
let avnf = sum/4;
let check = avnf - 0.5;
let checking = Math.floor(sum/4);
if( check > checking || check == checking){
    let final = Math.floor(sum/4) + 1;
    document.getElementById('output').textContent = final;
}
else{};
if(check < checking){
    let finald = Math.floor(sum/4);
    document.getElementById('output').textContent = finald;
}

    
}