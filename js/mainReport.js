let oneTable = document.querySelector('.one');
let twoTable = document.querySelector('.two');
let threeTable = document.querySelector('.three');
let arr1 = JSON.parse(localStorage.getItem('todo'));
let arr2 = JSON.parse(localStorage.getItem('todo2'));
let arr3 = JSON.parse(localStorage.getItem('todo3'));

function add() {
    if (JSON.parse(localStorage.getItem('todo'))) {
        arr1.forEach(element => {
            if (!element.complite) {
                let list = document.createElement('li');
                list.innerHTML += `${element.title} `
                oneTable.append(list);
                if (element.checking) {
                    list.classList.add('srochno');
                }
            }
        });
    }else {
        let list = document.createElement('li');
        list.innerHTML = 'в журнале нет заданий';
        oneTable.append(list);
    }
    if (JSON.parse(localStorage.getItem('todo2'))) {
        arr2.forEach(element => {
            if (!element.complite) {
                let list = document.createElement('li');
                list.innerHTML += `${element.title} `
                twoTable.append(list);
                if (element.checking) {
                    list.classList.add('srochno');
                }
            }
        });
    }else {
        let list = document.createElement('li');
        list.innerHTML = 'в журнале нет заданий';
        twoTable.append(list);

    }


    if (JSON.parse(localStorage.getItem('todo3'))) {
        arr3.forEach(element => {
            if (!element.complite) {
                let list = document.createElement('li');
                list.innerHTML += `${element.title} `
                threeTable.append(list);
                if (element.checking) {
                    list.classList.add('srochno');
                }
            }
        });
    }else {
        let list = document.createElement('li');
        list.innerHTML = 'в журнале нет заданий';
        threeTable.append(list);
    }
}

add();