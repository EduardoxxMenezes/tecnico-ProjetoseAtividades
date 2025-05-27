let criarProjeto = document.querySelector("#criarProjetoBotao"); //Referencia ao botão de criar projeto.
let projetoArea = document.querySelector("#projetos"); //Referencia a DIV onde os projetos serão colocados.
let nomeProj = document.querySelector("#nomeProj"); //Referencia ao Input onde o usuário irá inserir o nome do projeto.
let responsavelProj = document.querySelector("#responsavelProj");
let membrosProj = document.querySelector("#membrosProj");


let projetos = [];

function create(){ //Função de criar um novo projeto

    let membrosProjetoLista = membrosProj.value.split(",");

    let novoProjeto = document.createElement("div") //Cria uma div que será o novo projeto. 
    novoProjeto.classList.add("projeto"); //Coloca a classe "projeto" na div novoProjeto
    novoProjeto.innerHTML = `<h1>${nomeProj.value}</h1> <br> <p> ${responsavelProj.value} </p>`; //Insere o Titulo que terá o nome do projeto

    let projetoList = { //Cria o objeto "ProjetoList" para inserir na array de projetos
        nome: nomeProj.value, //Define o nome do objeto como o nome inserido pelo usuário.
        atividades: [], //Cria um lista de atividades que estarão dentro do projeto.
        membrosLista: membrosProjetoLista
    }

    projetos.push(projetoList); //Insere o objeto do projeto dentro da lista.

    btnNovaAtividade = document.createElement("button"); //cria um botão para inserir atividades
    btnEditar = document.createElement("button"); //cria um botão para editar o projeto
    btnDeletar = document.createElement("button"); //cria um botão para deletar o projeto

    btnNovaAtividade.textContent = "Nova Atividade"; //coloca o texto "nova atividade" no botão de criar atividade
    btnEditar.textContent = "Editar Projeto"; //coloca o texto "editar projeto" no botao de editar projeto
    btnDeletar.textContent = "Deletar Projeto"; //coloca o texto "deletar projeto" no botão de deletar projeto

    novoProjeto.appendChild(btnNovaAtividade); //adiciona o botão de adicionar atividade no novo projeto
    novoProjeto.appendChild(btnEditar); //adiciona o botão de editar atividade no novo projeto
    novoProjeto.appendChild(btnDeletar); //adiciona o botão de deletar atividade no novo projeto

    novoProjeto.style.display = "flex"; //faz com que o novo projeto tenha o display flex
    novoProjeto.style.gap = "10px"; //faz conm que cada projeto tenha um espaço de 10px
    novoProjeto.style.alignItems = "center"; //faz com que todos os itens dentro do novo projeto
    novoProjeto.style.margin = "10px 0"; //Faz com que a parte de cima e inferior do projeto sejam 10px em cima e em baixo e 0px nos lados
    novoProjeto.style.width = "80%"; //faz com que o tamanho da div seja 80% 
// Cria uma div para conter todas as atividades do projeto
const areaAtividades = document.createElement("div");
areaAtividades.style.marginTop = "10px"; // Adiciona margem superior
novoProjeto.appendChild(areaAtividades); // Adiciona essa div dentro do projeto

// Adiciona ouvinte de evento ao botão de criar nova atividade
btnNovaAtividade.addEventListener("click", () => {
    
    // Cria o formulário de uma nova atividade
    const formAtividade = document.createElement("div");
    formAtividade.classList.add("formAtividade");
    formAtividade.style.padding = "10px";
    formAtividade.style.marginTop = "10px";
    formAtividade.style.backgroundColor = "#f9f9f9";

    // Campo: Nome da atividade
    const inputNome = document.createElement("input");
    inputNome.placeholder = "Nome da atividade";
    inputNome.style.display = "block";
    inputNome.style.marginBottom = "5px";

    // Campo: Descrição da atividade
    const inputDesc = document.createElement("textarea");
    inputDesc.placeholder = "Descrição da atividade";
    inputDesc.rows = 3;
    inputDesc.style.display = "block";
    inputDesc.style.marginBottom = "5px";

    // Campo: Responsável pela atividade
    const selectResponsavel = document.createElement("select");
    selectResponsavel.placeholder = "Nome do responsável";
    selectResponsavel.style.display = "block";
    selectResponsavel.style.marginBottom = "5px";

    membrosProjetoLista.forEach(membro => {
        let membroOp = new Option(`${membro}`);
        selectResponsavel.add(membroOp);
    });

    // Campo: Tipo de recurso necessário
    const inputRecurso = document.createElement("input");
    inputRecurso.placeholder = "Tipo de recurso";  
    inputRecurso.style.display = "block";
    inputRecurso.style.marginBottom = "5px";

    // Campo: Status da atividade (select dropdown)
    const selectStatus = document.createElement("select");
    selectStatus.style.display = "block";
    selectStatus.style.marginBottom = "5px";

    // Opções para o campo de status
    const op1 = new Option("Pendente", "pendente");
    const op2 = new Option("Em andamento", "em_andamento");
    const op3 = new Option("Concluído", "concluido");

    // Adiciona as opções ao select
    selectStatus.add(op1);
    selectStatus.add(op2);
    selectStatus.add(op3);

    // Campo: Data de entrega (label e input)
    const dataEntregaTitulo = document.createElement("p");
    dataEntregaTitulo.innerHTML = "Data de entrega:"
    const dataEntrega = document.createElement("input");
    dataEntrega.type = "date";
    dataEntrega.style.display = "block";
    dataEntrega.style.marginBottom = "5px";

    // Campo: Data de vencimento (label e input)
    const dataVencimentoTitulo = document.createElement("p");
    dataVencimentoTitulo.innerHTML = "Data de Vencimento:"
    const dataVencimento = document.createElement("input");
    dataVencimento.type = "date";
    dataVencimento.style.display = "block";
    dataVencimento.style.marginBottom = "5px";

    // Campo: Cor (usado para destacar visualmente a atividade)
    const inputCor = document.createElement("input");
    inputCor.type = "color";
    inputCor.style.display = "block";
    inputCor.style.marginBottom = "10px";

    // Botão de salvar atividade
    const botaoSalvar = document.createElement("button");
    botaoSalvar.textContent = "Salvar";

    // Evento ao clicar no botão "Salvar"
    botaoSalvar.addEventListener("click", () => {
        // Verifica se nome e descrição foram preenchidos
        if(inputNome.value.trim() == "" || inputDesc.value.trim() == "" || inputRecurso.value.trim() == "" || dataVencimento.value.trim() == "" || dataEntrega.value.trim() == ""){
            alert("A atividade deve ter um nome, uma descrição, um recurso, uma data de entrega e de vencimento.");
            return;
        } else {
            // Cria objeto da atividade
            let atividade = {
                nome: inputNome.value,
                descricao: inputDesc.value,
                responsavel: selectResponsavel.value,
                recurso: inputRecurso.value,
                status: selectStatus.value,
                cor: inputCor.value
            };

            // Adiciona ao array de atividades do projeto
            projetoList.atividades.push(atividade);

            // Cria visualmente a atividade na tela
            let novaAtividade = document.createElement("div");
            novaAtividade.classList.add("atividade");
            novaAtividade.style.border = "1px solid #ddd";
            novaAtividade.style.padding = "5px";
            novaAtividade.style.marginTop = "5px";

            // Título da atividade
            let tituloAtividade = document.createElement("h2");
            tituloAtividade.textContent = inputNome.value;

            // Descrição da atividade
            const descAtividade = document.createElement("p");
            descAtividade.textContent = inputDesc.value;

            // Responsável
            let respAtividade = document.createElement("p");
            respAtividade.textContent = `Responsável: ${selectResponsavel.value}`;

            // Tipo de recurso
            let recursoAtividade = document.createElement("p");
            recursoAtividade.textContent = `Recurso: ${inputRecurso.value}`;

            // Status da atividade
            let statusAtividade = document.createElement("p");
            statusAtividade.textContent = `Status: ${selectStatus.options[selectStatus.selectedIndex].text}`;

            // Define a cor de fundo com base no input
            novaAtividade.style.border = "5px solid " + inputCor.value;
            novaAtividade.style.backgroundColor = "white";

            // Data de entrega e vencimento
            let dataInfo = document.createElement("p");
            dataInfo.textContent = `Entrega: ${dataEntrega.value} | Vencimento: ${dataVencimento.value}`;

            // Botão de editar
            const editarAtividade = document.createElement("button");
            editarAtividade.textContent = "Editar atividade";

            // Botão de deletar
            const deletarAtividade = document.createElement("button");
            deletarAtividade.textContent = "Deletar atividade";

            // Adiciona todos os elementos à div da nova atividade
            novaAtividade.appendChild(tituloAtividade);
            novaAtividade.appendChild(descAtividade);
            novaAtividade.appendChild(respAtividade);
            novaAtividade.appendChild(recursoAtividade);
            novaAtividade.appendChild(statusAtividade);
            novaAtividade.appendChild(dataInfo);
            novaAtividade.appendChild(editarAtividade);
            novaAtividade.appendChild(deletarAtividade);

            // Adiciona a atividade na área de atividades
            areaAtividades.appendChild(novaAtividade);

            // Evento de editar atividade
            editarAtividade.addEventListener("click", () => {
                const formEditar = document.createElement("div");
                formEditar.style.border = "1px dashed #aaa";
                formEditar.style.padding = "10px";
                formEditar.style.marginTop = "10px";
                formEditar.style.backgroundColor = "#f9f9f9";

                const inputNomeEditar = document.createElement("input");
                inputNomeEditar.value = tituloAtividade.textContent; 
                inputNomeEditar.style.display = "block";
                inputNomeEditar.style.marginBottom = "5px";

                const inputDescEditar = document.createElement("textarea");
                inputDescEditar.value = descAtividade.textContent; 
                inputDescEditar.rows = 3;
                inputDescEditar.style.display = "block";
                inputDescEditar.style.marginBottom = "5px";

                const ResponsavelEditar = document.createElement("select");
                membrosProjetoLista.forEach(membro => {
                  let membroOp = new Option(`${membro}`);
                  ResponsavelEditar.add(membroOp);
                 }); 
                const RecursoEditar = document.createElement("input");
                const StatusEditar = document.createElement("select");

                const op1 = new Option("Pendente", "pendente");
                const op2 = new Option("Em andamento", "em_andamento");
                const op3 = new Option("Concluído", "concluido");

                StatusEditar.add(op1);
                StatusEditar.add(op2);
                StatusEditar.add(op3);

                const dataEntregaEditar = document.createElement("input");
                dataEntregaEditar.type = "date";
                dataEntregaEditar.value = dataEntrega.value;

                const dataVencimentoEditar = document.createElement("input");
                dataVencimentoEditar.type = "date";
                dataVencimentoEditar.value = dataVencimento.value;

                const inputCorEditar = document.createElement("input");
                inputCorEditar.type = "color";

                const botaoSalvarEditar = document.createElement("button");
                botaoSalvarEditar.textContent = "Salvar";

                botaoSalvarEditar.addEventListener("click", () => {
                    if(inputNomeEditar.value.trim() === "" || inputDescEditar.value.trim() === ""){
                        alert("Nome e descrição não podem ficar vazios");
                        return;
                    }

                    // Atualiza os valores na interface
                    tituloAtividade.textContent = inputNomeEditar.value;
                    descAtividade.textContent = inputDescEditar.value;
                    respAtividade.textContent = `Responsável: ${ResponsavelEditar.value}`
                    novaAtividade.style.backgroundColor = "5px solid " + inputCorEditar.value;
                    dataInfo.textContent = `Entrega: ${dataEntregaEditar.value} | Vencimento: ${dataVencimentoEditar.value}`;
                    formEditar.remove(); // Remove formulário de edição
                });

                // Adiciona campos ao formulário de edição
                formEditar.appendChild(inputNomeEditar);
                formEditar.appendChild(inputDescEditar);
                formEditar.appendChild(ResponsavelEditar);
                formEditar.appendChild(inputCorEditar);
                formEditar.appendChild(dataEntregaEditar);
                formEditar.appendChild(dataVencimentoEditar);
                formEditar.appendChild(botaoSalvarEditar);

                novaAtividade.appendChild(formEditar); // Adiciona o form de edição à atividade
            });

            // Evento para deletar atividade
            deletarAtividade.addEventListener("click", () => {
                areaAtividades.removeChild(novaAtividade); // Remove atividade da tela
            });

            formAtividade.remove(); // Remove formulário de criação após salvar
        }
    });

    // Adiciona todos os campos ao formulário
    formAtividade.appendChild(inputNome);
    formAtividade.appendChild(inputDesc);
    formAtividade.appendChild(selectResponsavel);
    formAtividade.appendChild(inputRecurso);
    formAtividade.appendChild(selectStatus);
    formAtividade.appendChild(dataEntregaTitulo);
    formAtividade.appendChild(dataEntrega);
    formAtividade.appendChild(dataVencimentoTitulo);
    formAtividade.appendChild(dataVencimento);
    formAtividade.appendChild(inputCor);
    formAtividade.appendChild(botaoSalvar);

    // Só adiciona o form se ainda não foi adicionado
    if (!novoProjeto.contains(formAtividade)) {
        novoProjeto.appendChild(formAtividade);
    }
});

// Edição do nome do projeto
btnEditar.addEventListener("click", () => {
    const tituloAtual = novoProjeto.querySelector("h1"); // Pega o título atual

    const formEditarProjeto = document.createElement("div");
    formEditarProjeto.style.marginTop = "10px";
    formEditarProjeto.style.padding = "10px";
    formEditarProjeto.style.border = "1px dashed #aaa";
    formEditarProjeto.style.backgroundColor = "#f2f2f2";

    const inputNomeProjeto = document.createElement("input");
    inputNomeProjeto.value = tituloAtual.textContent;
    inputNomeProjeto.style.marginRight = "10px";

    const botaoSalvarEdicao = document.createElement("button");
    botaoSalvarEdicao.textContent = "Salvar";

    // Atualiza nome do projeto
    botaoSalvarEdicao.addEventListener("click", () => {
        if (inputNomeProjeto.value.trim() === "") {
            alert("O nome do projeto não pode ficar vazio.");
            return;
        }
        tituloAtual.textContent = inputNomeProjeto.value;
        formEditarProjeto.remove(); // Remove formulário após salvar
    });

    formEditarProjeto.appendChild(inputNomeProjeto);
    formEditarProjeto.appendChild(botaoSalvarEdicao);

    // Insere formulário após o título
    novoProjeto.insertBefore(formEditarProjeto, tituloAtual.nextSibling);
});

// Botão de deletar projeto
btnDeletar.addEventListener("click", () => {
    projetoArea.removeChild(novoProjeto); // Remove o projeto inteiro da tela
});

// Adiciona o projeto na área principal
projetoArea.appendChild(novoProjeto);
}