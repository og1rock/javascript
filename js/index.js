function calcDiscr(a, b, c) {
    let D = (b * b) - (4 * a * c);
    if (D < 0) {
        return ('Discr is Less than zero');
    } else if (D === 0) {
        let x1 = ((b * -1) / (2 * a));
        return ('Discr = 0 ' + 'x1 and x2 = ' + x1);
    } else {
        let x1 = ((b * -1) + Math.sqrt(D)) / (2 * a);
        let x2 = ((b * -1) - Math.sqrt(D)) / (2 * a);
        return 'x1 ='+  x1 + ' x2 =' + x2;
    }
    
}
let correctA = false;
let correctB = false;
let correctC = false;
while (!correctA) {
    var a = prompt('Please enter a');
    if (a === parseInt(a, 10) || parseFloat(a) && a !== 0) {
        correctA = true;
    }
    else {
        alert('incorrect number. Please, enter the integer or floating number');
    }
}
while (!correctB) {
    var b = prompt('Please enter b');
    if (b === parseInt(b, 10) || parseFloat(b)) {
        correctB = true;
    } else {
        alert('incorrect number. Please, enter the integer or floating number');
    }
}
while (!correctC) {
    var c = prompt('Please enter c');
    if (c === parseInt(c, 10) || parseFloat(c)) {
        correctC = true;
    } else {
        alert('incorrect number. Please, enter the integer or floating number');
    }
}

document.write(calcDiscr(a,b,c));