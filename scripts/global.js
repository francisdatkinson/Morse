$(document).ready(function() {
  console.log("ready");

  let down = 0;
  let up = 0;

  $(window).keydown(function(e) {
    down = e.timeStamp;
    interval = (down - up) / 1000;

    console.log(interval);

    // if (interval > 1) {
    //   newSymbol();
    // } else if (interval > 0.2) {
    //   newSymbol();
    // } else {

    // }

    // if (e.keyCode == 87) {
    //   newWord();
    // } else if (e.keyCode == 79) {
    //   dot();
    // } else if (e.keyCode == 65) {
    //   dash();
    // }
  });

  $(".button").mousedown(function() {
    down = new Date();
    interval = (down - up) / 1000;

    console.log(interval);

    // if (interval > 1) {
    //   newSymbol();
    // } else if (interval > 0.2) {
    //   newSymbol();
    // } else {

    // }

    // if (e.keyCode == 87) {
    //   newWord();
    // } else if (e.keyCode == 79) {
    //   dot();
    // } else if (e.keyCode == 65) {
    //   dash();
    // }
  });

  $(".button").mouseup(function() {
    clearTimeout(this._timeout);
    up = new Date();
    let duration = (up - down) / 1000;

    console.log(duration);

    if (duration < 0.2) {
      dot();
    } else {
      dash();
    }

    this._timeout = setTimeout(() => {
      newSymbol();
    }, 600);
  });

  $(window).keyup(function(e) {
    clearTimeout(this._timeout);
    up = e.timeStamp;
    let duration = (up - down) / 1000;

    console.log(duration);

    if (duration < 0.2) {
      dot();
    } else {
      dash();
    }

    this._timeout = setTimeout(() => {
      newSymbol();
    }, 600);
  });
});

let letter = '';
let word = '';
let phrase = '';

newWord = () => {
  phrase += (" " + word);
  word = '';
  letter = '';
  $(".phrase p").empty();
  $(".phrase p").text(phrase);
  console.log("new word");
}

newSymbol = () => {
  word += parseMorse(letter);
  letter = (letter + " / " + parseMorse(letter));
  $(".letter p, .word p").empty();
  $(".letter p").text(letter);
  $(".word p").text(word);
  letter = '';
  console.log("new symbol");
}

dot = () => {
  letter += '.';
  console.log("dot");
}

dash = () => {
  letter += '-';
  console.log("dash");
}

parseMorse = (letter) => {
  let out = '';
  switch (letter) {
    case '.-':
      out = 'a';
    break;
    case '-...':
      out = 'b';
    break;
    case '-.-.':
      out = 'c';
    break;
    case '-..':
      out = 'd';
    break;
    case '.':
      out = 'e';
    break;
    case '..-.':
      out = 'f';
    break;
    case '--.':
      out = 'g';
    break;
    case '....':
      out = 'h';
    break;
    case '..':
      out = 'i';
    break;
    case '.---':
      out = 'j';
    break;
    case '-.-':
      out = 'k';
    break;
    case '.-..':
      out = 'l';
    break;
    case '--':
      out = 'm';
    break;
    case '-.':
      out = 'n';
    break;
    case '---':
      out = 'o';
    break;
    case '.--.':
      out = 'p';
    break;
    case '--.-':
      out = 'q';
    break;
    case '.-.':
      out = 'r';
    break;
    case '...':
      out = 's';
    break;
    case '-':
      out = 't';
    break;
    case '..-':
      out = 'u';
    break;
    case '...-':
      out = 'v';
    break;
    case '.--':
      out = 'w';
    break;
    case '-..-':
      out = 'x';
    break;
    case '-.--':
      out = 'y';
    break;
    case '--..':
      out = 'z';
    break;
  }

  return out;
}