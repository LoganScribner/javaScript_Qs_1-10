//write first method
function sleep_in(weekday,vacation) {
    var week = !weekday || vacation;
        return week;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var monkey = (a_smile && b_smile) || (!a_smile && !b_smile);
    return monkey;
}

//add 2-10 below here...

//3rd method
function string_times(str, n){
    var nString = "";
    for(var i = 0; i < n; i++){
        nString += str;

    }
    return nString;
}

//4th method
function front_times(str, n){
    var nString = "";
    var firstThree = str.substring(0, 3);
    for(var i = 0; i < n; i++){
        nString += firstThree;
    }
    return nString;
}


//5th method
function string_bits(str){
    var part = "";
    for(var i = 0; i < str.length; i++){
        var oddstring = str.substring(i, i + 1);
        if(i%2 == 0){
            part += oddstring;
        }
    }
    return part;
}

//6th method
function caughtSpeeding(n, boolean){
    if(boolean == true){
        n = n-5;
    }else{
        n = n;
    }
    if(n <= 60){
        return 0;
    }
    if(60 < n && n <= 80){
        return 1;
    }
    if(80 < n){
        return 2;
    }
}

//7th method
function fizz_buzz(n){
    var x = 'Fizz';
    var y = 'Buzz';
    var z = 'FizzBuzz';
    if((n%3 == 0) && (n%5 == 0)){
        return z;
    }
    if(n%3 == 0){
        return x;
    }
    if(n%5 == 0){
        return y;
    }
    if((n%3 != 0) && (n%5 != 0)){
        return n + "!";
    }
}

//8th method
function teaParty(candy, tea){
    if((candy < 5) || (tea < 5)){
        return 0;
    }
    if((candy >= tea*2) || (tea >= candy*2)){
        return 2;
    }
    if((candy >= 5) && (tea >= 5)){
        return 1;
    }
}

//9th method
function blackjack(x, y){
    if((x > 21) && (y > 21)){
        return 0;
    }
    if((x <= 21) && (x > y)){
        return x;
    }
    if((y <= 21) && (y > x)){
        return y;
    }
    if((x > 21) && (x > y)){
        return y;
    }
    if((y > 21) && (y > x)){
        return x;
    }
}

//10th method
function loneSum(a, b, c){
    if((a == b) && (b == c)){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(a == c){
        return b;
    }
    if(c == b){
        return a;
    }
    if(a != b != c){
        return a + b + c;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
    //test third method, etc
}
