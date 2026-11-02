# Series Journal

Site estático em português com dossiês de **Noturno**, **A Casa do Dragão — T1**, **O Problema dos 3 Corpos — Netflix, T1** e **For All Mankind — T1 a T5**.

## Executar

Sem dependências de instalação ou compilação:

```sh
cd /workspace/series-journal
python3 -m http.server 3000 --bind 0.0.0.0
```

A abertura é `index.html`; os outros dossiês estão em `dragon.html`, `three-body.html` e `for-all-mankind.html`.

## Páginas dos personagens

Há 142 fichas individuais em `personagens/`, com HTML real e endereços próprios, por exemplo:

- `personagens/casa-do-dragao/rhaenyra-targaryen/`
- `personagens/o-problema-dos-3-corpos/jin-cheng/`
- `personagens/noturno/jurek-walter/`

As fichas são separadas do mapa e contêm apresentação do personagem, histórico agrupado por temporada, filtro de episódio, personagens relacionados e link para o Mapa de Conexões. A URL preserva a seleção, como `?temporada=1&episodio=4`. A troca de episódio atualiza o endereço e funciona com voltar/avançar do navegador. O histórico e as relações exibidos são limitados ao episódio escolhido; registros posteriores ficam ocultos. Os três dossiês originais mantêm a temporada 1; For All Mankind inclui as temporadas 1 a 5.

As listas de personagens e o índice têm filtro por categoria. As categorias usam cores consistentes, com seis tons disponíveis; as fichas individuais também identificam a categoria. Em A Casa do Dragão, brasões detalhados locais aparecem ao lado dos retratos e nas fichas, seguindo a casa do personagem, independentemente do núcleo narrativo.

Cada HTML tem título e descrição próprios, URL canônica e dados estruturados ProfilePage/Person. O índice `personagens/index.html` oferece links estáticos para todas as fichas; `sitemap.xml` lista 147 URLs. A configuração de URLs usa o endereço público atual `https://michelkovacs.github.io/series-journal/`.

## Regenerar as fichas

Depois de atualizar os dados dos dossiês:

```sh
python3 scripts/generate-character-pages.py
```

O gerador usa Python 3 e Node.js para ler os dados locais e grava as fichas, o índice, `character-directory.js`, `sitemap.xml` e `robots.txt`. Não consulta serviços externos. Os arquivos gerados devem ser enviados ao GitHub junto com os dados atualizados.

## Conteúdo e imagens

- **For All Mankind:** cinco temporadas, 50 episódios, 51 personagens e histórico agrupado por temporada.

- **A Casa do Dragão:** dez episódios, 62 personagens (48 pessoas e 14 dragões) e histórico da primeira temporada.
- **O Problema dos 3 Corpos:** oito episódios da adaptação Netflix de 2024, 15 personagens e histórico da primeira temporada.
- **Noturno:** 14 personagens e material narrativo apurado até o episódio 1. O episódio 2, *For Such a Time as This*, consta como lançado, mas o seu resumo ainda não foi confirmado. As fichas deixam essa limitação explícita.

As fotos automáticas usam arquivos locais identificados como personagens na série e, em Noturno, as fontes de cenas indicadas no HTML original. A busca por retratos de atores foi removida. Em Noturno, `noturno-photos.js` preserva as fontes de cenas de Jonah, Jurek e Saga indicadas no HTML original fornecido pelo usuário. Elas são externas, têm tratamento de erro e alternativas quando disponíveis, e são compartilhadas entre mapa, cards, resumo, jornal e fichas. O ambiente bloqueia acesso a Apple, CloudFront e iClarified, portanto essas URLs não puderam ter disponibilidade e conteúdo revalidados nesta alteração. As outras pessoas continuam sem foto padrão até existir uma imagem do personagem identificada. Onde não há foto confirmada, a interface informa a ausência, em vez de usar o rosto de outro personagem ou um retrato do ator fora do papel. A antiga foto de Stephen Graham usada como imagem de Noturno foi retirada; o dossiê usa agora a capa indicada pelo usuário em URL do Amazon Media. Procedência das fotos está em `assets/characters/sources.json`, `assets/three-body-characters/sources.json` e `assets/series/sources.json`.

Rodapés e campos de anotações foram removidos. Os checkboxes atuais controlam os filtros por episódio e a exibição opcional de personagens no resumo. Não são feitas novas gravações de anotações. A opção de enviar fotos pelo mapa permanece; essas imagens ficam no navegador do usuário. As fichas usam as fotos locais confirmadas; as fichas de Noturno também recuperam fotos do personagem já enviadas neste navegador (`noturno-fotos-v3` ou `noturno-photos`).

## Interface

O estilo compartilhado segue a referência Calendly de `DESIGN.md`, com Manrope local, texto azul-marinho e ações azuis. Os cabeçalhos ocupam toda a largura e rolam com a página. Usam imagem da série ampliada, a mesma arte no fundo e degradê horizontal com paleta própria: tons de fogo para A Casa do Dragão, azuis para O Problema dos 3 Corpos e tons escuros para Noturno. As fichas individuais usam o mesmo tratamento. O botão Atualizar fotos foi removido; o envio de fotos na ficha lateral do mapa permanece. Os contadores ficam apenas no mapa. As imagens dos trechos têm altura fixa mesmo com vários personagens; o botão de próximo episódio tem destaque verde.

O Resumo da Temporada mantém a diagramação de jornal em duas páginas A4 e aviso de spoilers. As matérias têm nomes clicáveis e prévias de personagens; o link de ficha abre a página individual. A edição de Noturno é parcial. O jornal não inclui rodapé.

O Mapa de Conexões dos três dossiês permite combinar várias categorias em um menu de botões com estado selecionado (sem checkboxes). A seleção combina os personagens das categorias escolhidas, funciona junto com a busca e permanece ao trocar de episódio; Centralizar ou Todas as categorias restaura a visualização completa.

## Revisão do elenco de A Casa do Dragão

Aemond já integra o elenco desde o episódio 6. A foto adulta só é liberada no episódio 8, evitando antecipar sua aparência após o episódio 7. A lista e o mapa respeitam também os filtros escolhidos. A revisão acrescentou 22 pessoas da primeira temporada, completou o histórico de Aemond no episódio 8 e antecipou a entrada de Lyonel Strong para o episódio 1 e Vaemond Velaryon para o episódio 3, mantendo suas revelações posteriores nos capítulos corretos. O mapa usa duas colunas dentro de cada núcleo para acomodar o elenco ampliado. A lista de inclusões e seus limites está em `docs/hotd-season-1-cast-audit.md`.

## Dragões de A Casa do Dragão

A categoria Dragões inclui Syrax, Caraxes, Vhagar, Seasmoke, Vermax, Dreamfyre, Meleys, Sunfyre, Arrax, Vermithor, Moondancer, Tyraxes, Silverwing e Balerion (histórico). Todos têm fichas estáticas, filtro dedicado, histórico e relações com cavaleiros conhecidos até o episódio. A troca de cavaleiro de Vhagar só ocorre a partir do episódio 7; o destino de Arrax só aparece no episódio 10. Dragões apenas mencionados no conselho final são liberados no episódio 10. Todos os 14 dragões têm imagens locais em `assets/dragons/`, com procedência em `sources.json`. Há nove imagens de cena (Caraxes, Vhagar, Syrax, Seasmoke, Sunfyre, Meleys, Arrax, Vermax e o crânio de Balerion); os cinco restantes usam ilustrações de referência identificadas na interface, conforme a preferência do usuário. `DRAGON_IMAGE_INFO` diferencia cenas e ilustrações em cards, fichas e prévias.

## Mapa de Westeros

A aba Locais de A Casa do Dragão usa `westeros-map.js` e o mapa vetorial original `assets/maps/westeros.svg`. O litoral de Westeros usa 3.674 vértices de contornos da base Atlas of Thrones; a costa de Essos e o relevo são ilustrativos. A origem e a licença da adaptação ficam em `assets/maps/NOTICE.md`. A arte sem rótulos pode ser regenerada com `python3 scripts/generate-westeros-map.py`. Os 11 locais são liberados por `from_` em `dragon-data.js`; os acontecimentos do painel são filtrados pelo episódio. Ao voltar para um capítulo anterior, pins, nomes e detalhes posteriores são removidos. O seletor da tela cheia acompanha o seletor principal. Há navegação por teclado, arraste e zoom. Os pins usam emblemas somente quando um domínio familiar é conhecido até o episódio selecionado; Pentos e os Degraus não recebem uma casa arbitrária. Na tela cheia, o mapa ocupa 100% da largura e da altura da tela, sem margens laterais; as informações ficam em uma seção abaixo, com ação para voltar ao mapa. O modo ampliado também funciona quando a API Fullscreen não está disponível.

## Publicação

Sirva todos os arquivos estáticos e a pasta `personagens/`. As branches `main` e `gh-pages` são mantidas em conjunto. Para o GitHub Pages, use **Deploy from a branch → gh-pages → /(root)** em Settings → Pages.

Não é necessário executar o gerador no GitHub Pages: os HTMLs ficam versionados. Fontes locais e licenças estão em `assets/fonts/`.

## Verificação

Verifique a sintaxe dos JavaScripts com `node --check`. A validação no Chromium cobre navegação entre os três dossiês, ausência de rodapés/anotações, URLs individuais, histórico e fotos limitados ao episódio, estado de voltar/avançar, retorno ao mapa com personagem selecionado, links do jornal e telas de 320, 390 e 1280 px. A validação estática confere metadados, integridade do sitemap e existência dos arquivos vinculados nas fichas.

A capa de Noturno usa diretamente a URL do Amazon Media indicada pelo usuário: https://m.media-amazon.com/images/S/pv-target-images/ef9425e1792b320dd0da4498623cbc24d749ee7081701b64263515291f6bcb41.jpg. A mesma imagem aparece no cabeçalho e em seu fundo, no resumo, no jornal e nas 14 fichas. O degradê usa verde-oliva e areia. O download local foi bloqueado pela política de rede do ambiente, por isso não há cópia local; a disponibilidade do arquivo externo não pôde ser verificada nesta sessão. A identidade tipográfica permanece apenas como fallback do resumo.

## Busca de fotos ainda pendente

A revisão mais recente adicionou dez imagens locais conferidas: Aemma, Harwin, Vaemond, Jacaerys, Lucerys, Erryk, Arryk, Meleys, Arrax e Vermax. A cobertura atual é de 45 dos 62 registros de A Casa do Dragão, incluindo os dragões com ilustrações identificadas. Os 17 sem foto estão listados em `docs/character-photo-audit.json`. Noturno ainda tem 11 personagens sem fonte cadastrada e três com fontes externas cuja disponibilidade não foi verificada. A capa indicada pelo usuário é a última alternativa para os três protagonistas representados nela; não é usada como foto de outra pessoa.

Foi salvo um rascunho de ampliação de rede, preservando as regras existentes e acrescentando `static.wikia.nocookie.net`, `gameofthrones.fandom.com`, `upload.wikimedia.org`, `commons.wikimedia.org`, `m.media-amazon.com`, `www.iclarified.com` e `d2a0gza273xfgz.cloudfront.net`. O retorno exige revisão, salvamento e publicação nas configurações do ambiente. Salvar o rascunho não aplica o acesso à instância atual; a busca externa precisa continuar após sua aplicação. Não considerar o pedido de completar todas as fotos concluído enquanto essas pendências existirem.

## Listas e resumos de episódios

Os três dossiês e o índice de personagens têm busca parcial por nome, ignorando acentos, filtro de categoria e ordenação selecionável. A ordem padrão é nome e, em caso de empate, categoria; a opção Categoria usa a categoria como chave principal e o nome como desempate. Os controles continuam ativos ao trocar o episódio. As fotos enviadas em Noturno são associadas pelo ID do personagem, independentemente da ordem visual.

Os resumos disponíveis contêm 80 trechos com dois parágrafos cada: 40 em A Casa do Dragão, 34 em O Problema dos 3 Corpos e seis em Noturno (episódio 1). O texto complementar detalha o contexto e as consequências imediatas dos acontecimentos já apresentados, sem incorporar capítulos posteriores. O renderizador limita cada trecho a dois parágrafos. Os botões de ficha foram retirados: a imagem ou o marcador de foto indisponível e o nome na legenda abrem a ficha individual com o episódio preservado. A altura dos quadrantes continua fixa mesmo com três ou quatro personagens.

## Filtros de participação por episódio

A abertura padrão dos três dossiês continua em Personagens; links diretos com `tab` ou `personagem` preservam seu destino. O checkbox Somente neste episódio está disponível nas listas, no índice e no Mapa de Conexões. Conforme a escolha do usuário, a participação dos personagens inclui presenças e menções nos trechos do resumo, não pretende reproduzir os créditos completos em cena. O gerador reconstrói `episode-presence.js` a partir dos participantes identificados e dos nomes nos textos, respeitando o episódio de liberação de cada pessoa. Execute `python3 scripts/generate-character-pages.py` após alterações nos resumos. Busca, categoria e ordenação continuam combináveis com o filtro.

No índice, cada série tem seu próprio seletor de episódio; os links carregam esse episódio para evitar abrir uma ficha com revelações posteriores à seleção. Nas 142 fichas individuais, o checkbox limita o histórico ao capítulo escolhido e os relacionados aos participantes e citados nesse capítulo. Quando não há registros, a página informa isso sem inventar acontecimentos. Noturno só tem conteúdo narrativo confirmado no primeiro episódio.

No mapa de Westeros, o checkbox filtra pins, nomes, lista e enquadramento usando `places[].episodes`. Funciona na tela cheia e conserva as informações apenas até o capítulo selecionado. Ponta Tempestade é conhecida desde a visita de Rhaenyra no episódio 4; a missão de Lucerys permanece restrita ao episódio 10. O estado do checkbox é mantido ao trocar de episódio.


## For All Mankind · cinco temporadas

`for-all-mankind.html` inclui as cinco temporadas lançadas até 1º de novembro de 2026: 50 episódios, 150 acontecimentos em português, 51 fichas individuais e cinco edições de jornal em duas páginas. O cadastro de episódios foi conferido com o TVmaze e a quinta temporada, com a página oficial Apple TV Press. Títulos originais e datas constam em `docs/for-all-mankind-episode-catalog.json`; a apuração e as limitações de imagens estão em `docs/for-all-mankind-sources.md`.

A seleção inicial abre Personagens, temporada 1, episódio 1. Os links públicos usam `?temporada=3&episodio=7`; internamente, os índices de 1 a 50 permitem acumular histórico sem revelar temporadas posteriores. O diretório também oferece seleção de temporada. Busca por nome, ordenação por nome/categoria, categorias combináveis no mapa e o checkbox de participantes/citados nos acontecimentos funcionam com esse índice. As fichas mantêm URL única por personagem e agrupam o histórico por temporada. Voltar/avançar restaura a seleção.

Há fotos locais de 28 personagens (29 retratos, incluindo as versões jovem e adulta de Aleida), 50 imagens locais de episódios e a arte azul de divulgação escolhida pelo usuário como capa da série. Os demais 23 personagens usam iniciais e identificação de imagem indisponível; não são preenchidos com fotos dos atores fora do papel. Aleida usa um retrato da personagem jovem desde o episódio 1; sua foto adulta e a de Danny têm liberação própria para não aparecerem durante sua infância. Fontes das imagens: `assets/for-all-mankind/sources.json`.

Execute `python3 scripts/generate-character-pages.py` para regenerar tudo. Esse comando também chama `scripts/generate-for-all-mankind.py` e preserva a quarta série nos índices, no sitemap e nos filtros. O conjunto passa a ter 142 fichas e 147 URLs no sitemap. A validação específica é `python3 scripts/validate-for-all-mankind.py`.

A publicação mantém as branches `main` e `gh-pages` sincronizadas.

Os oito brasões de A Casa do Dragão usam imagens detalhadas locais em `assets/houses/detailed/`, incluindo a referência Targaryen fornecida pelo usuário. Cards, fichas e pins resolvem os mesmos arquivos por `HOUSE_DATA.images`. Autoria, licenças e origem: `assets/houses/README.md` e `assets/houses/sources.json`. A geração das fichas mantém os caminhos corretos e o controle de domínio no mapa continua limitado ao episódio.


## Aplicativo PWA e resumos ampliados

O site pode ser instalado como **Series Journal**, com ícones próprios, abertura em janela independente e atalhos para os quatro dossiês. O convite aparece após o carregamento, nas páginas das séries e nas fichas. Em navegadores com `beforeinstallprompt`, o botão abre a confirmação nativa apenas após o clique; no Safari são apresentadas as instruções para adicionar à tela inicial ou ao Dock. O convite não aparece no modo instalado e respeita por sete dias a escolha Agora não.

O service worker atende somente o subdiretório deste site. Ele salva a estrutura principal, os dados dos dossiês e as páginas/arquivos consultados, com limite para o cache de navegação. Os resumos textuais podem ser abertos sem conexão; fotos que ainda não foram carregadas podem ficar indisponíveis. Uma página offline oferece retorno aos dossiês se uma ficha nunca consultada não estiver salva. Quando há conexão, o conteúdo é procurado primeiro na rede. Não há envio de preferências nem uso de serviços de rastreamento.

`manifest.webmanifest`, `pwa.js`, `pwa.css` e `sw.js` implementam a instalação. `pwa-assets.js` é gerado por `python3 scripts/build-pwa.py`, que também insere os links do manifesto com caminhos corretos em todas as páginas. O comando principal `python3 scripts/generate-character-pages.py` já executa essa etapa; gere novamente após mudar os arquivos do site, para atualizar a versão do cache. A validação estática é `python3 scripts/validate-pwa.py`. O PWA precisa de HTTPS ou localhost. O identificador `/series-journal/` corresponde ao endereço publicado no GitHub Pages.

Os 150 acontecimentos de For All Mankind agora têm dois parágrafos cada, com contexto, decisões e consequências limitados ao episódio escolhido. O filtro de participação inclui nomes citados em ambos os parágrafos. O jornal continua usando a versão condensada para conservar suas duas páginas. A nova capa azul é compartilhada pelo cabeçalho, pelo fundo e pelas 51 fichas da série; a origem está em `assets/for-all-mankind/sources.json`.

A verificação no Chromium cobre critérios de instalação em contexto normal, gesto de confirmação, recusa, modo instalado, instruções para iPhone, escopo de subdiretório, episódios/fichas offline e recuperação por uma página offline. Também foram conferidos os cinquenta episódios ampliados, os filtros e os cinco jornais exportados em PDF com duas páginas cada.

## Exibição opcional de personagens nos acontecimentos

O Resumo por Episódio das quatro séries oferece a checkbox **Exibir personagens**. Ela começa desmarcada a cada carregamento da página: os painéis de retratos ficam ocultos e os textos ocupam toda a largura disponível do card, com altura ajustada ao conteúdo. Ao marcar, o formato anterior é restaurado, com retratos circulares e links para as fichas. A escolha é mantida durante a troca de episódios e temporadas na mesma página, inclusive depois de atualizações das fotos. A capa do episódio continua visível.
