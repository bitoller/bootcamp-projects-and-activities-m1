let listaAlunos = [
  {
    nome: "João",
    curso: "Ciencia da Computação",
    turno: "Noturno",
    mediaCorte: 7,
    materias: [
      {
        nome: "Calculo I",
        avaliacoes: [6, 8, 10, 8],
      },
      {
        nome: "Pensamento Computacional",
        avaliacoes: [6, 8, 6, 8],
      },
      {
        nome: "Linguagem Orientada a Objetos",
        avaliacoes: [7, 8, 9, 10],
      },
      {
        nome: "Arquitetura de Organização de Computadores",
        avaliacoes: [6, 8, 7, 8],
      },
    ],
  },
];

//1

function app() {
  let average = 0;
  let approved = 0;
  for (let i = 0; i < listaAlunos[0].materias.length; i++) {
    for (let j = 0; j < listaAlunos[0].materias[i].avaliacoes.length; j++) {
      average += listaAlunos[0].materias[i].avaliacoes[j];
    }
    average = average / listaAlunos[0].materias[i].avaliacoes.length;
    if (average >= 6) {
      approved++;
    }
  }
  return approved;
}
console.log(app());

//2

function calculateAverage() {
  let average = 0;
  let average2 = 0;
  for (let i = 0; i < listaAlunos[0].materias.length; i++) {
    average2 += listaAlunos[0].materias[i].avaliacoes.length;
    for (let j = 0; j < listaAlunos[0].materias[i].avaliacoes.length; j++) {
      average += listaAlunos[0].materias[i].avaliacoes[j];
    }
  }
  average = average / average2;
  return average.toFixed(2);
}
console.log(calculateAverage());

//3

const onibus = {
  capacidade: 40,
  origem: "Curitiba-PR",
  destino: "Rio de Janeiro-RJ",
  paradas: [
    "São Paulo-SP",
    "Campinas-SP",
    "São José dos Campos-SP",
    "Volta Redonda-RJ",
  ],
  passageiros: [
    {
      nome: "Luis da Silva",
      rg: "1234567890",
      bilhete: {
        origem: "Curitiba-PR",
        destino: "São José dos Campos-SP",
        poltrona: 15,
      },
    },
    {
      nome: "João da Silva",
      rg: "1234567891",
      bilhete: {
        origem: "São Paulo-SP",
        destino: "Rio de Janeiro-RJ",
        poltrona: 16,
      },
    },
  ],
};

function bus(stop) {
  let passStop = [];
  for (let i = 0; i < onibus.paradas.length; i++) {
    if (stop.toLowerCase() == onibus.paradas[i].toLowerCase()) {
      for (let j = 0; j < onibus.passageiros.length; j++) {
        if (
          stop.toLowerCase() ==
          onibus.passageiros[j].bilhete.destino.toLowerCase()
        ) {
          passStop.push(onibus.passageiros[j]);
        }
      }
    }
  }
  return passStop;
}
console.log(bus("São José dos Campos-SP"));
