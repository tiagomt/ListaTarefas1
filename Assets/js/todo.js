let data = [];

function renderTodo() {

    document.querySelector(".todo").innerHTML = "";

    data.forEach(task => {

        let li = document.createElement("li");

        li.innerHTML = `
        <input type='checkbox' id='task-${task.id}'>
        <label for='task-${task.id}'>${task.title}</label>
        <button type="button">x</button>
    `;

        li.querySelector('input').addEventListener("change", e => {


            if (e.target.checked) {//e.target pega o elemento que está selecionado, no caso o input

                // li.setAttribute("class", "complete")
                li.classList.add("complete"); //adiciona classe "complete"


            } else {

                // li.setAttribute("class", "")
                li.classList.remove("complete"); //remove classe "complete"

            }


        });

        li.querySelector('button').addEventListener("click", e => {

            // console.dir(e.target) //mostra tudo do elemento

            let button = e.target;

            let li = button.parentNode;

            let input = li.querySelector('input');

            let id = input.id;

            let idArray = id.split('-');

            let todoId = idArray[1];

            //innerText pega apenas os textos dentro das tags
            let title = li.querySelector('label').innerText

            if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {


                data = data.filter(task => (task.id !== parseInt(todoId)));

                renderTodo();

            }


        })

        document.querySelector(".todo").append(li); //Adiciona li no final da lista

    })
}

document.querySelector("#new-task").addEventListener("keyup", e => {


    if (e.key === "Enter") {


        //adicionando JSON ao array data
        data.push({

            id: data.length + 1, //tamanho do array+1
            title: e.target.value

        })

        e.target.value = "";
        renderTodo();
    }
    /*
    //console.log(e)
    if (e.key == "Enter") {

        let tamanho = document.querySelector(".todo").children.length
        let li = document.createElement("li")
        li.innerHTML = `
        <input type='checkbox' id='task-${tamanho + 1}'>
        <label for='task-${tamanho + 1}'>${e.target.value}</label>
        `
        document.querySelector(".todo").append(li)

        //valor do elemento trabalhado(#new-task)
        e.target.value = ""

    }
    */
});

renderTodo();