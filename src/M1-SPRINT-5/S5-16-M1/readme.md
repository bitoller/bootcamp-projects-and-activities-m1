Atividade: Lista de atividades lógica

A lista a seguir tem como proposito incentivar seu raciocinio lógico e técnico.

Aqui você vai desenvolver suas habilidades em funções, arrays, condicionais, loop's e objetos.

A partir do enunciado, você deverá desenvolver a resolução.

Antes de darmos incio as atividades, modele o objeto escola da seguinte maneira:

<!-- let escola = {
    nome: 'Escola Novo Estudo',
    status: true,
    nivel: 'Fundamental',
    nota: 3
  } -->

Sabemos que escola tem diversas outras propriedades, mas por hora usaremos só estas. Nota é a referente a qualidade do ensino, o valor varia de 1 a 5.

Alterando informações de um objeto

1- Desenvolva uma função chamada alterarStatus que recebe o objeto escola como parâmetro.

Esta função tem como objetivo alterar o status de funcionamento da escola. A escola pode estar true(aberta) ou false(fechada).

A função deve ser capaz de alternar o status de true para false e de false para true. Exemplo:

alterarStatus(escola)
retorno = {nome: 'Escola Novo Estudo', status: false, nivel: 'Fundamental', nota: 3}

2- Escreva uma função chamada alteraNivel que recebe como parâmetro um objeto escola e um valor para o nível. Nível pode adotar apenas três valores; primário, fundamental e ensino médio.

Caso o valor passado não seja nenhuma das opção retorne: "Valor inválido".

Valide a informação, testanto se ela se encaixa em alguma das três opções.

Normalize as informações para realizar uma comparação precisa.

A primeira letra da string, deve ficar sempre em maiúsculo e as demais em minúsculo. Retorne o objeto atualizado.

Exemplo:

alteraNivel(escola, 'primário')
retorno = {nome: 'Escola Novo Estudo', status: true, nivel: 'Primário', nota: 3}

Exemplo:

alteraNivel({escola, 'Jardim de infância')
retorno = valor inválido.

3- Escreva uma função chamada alteraNome que recebe como parâmetro um objeto escola e um valor para o nome.

Faça a validação do Nome, não pode ser inserido formatos diferentes de string, caso seja um formato diferente, retorne: 'Formato inválido'.

Exemplo:
alteraNome(escola, 'Escola Estudo')
retorno = {nome: 'Escola Estudo', status: true, nivel: 'Fundamental', nota: 3}

Exemplo:
alteraNome(escola, 23232)
retorno = Formato inválido

4- Escreva uma função chamada classificaEscola que recebe como parâmetro um objeto escola e um valor para a nota. Nota deve ser do tipo number e deve estar no intervalo de 1 a 5, caso contrário retorne: 'valor inválido'.

Exemplo:
classificaEscola(escola, 5)
retorno = {nome: 'Escola Estudo', status: true, nivel: 'Fundamental', nota: 5}

Exemplo:
classificaEscola(escola, 8)
retorno = valor inválido

Acessando informações de um objeto

5- Escreva uma função chamada verificaStatus que recebe como parâmetro um objeto escola.

Sua função deve verificar se o status da escola é true ou false.

Se o status da for true, você deve retornar; 'Escola aberta', caso contrário retorne; 'Escola fechada'.

Exemplo:
verificaStatus({nome: 'Escola Estudo', status: true, nivel: 'Fundamental', nota: 3})
retorno = 'Escola aberta'

Exemplo:
verificaStatus({nome: 'Escola Estudo', status: false, nivel: 'Fundamental', nota: 3})
retorno = 'Escola fechada'

6- Escreva uma função chamada verificaQualidadeEnsino que recebe como parâmetro um objeto escola.

Sua função deve verificar qual a qualidade do ensino da escola.

Se a nota estiver entre 1 e 2, retorne: 'Esta não é uma boa escola'.

Se estiver entre 3 e 4, retorne: 'Esta é uma boa escola' .

Se a nota for 5, retorne: 'Uma escola excelente'

Exemplo:

verificaQualidadeEnsino({nome: 'Escola Estudo', status: true, nivel: 'Fundamental', nota: 5})
retorno = 'Uma escola excelente'