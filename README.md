# Jogo da Vida de Conway

O Jogo da Vida de Conway é um autômato celular desenvolvido pelo matemático britânico John Horton Conway em 1970. Ele é um exemplo bem conhecido de autômato celular e reproduz, através de regras simples, as alterações e mudanças em grupos de seres vivos.

## Regras do Jogo da Vida

O jogo é jogado em um tabuleiro bidimensional, composto por células que podem estar vivas (representadas por um estado ativo) ou mortas (representadas por um estado inativo). Cada célula interage com suas células vizinhas, seguindo as seguintes regras a cada nova "geração":

1. Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
2. Qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração.
3. Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
4. Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.

Essas regras simples criam padrões complexos e interessantes ao longo das gerações.

## Como Jogar

1. Acesse o site: https://conway-game-of-life-raphael.netlify.app

2. Ou clone esse repositório e abra o arquivo index.html no seu navegador de preferência.

3. Clique no botão "Iniciar jogo" e veja a magia acontecer por si só.

## Limitações

- Este jogo da vida de Conway implementado em JavaScript é uma versão simples e básica do conceito. Existem implementações mais avançadas com recursos adicionais disponíveis.

## Contribuição

Se você encontrar algum problema, tiver alguma sugestão ou quiser contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Espero que este README seja útil! Divirta-se explorando os padrões fascinantes que podem surgir! Se você tiver alguma outra pergunta, fique à vontade para perguntar.
