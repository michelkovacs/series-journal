# NOTURNO / DOSSIÊ

Site baseado no HTML fornecido, preservando conteúdo, cores, grafo e ilustrações do anexo. HTML, estilos e JavaScript foram separados em `index.html`, `style.css` e `app.js`.

## Executar

Sem dependências de build. Na pasta `/workspace/series-journal`:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Sirva os três arquivos juntos em qualquer hospedagem estática HTTPS para publicar.

## Funcionalidades

- Grafo com 14 personagens e 18 conexões, seleção, busca, categorias, arraste e zoom.
- Abas de personagens, sete locais e seis mistérios.
- Resumo ilustrado do episódio, controle de spoilers e atalhos para personagens.
- Anotações e resolução de mistérios persistentes neste navegador via localStorage.
- Upload local de retratos, com recorte e armazenamento no navegador.

O conteúdo narrativo foi mantido conforme o anexo, sem verificação editorial. Fotos automáticas dependem de sites externos e da API TVmaze; iniciais e ilustrações incorporadas são os fallbacks quando as fontes não estão disponíveis. As anotações e fotos locais não sincronizam entre dispositivos.

## Validação

`node --check app.js` verifica a sintaxe. Testes com Chromium validaram busca, filtros, seleção, zoom, navegação, perfis, locais, mistérios, controle de spoilers e persistência após recarregar. As cinco abas foram verificadas em largura de 390 px sem transbordamento horizontal, inclusive com as requisições de imagens externas bloqueadas.

## A Casa do Dragão — temporada 1

Escolha **A Casa do Dragão · T1** no seletor do cabeçalho ou abra `dragon.html` no mesmo servidor. O dossiê de Noturno permanece em `index.html`.

A expansão inclui os dez episódios, 40 acontecimentos resumidos em texto original, 26 perfis principais, 47 vínculos e 11 locais ao final da temporada. O seletor de episódio limita personagens, relações e atualizações dos perfis ao ponto escolhido. Os núcleos são agrupamentos narrativos, não uma indicação de sobrenome ou fidelidade definitiva. Perfis históricos permanecem consultáveis após a morte dos personagens.

Resumos e questões são específicos do episódio; perfis, relações e locais são cumulativos. Notas do resumo e dos mistérios são isoladas por episódio e série. É possível enviar e remover retratos próprios, armazenados localmente. As ilustrações são simbólicas e não dependem de fontes externas.

Os títulos dos episódios estão em inglês para evitar diferenças regionais. A referência da HBO está no rodapé; os resumos foram redigidos para este projeto, não transcritos. Não há conteúdo dos livros nem das temporadas posteriores.

Para publicar, inclua também `dragon.html`, `dragon.js` e `dragon-data.js`. Não há instalação ou compilação. Verifique a sintaxe com `node --check dragon.js` e `node --check dragon-data.js`.

Validação em Chromium: os dez episódios e as cinco abas, limites de aparição de personagens, atalhos do resumo para o grafo, busca/categorias, teclado, zoom/reset, ocultação de acontecimentos, isolamento e persistência de notas, larguras de 390 e 1280 px e retorno ao dossiê de Noturno, sem erros de JavaScript.

### Fotos do elenco

Inclua também `dragon-photos.js` na hospedagem. O site consulta o TVmaze para obter retratos identificados dos intérpretes e exibe a mesma foto no grafo, nos cartões e no perfil. As versões jovens/adultas são selecionadas conforme o episódio. Fotos enviadas pelo usuário têm prioridade; o botão “Restaurar foto do elenco” remove essa substituição. Bebês sem intérprete identificado ficam com iniciais até a fase com elenco identificado.

A consulta usa `api.tvmaze.com` e as imagens usam `static.tvmaze.com`. Falhas de rede preservam o funcionamento do dossiê e mostram um aviso na aba Personagens, com botão para tentar novamente. Fotos são retratos do elenco, não necessariamente caracterizações ou cenas da série.

A integração foi testada com respostas simuladas para os retratos, incluindo os 26 perfis no episódio 10, troca de elenco, prioridade de upload e restauração. A consulta real retornou HTTP 403 no proxy do ambiente; os dois domínios foram adicionados ao rascunho de rede e precisam ser aplicados nas configurações antes da validação real.

### Fotos locais — atualização

O site agora inclui 24 fotografias reais em `assets/characters/`, cobrindo 20 personagens no episódio 10, com procedência em `assets/characters/sources.json`. Elas têm prioridade sobre a consulta externa e funcionam sem acesso ao TVmaze. Inclua a pasta `assets` e `dragon-local-photos.js` na publicação. As fotos de fases jovens/adultas são usadas quando disponíveis; a foto infantil de Aegon não é reutilizada na adolescência.

Validação real no Chromium com toda a rede externa bloqueada confirmou fotos carregadas (`naturalWidth > 0`) nos cartões, no grafo e nos perfis. Ainda faltam fotos locais confirmadas de Aemma, Harwin, Joffrey Lonmouth, Jacaerys, Lucerys e Vaemond; para esses personagens a consulta externa e o upload continuam disponíveis. Imagens de procedência incerta ou ilustrações não foram apresentadas como fotos reais.

## Publicação no GitHub Pages

A branch `gh-pages` contém o HTML e os arquivos estáticos prontos para publicação, sem build. No GitHub, abra **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, branch **gh-pages**, pasta **/(root)** e salve. O GitHub publica o site em `https://michelkovacs.github.io/series-journal/`. O dossiê A Casa do Dragão fica em `/series-journal/dragon.html`.

A publicação requer que o GitHub Pages esteja habilitado nessa configuração. O envio por Git não habilita essa opção por si só.

## Noturno — calendário da temporada pesquisado na internet

`noturno-season.js` acrescenta o seletor e o calendário de dez episódios ao dossiê original. A pesquisa de 31/10/2026 encontrou um artigo de FreshCalendars, publicado em 29/10/2026, disponível em seu repositório público:

https://github.com/mustafaozcaninfo/freshcalendars/blob/b8cd454ea4a6aad37e49622ba57d66c413f42e84/apps/news/src/content/articles/2026/10/nocturne-apple-tv-release-date-episode-schedule-october-30.md

A fonte secundária cita comunicados da Apple TV Press: episódios 1 e 2 em 30/10/2026, seguidos de um episódio semanal até 25/12/2026. As datas intermediárias foram calculadas pela própria fonte a partir dessa periodicidade. Os comunicados da Apple estão vinculados no site; o acesso direto à Apple permaneceu bloqueado pela rede do ambiente durante a pesquisa.

O calendário não significa que os dez episódios já foram exibidos ou resumidos. O dossiê detalhado do episódio 1 preserva o conteúdo do HTML fornecido; o resumo do episódio 2 não foi localizado e os episódios 3–10 estão programados para datas posteriores à pesquisa. Esses capítulos mostram essa situação explicitamente e permitem notas separadas. Nenhum acontecimento dos livros foi usado para inventar enredo da adaptação. A data da pesquisa fica explícita e não muda automaticamente o estado editorial do conteúdo.

Validação no Chromium: dez opções e dez cartões, preservação do grafo e resumo originais, isolamento do conteúdo do episódio 1 nas cinco abas ao selecionar os outros episódios, notas persistentes por episódio, navegação do calendário, layout móvel de 390 px e regressão de A Casa do Dragão. Inclua `noturno-season.js` na publicação.
