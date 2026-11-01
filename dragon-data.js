const DRAGON_DATA = {
  "characters": [
    {
      "id": "viserys",
      "name": "Viserys I Targaryen",
      "cat": "coroa",
      "from": 1,
      "desc": "Rei de Westeros, escolhido no Grande Conselho de Harrenhal. Busca preservar a unidade da família e do reino."
    },
    {
      "id": "rhaenyra",
      "name": "Rhaenyra Targaryen",
      "cat": "coroa",
      "from": 1,
      "desc": "Filha de Viserys e Aemma, cavaleira de Syrax. É nomeada herdeira após as perdas na família real."
    },
    {
      "id": "daemon",
      "name": "Daemon Targaryen",
      "cat": "coroa",
      "from": 1,
      "desc": "Irmão de Viserys e comandante da Patrulha da Cidade. Sua ambição e seus métodos provocam atritos na corte."
    },
    {
      "id": "alicent",
      "name": "Alicent Hightower",
      "cat": "hightower",
      "from": 1,
      "desc": "Filha de Otto e amiga próxima de Rhaenyra. Aproxima-se do rei viúvo por incentivo do pai."
    },
    {
      "id": "otto",
      "name": "Otto Hightower",
      "cat": "hightower",
      "from": 1,
      "desc": "Mão do Rei e pai de Alicent. Defende os interesses da Coroa enquanto amplia a influência de sua casa."
    },
    {
      "id": "corlys",
      "name": "Corlys Velaryon",
      "cat": "velaryon",
      "from": 1,
      "desc": "Senhor das Marés e mestre dos navios. Conhecido como Serpente Marinha, cobra uma resposta aos conflitos nos Degraus."
    },
    {
      "id": "rhaenys",
      "name": "Rhaenys Targaryen",
      "cat": "velaryon",
      "from": 1,
      "desc": "Esposa de Corlys, preterida pelo Grande Conselho na sucessão. Conhece os limites impostos às mulheres na disputa pelo trono."
    },
    {
      "id": "criston",
      "name": "Criston Cole",
      "cat": "corte",
      "from": 1,
      "desc": "Cavaleiro de origem modesta que derrota Daemon no torneio e recebe a atenção de Rhaenyra."
    },
    {
      "id": "aemma",
      "name": "Aemma Arryn",
      "cat": "coroa",
      "from": 1,
      "desc": "Rainha e mãe de Rhaenyra. Morre durante o parto; o bebê Baelon também não sobrevive."
    },
    {
      "id": "mysaria",
      "name": "Mysaria",
      "cat": "corte",
      "from": 1,
      "desc": "Companheira de Daemon em Porto Real. Sua posição é vulnerável às disputas dos poderosos."
    },
    {
      "id": "laena",
      "name": "Laena Velaryon",
      "cat": "velaryon",
      "from": 2,
      "desc": "Filha de Corlys e Rhaenys. Seus pais propõem seu casamento com Viserys para aproximar as casas."
    },
    {
      "id": "laenor",
      "name": "Laenor Velaryon",
      "cat": "velaryon",
      "from": 3,
      "desc": "Filho de Corlys e Rhaenys, cavaleiro de Seasmoke. Participa da campanha dos Degraus."
    },
    {
      "id": "aegon",
      "name": "Aegon Targaryen",
      "cat": "hightower",
      "from": 3,
      "desc": "Filho de Viserys e Alicent. Seu nascimento dá aos que rejeitam Rhaenyra uma alternativa masculina de sucessão."
    },
    {
      "id": "lyonel",
      "name": "Lyonel Strong",
      "cat": "corte",
      "from": 1,
      "desc": "Conselheiro de Viserys, conhecido por recomendações pragmáticas sobre a sucessão e as alianças."
    },
    {
      "id": "harwin",
      "name": "Harwin Strong",
      "cat": "corte",
      "from": 3,
      "desc": "Filho de Lyonel Strong, presente na caçada real. Conhecido por sua força física."
    },
    {
      "id": "larys",
      "name": "Larys Strong",
      "cat": "corte",
      "from": 3,
      "desc": "Filho de Lyonel e irmão de Harwin. Observa e escuta as conversas da corte."
    },
    {
      "id": "joffrey",
      "name": "Joffrey Lonmouth",
      "cat": "velaryon",
      "from": 5,
      "desc": "Companheiro de Laenor. É morto por Criston Cole durante a celebração do casamento real."
    },
    {
      "id": "jacaerys",
      "name": "Jacaerys Velaryon",
      "cat": "coroa",
      "from": 6,
      "desc": "Primogênito de Rhaenyra e legalmente filho de Laenor. A semelhança dos meninos com Harwin alimenta rumores."
    },
    {
      "id": "lucerys",
      "name": "Lucerys Velaryon",
      "cat": "coroa",
      "from": 6,
      "desc": "Segundo filho de Rhaenyra e Laenor. Sua origem é questionada por adversários da mãe."
    },
    {
      "id": "joffrey-son",
      "name": "Joffrey Velaryon",
      "cat": "coroa",
      "from": 6,
      "desc": "Terceiro filho de Rhaenyra e Laenor, nascido no início do episódio. Seu nome homenageia Joffrey Lonmouth."
    },
    {
      "id": "aemond",
      "name": "Aemond Targaryen",
      "cat": "hightower",
      "from": 6,
      "desc": "Filho de Viserys e Alicent. Ainda sem dragão, é alvo das provocações dos outros meninos."
    },
    {
      "id": "helaena",
      "name": "Helaena Targaryen",
      "cat": "hightower",
      "from": 6,
      "desc": "Filha de Viserys e Alicent. Tem interesse por insetos e faz observações enigmáticas."
    },
    {
      "id": "baela",
      "name": "Baela Targaryen",
      "cat": "velaryon",
      "from": 6,
      "desc": "Filha de Daemon e Laena, irmã de Rhaena. Vive com a família em Pentos."
    },
    {
      "id": "rhaena",
      "name": "Rhaena Targaryen",
      "cat": "velaryon",
      "from": 6,
      "desc": "Filha de Daemon e Laena. Sente a ausência de um dragão próprio."
    },
    {
      "id": "vaemond",
      "name": "Vaemond Velaryon",
      "cat": "velaryon",
      "from": 3,
      "desc": "Irmão de Corlys Velaryon. Participa da campanha dos Degraus e expressa preocupação com a condução da guerra."
    },
    {
      "id": "borros",
      "name": "Borros Baratheon",
      "cat": "corte",
      "from": 10,
      "desc": "Senhor de Ponta Tempestade. Avalia as propostas dos dois lados a partir dos interesses de sua casa."
    },
    {
      "id": "syrax",
      "name": "Syrax",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão de escamas douradas e montaria de Rhaenyra Targaryen. Acompanha a princesa desde jovem.",
      "from": 1
    },
    {
      "id": "caraxes",
      "name": "Caraxes",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Conhecido como o Anfíptero Sanguinário, é o dragão vermelho de pescoço alongado montado por Daemon Targaryen.",
      "from": 1
    },
    {
      "id": "vhagar",
      "name": "Vhagar",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão da época da Conquista, antigo companheiro de Visenya Targaryen. Seu paradeiro atual é desconhecido na conversa entre Laena e Viserys.",
      "from": 2
    },
    {
      "id": "seasmoke",
      "name": "Seasmoke",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão montado por Laenor Velaryon. Participa do conflito nos Degraus, dando apoio aéreo às forças de Corlys e Daemon.",
      "from": 3
    },
    {
      "id": "vermax",
      "name": "Vermax",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Jovem dragão de Jacaerys Velaryon. É treinado no Fosso dos Dragões sob a supervisão dos tratadores.",
      "from": 6
    },
    {
      "id": "dreamfyre",
      "name": "Dreamfyre",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão adulto abrigado no Fosso dos Dragões. Aemond entra na área dos dragões sem autorização e é repelido por uma criatura adulta.",
      "from": 6
    },
    {
      "id": "meleys",
      "name": "Meleys",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Conhecida como a Rainha Vermelha, é a dragão montada por Rhaenys Targaryen.",
      "from": 7
    },
    {
      "id": "sunfyre",
      "name": "Sunfyre",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão dourado de Aegon Targaryen, também conhecido como Fogo Solar.",
      "from": 7
    },
    {
      "id": "arrax",
      "name": "Arrax",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Jovem dragão de Lucerys Velaryon. Leva o príncipe em sua missão como emissário a Ponta Tempestade.",
      "from": 10
    },
    {
      "id": "vermithor",
      "name": "Vermithor",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Grande dragão conhecido como Fúria de Bronze, ligado ao antigo rei Jaehaerys. Vive nas cavernas de Pedra do Dragão.",
      "from": 10
    },
    {
      "id": "moondancer",
      "name": "Moondancer",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão de Baela Targaryen, citado por Daemon ao avaliar os dragões disponíveis para a causa de Rhaenyra.",
      "from": 10
    },
    {
      "id": "tyraxes",
      "name": "Tyraxes",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Jovem dragão associado a Joffrey Velaryon. É citado entre os dragões dos filhos de Rhaenyra durante o conselho em Pedra do Dragão.",
      "from": 10
    },
    {
      "id": "silverwing",
      "name": "Silverwing",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Dragão sem cavaleiro mencionado no levantamento de forças de Daemon em Pedra do Dragão. Também é conhecido como Asaprata.",
      "from": 10
    },
    {
      "id": "balerion",
      "name": "Balerion",
      "cat": "dragoes",
      "kind": "dragon",
      "desc": "Conhecido como o Terror Negro, foi o dragão de Aegon, o Conquistador, e mais tarde de Viserys. Já morreu antes da história atual; seu crânio é preservado em Porto Real.",
      "from": 1
    },
    {
      "id": "harrold",
      "name": "Harrold Westerling",
      "cat": "corte",
      "desc": "Lorde comandante da Guarda Real de Viserys. Acompanha a corte e protege a princesa Rhaenyra.",
      "from": 1
    },
    {
      "id": "erryk",
      "name": "Erryk Cargyll",
      "cat": "corte",
      "desc": "Cavaleiro da Guarda Real e irmão gêmeo de Arryk. Participa da busca por Aegon em Porto Real após a morte de Viserys.",
      "from": 9
    },
    {
      "id": "arryk",
      "name": "Arryk Cargyll",
      "cat": "corte",
      "desc": "Cavaleiro da Guarda Real e irmão gêmeo de Erryk. Procura Aegon nas ruas de Porto Real por ordem de Otto Hightower.",
      "from": 9
    },
    {
      "id": "beesbury",
      "name": "Lyman Beesbury",
      "cat": "corte",
      "desc": "Mestre da moeda e integrante do Pequeno Conselho de Viserys. Participa das discussões sobre a administração e a sucessão do reino.",
      "from": 1
    },
    {
      "id": "mellos",
      "name": "Grande Meistre Mellos",
      "cat": "corte",
      "desc": "Grande Meistre de Viserys, conselheiro da Coroa e responsável por cuidados médicos na corte. Participa do atendimento de Aemma durante o parto.",
      "from": 1
    },
    {
      "id": "orwyle",
      "name": "Orwyle",
      "cat": "corte",
      "desc": "Meistre que auxilia Mellos no tratamento de Viserys e propõe uma alternativa aos cuidados com sanguessugas.",
      "from": 5
    },
    {
      "id": "jasper",
      "name": "Jasper Wylde",
      "cat": "corte",
      "desc": "Mestre das leis no Pequeno Conselho de Viserys, conhecido como Vara de Ferro.",
      "from": 6
    },
    {
      "id": "rhea",
      "name": "Rhea Royce",
      "cat": "corte",
      "desc": "Senhora de Pedrarruna, no Vale, e esposa de Daemon Targaryen. O casamento é marcado pela distância e pela hostilidade do príncipe.",
      "from": 5
    },
    {
      "id": "gerold",
      "name": "Gerold Royce",
      "cat": "corte",
      "desc": "Primo de Rhea Royce. Questiona Daemon sobre a morte dela e defende os interesses da família Royce.",
      "from": 5
    },
    {
      "id": "qarl",
      "name": "Qarl Correy",
      "cat": "velaryon",
      "desc": "Cavaleiro e companheiro de Laenor Velaryon. Convive com ele durante o período em que a família de Rhaenyra vive em Porto Real.",
      "from": 6
    },
    {
      "id": "craghas",
      "name": "Craghas Drahar",
      "cat": "corte",
      "desc": "Comandante da Triarquia conhecido como Alimentador de Caranguejos. Controla posições nos Degraus e ameaça as rotas marítimas dos Velaryon.",
      "from": 2
    },
    {
      "id": "talya",
      "name": "Talya",
      "cat": "corte",
      "desc": "Criada a serviço da rainha Alicent em Porto Real. Tem acesso aos aposentos e à rotina da família real.",
      "from": 6
    },
    {
      "id": "dyana",
      "name": "Dyana",
      "cat": "corte",
      "desc": "Jovem criada que relata a Alicent uma agressão cometida por Aegon. A rainha a ouve, entrega dinheiro e a afasta do serviço.",
      "from": 8
    },
    {
      "id": "aegon-younger",
      "name": "Aegon Targaryen (filho de Rhaenyra)",
      "cat": "coroa",
      "desc": "Filho pequeno de Rhaenyra e Daemon. É apresentado a Viserys na visita da família à Fortaleza Vermelha; não deve ser confundido com o filho de Alicent.",
      "from": 8
    },
    {
      "id": "viserys-younger",
      "name": "Viserys Targaryen (filho de Rhaenyra)",
      "cat": "coroa",
      "desc": "Filho pequeno de Rhaenyra e Daemon, irmão de Aegon. Recebe o nome do avô e é apresentado a ele na Fortaleza Vermelha.",
      "from": 8
    },
    {
      "id": "visenya",
      "name": "Visenya Targaryen",
      "cat": "coroa",
      "desc": "Filha de Rhaenyra e Daemon que nasce morta em Pedra do Dragão, após Rhaenyra receber notícias da morte de Viserys e da coroação de Aegon.",
      "from": 10
    },
    {
      "id": "baelon",
      "name": "Baelon Targaryen",
      "cat": "coroa",
      "desc": "Filho de Viserys e Aemma, nascido durante o parto que causa a morte da rainha. O bebê também morre, deixando novamente em aberto a sucessão.",
      "from": 1
    },
    {
      "id": "jaehaerys-younger",
      "name": "Jaehaerys Targaryen (filho de Aegon)",
      "cat": "hightower",
      "desc": "Filho pequeno de Aegon e Helaena Targaryen, irmão gêmeo de Jaehaera. Faz parte da família real em Porto Real.",
      "from": 9
    },
    {
      "id": "jaehaera",
      "name": "Jaehaera Targaryen",
      "cat": "hightower",
      "desc": "Filha pequena de Aegon e Helaena Targaryen, irmã gêmea de Jaehaerys. Vive com a família em Porto Real.",
      "from": 9
    },
    {
      "id": "hobert",
      "name": "Hobert Hightower",
      "cat": "hightower",
      "desc": "Senhor da Casa Hightower e irmão mais velho de Otto. Durante a caçada real, estimula o irmão a defender as pretensões sucessórias de Aegon.",
      "from": 3
    },
    {
      "id": "boremund",
      "name": "Boremund Baratheon",
      "cat": "corte",
      "desc": "Senhor de Ponta Tempestade e tio de Rhaenys. Recebe Rhaenyra durante a viagem em que a princesa escuta propostas de casamento.",
      "from": 4
    },
    {
      "id": "jaehaerys-elder",
      "name": "Jaehaerys I Targaryen",
      "cat": "coroa",
      "desc": "Rei que convoca o Grande Conselho de Harrenhal para resolver a sucessão. É o antecessor de Viserys e integra o prólogo da temporada.",
      "from": 1
    }
  ],
  "links": [
    {
      "a": "viserys",
      "b": "rhaenyra",
      "label": "Pai e filha",
      "start": 1,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "daemon",
      "label": "Irmãos",
      "start": 1,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "aemma",
      "label": "Casados; Aemma morre no ep. 1",
      "start": 1,
      "end": 10
    },
    {
      "a": "aemma",
      "b": "rhaenyra",
      "label": "Mãe e filha",
      "start": 1,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "otto",
      "label": "Filha e pai",
      "start": 1,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "rhaenyra",
      "label": "Amigas de infância",
      "start": 1,
      "end": 10
    },
    {
      "a": "corlys",
      "b": "rhaenys",
      "label": "Casados",
      "start": 1,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "mysaria",
      "label": "Companheiros",
      "start": 1,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "alicent",
      "label": "Casamento anunciado",
      "start": 2,
      "end": 10
    },
    {
      "a": "corlys",
      "b": "daemon",
      "label": "Aliança nos Degraus",
      "start": 2,
      "end": 10
    },
    {
      "a": "corlys",
      "b": "laena",
      "label": "Pai e filha",
      "start": 2,
      "end": 10
    },
    {
      "a": "rhaenys",
      "b": "laena",
      "label": "Mãe e filha",
      "start": 2,
      "end": 10
    },
    {
      "a": "corlys",
      "b": "laenor",
      "label": "Pai e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "rhaenys",
      "b": "laenor",
      "label": "Mãe e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "aegon",
      "label": "Pai e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "aegon",
      "label": "Mãe e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "lyonel",
      "b": "harwin",
      "label": "Pai e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "lyonel",
      "b": "larys",
      "label": "Pai e filho",
      "start": 3,
      "end": 10
    },
    {
      "a": "harwin",
      "b": "larys",
      "label": "Irmãos",
      "start": 3,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "criston",
      "label": "Encontro íntimo",
      "start": 4,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "laenor",
      "label": "Casamento dinástico",
      "start": 5,
      "end": 10
    },
    {
      "a": "laenor",
      "b": "joffrey",
      "label": "Companheiros",
      "start": 5,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "criston",
      "label": "Confissão e proteção",
      "start": 5,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "harwin",
      "label": "Paternidade suspeitada pela corte",
      "start": 6,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "larys",
      "label": "Informações e favores",
      "start": 6,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "laena",
      "label": "Casados; Laena morre no ep. 6",
      "start": 6,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "daemon",
      "label": "Casados",
      "start": 7,
      "end": 10
    },
    {
      "a": "aemond",
      "b": "lucerys",
      "label": "Confronto e perda do olho",
      "start": 7,
      "end": 10
    },
    {
      "a": "corlys",
      "b": "vaemond",
      "label": "Irmãos",
      "start": 8,
      "end": 10
    },
    {
      "a": "aegon",
      "b": "helaena",
      "label": "Casados",
      "start": 8,
      "end": 10
    },
    {
      "a": "rhaenys",
      "b": "rhaenyra",
      "label": "Apoio à sucessão de Derivamarca",
      "start": 8,
      "end": 10
    },
    {
      "a": "aemond",
      "b": "borros",
      "label": "Negociação de aliança",
      "start": 10,
      "end": 10
    },
    {
      "a": "borros",
      "b": "lucerys",
      "label": "Recebe o emissário",
      "start": 10,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "jacaerys",
      "label": "Mãe e filho",
      "start": 6,
      "end": 10
    },
    {
      "a": "laenor",
      "b": "jacaerys",
      "label": "Pai legal",
      "start": 6,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "lucerys",
      "label": "Mãe e filho",
      "start": 6,
      "end": 10
    },
    {
      "a": "laenor",
      "b": "lucerys",
      "label": "Pai legal",
      "start": 6,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "joffrey-son",
      "label": "Mãe e filho",
      "start": 6,
      "end": 10
    },
    {
      "a": "laenor",
      "b": "joffrey-son",
      "label": "Pai legal",
      "start": 6,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "aemond",
      "label": "Pai e descendente",
      "start": 6,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "aemond",
      "label": "Mãe e descendente",
      "start": 6,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "helaena",
      "label": "Pai e descendente",
      "start": 6,
      "end": 10
    },
    {
      "a": "alicent",
      "b": "helaena",
      "label": "Mãe e descendente",
      "start": 6,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "baela",
      "label": "Pai e filha",
      "start": 6,
      "end": 10
    },
    {
      "a": "laena",
      "b": "baela",
      "label": "Mãe e filha",
      "start": 6,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "rhaena",
      "label": "Pai e filha",
      "start": 6,
      "end": 10
    },
    {
      "a": "laena",
      "b": "rhaena",
      "label": "Mãe e filha",
      "start": 6,
      "end": 10
    },
    {
      "a": "rhaenyra",
      "b": "syrax",
      "label": "Cavaleira / dragão",
      "start": 1,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "caraxes",
      "label": "Cavaleiro / dragão",
      "start": 1,
      "end": 10
    },
    {
      "a": "laenor",
      "b": "seasmoke",
      "label": "Cavaleiro / dragão",
      "start": 3,
      "end": 6
    },
    {
      "a": "laena",
      "b": "vhagar",
      "label": "Cavaleira / dragão",
      "start": 6,
      "end": 6
    },
    {
      "a": "aemond",
      "b": "vhagar",
      "label": "Cavaleiro / dragão",
      "start": 7,
      "end": 10
    },
    {
      "a": "rhaenys",
      "b": "meleys",
      "label": "Cavaleira / dragão",
      "start": 7,
      "end": 10
    },
    {
      "a": "jacaerys",
      "b": "vermax",
      "label": "Cavaleiro / dragão",
      "start": 6,
      "end": 10
    },
    {
      "a": "aegon",
      "b": "sunfyre",
      "label": "Cavaleiro / dragão",
      "start": 7,
      "end": 10
    },
    {
      "a": "lucerys",
      "b": "arrax",
      "label": "Cavaleiro / dragão",
      "start": 10,
      "end": 10
    },
    {
      "a": "baela",
      "b": "moondancer",
      "label": "Cavaleira / dragão",
      "start": 10,
      "end": 10
    },
    {
      "a": "joffrey-son",
      "b": "tyraxes",
      "label": "Vínculo com o dragão",
      "start": 10,
      "end": 10
    },
    {
      "a": "daemon",
      "b": "vermithor",
      "label": "Aproximação nas cavernas",
      "start": 10,
      "end": 10
    },
    {
      "a": "viserys",
      "b": "balerion",
      "start": 1,
      "end": 10,
      "label": "Último cavaleiro, no passado"
    },
    {
      "a": "harrold",
      "b": "viserys",
      "label": "Comandante da Guarda Real / rei",
      "start": 1,
      "end": 8
    },
    {
      "a": "harrold",
      "b": "rhaenyra",
      "label": "Proteção da princesa",
      "start": 1,
      "end": 8
    },
    {
      "a": "harrold",
      "b": "criston",
      "label": "Comandante / cavaleiro",
      "start": 2,
      "end": 8
    },
    {
      "a": "erryk",
      "b": "arryk",
      "label": "Irmãos gêmeos",
      "start": 9,
      "end": 10
    },
    {
      "a": "erryk",
      "b": "rhaenys",
      "label": "Ajuda na fuga de Porto Real",
      "start": 9,
      "end": 10
    },
    {
      "a": "erryk",
      "b": "rhaenyra",
      "label": "Juramento de lealdade",
      "start": 10,
      "end": 10
    },
    {
      "a": "arryk",
      "b": "aegon",
      "label": "Guarda Real / rei",
      "start": 9,
      "end": 10
    },
    {
      "a": "arryk",
      "b": "otto",
      "label": "Busca por Aegon",
      "start": 9,
      "end": 9
    },
    {
      "a": "beesbury",
      "b": "viserys",
      "label": "Mestre da moeda / rei",
      "start": 1,
      "end": 8
    },
    {
      "a": "beesbury",
      "b": "rhaenyra",
      "label": "Defesa da sucessão",
      "start": 9,
      "end": 10
    },
    {
      "a": "beesbury",
      "b": "criston",
      "label": "Confronto fatal no conselho",
      "start": 9,
      "end": 10
    },
    {
      "a": "mellos",
      "b": "viserys",
      "label": "Grande Meistre / rei",
      "start": 1,
      "end": 5
    },
    {
      "a": "mellos",
      "b": "aemma",
      "label": "Atendimento durante o parto",
      "start": 1,
      "end": 1
    },
    {
      "a": "mellos",
      "b": "orwyle",
      "label": "Meistres da corte",
      "start": 5,
      "end": 5
    },
    {
      "a": "orwyle",
      "b": "viserys",
      "label": "Grande Meistre / rei",
      "start": 6,
      "end": 8
    },
    {
      "a": "orwyle",
      "b": "aegon",
      "label": "Conselho da coroação",
      "start": 9,
      "end": 10
    },
    {
      "a": "jasper",
      "b": "viserys",
      "label": "Mestre das leis / rei",
      "start": 6,
      "end": 8
    },
    {
      "a": "jasper",
      "b": "otto",
      "label": "Pequeno Conselho",
      "start": 6,
      "end": 10
    },
    {
      "a": "rhea",
      "b": "daemon",
      "label": "Casamento",
      "start": 5,
      "end": 5
    },
    {
      "a": "rhea",
      "b": "gerold",
      "label": "Primos",
      "start": 5,
      "end": 10
    },
    {
      "a": "gerold",
      "b": "daemon",
      "label": "Acusação pela morte de Rhea",
      "start": 5,
      "end": 10
    },
    {
      "a": "qarl",
      "b": "laenor",
      "label": "Companheiros",
      "start": 6,
      "end": 10
    },
    {
      "a": "qarl",
      "b": "daemon",
      "label": "Encenação da morte de Laenor",
      "start": 7,
      "end": 10
    },
    {
      "a": "craghas",
      "b": "corlys",
      "label": "Adversários nos Degraus",
      "start": 2,
      "end": 3
    },
    {
      "a": "craghas",
      "b": "daemon",
      "label": "Adversários nos Degraus",
      "start": 2,
      "end": 3
    },
    {
      "a": "talya",
      "b": "alicent",
      "label": "Criada / rainha",
      "start": 6,
      "end": 9
    },
    {
      "a": "talya",
      "b": "mysaria",
      "label": "Rede de informações",
      "start": 9,
      "end": 10
    },
    {
      "a": "dyana",
      "b": "alicent",
      "label": "Relato da agressão",
      "start": 8,
      "end": 10
    },
    {
      "a": "dyana",
      "b": "aegon",
      "label": "Denúncia de agressão",
      "start": 8,
      "end": 10
    },
    {
      "a": "aegon-younger",
      "b": "rhaenyra",
      "label": "Filho / mãe",
      "start": 8,
      "end": 10
    },
    {
      "a": "aegon-younger",
      "b": "daemon",
      "label": "Filho / pai",
      "start": 8,
      "end": 10
    },
    {
      "a": "viserys-younger",
      "b": "rhaenyra",
      "label": "Filho / mãe",
      "start": 8,
      "end": 10
    },
    {
      "a": "viserys-younger",
      "b": "daemon",
      "label": "Filho / pai",
      "start": 8,
      "end": 10
    },
    {
      "a": "aegon-younger",
      "b": "viserys-younger",
      "label": "Irmãos",
      "start": 8,
      "end": 10
    },
    {
      "a": "visenya",
      "b": "rhaenyra",
      "label": "Filha / mãe",
      "start": 10,
      "end": 10
    },
    {
      "a": "visenya",
      "b": "daemon",
      "label": "Filha / pai",
      "start": 10,
      "end": 10
    },
    {
      "a": "baelon",
      "b": "viserys",
      "label": "Filho / pai",
      "start": 1,
      "end": 10
    },
    {
      "a": "baelon",
      "b": "aemma",
      "label": "Filho / mãe",
      "start": 1,
      "end": 10
    },
    {
      "a": "baelon",
      "b": "rhaenyra",
      "label": "Irmãos",
      "start": 1,
      "end": 10
    },
    {
      "a": "jaehaerys-younger",
      "b": "aegon",
      "label": "Filho / pai",
      "start": 9,
      "end": 10
    },
    {
      "a": "jaehaerys-younger",
      "b": "helaena",
      "label": "Filho / mãe",
      "start": 9,
      "end": 10
    },
    {
      "a": "jaehaera",
      "b": "aegon",
      "label": "Filha / pai",
      "start": 9,
      "end": 10
    },
    {
      "a": "jaehaera",
      "b": "helaena",
      "label": "Filha / mãe",
      "start": 9,
      "end": 10
    },
    {
      "a": "jaehaera",
      "b": "jaehaerys-younger",
      "label": "Irmãos gêmeos",
      "start": 9,
      "end": 10
    },
    {
      "a": "hobert",
      "b": "otto",
      "label": "Irmãos",
      "start": 3,
      "end": 10
    },
    {
      "a": "hobert",
      "b": "alicent",
      "label": "Tio / sobrinha",
      "start": 3,
      "end": 10
    },
    {
      "a": "boremund",
      "b": "rhaenys",
      "label": "Tio / sobrinha",
      "start": 4,
      "end": 10
    },
    {
      "a": "boremund",
      "b": "borros",
      "label": "Pai / filho",
      "start": 10,
      "end": 10
    },
    {
      "a": "boremund",
      "b": "rhaenyra",
      "label": "Recepção em Ponta Tempestade",
      "start": 4,
      "end": 4
    },
    {
      "a": "jaehaerys-elder",
      "b": "viserys",
      "label": "Antecessor e avô",
      "start": 1,
      "end": 10
    },
    {
      "a": "jaehaerys-elder",
      "b": "rhaenys",
      "label": "Avô / neta",
      "start": 1,
      "end": 10
    },
    {
      "a": "aemond",
      "b": "aegon",
      "label": "Irmãos",
      "start": 6,
      "end": 10
    },
    {
      "a": "aemond",
      "b": "helaena",
      "label": "Irmãos",
      "start": 6,
      "end": 10
    },
    {
      "a": "aemond",
      "b": "criston",
      "label": "Treinamento com armas",
      "start": 8,
      "end": 10
    },
    {
      "a": "baela",
      "b": "jacaerys",
      "label": "Noivado",
      "start": 8,
      "end": 10
    },
    {
      "a": "rhaena",
      "b": "lucerys",
      "label": "Noivado",
      "start": 8,
      "end": 10
    },
    {
      "a": "baela",
      "b": "rhaena",
      "label": "Irmãs gêmeas",
      "start": 6,
      "end": 10
    }
  ],
  "episodes": [
    {
      "number": 1,
      "title": "The Heirs of the Dragon",
      "date": "2022-08-21",
      "lead": "A sucessão começa com uma perda.",
      "events": [
        {
          "title": "Um precedente em Harrenhal",
          "text": "O Grande Conselho escolhe Viserys em vez de Rhaenys, estabelecendo o peso do costume masculino na sucessão.",
          "focus": "rhaenys",
          "characters": [
            "rhaenys",
            "viserys"
          ],
          "paragraphs": [
            "O Grande Conselho escolhe Viserys em vez de Rhaenys, estabelecendo o peso do costume masculino na sucessão.",
            "A decisão evita uma disputa imediata entre os pretendentes, mas não estabelece uma regra escrita e incontestável. A exclusão de Rhaenys passa a ser um precedente político que pesa sobre a família de Viserys."
          ]
        },
        {
          "title": "A corte e a cidade",
          "text": "Daemon impõe uma repressão brutal em Porto Real. Otto questiona sua conduta e sua proximidade com o trono.",
          "focus": "daemon",
          "characters": [
            "daemon",
            "otto"
          ],
          "paragraphs": [
            "Daemon impõe uma repressão brutal em Porto Real. Otto questiona sua conduta e sua proximidade com o trono.",
            "A ação da Patrulha da Cidade expõe a distância entre o modo de governar de Daemon e a prudência defendida pelo conselho. A discussão também mostra como a sucessão interfere na avaliação de cada gesto do príncipe."
          ]
        },
        {
          "title": "O torneio e o parto",
          "text": "Enquanto cavaleiros disputam o torneio, Aemma morre em uma cesárea ordenada por Viserys. Baelon morre pouco depois.",
          "focus": "viserys",
          "characters": [
            "aemma",
            "viserys"
          ],
          "paragraphs": [
            "Enquanto cavaleiros disputam o torneio, Aemma morre em uma cesárea ordenada por Viserys. Baelon morre pouco depois.",
            "O espetáculo público e a tragédia nos aposentos reais acontecem em paralelo. Viserys perde a esposa e o filho que esperava tornar seu herdeiro, enquanto Rhaenyra precisa lidar com o luto e com sua posição na família."
          ]
        },
        {
          "title": "A herdeira",
          "text": "Após a provocação atribuída a Daemon sobre o bebê morto, Viserys afasta o irmão e nomeia Rhaenyra. Revela à filha o sonho de Aegon, o Conquistador.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "viserys"
          ],
          "paragraphs": [
            "Após a provocação atribuída a Daemon sobre o bebê morto, Viserys afasta o irmão e nomeia Rhaenyra. Revela à filha o sonho de Aegon, o Conquistador.",
            "A cerimônia de juramento dos senhores transforma a escolha em um compromisso público. Em particular, Viserys também transmite uma responsabilidade que vai além do trono: preservar o conhecimento do sonho e a continuidade da dinastia."
          ]
        }
      ],
      "questions": [
        "A nomeação de Rhaenyra será respeitada pelos lordes?",
        "Daemon aceitará o afastamento?",
        "Como o sonho transmitido por Viserys afetará sua herdeira?"
      ]
    },
    {
      "number": 2,
      "title": "The Rogue Prince",
      "date": "2022-08-28",
      "lead": "Um ovo de dragão expõe as fissuras da família.",
      "events": [
        {
          "title": "Pressão nos Degraus",
          "text": "Corlys denuncia os ataques da Triarquia às rotas marítimas. Viserys evita precipitar uma guerra.",
          "focus": "corlys",
          "characters": [
            "corlys",
            "viserys"
          ],
          "paragraphs": [
            "Corlys denuncia os ataques da Triarquia às rotas marítimas. Viserys evita precipitar uma guerra.",
            "O controle das ilhas afeta o comércio e o poder naval dos Velaryon. Para Corlys, a cautela da Coroa significa aceitar prejuízos crescentes; para o rei, uma intervenção pode transformar o problema em uma guerra de maiores proporções."
          ]
        },
        {
          "title": "A ponte de Pedra do Dragão",
          "text": "Daemon toma um ovo de dragão e anuncia um casamento com Mysaria. Rhaenyra chega em Syrax e recupera o ovo sem combate.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "daemon"
          ],
          "paragraphs": [
            "Daemon toma um ovo de dragão e anuncia um casamento com Mysaria. Rhaenyra chega em Syrax e recupera o ovo sem combate.",
            "O confronto reúne reivindicações pessoais e símbolos da dinastia. Ao agir diretamente, Rhaenyra demonstra que pode resolver a provocação do tio, enquanto Mysaria percebe que seu nome foi usado em uma manobra que não controlava."
          ]
        },
        {
          "title": "Um novo casamento",
          "text": "Corlys e Rhaenys oferecem Laena como noiva do rei. Viserys anuncia que se casará com Alicent, surpreendendo Rhaenyra.",
          "focus": "alicent",
          "characters": [
            "alicent",
            "rhaenyra",
            "laena"
          ],
          "paragraphs": [
            "Corlys e Rhaenys oferecem Laena como noiva do rei. Viserys anuncia que se casará com Alicent, surpreendendo Rhaenyra.",
            "A união com Laena fortaleceria os laços com os Velaryon, mas Viserys faz uma escolha diferente. O anúncio atinge Rhaenyra tanto como filha quanto como amiga de Alicent, cuja aproximação com o rei ela não acompanhou."
          ]
        },
        {
          "title": "Uma aliança fora da corte",
          "text": "Descontente com o rei, Corlys procura Daemon para agir nos Degraus.",
          "focus": "daemon",
          "characters": [
            "corlys",
            "daemon"
          ],
          "paragraphs": [
            "Descontente com o rei, Corlys procura Daemon para agir nos Degraus.",
            "Os dois encontram um interesse comum apesar de suas diferenças: Corlys quer proteger suas rotas, e Daemon busca espaço para agir longe da autoridade do irmão. A iniciativa deixa de depender de uma decisão imediata do conselho."
          ]
        }
      ],
      "questions": [
        "A amizade entre Alicent e Rhaenyra pode sobreviver ao casamento?",
        "A campanha de Corlys e Daemon terá apoio da Coroa?"
      ]
    },
    {
      "number": 3,
      "title": "Second of His Name",
      "date": "2022-09-04",
      "lead": "O nascimento de um príncipe muda o equilíbrio.",
      "events": [
        {
          "title": "A caçada de Aegon",
          "text": "A corte celebra o segundo aniversário do filho de Alicent. Muitos já tratam o menino como futuro rei, apesar da nomeação de Rhaenyra.",
          "focus": "aegon",
          "characters": [
            "aegon",
            "alicent",
            "viserys"
          ],
          "paragraphs": [
            "A corte celebra o segundo aniversário do filho de Alicent. Muitos já tratam o menino como futuro rei, apesar da nomeação de Rhaenyra.",
            "A comemoração coloca Rhaenyra diante de uma corte cada vez mais interessada em seu meio-irmão. As propostas de casamento dirigidas a ela misturam conveniência familiar, posição social e expectativas sobre quem realmente herdará a Coroa."
          ]
        },
        {
          "title": "A princesa na floresta",
          "text": "Rhaenyra se afasta da comitiva com Criston. Os dois enfrentam um javali; depois, ela poupa um cervo branco.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "criston"
          ],
          "paragraphs": [
            "Rhaenyra se afasta da comitiva com Criston. Os dois enfrentam um javali; depois, ela poupa um cervo branco.",
            "O encontro com o javali exige uma reação concreta, distante das cerimônias da caçada real. O cervo branco, visto longe da comitiva do rei, cria um contraste entre os sinais de legitimidade celebrados pela corte e a experiência da princesa."
          ]
        },
        {
          "title": "A palavra do rei",
          "text": "Viserys reafirma à filha que não pretende substituí-la. Ainda assim, exige que ela considere um casamento político.",
          "focus": "viserys",
          "characters": [
            "viserys",
            "rhaenyra"
          ],
          "paragraphs": [
            "Viserys reafirma à filha que não pretende substituí-la. Ainda assim, exige que ela considere um casamento político.",
            "A conversa separa duas questões que a corte vinha confundindo: a escolha da herdeira e a necessidade de fortalecer alianças. A reafirmação de Viserys não elimina a pressão para que a vida pessoal de Rhaenyra sirva à estabilidade do reino."
          ]
        },
        {
          "title": "A batalha nos Degraus",
          "text": "Daemon usa a si mesmo como isca para atrair os inimigos. As forças de Corlys e Laenor vencem, e Daemon mata o Alimentador de Caranguejos.",
          "focus": "daemon",
          "characters": [
            "daemon",
            "corlys",
            "laenor"
          ],
          "paragraphs": [
            "Daemon usa a si mesmo como isca para atrair os inimigos. As forças de Corlys e Laenor vencem, e Daemon mata o Alimentador de Caranguejos.",
            "A mensagem de que Viserys enviará ajuda aumenta a urgência pessoal de Daemon em obter uma vitória. Sua investida exposta obriga os inimigos a sair das posições protegidas e permite a entrada das forças que aguardavam uma abertura."
          ]
        }
      ],
      "questions": [
        "A promessa de Viserys resistirá à pressão por Aegon?",
        "A vitória de Daemon o aproximará ou afastará da corte?"
      ]
    },
    {
      "number": 4,
      "title": "King of the Narrow Sea",
      "date": "2022-09-11",
      "lead": "Rumores transformam intimidade em arma política.",
      "events": [
        {
          "title": "A volta de Daemon",
          "text": "Daemon retorna com uma coroa conquistada nos Degraus e a entrega a Viserys. A reconciliação parece possível.",
          "focus": "daemon",
          "characters": [
            "daemon",
            "viserys"
          ],
          "paragraphs": [
            "Daemon retorna com uma coroa conquistada nos Degraus e a entrega a Viserys. A reconciliação parece possível.",
            "A entrega da coroa é apresentada como um gesto de submissão ao irmão, e Viserys o recebe de volta. A aproximação familiar, porém, não resolve as questões de casamento e sucessão que continuam cercando os dois."
          ]
        },
        {
          "title": "Uma noite fora do castelo",
          "text": "Daemon leva Rhaenyra às ruas e a uma casa de prazer. Após ele deixá-la, ela retorna ao castelo e passa a noite com Criston.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "daemon",
            "criston"
          ],
          "paragraphs": [
            "Daemon leva Rhaenyra às ruas e a uma casa de prazer. Após ele deixá-la, ela retorna ao castelo e passa a noite com Criston.",
            "Fora da proteção habitual, Rhaenyra observa como a cidade fala da família real e da sucessão. A excursão termina em situações íntimas distintas com Daemon e Criston, diferença que importa para compreender as acusações posteriores."
          ]
        },
        {
          "title": "A notícia chega ao rei",
          "text": "Otto relata a presença de Rhaenyra e Daemon na casa de prazer. Alicent interroga a amiga, que nega ter se deitado com o tio.",
          "focus": "alicent",
          "characters": [
            "otto",
            "alicent",
            "rhaenyra"
          ],
          "paragraphs": [
            "Otto relata a presença de Rhaenyra e Daemon na casa de prazer. Alicent interroga a amiga, que nega ter se deitado com o tio.",
            "A informação chega pela rede de observação da cidade e rapidamente se torna uma questão de Estado. Para Alicent, a conversa envolve também a confiança pessoal na amiga; para Otto, o relato diz respeito à posição da herdeira."
          ]
        },
        {
          "title": "O preço da reputação",
          "text": "Viserys determina o casamento de Rhaenyra com Laenor. Otto perde o cargo de Mão, e o rei manda levar um chá à filha.",
          "focus": "otto",
          "characters": [
            "viserys",
            "rhaenyra",
            "otto"
          ],
          "paragraphs": [
            "Viserys determina o casamento de Rhaenyra com Laenor. Otto perde o cargo de Mão, e o rei manda levar um chá à filha.",
            "O casamento aparece como forma de conter o dano político, enquanto a demissão de Otto revela a suspeita de que seus conselhos favorecem a própria família. O chá enviado a Rhaenyra mostra a preocupação do rei com as consequências da noite."
          ]
        }
      ],
      "questions": [
        "Em quem Alicent pode confiar?",
        "Qual será o custo político da noite de Rhaenyra?"
      ]
    },
    {
      "number": 5,
      "title": "We Light the Way",
      "date": "2022-09-18",
      "lead": "Uma celebração sela alianças e abre uma ruptura.",
      "events": [
        {
          "title": "Uma morte no Vale",
          "text": "Daemon encontra sua esposa Rhea Royce e provoca sua queda. Ao perceber que ela sobreviveu, aproxima-se com uma pedra.",
          "focus": "daemon",
          "characters": [
            "daemon"
          ],
          "paragraphs": [
            "Daemon encontra sua esposa Rhea Royce e provoca sua queda. Ao perceber que ela sobreviveu, aproxima-se com uma pedra.",
            "A cena dá um desfecho violento a um casamento já descrito como hostil. Na corte, a morte de Rhea se transforma também em uma disputa por reputação e patrimônio, especialmente quando Gerold Royce questiona Daemon."
          ]
        },
        {
          "title": "Um acordo de casamento",
          "text": "Rhaenyra e Laenor aceitam o dever dinástico e combinam preservar suas vidas íntimas. Viserys negocia com Corlys a futura sucessão.",
          "focus": "laenor",
          "characters": [
            "rhaenyra",
            "laenor",
            "corlys",
            "viserys"
          ],
          "paragraphs": [
            "Rhaenyra e Laenor aceitam o dever dinástico e combinam preservar suas vidas íntimas. Viserys negocia com Corlys a futura sucessão.",
            "O pacto distingue o casamento público dos afetos privados de cada um. A negociação entre as casas inclui nomes, herança e continuidade dinástica, deixando claro que a cerimônia tem efeitos muito maiores que a união do casal."
          ]
        },
        {
          "title": "Criston confessa",
          "text": "Criston propõe fugir com Rhaenyra. Rejeitado, confessa a Alicent que quebrou seu voto de castidade.",
          "focus": "criston",
          "characters": [
            "criston",
            "alicent"
          ],
          "paragraphs": [
            "Criston propõe fugir com Rhaenyra. Rejeitado, confessa a Alicent que quebrou seu voto de castidade.",
            "Criston vê na fuga uma maneira de reconstruir a própria vida após romper seus votos; Rhaenyra não aceita abandonar sua posição. Ao procurar Alicent, ele revela uma informação diferente daquela que a rainha inicialmente investigava."
          ]
        },
        {
          "title": "O vestido verde",
          "text": "Alicent chega à celebração vestindo a cor de guerra dos Hightower. Durante o banquete, Criston mata Joffrey Lonmouth. Rhaenyra e Laenor casam-se em uma cerimônia apressada.",
          "focus": "alicent",
          "characters": [
            "alicent",
            "criston",
            "joffrey",
            "laenor"
          ],
          "paragraphs": [
            "Alicent chega à celebração vestindo a cor de guerra dos Hightower. Durante o banquete, Criston mata Joffrey Lonmouth. Rhaenyra e Laenor casam-se em uma cerimônia apressada.",
            "A entrada de Alicent torna visível uma mudança que antes se desenhava em conversas privadas. A violência do banquete destrói o clima da celebração, e o casamento é concluído sob o peso imediato da morte de Joffrey e do luto de Laenor."
          ]
        }
      ],
      "questions": [
        "Alicent e Rhaenyra ainda podem se reconciliar?",
        "Que consequências terá a violência de Criston?"
      ]
    },
    {
      "number": 6,
      "title": "The Princess and the Queen",
      "date": "2022-09-25",
      "lead": "Dez anos depois, a rivalidade alcança os filhos.",
      "events": [
        {
          "title": "O recém-nascido é apresentado",
          "text": "Rhaenyra acaba de dar à luz Joffrey quando Alicent exige ver a criança. Os traços dos filhos da princesa alimentam suspeitas sobre Harwin Strong.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "alicent",
            "joffrey-son",
            "harwin"
          ],
          "paragraphs": [
            "Rhaenyra acaba de dar à luz Joffrey quando Alicent exige ver a criança. Os traços dos filhos da princesa alimentam suspeitas sobre Harwin Strong.",
            "A exigência faz a disputa política invadir um momento de recuperação física. Rhaenyra leva o bebê acompanhada por Laenor, mas a inspeção da criança funciona como mais uma oportunidade para alimentar os comentários sobre a paternidade."
          ]
        },
        {
          "title": "A próxima geração",
          "text": "No treino dos príncipes, Criston provoca Harwin, que o agride. Alicent rejeita a proposta de casamento entre Jacaerys e Helaena.",
          "focus": "harwin",
          "characters": [
            "criston",
            "harwin",
            "jacaerys",
            "aemond"
          ],
          "paragraphs": [
            "No treino dos príncipes, Criston provoca Harwin, que o agride. Alicent rejeita a proposta de casamento entre Jacaerys e Helaena.",
            "O treino reúne as crianças sob o olhar dos adultos, que projetam suas rivalidades sobre elas. A reação de Harwin torna as suspeitas ainda mais perigosas, enquanto a recusa ao casamento impede uma tentativa de aproximar os ramos da família."
          ]
        },
        {
          "title": "O fogo em Pentos",
          "text": "Laena, casada com Daemon e mãe de Baela e Rhaena, enfrenta um parto sem saída. Escolhe morrer pelo fogo de Vhagar.",
          "focus": "laena",
          "characters": [
            "laena",
            "daemon",
            "baela",
            "rhaena"
          ],
          "paragraphs": [
            "Laena, casada com Daemon e mãe de Baela e Rhaena, enfrenta um parto sem saída. Escolhe morrer pelo fogo de Vhagar.",
            "A vida de Daemon e Laena fora de Westeros parece afastada das intrigas da corte, mas o parto expõe os limites dessa distância. A decisão de Laena envolve o vínculo com sua dragão e a recusa de um fim imposto pelos homens ao redor."
          ]
        },
        {
          "title": "O preço de um favor",
          "text": "Larys organiza o incêndio de Harrenhal que mata Lyonel e Harwin. Alicent fica horrorizada; Rhaenyra leva sua família para Pedra do Dragão.",
          "focus": "larys",
          "characters": [
            "larys",
            "lyonel",
            "harwin",
            "alicent"
          ],
          "paragraphs": [
            "Larys organiza o incêndio de Harrenhal que mata Lyonel e Harwin. Alicent fica horrorizada; Rhaenyra leva sua família para Pedra do Dragão.",
            "O favor não solicitado compromete Alicent com um aliado capaz de agir além do que ela pediu. A morte dos Strong altera o equilíbrio da corte, e a partida de Rhaenyra mostra o quanto a convivência em Porto Real se tornou insustentável."
          ]
        }
      ],
      "questions": [
        "Como os rumores sobre os filhos de Rhaenyra afetarão a sucessão?",
        "O que Larys cobrará de Alicent?",
        "Quem reivindicará Vhagar?"
      ]
    },
    {
      "number": 7,
      "title": "Driftmark",
      "date": "2022-10-02",
      "lead": "Um funeral deixa feridas que não se fecham.",
      "events": [
        {
          "title": "A despedida de Laena",
          "text": "As famílias se reúnem em Derivamarca. Rhaenyra e Daemon se aproximam, enquanto antigas tensões permanecem à vista.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "daemon",
            "rhaenys",
            "corlys"
          ],
          "paragraphs": [
            "As famílias se reúnem em Derivamarca. Rhaenyra e Daemon se aproximam, enquanto antigas tensões permanecem à vista.",
            "O funeral reúne pessoas separadas por perdas, ressentimentos e alianças frágeis. As cerimônias públicas não impedem conversas privadas que aproximam Rhaenyra de Daemon e deixam à vista a desconfiança entre os diferentes núcleos da família."
          ]
        },
        {
          "title": "Vhagar tem novo cavaleiro",
          "text": "Aemond reivindica Vhagar. Na briga com os outros jovens, Lucerys o fere, e ele perde um olho.",
          "focus": "aemond",
          "characters": [
            "aemond",
            "lucerys",
            "jacaerys",
            "baela"
          ],
          "paragraphs": [
            "Aemond reivindica Vhagar. Na briga com os outros jovens, Lucerys o fere, e ele perde um olho.",
            "Para Aemond, o primeiro voo encerra a humilhação de não possuir dragão. Para as filhas de Laena, a aproximação ocorre durante o luto pela mãe; o confronto entre as crianças mistura essa perda com as acusações sobre a origem dos filhos de Rhaenyra."
          ]
        },
        {
          "title": "A lâmina da rainha",
          "text": "Alicent exige reparação pela mutilação do filho. Tenta atingir Lucerys com a adaga de Viserys e fere o braço de Rhaenyra durante o confronto.",
          "focus": "alicent",
          "characters": [
            "alicent",
            "rhaenyra",
            "viserys"
          ],
          "paragraphs": [
            "Alicent exige reparação pela mutilação do filho. Tenta atingir Lucerys com a adaga de Viserys e fere o braço de Rhaenyra durante o confronto.",
            "O rei tenta encerrar a crise sem transformar a rivalidade familiar em uma punição irreparável. Alicent interpreta a resposta como falta de proteção ao filho e toma a adaga, expondo diante de todos uma hostilidade que já não consegue conter."
          ]
        },
        {
          "title": "Uma morte encenada",
          "text": "Rhaenyra e Daemon planejam a saída de Laenor. Um corpo substituto faz parecer que ele morreu, mas Laenor foge com Qarl. Rhaenyra e Daemon se casam.",
          "focus": "laenor",
          "characters": [
            "laenor",
            "rhaenyra",
            "daemon"
          ],
          "paragraphs": [
            "Rhaenyra e Daemon planejam a saída de Laenor. Um corpo substituto faz parecer que ele morreu, mas Laenor foge com Qarl. Rhaenyra e Daemon se casam.",
            "O plano depende de testemunhas enganadas e de um corpo que sustente a versão pública. A fuga preserva a vida de Laenor, mas impõe sofrimento à família que acredita na morte; o casamento de Rhaenyra e Daemon acontece sob essa versão dos fatos."
          ]
        }
      ],
      "questions": [
        "A rivalidade entre os filhos pode ser contida?",
        "O segredo da fuga de Laenor será preservado?",
        "O casamento com Daemon fortalecerá Rhaenyra?"
      ]
    },
    {
      "number": 8,
      "title": "The Lord of the Tides",
      "date": "2022-10-09",
      "lead": "O último esforço de um rei mantém a família à mesa.",
      "events": [
        {
          "title": "A sucessão de Derivamarca",
          "text": "Com Corlys gravemente ferido, Vaemond contesta a posição de Lucerys. Rhaenyra procura o apoio de Rhaenys e propõe uniões entre seus filhos e as netas dela.",
          "focus": "vaemond",
          "characters": [
            "vaemond",
            "rhaenyra",
            "rhaenys",
            "lucerys"
          ],
          "paragraphs": [
            "Com Corlys gravemente ferido, Vaemond contesta a posição de Lucerys. Rhaenyra procura o apoio de Rhaenys e propõe uniões entre seus filhos e as netas dela.",
            "A questão envolve tanto a herança naval dos Velaryon quanto a legitimidade dos filhos de Rhaenyra. Os noivados oferecidos a Baela e Rhaena procuram alinhar esses interesses, ligando a proteção de Lucerys ao futuro das netas de Rhaenys."
          ]
        },
        {
          "title": "A entrada do rei",
          "text": "Muito debilitado, Viserys comparece ao salão para sustentar o direito de Lucerys. Daemon mata Vaemond após seus insultos a Rhaenyra e aos filhos.",
          "focus": "viserys",
          "characters": [
            "viserys",
            "daemon",
            "vaemond"
          ],
          "paragraphs": [
            "Muito debilitado, Viserys comparece ao salão para sustentar o direito de Lucerys. Daemon mata Vaemond após seus insultos a Rhaenyra e aos filhos.",
            "A presença de Viserys impede que a discussão seja decidida apenas pelos conselheiros que o substituem. O esforço físico do rei e o auxílio de Daemon contrastam com a ruptura provocada pelos insultos de Vaemond no mesmo salão."
          ]
        },
        {
          "title": "Um jantar de despedida",
          "text": "Viserys pede conciliação. Rhaenyra e Alicent trocam palavras de respeito, mas uma provocação de Aemond reabre a hostilidade entre os jovens.",
          "focus": "aemond",
          "characters": [
            "viserys",
            "rhaenyra",
            "alicent",
            "aemond"
          ],
          "paragraphs": [
            "Viserys pede conciliação. Rhaenyra e Alicent trocam palavras de respeito, mas uma provocação de Aemond reabre a hostilidade entre os jovens.",
            "Por alguns momentos, o apelo do rei produz gestos concretos de aproximação entre as duas mulheres. A convivência dos mais jovens, porém, revela que as ofensas sobre nascimento e herança continuam prontas para desfazer essa trégua."
          ]
        },
        {
          "title": "Palavras mal compreendidas",
          "text": "Alicent ouve o rei falar do sonho de Aegon e entende que ele se refere ao filho dos dois. Viserys morre sem perceber a confusão.",
          "focus": "alicent",
          "characters": [
            "alicent",
            "viserys"
          ],
          "paragraphs": [
            "Alicent ouve o rei falar do sonho de Aegon e entende que ele se refere ao filho dos dois. Viserys morre sem perceber a confusão.",
            "A conversa ocorre em um contexto de dor, medicação e confusão sobre quem está ao lado do rei. Alicent não conhece a explicação privada transmitida a Rhaenyra e atribui às palavras um sentido diferente, decisivo para sua compreensão da sucessão."
          ]
        }
      ],
      "questions": [
        "A trégua sobreviverá à morte de Viserys?",
        "Como Alicent usará sua interpretação das últimas palavras do rei?"
      ]
    },
    {
      "number": 9,
      "title": "The Green Council",
      "date": "2022-10-16",
      "lead": "Porto Real escolhe um rei antes de avisar a herdeira.",
      "events": [
        {
          "title": "O conselho se fecha",
          "text": "Alicent anuncia o que acredita ser a vontade de Viserys. Descobre que parte do conselho já planejava coroar Aegon. Criston mata Lorde Beesbury quando ele protesta.",
          "focus": "alicent",
          "characters": [
            "alicent",
            "otto",
            "criston"
          ],
          "paragraphs": [
            "Alicent anuncia o que acredita ser a vontade de Viserys. Descobre que parte do conselho já planejava coroar Aegon. Criston mata Lorde Beesbury quando ele protesta.",
            "A reunião mostra que a disputa não começa com a interpretação das últimas palavras do rei: já havia preparativos sem o conhecimento de Alicent. A morte de Beesbury e a recusa de Harrold Westerling expõem a coerção necessária para impor o plano."
          ]
        },
        {
          "title": "A busca pelo príncipe",
          "text": "Otto e Alicent enviam grupos para encontrar Aegon. O futuro rei é localizado por Aemond e Criston, que o levam à mãe.",
          "focus": "aegon",
          "characters": [
            "aegon",
            "aemond",
            "criston",
            "otto"
          ],
          "paragraphs": [
            "Otto e Alicent enviam grupos para encontrar Aegon. O futuro rei é localizado por Aemond e Criston, que o levam à mãe.",
            "Os grupos não procuram apenas garantir a presença do príncipe; também disputam quem poderá influenciá-lo primeiro. Aegon resiste à responsabilidade que querem lhe entregar, enquanto mãe e avô apresentam caminhos diferentes para consolidar sua posição."
          ]
        },
        {
          "title": "Rhaenys recusa a oferta",
          "text": "Confinada na Fortaleza Vermelha, Rhaenys rejeita o pedido de apoio de Alicent. Erryk Cargyll ajuda-a a sair.",
          "focus": "rhaenys",
          "characters": [
            "rhaenys",
            "alicent"
          ],
          "paragraphs": [
            "Confinada na Fortaleza Vermelha, Rhaenys rejeita o pedido de apoio de Alicent. Erryk Cargyll ajuda-a a sair.",
            "A conversa entre as duas mulheres contrapõe sobrevivência, lealdade e poder pessoal. A fuga de Rhaenys retira dos verdes uma possível aliada e permite que ela procure sua dragão em meio aos preparativos para a cerimônia pública."
          ]
        },
        {
          "title": "Coroa e dragão",
          "text": "Aegon é coroado no Fosso dos Dragões. Rhaenys emerge montada em Meleys, rompendo o piso e matando pessoas na multidão; encara os verdes e parte sem queimá-los.",
          "focus": "rhaenys",
          "characters": [
            "aegon",
            "rhaenys",
            "alicent"
          ],
          "paragraphs": [
            "Aegon é coroado no Fosso dos Dragões. Rhaenys emerge montada em Meleys, rompendo o piso e matando pessoas na multidão; encara os verdes e parte sem queimá-los.",
            "A coroação procura transformar uma decisão de bastidores em aclamação popular. A irrupção de Meleys rompe essa encenação com violência; ao poupar a família real diante dela, Rhaenys faz uma escolha cujo sentido não se reduz à capacidade de atacar."
          ]
        }
      ],
      "questions": [
        "Como Rhaenyra responderá à coroação de Aegon?",
        "Rhaenys conseguirá alertar Pedra do Dragão?",
        "Quais casas reconhecerão o novo rei?"
      ]
    },
    {
      "number": 10,
      "title": "The Black Queen",
      "date": "2022-10-23",
      "lead": "As propostas de paz dão lugar a uma perda irreversível.",
      "events": [
        {
          "title": "A notícia e o luto",
          "text": "Rhaenys informa Rhaenyra sobre a morte de Viserys e a coroação de Aegon. Em meio à crise, Rhaenyra entra em trabalho de parto e perde a filha Visenya.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "rhaenys",
            "daemon"
          ],
          "paragraphs": [
            "Rhaenys informa Rhaenyra sobre a morte de Viserys e a coroação de Aegon. Em meio à crise, Rhaenyra entra em trabalho de parto e perde a filha Visenya.",
            "A notícia coloca a perda familiar e a disputa pelo trono no mesmo instante. Enquanto Rhaenyra enfrenta o parto, os que a cercam precisam decidir como reagir; sua ausência momentânea também abre espaço para a impaciência de Daemon."
          ]
        },
        {
          "title": "Uma segunda coroação",
          "text": "Erryk entrega a coroa de Viserys. Rhaenyra é coroada em Pedra do Dragão; Corlys declara apoio, e os negros calculam suas forças e alianças.",
          "focus": "corlys",
          "characters": [
            "rhaenyra",
            "corlys",
            "daemon"
          ],
          "paragraphs": [
            "Erryk entrega a coroa de Viserys. Rhaenyra é coroada em Pedra do Dragão; Corlys declara apoio, e os negros calculam suas forças e alianças.",
            "A chegada da coroa dá forma pública à reivindicação de Rhaenyra. O apoio de Corlys acrescenta uma força naval importante, mas o conselho ainda precisa distinguir os recursos de que dispõe das alianças que apenas espera conquistar."
          ]
        },
        {
          "title": "Termos e mensageiros",
          "text": "Otto apresenta condições de rendição. Rhaenyra evita uma resposta imediata e envia os filhos como emissários: Jacaerys ao norte e Lucerys a Ponta Tempestade.",
          "focus": "rhaenyra",
          "characters": [
            "rhaenyra",
            "otto",
            "jacaerys",
            "lucerys"
          ],
          "paragraphs": [
            "Otto apresenta condições de rendição. Rhaenyra evita uma resposta imediata e envia os filhos como emissários: Jacaerys ao norte e Lucerys a Ponta Tempestade.",
            "Rhaenyra considera a responsabilidade de governar antes de aceitar uma escalada imediata. As missões dos filhos devem levar mensagens e obter compromissos de apoio; os dois partem como emissários, não com a tarefa de iniciar um combate."
          ]
        },
        {
          "title": "A tempestade",
          "text": "Lucerys encontra Aemond na corte de Borros Baratheon. Ao partir, é perseguido por Vhagar. Arrax lança fogo e os jovens perdem o controle dos dragões; Vhagar mata Lucerys e Arrax. Daemon leva a notícia a Rhaenyra.",
          "focus": "lucerys",
          "characters": [
            "lucerys",
            "aemond",
            "borros",
            "rhaenyra"
          ],
          "paragraphs": [
            "Lucerys encontra Aemond na corte de Borros Baratheon. Ao partir, é perseguido por Vhagar. Arrax lança fogo e os jovens perdem o controle dos dragões; Vhagar mata Lucerys e Arrax. Daemon leva a notícia a Rhaenyra.",
            "Em Ponta Tempestade, Lucerys encontra uma negociação em que os juramentos antigos competem com ofertas presentes. A perseguição termina quando os dragões deixam de obedecer aos cavaleiros; o episódio se encerra com a notícia da perda chegando à mãe."
          ]
        }
      ],
      "questions": [
        "A morte de Lucerys torna a guerra inevitável?",
        "Quais alianças responderão aos emissários de Rhaenyra?",
        "Até que ponto os cavaleiros conseguem controlar seus dragões?"
      ]
    }
  ],
  "updates": {
    "2": {
      "alicent": "Viserys anuncia seu casamento com Alicent. A escolha abala a amizade dela com Rhaenyra.",
      "caraxes": "Daemon ocupa Pedra do Dragão com Caraxes. A presença de Syrax e Rhaenyra muda o equilíbrio do confronto pela devolução do ovo.",
      "syrax": "Rhaenyra chega a Pedra do Dragão montada em Syrax e recupera o ovo tomado por Daemon."
    },
    "3": {
      "daemon": "Vence a campanha dos Degraus ao lado de Corlys e Laenor, matando o Alimentador de Caranguejos.",
      "alicent": "Rainha e mãe de Aegon, vê crescer a pressão para que o filho seja declarado herdeiro.",
      "caraxes": "Participa da guerra nos Degraus ao lado de Daemon, enfrentando as posições da Triarquia.",
      "seasmoke": "Laenor monta Seasmoke durante o ataque decisivo nos Degraus, apoiando Daemon e as tropas Velaryon.",
      "craghas": "Enfrenta a campanha de Corlys e Daemon nos Degraus. É morto por Daemon ao fim do ataque às posições da Triarquia."
    },
    "4": {
      "otto": "É destituído do cargo de Mão após a denúncia sobre Rhaenyra e Daemon.",
      "criston": "Passa a noite com Rhaenyra, quebrando seu voto de castidade.",
      "lyonel": "Substitui Otto como Mão do Rei."
    },
    "5": {
      "rhaenyra": "Casa-se com Laenor Velaryon após negociar com ele um acordo sobre suas vidas privadas.",
      "criston": "Após ser rejeitado por Rhaenyra, confessa a Alicent e mata Joffrey Lonmouth na celebração.",
      "laenor": "Casa-se com Rhaenyra e perde seu companheiro Joffrey, morto por Criston.",
      "alicent": "Adota o verde dos Hightower na celebração do casamento e se distancia politicamente de Rhaenyra.",
      "rhea": "É derrubada do cavalo durante o encontro com Daemon, que se aproxima com uma pedra. Sua morte permite que o príncipe reivindique a herança de Pedrarruna.",
      "gerold": "Confronta Daemon na celebração do casamento de Rhaenyra e Laenor e o acusa de envolvimento na morte de Rhea."
    },
    "6": {
      "rhaenyra": "Mãe de Jacaerys, Lucerys e Joffrey. Deixa Porto Real rumo a Pedra do Dragão diante da hostilidade da corte.",
      "laena": "Casada com Daemon e mãe de Baela e Rhaena. Morre pelo fogo de Vhagar durante um parto sem saída.",
      "harwin": "Sua proximidade com Rhaenyra alimenta suspeitas sobre a paternidade dos príncipes. Morre no incêndio de Harrenhal.",
      "lyonel": "Mão do Rei, morto com Harwin no incêndio de Harrenhal.",
      "larys": "Organiza a morte do pai e do irmão e apresenta o crime a Alicent como um favor.",
      "aegon": "Adolescente, participa das provocações a Aemond. Alicent insiste que ele representa um desafio à sucessão de Rhaenyra.",
      "otto": "Retorna ao cargo de Mão do Rei após a morte de Lyonel.",
      "vhagar": "É a montaria de Laena Velaryon em Pentos. Durante o parto fatal de Laena, ela atende ao pedido de sua cavaleira e a queima.",
      "orwyle": "Ocupa o posto de Grande Meistre no Pequeno Conselho durante os últimos anos do reinado de Viserys.",
      "mellos": "O posto de Grande Meistre aparece agora ocupado por Orwyle, em lugar de Mellos."
    },
    "7": {
      "aemond": "Reivindica Vhagar e perde um olho na luta com os sobrinhos. Sua força militar cresce junto com o ressentimento.",
      "laenor": "Sua morte é encenada. Foge de Westeros com Qarl Correy; a família acredita que ele morreu.",
      "rhaenyra": "Casa-se com Daemon depois da fuga secreta de Laenor.",
      "daemon": "Casa-se com Rhaenyra após ajudá-la a encenar a morte de Laenor.",
      "lucerys": "Fere Aemond na luta em Derivamarca, causando a perda do olho do tio.",
      "vhagar": "Após a morte de Laena, Aemond reivindica Vhagar em Derivamarca e realiza seu primeiro voo com ela.",
      "qarl": "Participa da encenação da morte de Laenor em Derivamarca. Os dois deixam Westeros juntos em segredo."
    },
    "8": {
      "viserys": "Defende Lucerys no salão e tenta reunir a família no jantar. Morre naquela noite.",
      "vaemond": "Contesta a sucessão de Lucerys em Derivamarca diante do trono. Insulta Rhaenyra e seus filhos e é morto por Daemon.",
      "alicent": "Interpreta as palavras finais de Viserys como um desejo de coroar seu filho Aegon.",
      "rhaenys": "Apoia Lucerys na disputa por Derivamarca e aceita a aproximação entre suas netas e os filhos de Rhaenyra.",
      "helaena": "Casada com Aegon, participa do último jantar de Viserys.",
      "aemond": "Já adulto, treina com Criston Cole e participa do jantar familiar. Provoca os sobrinhos com um brinde aos rapazes Strong."
    },
    "9": {
      "aegon": "É coroado Aegon II no Fosso dos Dragões, com a coroa de Aegon, o Conquistador.",
      "rhaenys": "Escapa de Porto Real montada em Meleys após confrontar os verdes durante a coroação.",
      "mysaria": "Conhecida como Verme Branco, negocia informações sobre Aegon e exige proteção para crianças exploradas na cidade.",
      "meleys": "Rhaenys escapa no dorso de Meleys durante a coroação de Aegon no Fosso dos Dragões e deixa Porto Real.",
      "harrold": "Recusa-se a cumprir a ordem de atacar Rhaenyra e seus filhos. Retira o manto branco e abandona a reunião do conselho.",
      "erryk": "Ajuda Rhaenys a deixar o confinamento na Fortaleza Vermelha e rompe com os planos dos verdes.",
      "arryk": "Permanece em Porto Real enquanto Aegon é levado para a coroação. Sua trajetória se separa da do irmão Erryk.",
      "beesbury": "Contesta os planos de coroar Aegon no Pequeno Conselho. Criston Cole o mata durante a discussão.",
      "orwyle": "Participa da reunião do Pequeno Conselho após a morte de Viserys, na qual se prepara a coroação de Aegon.",
      "jasper": "Participa do conselho que prepara a ascensão de Aegon e discute o que fazer com a família de Rhaenyra.",
      "talya": "É identificada como uma das fontes de informação de Mysaria dentro da corte e é levada sob custódia."
    },
    "10": {
      "rhaenyra": "Perde a filha Visenya, é coroada em Pedra do Dragão e recebe a notícia da morte de Lucerys.",
      "lucerys": "Vai como emissário a Ponta Tempestade. Morre com Arrax após a perseguição de Aemond e Vhagar.",
      "aemond": "Persegue Lucerys montado em Vhagar. Perde o controle da dragão, que mata o sobrinho e Arrax.",
      "corlys": "Recupera-se dos ferimentos e declara sua frota e sua casa a favor de Rhaenyra.",
      "jacaerys": "É enviado como emissário ao Vale e ao Norte para buscar alianças para Rhaenyra.",
      "arrax": "Leva Lucerys a Ponta Tempestade. Na fuga, ataca Vhagar com fogo apesar das ordens do cavaleiro e é morto por ela durante a perseguição.",
      "vhagar": "Persegue Arrax e Lucerys nos céus de Ponta Tempestade. Após ser atingida pelo fogo de Arrax, ignora as ordens de Aemond e mata o jovem dragão e seu cavaleiro.",
      "vermithor": "Daemon entra nas cavernas de Pedra do Dragão, canta em alto valiriano e se aproxima de Vermithor, que permanece sem cavaleiro.",
      "erryk": "Chega a Pedra do Dragão com a coroa de Viserys, jura lealdade a Rhaenyra e a entrega para a coroação.",
      "boremund": "Borros é agora o senhor de Ponta Tempestade, sucedendo o pai. A missão de Lucerys encontra um novo interlocutor na Casa Baratheon."
    }
  },
  "places": [
    {
      "name": "Porto Real",
      "from_": 1,
      "desc": "Capital dos Sete Reinos e centro da disputa pela sucessão."
    },
    {
      "name": "Fortaleza Vermelha",
      "from_": 1,
      "desc": "Residência da família real, sede do conselho e palco das decisões da Coroa."
    },
    {
      "name": "Harrenhal",
      "from_": 1,
      "desc": "Local do Grande Conselho que escolhe Viserys; sede da Casa Strong."
    },
    {
      "name": "Pedra do Dragão",
      "from_": 2,
      "desc": "Fortaleza ancestral dos Targaryen, ocupada por Daemon durante seu desafio ao rei."
    },
    {
      "name": "Degraus",
      "from_": 2,
      "desc": "Arquipélago estratégico em que a Triarquia ameaça as rotas de Corlys."
    },
    {
      "name": "Mata do Rei",
      "from_": 3,
      "desc": "Floresta da caçada de aniversário de Aegon e do encontro de Rhaenyra com o cervo branco."
    },
    {
      "name": "Derivamarca",
      "from_": 5,
      "desc": "Sede dos Velaryon, onde são negociadas alianças e sucessões."
    },
    {
      "name": "Vale de Arryn",
      "from_": 5,
      "desc": "Região de origem de Rhea Royce, esposa de Daemon."
    },
    {
      "name": "Pentos",
      "from_": 6,
      "desc": "Cidade livre onde vivem Daemon, Laena e suas filhas."
    },
    {
      "name": "Fosso dos Dragões",
      "from_": 6,
      "desc": "Local de abrigo e treinamento dos dragões em Porto Real."
    },
    {
      "name": "Ponta Tempestade",
      "from_": 10,
      "desc": "Sede dos Baratheon, visitada por Lucerys em busca de apoio."
    }
  ]
};
