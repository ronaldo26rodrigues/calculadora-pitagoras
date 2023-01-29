# Calculadora de Pitágoras
Calcula as relações entre os lados de um triângulo retângulo com o teorema de Pitágoras. Feito com React e Flask

Está disponível para ser acessado pelo link https://calculadora-pitagoras.vercel.app!

## Funções

Fornecendo dois valores, a calculadora é capaz de encontrar os demais, exibindo tais valores e uma representação gráfica do triângulo encontrado

## Executar localmente

A aplicação foi feita usando o framework de desenvolvimento front-end React, e Typescript. É possível instalar todas as dependências a partir do arquivo `package.json`, com o comando `npm install`, e executado com `npm run dev`

O backend foi feito com o frameword de desenvolvimento web em python Flask, que também pode ser instalado com o comando `pip install -r requirements.txt`, e executado com `flask --app main run` (para executar em modo de desenvolvimento, e após configurar o [ambiente virtual do python](https://docs.python.org/pt-br/3/library/venv.html)

# Disponibilidade

* O site está hospedado na plataforma [Vercel](https://vercel.com) e pode ser acessado pelo link
  * https://calculadora-pitagoras.vercel.app
* A API está hospedada na plataforma [Python EveryWhere](https://www.pythonanywhere.com), e recebe requisições do tipo `GET` através do endereço
  * https://ronaldo26rodrigues.pythonanywhere.com/calculadora
  * Exemplo de requisição: https://ronaldo26rodrigues.pythonanywhere.com/calculadora?catetoA=3&catetoB=4&hipotenusa=5&anguloA=0&anguloB=0&altura=0&h1=0&h2=0&area=0
  * Valores desconhecidos devem ser definidos para 0
