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


function data(){

    const data = new Date()
    const dia = data.getDate()
    const horas = data.getHours()
    const minutos = data.getMinutes()

    const div = document.querySelector('#relogio')

    div.innerHTML = `
        <div id="dia">${dia}</div>
        <div id="horas">${horas}<span>:</span>${minutos}</div>
    `
}
data()
setInterval(() => {
    // console.log('oi')
    data()
}, 1000);
