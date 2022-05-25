# be-the-hero


Sistema desenvolvida na Semana OmniStack, oferecido pela rocketseat.

Esse é um projeto com o intuito de facilitar as ONGS a divilgarem casos onde elas precisão de ajuda.
A parte mobile pemite que o usuario visualize os casos e entre em contato com a ONG ajudar.

Nesse sistema foram usados:
    Node.JS, 
    React.JS, 
    React Native.
    
    
    
    
    Para rodar o Help Us no Windows

Back-end:

Install node.js version 16

https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi

Install python3

https://www.python.org/downloads/release/python-3104/

No arquivo backend/package.json

remover a versão do sqlite

apaga essa linha --> "sqlite3": ""

Rode no terminal --> npm install sqlite3

Depois entre no backend e rode

npm install  --> para baixar as dependencia e depois

npm start    --> para iniciar o back

----------------------

Fronte-end:

entre no diretorio do front e rode no terninal

npm install --> para baixar as dependencia e depois

npm start   --> para iniciar o front

-------------------------------

Mobile:

no cmd executar o comando

ipconfig --> para saber o seu ip

vai no arquivo 

mobile/src/service/api.js

e coloque seu ip no lugar onde está o atual

entre no diretorio do mobile e rode no terninal

npm install  --> para baixar as dependencia e depois

npm install  --> global expo-cli --> para instalar o expo

npm start    --> para iniciar o mobile
