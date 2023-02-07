<h1>Atividade | Javascript: Barbearia Web</h1>

<h3>Introdução</h3>
Aqui vamos colocar em prática todo nosso conhecimento de manipulação de objetos por meio do uso de funções.

<h3>Contextualizando</h3>
Um de seus clientes é barbeiro, sua babearia oferece cortes de cabelo e, claro, barba.

Com a alta demanda ele não está conseguindo dar conta de atender todos os clientes.

Com a grande dificuldade em atender todas as demandas dos clientes, ele te contratou para desenvolver um sistema onde o cliente poderá realizar uma série de ações, como:

Buscar Corte.  
buscaCortePorId(). Esta função recebe como parâmetro um id que, quando encontrado, retorna um objeto corte. Caso o id não exista na lista de cortes, retorne ⁠Corte não encontrado.

Observe que para acessar a lista você primeiro precisa acessar o objeto barbearia e, em seguida, percorrer a lista de cortes para procurar o id passado por parâmetro. Caso encontre o id, retorne o objeto (corte).

Buscar Barba.  
buscaBarbaPorId(). Esta função recebe como parâmetro um id que, quando encontrado, retorna um objeto barba. Caso o id não exista na lista de cortes, retorne ⁠Barba não encontrado.

Observe que para acessar a lista você primeiro precisa acessar o objeto barbearia e, em seguida, percorrer a lista de barbas para procurar o id passado por parâmetro. Caso encontre o id, retorne o objeto (barba).

Consultar se a barbearia está aberta ou fechada.  
verificaStatusBarbearia(). Esta função não irá receber parâmetros, ela irá verificar se a propriedade estaAberto da barbearia é true ou false. Caso seja true retorne: ⁠"Estamos abertos" e caso seja false retorne: "Estamos fechados".
⁠

Buscar todos os cortes que a barbearia oferece.  
retornaTodosCortes(). Esta função não irá receber parâmetros, ela irá retornar a lista de cortes que a barbearia oferece. ⁠Acesse a propriedade cortes do objeto barbearia e a retorne.

Buscar todas as barbas que a barbearia oferece.  
retornaTodasBarbas(). Esta função não irá receber parâmetros, ela irá retornar a lista de barbas que a barbearia oferece. ⁠Acesse a propriedade barbas do objeto barbearia e a retorne.

Orçar um pedido.  
criaPedido(). Esta função recebe três parâmetros: o nome do cliente, o id do corte a ser realizado e o id da barba a ser feita.

Antes de criar o pedido, você deverá consultar se os ids que foram recebidos pela função pertencem a algum dos objetos das listas (cortes e barbas). Para isso, use as funções já criadas buscaCortePorId() e buscaBarbaPorId() e armazene o retorno de cada uma delas em uma variável (uma para cada função).
⁠
Crie um objeto pedido, que tenha as seguintes propriedades:

nome -> Armazena a variável nome do cliente recebida como parâmetro.

pedidoCorte -> Armazena o tipo do corte pedido.

pedidoCortePreco -> Armazena o valor do corte.

pedidoBarba -> Armazena o tipo da barba do pedido.

pedidoBarbaPreco -> Armazena o valor da barba.

Retorne o objeto pedido.

Calcular o valor total.  
calculaTotal(). Esta função recebe um pedido como parâmetro. Acesse as propriedades pedidoCortePreco e pedidoBarbaPreco, some o valor das duas e retorne a soma.

O cliente também solicitou uma funcionalidade para atualização dos preços e dos tipos de serviços oferecidos.

Atualizar serviço.  
atualizarServico(). Esta função recebe uma lista (cortes ou barbas), o id do item a ser atualizado, o novo tipo e/ou o novo valor.
Caso o item não seja encontrado ou se pelo menos 1 dos novos valores for nulo, retorne: "Entrada de valores inválida". Valores vazios não são permitidos.

Acesse o índice da lista e efetue a atualização. Retorne: "Item atualizado com sucesso".

Parte do código já começou a ser desenvolvido.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
