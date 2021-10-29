## 16PSYCHE

Projeto de uma API feita em nodeJS

Este projeto é um breve ensaio com o objetivo de simular uma integração com as apis da bling e pipedrive. 

algumas possiveis melhorias:
*cacheamento, com REDIS, rabbitMQ ou com qualquer outra ferramenta de seu interesse

*Authenticação

*refatoração

*Balanceamento de carga

*logger, algo muito importante para evitar perda de tempo no troubleshooting

*Metricas para alguma ferramenta de observabilidade

*Desvinculação das interfaces

*Estilo de codigo

.
.
.


Uma curiosidade, 16Psyche é um asteroide composto majoritariamente de metais, em sua maioria se encontra o ouro. Nada mais justo que usar
seu nome para uma ferramenta que visa dar uma mãozinha nos negócios ;-)

## Para baixar o projeto 

`git clone https://github.com/oragic/16Psyche.git`

## Requisitos Iniciais

Um drive de banco de dados, seja ele em cointainer,maquina virtual ou em cloud


OBS, so porossiga caso tenha o [npm] ou [yarn] instalado

## Instlando dependecias

1. `yarn install`

## Executando o ambiente de desenvolvimento no navegador

2 -> `yarn dev`

## Executando o build

3 -> `yarn build`

caso execute o projeto com pm2 lembre-se de mover o ecosystem para pasta dist

essa aplicação utiliza webhook para coletar eventos, logo com a mesma no você pode usar uma ferramena
para criar um tunel da sua maquina para a web, ou hospedar em alguma solução de produção. No 
desenvolvimento dessa aplicação foi utilizao ngrok para criar um tunel, pois é uma solulão muito simples,
tendo apenas que baixar o binario e executar o seguinte comando "./ngrock http PORT". siga esse guia para 
entender como configurar o webhook:https://pipedrive.readme.io/docs/guide-for-webhooks.


Esse progeto possui integração com prometheus,as métricas para passar a observar o desempenho estão em:
-> BASEURL/metrics
