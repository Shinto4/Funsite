var count = 0;
function random() {
    let input = document.getElementById("input").value;
    let random = Math.random() * (30 - 1) + 1;
    let rounded = Math.floor(random);
    
    if(input == rounded && input <= 30) {
        count++;
        document.getElementById('count').innerHTML = count;
        alert('You got it!');
    } else if(input != rounded && input != '' && input <= 30) {
        alert('Wrong! It was ' + rounded);
    } else if(input == '') {
        alert('You must insert a number!')
    } else if(input > 30) {
        alert('The max is 30!')
    }
}
