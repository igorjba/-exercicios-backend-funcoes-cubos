const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirprova(provaAluno) {
    let acertos = 0;

    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos = acertos + 1;
        }
    }
    let pontos = acertos * 2;
    console.log(`O aluno(a) João acertou ${acertos} questões e obteve nota ${pontos}`)
}
corrigirprova(prova);
