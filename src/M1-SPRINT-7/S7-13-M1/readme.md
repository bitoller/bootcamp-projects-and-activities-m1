Atividade - JavaScript: DOM Manipulando Atributos

Você aprendeu a manipular atributos. Ao pensar em uma forma de uso que seria interessante, você acredita que identificar os usuários de um site com base em seu perfil de acesso, utilizando cores diferentes seria legal.

Dado o array de objetos:

<!-- const users = [
   {
    name: 'Madalena',
    profile: 'Admin',
    sector: 'Administration'
  },
  {
    name: 'Rafael',
    profile: 'user',
    sector: 'Finance'
  },  
  {
    name: 'Baltazar',
    profile: 'user',
    sector: 'Reception'
  },  
  {
    name: 'Carmen',
    profile: 'Admin',
    sector: 'Business'
  }    
] -->

Você deverá percorrer os objetos do array e gerar um card para cada um deles em tela.

Cada card tem uma cor específica com base no perfil de acesso do usuário.

Quando o sector for igual a Administration e o perfil for admin o card deve ter a cor de fundo: #748ffc.

Os demais usuários irão oscilar entre as cores de fundo:

#63e6be quando forem user
e #ffe066 quando forem admin.

Pensando na solução
Percorra todos os elementos da lista
Para cada propriedade do elemento crie um span
Teste o valor do setor e do perfil
'set' um atributo dependendo do resultado da condição
Use o css para criar o estilo do card, de acordo com o atributo setado

Dica!
Para inserir um atributo a um elemento que está na árvore DOM, você deverá usar: setAttribute
OU
classList

A diferença é que o classList adiciona uma classe já o setAttribute te dá mais opções, como:

'id', 'class', 'name', 'value', 'type'... Entre outros!