function pagina(){
    const div = document.createElement("div");
    div.classList.add('container');

    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma Tarefa";

    const botao = document.createElement("button");
    botao.id = "btnAdicionar";
    botao.textContent = "Adicionar"

    const lista = document.createElement("ul");
    lista.id = "listaTarefa";

    document.body.appendChild(div)
    div.appendChild(titulo);
    div.appendChild(input);
    div.appendChild(botao);
    div.appendChild(lista);

    botao.addEventListener("click", ()=>{
        // Criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if (texto === ""){
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto; //adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque'); //adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase()); //adiciona atributo personalizado
        novaTarefa.style.color = "#333"; //muda a cor do texto

        lista.appendChild(novaTarefa); //adiciona   elemento

        //Evento para remover item ao clicar
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque"); //remove a classe html destaque
            novaTarefa.classList.add("removido"); //acrescenta a classe html removida
            novaTarefa.innerHTML += " (removida)"; //acrescenta o texto (removido)  ao texto da tarefa
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000); //remove tarefa depois de 1 segundo

            input.value = "";
        });
    });
}