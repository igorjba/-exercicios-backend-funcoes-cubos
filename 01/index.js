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

    for (let i = 0; i < provaAluno.questoes.length; i++) {
        if (provaAluno.questoes[i].resposta === prova.questoes[i].correta) {
            acertos = acertos + 1;
        }
    }
    let valorDaProva = provaAluno.valor / provaAluno.questoes.length;

    let pontos = acertos * valorDaProva;

    if (acertos === 0) {
        console.log(`O aluno(a) ${provaAluno.aluno} não acertou ${acertos} nenhuma questão, por isso obteve nota ${pontos}`);
    } else if (acertos === 1) {
        console.log(`O aluno(a) ${provaAluno.aluno} acertou ${acertos} questão e obteve nota ${pontos}`);
    } else {
        console.log(`O aluno(a) ${provaAluno.aluno} acertou ${acertos} questões e obteve nota ${pontos}`);
    }

}
corrigirprova(prova);