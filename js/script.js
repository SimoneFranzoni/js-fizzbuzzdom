
const row = document.querySelector('.row');

for(let i = 1; i <= 100; i++) {
    const box = document.createElement('div');    
    box.className = 'box';
    box.innerHTML = i;
    row.append(box);

    if((i % 3 == 0)){
        box.classList.add('div3')
    }

    if((i % 5 == 0)){
        box.classList.add('div5')
    }

    /*if((i % 5 == 0)and(i % 3 == 0)){
        box.classList.add('divboth')
    }*/
};
