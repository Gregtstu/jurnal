let workNow = document.querySelector('.workNow');
let arrTasks1 = JSON.parse(localStorage.getItem('todo'));
let arrTasks2 = JSON.parse(localStorage.getItem('todo2'));
let arrTasks3 = JSON.parse(localStorage.getItem('todo3'));
let noCompl = document.querySelector('.noComplited');
let compl = document.querySelector('.complited');
let all = document.querySelector('.all');
const igor = document.querySelector('.igor');
const vitalya = document.querySelector('.vitalya');
const elena = document.querySelector('.elena');

document.querySelector('.selects').addEventListener('change', ()=> {
    let worker = document.querySelector('.selects').value;
    let result = document.querySelector('.result');
    compl.innerHTML = 0;
    noCompl.innerHTML = 0;
    let count1 = 0;
    let count2 = 0;

    if (worker == 'работник1'){
        all.innerHTML = arrTasks1.length;
        arrTasks1.forEach(element => {
            if(element.complite){
                count1++;
                compl.innerHTML = count1;
            }else{
                count2++;
                noCompl.innerHTML = count2;

                if(element.checking){
                    workNow.innerHTML = `${element.title}`
                }
            }

            if (count1 > count2 ) {
                result.innerHTML = "низкая"
               } else if(count1 == count2) {
                   result.innerHTML = "средняя";
               }else if(count1 < count2) {
                result.innerHTML = "высокая";
                }
        });

        elena.classList.remove('none');
        igor.classList.add('none');
        vitalya.classList.add('none');

    }else if(worker == 'работник2'){
        all.innerHTML = arrTasks2.length;
        arrTasks2.forEach(element => {
            if(element.complite){
                count1++;
                compl.innerHTML = count1;
            }else{
                count2++;
                noCompl.innerHTML = count2;
                if(element.checking){
                    workNow.innerHTML = `${element.title}`
                }
            }
            if (count1 > count2 ) {
                result.innerHTML = "низкая"
               } else if(count1 == count2) {
                   result.innerHTML = "средняя";
               }else if(count1 < count2) {
                result.innerHTML = "высокая";
                }

        });
        igor.classList.remove('none');
        elena.classList.add('none');
        vitalya.classList.add('none');
    } else if(worker == 'работник3'){
        all.innerHTML = arrTasks3.length;
        arrTasks3.forEach(element => {
            if(element.complite){
                count1++;
                compl.innerHTML = count1;
            }else{
                count2++;
                noCompl.innerHTML = count2;
                if(element.checking){
                    workNow.innerHTML = `${element.title}`
                }
            }

           if (count1 > count2 ) {
            result.innerHTML = "низкая"
           } else if(count1 == count2) {
               result.innerHTML = "средняя";
           }else if(count1 < count2) {
            result.innerHTML = "высокая";
            }
        });
        vitalya.classList.remove('none');
        elena.classList.add('none');
        igor.classList.add('none');
    }else if(worker == 'выбрать работника'){
        document.querySelector('.container').innerHTML = `
        <p>Степень занятости: <span class="result"></span></p>
                <p >Выполненных: </p>
                <p >Не выполненных: </p>
                <p >Всего: </p>
                <p> Cейчас работает над:  </p>
        `

        igor.classList.add('none');
        elena.classList.add('none');
        vitalya.classList.add('none');
    }

  
});

// console.log(arrTasks1);
// console.log(arrTasks2);
// console.log(arrTasks3);