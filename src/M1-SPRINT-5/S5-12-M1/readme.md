<h1>JavaScript: Gestão de Perguntas</h1>

<h3>Importante</h3>
Nestes exercícios nós pedimos que defina funções independentes. Na maior parte dos casos você deve passar o objeto e um segundo ou terceiro parâmetro.

Analise cada situação e implemente métodos onde fizer mais sentido. Lembre-se: um método já passa de forma implícita o objeto que o tem.

<h3>Contexto</h3>
Você foi contratado para desenvolver uma aplicação para as perguntas dos eventos digitais chamada Slenzie. A ferramenta será responsável por armazenar as perguntas recebidas.

<h3>Execução</h3>
Crie um objeto chamado slenzie. Este objeto deve ter as seguintes propriedades:

nameEvent - Esta propriedade é do tipo string e será utilizada para armazenar o nome do evento em que será utilizada a ferramenta.  
questions - Esta propriedade recebe um valor do tipo lista, para armazenar cada pergunta realizada.  
O outro objeto necessário é o question. Ele deve ter as seguintes propriedades:

user - Esta é uma propriedade do tipo string e irá armazenar o nome do usuário que realizou a pergunta.  
userQuestion - Esta é uma propriedade do tipo string e irá armazenar a pergunta realizada pelo usuário.  
vote - Esta é uma propriedade do tipo number e deve armazenar obrigatoriamente um inteiro positivo. Inicialmente seu valor é zero.

<h4>Funcionalidades</h4>
<h3>Desenvolva uma função chamada createEvent.</h3>

Esta função recebe como parâmetro um objeto do tipo slenzie e uma string. Acesse a propriedade nameEvent do objeto slenzie e atribua a ela o valor da string recebida.

<h4>O que deve ser verificado</h4>

- Verifique se o valor recebido realmente é uma string.
- Verifique se o valor recebido como parâmetro tem no mínimo 5 caracteres.
- Se os testes forem bem sucedidos retorne o objeto slenzie atualizado.
- Se não, retorne: "The input value is invalid".

<h3>Desenvolva uma função chamada addQuestion.</h3>

Esta função recebe um objeto do tipo slenzie e um objeto do tipo question como parâmetro.

A pergunta (question) deve ser armazenada na lista de perguntas (questions) do objeto slenzie.

<h4>O que deve ser verificado</h4>

Verifique se o objeto do tipo question não possui propriedades vazias; é obrigatório que as propriedades possuam valor.

Se a propriedade user estiver vazia, retorne: "The user can't be empty".  
Se a propriedade userQuestion estiver vazia, retorne: "The question can't be null".

<h3>Desenvolva uma função chamada addVoteToQuestion.</h3>

Esta função deve receber um valor inteiro como parâmetro e o objeto slenzie. Acesse a lista de perguntas (questions) do objeto slenzie e incremente a propriedade vote do elemento da lista na posição recebida como parâmetro.

<h4>O que deve ser verificado</h4>

- Verifique se o valor passado está dentro dos limites do tamanho da lista
- Se o valor não estiver dentro dos limites da lista, retorne: "Question not found."
- Verifique se o valor passado é neutro ou um inteiro positivo.
- Se os valores não estiverem dentro dos padrões retorne: "The value is not allowed"
- Se tudo estiver dentro dos padrões verificados nos passos anteriores retorne:
"Vote registered successfully" .

<h3>Desenvolva uma função chamada questionAnswered.</h3>

Esta função deve receber um valor inteiro e o objeto slenzie como parâmetro.

Acesse a lista de perguntas (questions) e adicione a propriedade answered na pergunta (question) referente à posição do número inteiro recebido como parâmetro.

Defina o valor true para a propriedade answered .

<h4>O que deve ser verificado</h4>

- Verifique se o valor passado está dentro dos limites do tamanho da lista
- Se o valor não estiver dentro dos limites da lista, retorne: "Question not found."
- Verifique se o valor passado é neutro ou um inteiro positivo.
- Se os valores não estiverem dentro dos padrões retorne: "The value is not allowed"

<h3>Desenvolva uma função chamada unansweredQuestions.</h3>

Esta função recebe o objeto do tipo slenzie como parâmetro e retorna todas as perguntas que ainda não foram respondidas.

- Crie uma variável chamada output. Esta variável deve ser inicializada como uma lista vazia.
- Percorra a lista de perguntas (questions). As perguntas que não tiverem a propriedade answered como true deverão ser inseridas nesta lista.
- Retorne a lista output.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
