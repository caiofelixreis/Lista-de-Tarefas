function render() {
    if (!localStorage.getItem('Tarefas')) {
        localStorage.setItem('Tarefas', '[]')
    }

    const divTarefas = document.querySelector('.caixa-tarefas')
    const tarefas = JSON.parse(localStorage.getItem('Tarefas'))

    divTarefas.innerHTML = tarefas.map((tarefa, i) =>
        `
            <div indice="${i}" class="div-tarefa" data-anime="right">
                <p>${tarefa}</p>
                <i id="done" class="fas fa-clipboard-check"></i>
            </div>
        `
    ).join('')

    const done = document.querySelectorAll('#done')
    done.forEach((e, i) => {
        e.addEventListener('click', () => {
            const divPai = e.parentElement
            divPai.classList.add('animate')
            console.log(divPai)

            tarefas.splice(i, 1)
            localStorage.setItem('Tarefas', JSON.stringify(tarefas))
            setTimeout(() => {
                render()
            }, 600)

        })
    })
}

document.querySelector('#btn-gera').onclick = e => inputSub()

function inputSub() {
    const botao = document.querySelector('#btn-gera')
    const div = document.querySelector('#criar')
    const input = document.createElement('input')

    div.innerHTML = ''
    div.appendChild(input)
    input.focus()
    botao.id = '#btn-add'

    const tarefas = JSON.parse(localStorage.getItem('Tarefas'))
    
    input.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            tarefas.push(input.value)
            localStorage.setItem('Tarefas', JSON.stringify(tarefas))
            input.value = ''
            input.focus()
            render()
        }
    })
    botao.onclick = () => {
        

        tarefas.push(input.value)
        localStorage.setItem('Tarefas', JSON.stringify(tarefas))
        input.value = ''
        input.focus()
        render()
    }
}


render()


// document.querySelector('#btn-gera').addEventListener('click', sub)

// let criar = document.querySelector('#criar')
// criar.innerHTML = 'Crie uma tarefa'


// function sub() {
//     if (document.querySelector('#btnlimpalista')) {
//         criar.innerHTML = ''
//         let inputCriar = document.createElement('input')
//         inputCriar.className = 'txt-tarefa'
//         inputCriar.id = 'inputCriar'

//         criar.appendChild(inputCriar)
//         document.querySelector('#btn-gera').removeEventListener('click', sub)

//         inputCriar.addEventListener('keypress', function (e) {
//             if (e.keyCode === 13) {
//                 criarTarefa()
//             }
//         })

//         document.querySelector('#btn-gera').addEventListener('click', criarTarefa)
//     } else {
//         criaLimpaLista()
//         criar.innerHTML = ''
//         let inputCriar = document.createElement('input')
//         inputCriar.className = 'txt-tarefa'
//         inputCriar.id = 'inputCriar'

//         criar.appendChild(inputCriar)
//         document.querySelector('#btn-gera').removeEventListener('click', sub)

//         inputCriar.addEventListener('keypress', function (e) {
//             if (e.keyCode === 13) {
//                 criarTarefa()
//             }
//         })

//         document.querySelector('#btn-gera').addEventListener('click', criarTarefa)
//     }



// }

// function criarTarefa() {
//     let tarefas = JSON.parse(localStorage.getItem('Tarefas'))

//     let txt = document.querySelector('#inputCriar').value

//     tarefas.push(txt)


//     localStorage.setItem('Tarefas',JSON.stringify(tarefas))

//     listaLS()

//     // let caixaTarefas = document.querySelector('.caixa-tarefas')
//     // let txt = document.querySelector('#inputCriar').value
//     // let mark = document.createElement('img')

//     // mark.src = 'img/no.png'	
//     // mark.className = 'mark'
//     // mark.id = 'mark'

//     // let div = document.createElement('div')
//     // div.className = 'div-tarefa'

//     // div.innerText = txt

//     // div.appendChild(mark)
//     // caixaTarefas.appendChild(div)

//     // setaLS()
//     // listaLS()

// }

// function setaLS() {
//     let txt = document.querySelector('#inputCriar').value
//     if (!(localStorage.getItem('Tarefas'))) {
//         localStorage.setItem('Tarefas', '[]')
//         let tarefas = JSON.parse(localStorage.getItem('Tarefas'))
//         tarefas.push(txt)
//         localStorage.setItem('Tarefas', JSON.stringify(tarefas))


//     } else {
//         let tarefas = JSON.parse(localStorage.getItem('Tarefas'))
//         tarefas.push(txt)
//         localStorage.setItem('Tarefas', JSON.stringify(tarefas))
//     }


// }

// function listaLS() {

//     let caixaTarefas = document.querySelector('.caixa-tarefas')


//     if (localStorage.getItem('Tarefas')) {
//         let tarefas = JSON.parse(localStorage.getItem('Tarefas'))

//         tarefas.map((e) => {
//             let div = document.createElement('div')
//             let mark = document.createElement('img')

//             mark.src = 'img/no.png'	
//             mark.className = 'mark'
//             mark.id = 'mark'

//             div.className = 'div-tarefa'
//             div.innerText = e
//             div.appendChild(mark)
//             caixaTarefas.appendChild(div)

//         });

//     } else {
//         localStorage.setItem('Tarefas', '[]')
//     }
//     marca()

// }
// function criaLimpaLista() {
//     let caixaTarefas = document.querySelector('.caixa-tarefas')
//     if (localStorage.getItem('Tarefas')) {

//         let btnLimpa = document.createElement('button')
//         let icone = document.createElement('img')
//         icone.src = 'img/can.png'
//         icone.className = 'imgbtn'

//         btnLimpa.className = 'btnlimpalista'
//         btnLimpa.id = 'btnlimpalista'
//         btnLimpa.appendChild(icone)

//         caixaTarefas.appendChild(btnLimpa)

//         btnLimpa.addEventListener('click',()=>{ 
//             localStorage.removeItem('Tarefas');
//             window.location.reload()
//         })
//     }
// }
// function marca(){
//     let mark = document.querySelectorAll('#mark')

//     mark.forEach(element => {
//         element.addEventListener('click',()=>{
//             alert('oi')
//         })
//     });

// }


// criaLimpaLista()
// listaLS()

