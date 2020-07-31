function random() {
    let input = document.getElementById("input").value;
    let random = Math.random() * (50 - 1) + 1;
    let rounded = Math.floor(random);
    
    if(input == rounded && input <= 20) {
        alert('You got it!');
    } else if(input != rounded && input != '' && input <= 50) {
        alert('Wrong! It was ' + rounded);
    } else if(input == '') {
        alert('You must insert a number!')
    } else if(input > 50) {
        alert('The max is 50!')
    }
}
