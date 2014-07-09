function random_color() { //function name
    var aloha ="";
    var letters = ['brown','blue','yellow','orange']; //Set your colors here
    aloha = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('posts').style.background = aloha; // Setting the random color on your div element.
}