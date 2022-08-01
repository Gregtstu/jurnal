let tablMain = document.querySelector('.main');
let tablCompl = document.querySelector('.complited');
let tablNocompl = document.querySelector('.noComplited');
// let nameWorker = document.querySelector('.name');
let complDoings = document.querySelector('.complDoings');
let noComplDoings = document.querySelector('.noComplDoings');
let allDoings = document.querySelector('.allDoings');
let arr2 = JSON.parse(localStorage.getItem('todo2'));


function add(){
    let count1 = 0;
    let count2 = 0;
    arr2.forEach(element => {
        let list = document.createElement('tr');
        list.innerHTML += `<td>${element.title}</td>`;
        
        if(!element.complite){
            tablCompl.append(list);
            count1++;
            if(element.checking){
                list.classList.add('srochno')
            }
        }else{
            tablNocompl.append(list);
            count2++;
        }

        
        // let list2 = document.createElement('tr');
        // list2.innerHTML += `
        // <td>Работник2</td>
        // <td>${count1}</td>
        // <td>${count2}</td>
        // <td>${tablMain}</td>
        // `;
        // tablMain.append(list2);
    }); 
    
    console.log(count1);
    // nameWorker.innerHTML = 'Работник 2';
    complDoings.innerHTML = count2;
    noComplDoings.innerHTML = count1;
    allDoings.innerHTML = arr2.length;
}

add();