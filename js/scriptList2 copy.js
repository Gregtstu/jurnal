
const doings = document.querySelector('.doings');
const nesrochno = document.querySelector('.nesrochno');
const forma = document.querySelector('form');
const srochno__radio_batton = document.querySelector('#srochno');
const nesrochno__radio_batton = document.querySelector('#nesrochno');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
btn.disabled = true;
const complite = 0;
let counterId = 0;

title.addEventListener('input', ()=> {
    btn.textContent = 'создать дело'
    if(title.value != ''){
        btn.disabled = false;
        btn.classList.remove('opacity')
    }
});

if(btn.disabled){
    btn.classList.add('opacity')
}

let toDoList = [];


btn.addEventListener('click', ()=> {
    let obj = {
        id : ( (Math.random() * 428).toFixed(3) ),
        title : `${title.value}`,
        complite : false,
        checking : false,
    };
    toDoList.push(obj);
    localStorage.setItem('todo2', JSON.stringify(toDoList));
});



function compliteTask(arr){
    let compliteBtn = null;
    document.querySelectorAll('.complite__btn').forEach(elem => {
        elem.addEventListener('click' , ()=> {
            compliteBtn = elem.id
            arr.map(obj => {
                if(obj.id == compliteBtn && obj.complite == false){
                    obj.complite = true;
                    localStorage.setItem('todo2', JSON.stringify(toDoList));

                }else{
                    obj.complite == false
                }  
            });
            window.location.reload();
        });
    });
    
}

function showList (obj){
    let list = document.createElement('li');
    if(!obj.complite){
        list.innerHTML = `
        <div class="list">
        <input class="radio" type="radio" name="radio" id="${obj.id}">
        <p>${obj.title}</p>
        <div class="buttons">
        <button class="complite__btn" id="${obj.id}">выполнено</button>
        </div>
        </div>
        `;

        if(obj.checking){
            list.innerHTML = `
            <div class="list srochno">
            <input  class="radio" class="radio" type="radio" name="radio" id="${obj.id}">
            <p>${obj.title}</p>
            <div class="buttons">
            <button class="complite__btn" id="${obj.id}">выполнено</button>
            </div>
            </div>
            `;  
        }

    }  
    
    else{
        list.innerHTML = `
        <div class="list complite">
        <p>${obj.title}</p>
        <div class="buttons">
        <button class="delite__btn" id="${obj.id}">удалить</button>
        </div>
        </div>
        `;
    }
     
    doings.append(list);
    
}


add();

function add(){
    if(JSON.parse( localStorage.getItem('todo2')) === null){
        alert('Чтобы начать пользоваться журналом, необходимо добавить задания каждому работнику')
    }else{
        
        toDoList = JSON.parse( localStorage.getItem('todo2')) ;
        toDoList.forEach(item => {
            showList (item);    
        }); 
        
        
    }
}
compliteTask(toDoList);


function deliteTask(){
    let deliteBtn = null;
    document.querySelectorAll('.delite__btn').forEach(elem => {
        elem.addEventListener('click' , ()=> {
            deliteBtn = +elem.id
           
                if(confirm('точно надо удалить??')){
                    toDoList = JSON.parse( localStorage.getItem('todo2'));
                    const newList = toDoList.filter(obj => obj.id != deliteBtn);
                    localStorage.setItem('todo2', JSON.stringify(newList));
                    window.location.reload();
                }
          
        });
    });
    
}



deliteTask()

function showCoutTask(){
    let cout_sroch_task = JSON.parse( localStorage.getItem('todo')).length
    let cout_nesroch_task = JSON.parse( localStorage.getItem('todo2')).length
    let cout_raznoe_task = JSON.parse( localStorage.getItem('todo3')).length
    document.querySelector('.tab1').textContent = `Зазуля Е.П. (${cout_sroch_task})`
    document.querySelector('.tab2').textContent = `Рыжов И.В. (${cout_nesroch_task})`
    document.querySelector('.tab3').textContent = `Максимов В.В.  (${cout_raznoe_task})`

    let complited = 0;
    let compliting = 0;
    JSON.parse( localStorage.getItem('todo2')).forEach(item => {
    //   console.log(item);
      if(!item.complite){
        compliting++;
        document.querySelector('.noComplitedDoings').innerHTML = `${compliting} `
    }else{
        complited++;
        document.querySelector('.complitedDoings').innerHTML = `${complited}`;
      }
      
    });

    
}



document.querySelector('.allDoings').innerHTML = `${toDoList.length} `

// document.querySelector('.complitedDoings').innerHTML = '111111111';

// document.querySelector('.noComplitedDoings').innerHTML = `${toDoList.length} `




function cheked (){
    let check = document.querySelectorAll('.radio');
    check.forEach(item => {
        item.addEventListener('change', ()=> {
            
            toDoList.map(elem =>{
                
                if(elem.id == item.id && item.checked){
                    elem.checking = true;
                        
                }else{
                    elem.checking = false;
                }
                localStorage.setItem('todo2', JSON.stringify(toDoList)); 
                window.location.reload();
            }); 
        })
    });

   

}
cheked ();
    



showCoutTask();





