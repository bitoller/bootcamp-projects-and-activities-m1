Atividade - JavaScript: Lista de Objetos - I

1 ª Parte: Modelagem

Exercício 1 - Modelando Pessoa.

Dado as propriedades:

Nome
Ano de nascimento
CPF
Cidade
Estado
Logradouro
Crie o objeto Pessoa que tenha todas propriedades citadas.

Exercício 2 - Modelando Escola.

Dado as propriedades:

Nome
CNPJ
Área de atuação
Cidade
Estado
Logradouro
Curso
Crie o objeto Escola que tenha todas propriedades citadas.

Exercício 3 - Modelando Curso.

Dado as propriedades:

Nome
Duração em anos
Turma
Módulos
Crie o objeto Curso que tenha todas propriedades citadas.

Exercício 4 - Modelando Endereço.

Dado as propriedades:

Cidade
Estado
Logradouro
Cep
Crie o objeto Endereço que tenha todas propriedades citadas.

2 ª Parte: Manipulação
Dado o objeto:

<!-- const figure = {  
        name: "Carl",   
        classes: ["Warrior"],  
        leader_trend: true,
        power: 6, 
        allied: true  
    } -->

Resolva:

1- ⁠Escreva uma função chamada returnName. A função, quando chamada, deve retornar o nome do objeto.

Exemplo:
chamada da função: returnName()
Saída: Carl

2- Escreva uma função chamada verifyClasses. A função quando chamada, deve retornar de qual classe é o objeto figure. Perceba que a propriedade é uma lista - quando a lista tiver apenas um elemento, retorne somente o valor do elemento, e quando a lista tiver mais que um elemento, retorne toda a lista.

Exemplo:
chamada da função: verifyClasses()
Saída: Warrior

3- Escreva uma função chamada realPower. A função quando chamada deve retornar a força real (power) do objeto figure.

Caso o objeto tenha a propriedade leader_trend definida como true, o valor da propriedade power é elevada ao quadrado.

Retorne o valor da força do objeto.

Exemplo:
chamada da função: realPower()
Saída: 36

4- Escreva uma função chamada insertNewClass. A função deve receber uma string como parâmetro. A função realiza a inserção de mais uma classe na lista de classes do objeto. Cada objeto pode obter somente 3 classes.

Antes de inserir uma classe, verifique se o tamanho da lista de classes é maior que 3. Caso seja maior, retorne: ⁠"Este personagem não pode estar em mais classes".

Caso seja menor, a função deverá verificar se o valor recebido é semelhante a algum valor permitido. As classes permitidas são:⁠ ⁠"Warrior", "Barbarious", "Arch", "Hunter", "Survivor". ⁠Se o valor for permitido, a função deve verificar se o valor é semelhante à algum valor que já está contido no objeto.

Se sim, retorne: "O personagem já pertence a classe x"

Caso seja diferente, retorne: ⁠"Classe x inserida com sucesso"
Onde x é o valor da classe.

Exemplo:
chamada da função: insertNewClass("hunter")
Saída: ⁠"Classe Hunter inserida com sucesso"

⁠Normalize o texto.

5- Escreva uma função chamada noMoreBarbarious. A função deve conseguir verificar se o objeto é um aliado.

Todos que possuírem a classe "Barbarious" em sua lista serão considerado um inimigo.

Verifique se a propriedade allied está como verdadeira; se sim, verifique se a classe "Barbarious" pertence à lista de classes do personagem; caso pertença, troque a propriedade allied de verdadeira para falsa e retorne:

⁠"O x agora é um inimigo".
Onde x é o nome do objeto.