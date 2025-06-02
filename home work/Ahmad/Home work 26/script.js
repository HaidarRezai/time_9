function check() {
    let number = document.getElementById('text').value;
    let result = (number % 2 === 0) ? 'even' : 'odd';
    document.getElementById('result').value = result;
}