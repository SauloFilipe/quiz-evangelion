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

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correto;

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }
        quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove(
    )
    quiz.appendChild(quizItem);
}
