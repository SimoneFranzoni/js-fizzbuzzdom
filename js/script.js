
const row = document.querySelector('.row');

for(let i = 1; i <= 100; i++) {
    const box = document.createElement('div');    
    box.className = 'box';
    row.append(box);
    box.innerHTML = i;

    if((i % 5 == 0) && (i % 3 == 0)){
        box.classList.add('divboth')
        box.innerHTML = 'fizzbuzz';
    } else if((i % 3 == 0)){
        box.classList.add('div3');
        box.innerHTML = 'fizz';
    } else if((i % 5 == 0)){
        box.classList.add('div5');
        box.innerHTML = 'buzz';
    }

};
