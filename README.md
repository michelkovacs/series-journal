# Series Journal

Site estático em português com dossiês de **Noturno**, **A Casa do Dragão — T1** e **O Problema dos 3 Corpos — Netflix, T1**.

## Executar

Sem dependências de instalação ou compilação:

```sh
cd /workspace/series-journal
python3 -m http.server 3000 --bind 0.0.0.0
```

A abertura é `index.html`; os outros dossiês estão em `dragon.html` e `three-body.html`.

## Páginas dos personagens

Há 55 fichas individuais em `personagens/`, com HTML real e endereços próprios, por exemplo:

- `personagens/casa-do-dragao/rhaenyra-targaryen/`
- `personagens/o-problema-dos-3-corpos/jin-cheng/`
- `personagens/noturno/jurek-walter/`

As fichas são separadas do mapa e contêm apresentação do personagem, histórico agrupado por temporada, filtro de episódio, personagens relacionados e link para o Mapa de Conexões. A URL preserva a seleção, como `?temporada=1&episodio=4`. A troca de episódio atualiza o endereço e funciona com voltar/avançar do navegador. O histórico e as relações exibidos são limitados ao episódio escolhido; registros posteriores ficam ocultos. Apenas a temporada 1 está cadastrada.

Cada HTML tem título e descrição próprios, URL canônica e dados estruturados ProfilePage/Person. O índice `personagens/index.html` oferece links estáticos para todas as fichas; `sitemap.xml` lista 59 URLs. A configuração de URLs usa o endereço público atual `https://michelkovacs.github.io/series-journal/`.

## Regenerar as fichas

Depois de atualizar os dados dos dossiês:

```sh
python3 scripts/generate-character-pages.py
```

O gerador usa Python 3 e Node.js para ler os dados locais e grava as fichas, o índice, `character-directory.js`, `sitemap.xml` e `robots.txt`. Não consulta serviços externos. Os arquivos gerados devem ser enviados ao GitHub junto com os dados atualizados.

## Conteúdo e imagens

- **A Casa do Dragão:** dez episódios, 26 personagens e histórico da primeira temporada.
- **O Problema dos 3 Corpos:** oito episódios da adaptação Netflix de 2024, 15 personagens e histórico da primeira temporada.
- **Noturno:** 14 personagens e material narrativo apurado até o episódio 1. O episódio 2, *For Such a Time as This*, consta como lançado, mas o seu resumo ainda não foi confirmado. As fichas deixam essa limitação explícita.

As fotos automáticas vêm exclusivamente dos arquivos locais identificados como personagens na série. A busca por retratos de atores foi removida. Onde não há foto confirmada, a interface informa a ausência, em vez de usar o rosto de outro personagem ou um retrato do ator fora do papel. A antiga foto de Stephen Graham usada como imagem de Noturno foi retirada; o dossiê usa uma identidade tipográfica enquanto não houver uma imagem da série confirmada. Procedência das fotos está em `assets/characters/sources.json`, `assets/three-body-characters/sources.json` e `assets/series/sources.json`.

Rodapés, campos de anotações e checkboxes foram removidos. Não são feitas novas gravações de anotações. A opção de enviar fotos pelo mapa permanece; essas imagens ficam no navegador do usuário. As fichas estáticas usam as fotos locais confirmadas.

## Interface

O estilo compartilhado segue a referência Calendly de `DESIGN.md`, com Manrope local, texto azul-marinho e ações azuis. Os cabeçalhos rolam com a página. Os contadores ficam apenas no mapa. As imagens dos trechos têm altura fixa mesmo com vários personagens; o botão de próximo episódio tem destaque verde.

O Resumo da Temporada mantém a diagramação de jornal em duas páginas A4 e aviso de spoilers. As matérias têm nomes clicáveis e prévias de personagens; o link de ficha abre a página individual. A edição de Noturno é parcial. O jornal não inclui rodapé.

## Publicação

Sirva todos os arquivos estáticos e a pasta `personagens/`. As branches `main` e `gh-pages` são mantidas em conjunto. Para o GitHub Pages, use **Deploy from a branch → gh-pages → /(root)** em Settings → Pages.

Não é necessário executar o gerador no GitHub Pages: os HTMLs ficam versionados. Fontes locais e licenças estão em `assets/fonts/`.

## Verificação

Verifique a sintaxe dos JavaScripts com `node --check`. A validação no Chromium cobre navegação entre os três dossiês, ausência de rodapés/anotações/checkboxes, URLs individuais, histórico e fotos limitados ao episódio, estado de voltar/avançar, retorno ao mapa com personagem selecionado, links do jornal e telas de 320, 390 e 1280 px. A validação estática confere metadados, integridade do sitemap e existência dos arquivos vinculados nas fichas.
