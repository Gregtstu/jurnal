const select = document.querySelector('.hero__select');
const elena = document.querySelector('.img__elena');
const igor = document.querySelector('.img__igor');
const vitalya = document.querySelector('.img__vitalya');
const mainText = document.querySelector('.text__hide');
const informText = document.querySelector('.text__description');
let arrTasks1 = [];
let arrTasks2 = [];
let arrTasks3 = [];
let noComplited = document.querySelector('.noComplited');
let complited = document.querySelector('.complited');
let all = document.querySelector('.all');
let workNow = document.querySelector('.workNow');


select.addEventListener('change', () => {
        const worker = document.querySelector('.hero__select').value;
        const result = document.querySelector('.result');
        let count1 = 0;
        let count2 = 0;
        noComplited.innerHTML = count1;
        complited.innerHTML = count2;
        if (worker == 'работник1') {
            if (JSON.parse(localStorage.getItem('todo'))) {
                arrTasks1 = JSON.parse(localStorage.getItem('todo'));
                all.innerHTML = arrTasks1.length;
                arrTasks1.forEach(element => {
                    if (element.complite) {
                        count1++;
                        complited.innerHTML = count1;
                    } else {
                        count2++;
                        noComplited.innerHTML = count2;

                    }
                        if (element.checking) {
                            workNow.innerHTML = `${element.title}`
                        }

                    if (count1 > count2) {
                        result.innerHTML = "низкая";
                    } else if (count1 == count2) {
                        result.innerHTML = "средняя";
                    } else if (count1 < count2) {
                        result.innerHTML = "высокая";
                    }
                });
                mainText.classList.remove('hide');
                informText.classList.add('hide');
                elena.classList.remove('hide');
                igor.classList.add('hide');
                vitalya.classList.add('hide');
            } else {
                document.querySelector('.text').innerHTML = `<p class="text__description">нет заданий для этого работника. Заполните журнал!</p> `
            }
        } else if (worker == 'работник2') {
            if (JSON.parse(localStorage.getItem('todo2'))) {
                arrTasks2 = JSON.parse(localStorage.getItem('todo2'));
                all.innerHTML = arrTasks2.length;
                arrTasks2.forEach(element => {
                    if (element.complite) {
                        count1++;
                        complited.innerHTML = count1;
                    } else {
                        count2++;
                        noComplited.innerHTML = count2;

                    }
                    if (element.checking) {
                        workNow.innerHTML = `${element.title}`
                    }

                    if (count1 > count2) {
                        result.innerHTML = "низкая";
                    } else if (count1 == count2) {
                        result.innerHTML = "средняя";
                    } else if (count1 < count2) {
                        result.innerHTML = "высокая";
                    }
                });
                mainText.classList.remove('hide');
                informText.classList.add('hide');
                elena.classList.add('hide');
                igor.classList.remove('hide');
                vitalya.classList.add('hide');
            } else {
                document.querySelector('.text').innerHTML = `<p class="text__description">нет заданий для этого работника. Заполните журнал!</p> `
            }
        } else if (worker == 'работник3') {
            if (JSON.parse(localStorage.getItem('todo3'))) {
                arrTasks3 = JSON.parse(localStorage.getItem('todo3'));
                all.innerHTML = arrTasks3.length;
                arrTasks3.forEach(element => {
                    if (element.complite) {
                        count1++;
                        complited.innerHTML = count1;
                    } else {
                        count2++;
                        noComplited.innerHTML = count2;

                    }
                    if (element.checking) {
                        workNow.innerHTML = `${element.title}`
                    }

                    if (count1 > count2) {
                        result.innerHTML = "низкая";
                    } else if (count1 == count2) {
                        result.innerHTML = "средняя";
                    } else if (count1 < count2) {
                        result.innerHTML = "высокая";
                    }
                });
                mainText.classList.remove('hide');
                informText.classList.add('hide');
                elena.classList.add('hide');
                igor.classList.add('hide');
                vitalya.classList.remove('hide');
            } else {
                document.querySelector('.text').innerHTML = `<p class="text__description">нет заданий для этого работника. Заполните журнал!</p> `
            }
        } else if (worker == 'выбрать работника') {
            mainText.classList.add('hide');
            informText.classList.remove('hide');
            elena.classList.add('hide');
            igor.classList.add('hide');
            vitalya.classList.add('hide');
        }

    }
)
;