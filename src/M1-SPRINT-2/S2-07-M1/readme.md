Atividade CSS - Utilizando os Seletores CSS

Visão Geral
Nos conteúdos anteriores você aprendeu a utilizar alguns seletores. Hora de praticar!

Como deve ficar o seu site:

<img src="./assets/example-1.svg" alt="example 1" />

Para te auxiliar melhor, segue a estrutura do código HTML, porém sem as classes:

<!-- <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>CSS Seletores</title>
  </head>
  <body>
    <h1>Kenzie Academy Brasil</h1>
    <small>NOSSO FOCO É TRANSFORMAR VIDAS!</small>
    <h2>Se torne uma <span>pessoa desenvolvedora</span> em 1 ano</h2>
    <p>Saiba mais sobre os nossos programas <a href="">clicando aqui</a></p>

    <h2>Sobre nós</h2>
    <p>
      A Kenzie Academy começou em 2017, nos Estados Unidos, e chegou ao Brasil
      em 2019 com o objetivo de formar profissionais completos para ingressarem
      no mercado de tecnologia rapidamente.

      Tudo isso sem mensalidade e com alta qualidade de ensino.
    </p>
    <h2>Programas <span>oferecidos</span></h2>
    <ul>
        <li>Software Engineering</li>
        <li>UX Engineering</li>
        <li>Digital Marketing</li>
    </ul>
    <p>Todos os direitos reservados</p>

  </body>
</html> -->

Passo a Passo:
Crie um arquivo HTML e um CSS para executar as tarefas.
Para o título 'Kenzie Academy Brasil': Crie uma tag h1.
Para o texto 'NOSSO FOCO É TRANSFORMAR VIDAS!': Crie uma tag small e insira o segundo texto.
Para o texto 'Se torne uma pessoa desenvolvedora em 1 ano': Crie uma tag h2. Dentro do título, envolva o texto 'pessoa desenvolvedora' com uma tag span, e nesta tag insira a classe 'color-blue' para inserir a cor azul no trecho. Você deve estilizar essa classe para que ela ganhe o estilo necessário.
Para o texto 'Saiba mais sobre os nossos programas clicando aqui': Crie uma tag P para inserir o texto, e ao final insira uma tag a para inserir o link, envolvendo o texto: 'clicando aqui'.
Para o título 'Sobre nós': Crie uma tag h2.
Para o texto 'A Kenzie Academy começou em 2017, nos Estados Unidos, e chegou ao Brasil em 2019...': Crie uma tag p e insira a class 'background-blue' e realize a estilização onde o background é azul e o texto é branco.
Para o texto 'Programas oferecidos': Crie uma tag h2. Dentro do título, envolva o texto 'oferecidos' com uma tag span, e nesta tag insira a classe 'color-blue' para inserir a cor azul no trecho.
No texto com a lista 'Software Engineering - UX Engineering...': Crie uma tag ul e envolva cada item da lista dentro de uma tag li.
Para o texto 'Todos os direitos reservados': Crie uma tag p com a classe 'background-black', onde o background é preto e a cor do texto é branca.
Para os textos centralizados: crie uma classe com o nome 'text-center' e insira a propriedade text-align: center.
