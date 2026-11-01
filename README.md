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

Há 91 fichas individuais em `personagens/`, com HTML real e endereços próprios, por exemplo:

- `personagens/casa-do-dragao/rhaenyra-targaryen/`
- `personagens/o-problema-dos-3-corpos/jin-cheng/`
- `personagens/noturno/jurek-walter/`

As fichas são separadas do mapa e contêm apresentação do personagem, histórico agrupado por temporada, filtro de episódio, personagens relacionados e link para o Mapa de Conexões. A URL preserva a seleção, como `?temporada=1&episodio=4`. A troca de episódio atualiza o endereço e funciona com voltar/avançar do navegador. O histórico e as relações exibidos são limitados ao episódio escolhido; registros posteriores ficam ocultos. Apenas a temporada 1 está cadastrada.

As listas de personagens e o índice têm filtro por categoria. As categorias usam cinco cores consistentes; as fichas individuais também identificam a categoria. Em A Casa do Dragão, emblemas vetoriais simplificados aparecem ao lado dos retratos e nas fichas, seguindo a casa do personagem, independentemente do núcleo narrativo.

Cada HTML tem título e descrição próprios, URL canônica e dados estruturados ProfilePage/Person. O índice `personagens/index.html` oferece links estáticos para todas as fichas; `sitemap.xml` lista 95 URLs. A configuração de URLs usa o endereço público atual `https://michelkovacs.github.io/series-journal/`.

## Regenerar as fichas

Depois de atualizar os dados dos dossiês:

```sh
python3 scripts/generate-character-pages.py
```

O gerador usa Python 3 e Node.js para ler os dados locais e grava as fichas, o índice, `character-directory.js`, `sitemap.xml` e `robots.txt`. Não consulta serviços externos. Os arquivos gerados devem ser enviados ao GitHub junto com os dados atualizados.

## Conteúdo e imagens

- **A Casa do Dragão:** dez episódios, 62 personagens (48 pessoas e 14 dragões) e histórico da primeira temporada.
- **O Problema dos 3 Corpos:** oito episódios da adaptação Netflix de 2024, 15 personagens e histórico da primeira temporada.
- **Noturno:** 14 personagens e material narrativo apurado até o episódio 1. O episódio 2, *For Such a Time as This*, consta como lançado, mas o seu resumo ainda não foi confirmado. As fichas deixam essa limitação explícita.

As fotos automáticas usam arquivos locais identificados como personagens na série e, em Noturno, as fontes de cenas indicadas no HTML original. A busca por retratos de atores foi removida. Em Noturno, `noturno-photos.js` preserva as fontes de cenas de Jonah, Jurek e Saga indicadas no HTML original fornecido pelo usuário. Elas são externas, têm tratamento de erro e alternativas quando disponíveis, e são compartilhadas entre mapa, cards, resumo, jornal e fichas. O ambiente bloqueia acesso a Apple, CloudFront e iClarified, portanto essas URLs não puderam ter disponibilidade e conteúdo revalidados nesta alteração. As outras pessoas continuam sem foto padrão até existir uma imagem do personagem identificada. Onde não há foto confirmada, a interface informa a ausência, em vez de usar o rosto de outro personagem ou um retrato do ator fora do papel. A antiga foto de Stephen Graham usada como imagem de Noturno foi retirada; o dossiê usa agora a capa indicada pelo usuário em URL do Amazon Media. Procedência das fotos está em `assets/characters/sources.json`, `assets/three-body-characters/sources.json` e `assets/series/sources.json`.

Rodapés, campos de anotações e checkboxes foram removidos. Não são feitas novas gravações de anotações. A opção de enviar fotos pelo mapa permanece; essas imagens ficam no navegador do usuário. As fichas usam as fotos locais confirmadas; as fichas de Noturno também recuperam fotos do personagem já enviadas neste navegador (`noturno-fotos-v3` ou `noturno-photos`).

## Interface

O estilo compartilhado segue a referência Calendly de `DESIGN.md`, com Manrope local, texto azul-marinho e ações azuis. Os cabeçalhos ocupam toda a largura e rolam com a página. Usam imagem da série ampliada, a mesma arte no fundo e degradê horizontal com paleta própria: tons de fogo para A Casa do Dragão, azuis para O Problema dos 3 Corpos e tons escuros para Noturno. As fichas individuais usam o mesmo tratamento. O botão Atualizar fotos foi removido; o envio de fotos na ficha lateral do mapa permanece. Os contadores ficam apenas no mapa. As imagens dos trechos têm altura fixa mesmo com vários personagens; o botão de próximo episódio tem destaque verde.

O Resumo da Temporada mantém a diagramação de jornal em duas páginas A4 e aviso de spoilers. As matérias têm nomes clicáveis e prévias de personagens; o link de ficha abre a página individual. A edição de Noturno é parcial. O jornal não inclui rodapé.

O Mapa de Conexões dos três dossiês permite combinar várias categorias em um menu de botões com estado selecionado (sem checkboxes). A seleção combina os personagens das categorias escolhidas, funciona junto com a busca e permanece ao trocar de episódio; Centralizar ou Todas as categorias restaura a visualização completa.

## Revisão do elenco de A Casa do Dragão

Aemond já integra o elenco desde o episódio 6. A foto adulta só é liberada no episódio 8, evitando antecipar sua aparência após o episódio 7. A lista e o mapa respeitam também os filtros escolhidos. A revisão acrescentou 22 pessoas da primeira temporada, completou o histórico de Aemond no episódio 8 e antecipou a entrada de Lyonel Strong para o episódio 1 e Vaemond Velaryon para o episódio 3, mantendo suas revelações posteriores nos capítulos corretos. O mapa usa duas colunas dentro de cada núcleo para acomodar o elenco ampliado. A lista de inclusões e seus limites está em `docs/hotd-season-1-cast-audit.md`.

## Dragões de A Casa do Dragão

A categoria Dragões inclui Syrax, Caraxes, Vhagar, Seasmoke, Vermax, Dreamfyre, Meleys, Sunfyre, Arrax, Vermithor, Moondancer, Tyraxes, Silverwing e Balerion (histórico). Todos têm fichas estáticas, filtro dedicado, histórico e relações com cavaleiros conhecidos até o episódio. A troca de cavaleiro de Vhagar só ocorre a partir do episódio 7; o destino de Arrax só aparece no episódio 10. Dragões apenas mencionados no conselho final são liberados no episódio 10. Todos os 14 dragões têm imagens locais em `assets/dragons/`, com procedência em `sources.json`. Há seis imagens de cena (Caraxes, Vhagar, Syrax, Seasmoke, Sunfyre e o crânio de Balerion); os oito restantes usam ilustrações de referência identificadas na interface, conforme a preferência do usuário. `DRAGON_IMAGE_INFO` diferencia cenas e ilustrações em cards, fichas e prévias.

## Mapa de Westeros

A aba Locais de A Casa do Dragão usa `westeros-map.js` e o mapa vetorial original `assets/maps/westeros.svg`. O litoral de Westeros usa 3.674 vértices de contornos da base Atlas of Thrones; a costa de Essos e o relevo são ilustrativos. A origem e a licença da adaptação ficam em `assets/maps/NOTICE.md`. A arte sem rótulos pode ser regenerada com `python3 scripts/generate-westeros-map.py`. Os 11 locais são liberados por `from_` em `dragon-data.js`; os acontecimentos do painel são filtrados pelo episódio. Ao voltar para um capítulo anterior, pins, nomes e detalhes posteriores são removidos. O seletor da tela cheia acompanha o seletor principal. Há navegação por teclado, arraste e zoom. Os pins usam emblemas somente quando um domínio familiar é conhecido até o episódio selecionado; Pentos e os Degraus não recebem uma casa arbitrária. Na tela cheia, o mapa ocupa 100% da largura e da altura da tela, sem margens laterais; as informações ficam em uma seção abaixo, com ação para voltar ao mapa. O modo ampliado também funciona quando a API Fullscreen não está disponível.

## Publicação

Sirva todos os arquivos estáticos e a pasta `personagens/`. As branches `main` e `gh-pages` são mantidas em conjunto. Para o GitHub Pages, use **Deploy from a branch → gh-pages → /(root)** em Settings → Pages.

Não é necessário executar o gerador no GitHub Pages: os HTMLs ficam versionados. Fontes locais e licenças estão em `assets/fonts/`.

## Verificação

Verifique a sintaxe dos JavaScripts com `node --check`. A validação no Chromium cobre navegação entre os três dossiês, ausência de rodapés/anotações/checkboxes, URLs individuais, histórico e fotos limitados ao episódio, estado de voltar/avançar, retorno ao mapa com personagem selecionado, links do jornal e telas de 320, 390 e 1280 px. A validação estática confere metadados, integridade do sitemap e existência dos arquivos vinculados nas fichas.

A capa de Noturno usa diretamente a URL do Amazon Media indicada pelo usuário: https://m.media-amazon.com/images/S/pv-target-images/ef9425e1792b320dd0da4498623cbc24d749ee7081701b64263515291f6bcb41.jpg. A mesma imagem aparece no cabeçalho e em seu fundo, no resumo, no jornal e nas 14 fichas. O degradê usa verde-oliva e areia. O download local foi bloqueado pela política de rede do ambiente, por isso não há cópia local; a disponibilidade do arquivo externo não pôde ser verificada nesta sessão. A identidade tipográfica permanece apenas como fallback do resumo.
