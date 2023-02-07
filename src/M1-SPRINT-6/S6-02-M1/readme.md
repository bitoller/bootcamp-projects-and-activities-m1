<h1>Lista de atividades - Manipulando objetos e arrays</h1>

<h3>Introdução</h3>
Os exercícios a seguir tem como propósito incentivar seu raciocinio lógico e técnico. Aqui você vai desenvolver ainda mais suas habilidades em funções, arrays, condicionais, loops e objetos.

Antes de darmos início as atividades, declararemos uma lista de departamentos. Estes departamentos fazem parte de uma empresa e seu objetivo é criar um sistema que consiga facilitar a manipulação dos dados dos departamentos.

Para acessar a propriedade de um objeto usamos o ponto (.)
Se alguma propriedade de um objeto for uma lista, é possível acessar da mesma maneira como faríamos com arrays aninhados.  

<h3>1- Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista.</h3>

<h3>2- Desenvolva uma função chamada changeDepartmentName que deverá receber dois parâmetros: o nome atual do departamento e um novo nome para ser atribuído a ele. Esta função deve retornar o objeto correspondente ao departamento com o nome já atualizado. Se o nome do departamento não for encontrado, a função deve retornar: "Department not found."</h3>

<h3>3- Desenvolva uma função chamada giveTheDepartmentABreak que alterne o valor da variável working, sempre que chamada. Em resumo, se working estiver como true, deverá mudar para false, e vice-versa. A função deve retornar a propriedade já atualizada.</h3>

<h3>4- Desenvolva uma função chamada howManyEmployeesInDepartment que recebe o nome do departamento como parâmetro e verifica quantos funcionários estão naquele departamento. Caso o departamento não seja encontrado, retornar: "Departament not found".</h3>

<h3>5- Desenvolva uma função chamada insertNewEmployeeInDepartment que consiga adicionar um novo funcionário ao departamento. A função deve receber o nome do departamento como parâmetro e um objeto pessoa com:</h3>

- name, uma variável do tipo string
- age, uma variável do tipo number
- responsibility, uma variável do tipo string
- salary, uma variável do tipo number

<h4>Passo a Passo:</h4>

- Percorra a lista de departamentos.
- Verifique se o nome do departamento passado existe na lista. Se não existir, retorne "Department not found".
- Percorra as propriedades do departamento e encontre a propriedade employees.
- Insira o novo funcionário a lista de funcionários.
- Retorne o departamento atualizado.

Exemplo:  
insertNewEmployeeInDepartment( 'Financial', {name:'Rosemary', age:44, responsibility: 'Financial expedition director', salary: 15600})
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
