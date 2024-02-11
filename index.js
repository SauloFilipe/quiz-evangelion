//criação de perguntas e criação da Array

const perguntas = [
    {
        pergunta: "Qual é o nome do protagonista principal de Neon Genesis Evangelion?",
        respostas: [
            "Gendo Ikari",
            "Shinji Ikari",
            "Rei Ayanami",
        ],
        correto: 1
    },
    {
        pergunta: "Qual é a organização para a qual os personagens principais trabalham?",
        respostas: [
            "SEELE",
            "NERV",
            "Gehirn",
        ],
        correto: 1
    },
    {
        pergunta: "Quem é o piloto do Evangelion Unidade-02?",
        respostas: [
            "Rei Ayanami",
            "Mari Illustrious Makinami",
            "Asuka Langley Soryu",
        ],
        correto: 2
    },
    {
        pergunta: "Qual é a forma física dos Anjos em Neon Genesis Evangelion?",
        respostas: [
            "Criaturas monstruosas",
            "Humanos",
            "Robôs gigantes",
        ],
        correto: 1
    },
    {
        pergunta: "Qual é o nome do pai de Shinji e o comandante da NERV?",
        respostas: [
            "Kozo Fuyutsuki",
            "Gendo Ikari",
            "Ryoji Kaji",
        ],
        correto: 1
    },
    {
        pergunta: "Qual é o objetivo principal da organização SEELE em Neon Genesis Evangelion?",
        respostas: [
            "Controlar os Evangelions para seus próprios fins",
            "Proteger a humanidade dos Anjos",
            "Promover a evolução da humanidade",
        ],
        correto: 2
    },
    {
        pergunta: "Quem é considerada a Rei original?",
        respostas: [
            "Kaworu Nagisa",
            "Yui Ikari",
            "Rei Ayanami",
        ],
        correto: 1
    },
    {
        pergunta: "Qual é o nome do sistema usado para pilotar os Evangelions?",
        respostas: [
            "Sistema de Controle Psicológico",
            "Sistema de Unidade Mente-Eva",
            "Sistema de Controle Neural",
        ],
        correto: 2
    },
    {
        pergunta: "Qual é o nome do Evangelion pilotado por Rei Ayanami?",
        respostas: [
            "Unidade-02",
            "Unidade-01",
            "Unidade-00",
        ],
        correto: 2
    },
    {
        pergunta: "O que é o Instrumentality Project em Neon Genesis Evangelion?",
        respostas: [
            "Um plano para eliminar os Anjos",
            "Um projeto para unir todas as almas humanas em uma única consciência",
            "Um experimento para criar humanos artificiais",
        ],
        correto: 1
    }
];


//criação de 2 constantes, o quiz e o template, pegando o id "#quiz" e a tag "template"
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

//faz com que não haja elementos duplicados, no caso, o número de acertos
const corretas = new Set();
//apresenta quantas perguntas tem dentro da Array
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
//atribuição de conteúdo dentro do "span", sendo ele o números de acertos(+) a string "de" e o número máximo de perguntas
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

//laço de repetição das perguntas
for (const item of perguntas) {
    //criação de clones das perguntas, onde ele joga todas as perguntas no lugar da tag "h3"
    const quizItem = template.content.cloneNode(true);
    //.textContent seleciona o conteúdo do "h3" e substitui pelo oq está dentro de "item.pegunta"
    quizItem.querySelector('h3').textContent = item.pergunta;

    //laço de repetição das respostas
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        //.textContent seleciona o conteúdo que está dentro do span e coloca todas as respostas possíveis
        dt.querySelector('span').textContent = resposta;
        //faz uma busca pelo "input" dentro do "dt" e muda seu nome para pergunta- + o número da pergunta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        //configurando o valor do input para ser o índice da resposta selecionada dentro do array respostas associado à pergunta atual (item). 
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        //define um manipulador de eventos para o evento onchange do input. a função definida será executada sempre que o valor do input for alterado.
        dt.querySelector('input').onchange = (event) => {
            //verificando se a resposta selecionada pelo usuário, é igual à resposta correta armazenada no objeto item.
            const estaCorreta = event.target.value == item.correto;

            //se a pergunta atual (item) já estiver no conjunto corretas, ela é removida. isso garante que não haja duplicatas no conjunto.
            corretas.delete(item)
            //se a resposta selecionada pelo usuário estiver correta, a pergunta (item) é adicionada ao conjunto corretas.
            if (estaCorreta) {
                corretas.add(item)
            }
            //atualiza para o usuário quantas perguntas foram respondidas corretamente
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        //adiciona um filho ao elemento "dl"
        quizItem.querySelector('dl').appendChild(dt);
    }
    //apaga o elemento original que está no "dt" que está dentro do "dl"
    quizItem.querySelector('dl dt').remove(
    )
    //coloca a pergunta na tela
    quiz.appendChild(quizItem);
}