function random() {
    let input = document.getElementById("input").value;
    let random = Math.random() * (10 - 1) + 1;
    let rounded = Math.floor(random);
    
    if(input == rounded && input <= 20) {
        alert('You got it!');
    } else if(input != rounded && input != '' && input <= 10) {
        alert('Wrong! It was ' + rounded);
    } else if(input == '') {
        alert('You must insert a number!')
    } else if(input > 10) {
        alert('The max is 10!')
    }
}