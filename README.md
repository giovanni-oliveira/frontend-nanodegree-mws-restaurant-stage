# Feedreader

Análises de restaurantes

## Índice

- [Instruções](#instrucoes)
- [Mapa](#user-content-leafletjs-and-mapbox)
- [Contribuição](#contribuicao)

## Instruções

1. Baixe ou clone o repositório.
2. Na pasta do projeto, crie um httpserver. Exemplo em python:
    - Verifique a versão `python -V`
    - Para versões 2.x rode `python -m SimpleHTTPServer 8000` e 3.x `python3 -m http.server 8000` ou `python -m http.server 8000`
3. Acesse `http://localhost:8000`

## Leaflet.js e Mapbox:

Esse repositório utiliza [leafletjs](https://leafletjs.com/) com [Mapbox](https://www.mapbox.com/). Adicione sua 'MAPBOX API KEY' na propriedade 'mapboxToken' nos arquivos main.js e restaurant_info.js.

## Contribuição

Esse projeto foi criado com base no repositório da Udacity para entrega do terceiro projeto do curso 'Web Front-End Avançado'.
