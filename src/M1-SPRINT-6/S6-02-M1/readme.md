Lista de atividades - Manipulando objetos e arrays

Introdução
Os exercícios a seguir tem como propósito incentivar seu raciocinio lógico e técnico. Aqui você vai desenvolver ainda mais suas habilidades em funções, arrays, condicionais, loops e objetos.

Antes de darmos início as atividades, declararemos uma lista de departamentos. Estes departamentos fazem parte de uma empresa e seu objetivo é criar um sistema que consiga facilitar a manipulação dos dados dos departamentos.

<!-- let departmentList = [
  {
    departmentName: 'Financial',
    employees:
    [
      {
        name: 'Rose',
        age: 26,
        responsibility: 'Financial director',
        salary: 5600
      },
      {
        name: 'Stevem',
        age: 32,
        responsibility: 'Financial manager',
        salary: 4200
      },
      {
        name: 'Beca',
        age: 26,
        responsibility: 'Financial analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Expedition',
    employees:
    [
      {
        name: 'Rooper',
        age: 35,
        responsibility: 'Expedition director',
        salary: 5600
      },
      {
        name: 'Maggie',
        age: 22,
        responsibility: 'Expedition manager',
        salary: 4200
      },
      {
        name: 'Thompson',
        age: 41,
        responsibility: 'Expedition analyst',
        salary: 2800
      }
    ],
    working: true
  },
  {
    departmentName: 'Capitation',
    employees:
    [
      {
        name: 'Saory',
        age: 35,
        responsibility: 'Capitation director',
        salary: 5600
      },
      {
        name: 'Silvia',
        age: 22,
        responsibility: 'Capitation manager',
        salary: 4200
      },
      {
        name: 'Sonem',
        age: 41,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Havi',
        age: 41,
        responsibility: 'Trainee Capitation manager',
        salary: 1500
      },
      {
        name: 'Margie',
        age: 25,
        responsibility: 'Capitation analyst',
        salary: 2800
      },
      {
        name: 'Victoria',
        age: 18,
        responsibility: 'Trainee Capitation analyst',
        salary: 1500
      }
    ],
    working: true
  },
] -->

Para acessar a propriedade de um objeto usamos o ponto (.)
Se alguma propriedade de um objeto for uma lista, é possível acessar da mesma maneira como faríamos com arrays aninhados.
Exemplo de como acessar uma propriedade de um objeto:

<!-- for(let i = 0; i < objeto.length; i++){
  objeto[i].propriedade
} -->

Exemplo sobre como acessar uma propriedade de um objeto se ela for uma lista:

<!-- for(let i = 0; i < objeto.lista.length; i++){
  objeto.lista[i].propriedade
} -->

1- Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista.

2- Desenvolva uma função chamada changeDepartmentName que deverá receber dois parâmetros: o nome atual do departamento e um novo nome para ser atribuído a ele. Esta função deve retornar o objeto correspondente ao departamento com o nome já atualizado. Se o nome do departamento não for encontrado, a função deve retornar: "Department not found."

3- Desenvolva uma função chamada giveTheDepartmentABreak que alterne o valor da variável working, sempre que chamada. Em resumo, se working estiver como true, deverá mudar para false, e vice-versa. A função deve retornar a propriedade já atualizada.

4- Desenvolva uma função chamada howManyEmployeesInDepartment que recebe o nome do departamento como parâmetro e verifica quantos funcionários estão naquele departamento. Caso o departamento não seja encontrado, retornar: "Departament not found".

5- Desenvolva uma função chamada insertNewEmployeeInDepartment que consiga adicionar um novo funcionário ao departamento. A função deve receber o nome do departamento como parâmetro e um objeto pessoa com:
name, uma variável do tipo string
age, uma variável do tipo number
responsibility, uma variável do tipo string
salary, uma variável do tipo number

Passo a Passo:
Percorra a lista de departamentos.
Verifique se o nome do departamento passado existe na lista. Se não existir, retorne "Department not found".
Percorra as propriedades do departamento e encontre a propriedade employees.
Insira o novo funcionário a lista de funcionários.
Retorne o departamento atualizado.
Exemplo:

insertNewEmployeeInDepartment( 'Financial', {name:'Rosemary', age:44, responsibility: 'Financial expedition director', salary: 15600})

Retorno

<!-- departmentName: "Financial"
  employees: Array(4)
    {name: 'Rose', age: 26, responsibility: 'Financial director', salary: 5600}
    {name: 'Stevem', age: 32, responsibility: 'Financial manager', salary: 4200}
    {name: 'Beca', age: 26, responsibility: 'Financial analyst', salary: 2800}
    {name: 'Rosemary', age: 44, responsibility: 'Financial expedition director', salary: 15600}
  working: true -->