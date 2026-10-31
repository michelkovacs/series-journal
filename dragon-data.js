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
      "from": 3,
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
      "from": 8,
      "desc": "Irmão de Corlys. Contesta o direito de Lucerys à sucessão de Derivamarca."
    },
    {
      "id": "borros",
      "name": "Borros Baratheon",
      "cat": "corte",
      "from": 10,
      "desc": "Senhor de Ponta Tempestade. Avalia as propostas dos dois lados a partir dos interesses de sua casa."
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
          "focus": "rhaenys"
        },
        {
          "title": "A corte e a cidade",
          "text": "Daemon impõe uma repressão brutal em Porto Real. Otto questiona sua conduta e sua proximidade com o trono.",
          "focus": "daemon"
        },
        {
          "title": "O torneio e o parto",
          "text": "Enquanto cavaleiros disputam o torneio, Aemma morre em uma cesárea ordenada por Viserys. Baelon morre pouco depois.",
          "focus": "viserys"
        },
        {
          "title": "A herdeira",
          "text": "Após a provocação atribuída a Daemon sobre o bebê morto, Viserys afasta o irmão e nomeia Rhaenyra. Revela à filha o sonho de Aegon, o Conquistador.",
          "focus": "rhaenyra"
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
          "focus": "corlys"
        },
        {
          "title": "A ponte de Pedra do Dragão",
          "text": "Daemon toma um ovo de dragão e anuncia um casamento com Mysaria. Rhaenyra chega em Syrax e recupera o ovo sem combate.",
          "focus": "rhaenyra"
        },
        {
          "title": "Um novo casamento",
          "text": "Corlys e Rhaenys oferecem Laena como noiva do rei. Viserys anuncia que se casará com Alicent, surpreendendo Rhaenyra.",
          "focus": "alicent"
        },
        {
          "title": "Uma aliança fora da corte",
          "text": "Descontente com o rei, Corlys procura Daemon para agir nos Degraus.",
          "focus": "daemon"
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
          "focus": "aegon"
        },
        {
          "title": "A princesa na floresta",
          "text": "Rhaenyra se afasta da comitiva com Criston. Os dois enfrentam um javali; depois, ela poupa um cervo branco.",
          "focus": "rhaenyra"
        },
        {
          "title": "A palavra do rei",
          "text": "Viserys reafirma à filha que não pretende substituí-la. Ainda assim, exige que ela considere um casamento político.",
          "focus": "viserys"
        },
        {
          "title": "A batalha nos Degraus",
          "text": "Daemon usa a si mesmo como isca para atrair os inimigos. As forças de Corlys e Laenor vencem, e Daemon mata o Alimentador de Caranguejos.",
          "focus": "daemon"
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
          "focus": "daemon"
        },
        {
          "title": "Uma noite fora do castelo",
          "text": "Daemon leva Rhaenyra às ruas e a uma casa de prazer. Após ele deixá-la, ela retorna ao castelo e passa a noite com Criston.",
          "focus": "rhaenyra"
        },
        {
          "title": "A notícia chega ao rei",
          "text": "Otto relata a presença de Rhaenyra e Daemon na casa de prazer. Alicent interroga a amiga, que nega ter se deitado com o tio.",
          "focus": "alicent"
        },
        {
          "title": "O preço da reputação",
          "text": "Viserys determina o casamento de Rhaenyra com Laenor. Otto perde o cargo de Mão, e o rei manda levar um chá à filha.",
          "focus": "otto"
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
          "focus": "daemon"
        },
        {
          "title": "Um acordo de casamento",
          "text": "Rhaenyra e Laenor aceitam o dever dinástico e combinam preservar suas vidas íntimas. Viserys negocia com Corlys a futura sucessão.",
          "focus": "laenor"
        },
        {
          "title": "Criston confessa",
          "text": "Criston propõe fugir com Rhaenyra. Rejeitado, confessa a Alicent que quebrou seu voto de castidade.",
          "focus": "criston"
        },
        {
          "title": "O vestido verde",
          "text": "Alicent chega à celebração vestindo a cor de guerra dos Hightower. Durante o banquete, Criston mata Joffrey Lonmouth. Rhaenyra e Laenor casam-se em uma cerimônia apressada.",
          "focus": "alicent"
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
          "focus": "rhaenyra"
        },
        {
          "title": "A próxima geração",
          "text": "No treino dos príncipes, Criston provoca Harwin, que o agride. Alicent rejeita a proposta de casamento entre Jacaerys e Helaena.",
          "focus": "harwin"
        },
        {
          "title": "O fogo em Pentos",
          "text": "Laena, casada com Daemon e mãe de Baela e Rhaena, enfrenta um parto sem saída. Escolhe morrer pelo fogo de Vhagar.",
          "focus": "laena"
        },
        {
          "title": "O preço de um favor",
          "text": "Larys organiza o incêndio de Harrenhal que mata Lyonel e Harwin. Alicent fica horrorizada; Rhaenyra leva sua família para Pedra do Dragão.",
          "focus": "larys"
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
          "focus": "rhaenyra"
        },
        {
          "title": "Vhagar tem novo cavaleiro",
          "text": "Aemond reivindica Vhagar. Na briga com os outros jovens, Lucerys o fere, e ele perde um olho.",
          "focus": "aemond"
        },
        {
          "title": "A lâmina da rainha",
          "text": "Alicent exige reparação pela mutilação do filho. Tenta atingir Lucerys com a adaga de Viserys e fere o braço de Rhaenyra durante o confronto.",
          "focus": "alicent"
        },
        {
          "title": "Uma morte encenada",
          "text": "Rhaenyra e Daemon planejam a saída de Laenor. Um corpo substituto faz parecer que ele morreu, mas Laenor foge com Qarl. Rhaenyra e Daemon se casam.",
          "focus": "laenor"
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
          "focus": "vaemond"
        },
        {
          "title": "A entrada do rei",
          "text": "Muito debilitado, Viserys comparece ao salão para sustentar o direito de Lucerys. Daemon mata Vaemond após seus insultos a Rhaenyra e aos filhos.",
          "focus": "viserys"
        },
        {
          "title": "Um jantar de despedida",
          "text": "Viserys pede conciliação. Rhaenyra e Alicent trocam palavras de respeito, mas uma provocação de Aemond reabre a hostilidade entre os jovens.",
          "focus": "aemond"
        },
        {
          "title": "Palavras mal compreendidas",
          "text": "Alicent ouve o rei falar do sonho de Aegon e entende que ele se refere ao filho dos dois. Viserys morre sem perceber a confusão.",
          "focus": "alicent"
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
          "focus": "alicent"
        },
        {
          "title": "A busca pelo príncipe",
          "text": "Otto e Alicent enviam grupos para encontrar Aegon. O futuro rei é localizado por Aemond e Criston, que o levam à mãe.",
          "focus": "aegon"
        },
        {
          "title": "Rhaenys recusa a oferta",
          "text": "Confinada na Fortaleza Vermelha, Rhaenys rejeita o pedido de apoio de Alicent. Erryk Cargyll ajuda-a a sair.",
          "focus": "rhaenys"
        },
        {
          "title": "Coroa e dragão",
          "text": "Aegon é coroado no Fosso dos Dragões. Rhaenys emerge montada em Meleys, rompendo o piso e matando pessoas na multidão; encara os verdes e parte sem queimá-los.",
          "focus": "rhaenys"
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
          "focus": "rhaenyra"
        },
        {
          "title": "Uma segunda coroação",
          "text": "Erryk entrega a coroa de Viserys. Rhaenyra é coroada em Pedra do Dragão; Corlys declara apoio, e os negros calculam suas forças e alianças.",
          "focus": "corlys"
        },
        {
          "title": "Termos e mensageiros",
          "text": "Otto apresenta condições de rendição. Rhaenyra evita uma resposta imediata e envia os filhos como emissários: Jacaerys ao norte e Lucerys a Ponta Tempestade.",
          "focus": "rhaenyra"
        },
        {
          "title": "A tempestade",
          "text": "Lucerys encontra Aemond na corte de Borros Baratheon. Ao partir, é perseguido por Vhagar. Arrax lança fogo e os jovens perdem o controle dos dragões; Vhagar mata Lucerys e Arrax. Daemon leva a notícia a Rhaenyra.",
          "focus": "lucerys"
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
      "alicent": "Viserys anuncia seu casamento com Alicent. A escolha abala a amizade dela com Rhaenyra."
    },
    "3": {
      "daemon": "Vence a campanha dos Degraus ao lado de Corlys e Laenor, matando o Alimentador de Caranguejos.",
      "alicent": "Rainha e mãe de Aegon, vê crescer a pressão para que o filho seja declarado herdeiro."
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
      "alicent": "Adota o verde dos Hightower na celebração do casamento e se distancia politicamente de Rhaenyra."
    },
    "6": {
      "rhaenyra": "Mãe de Jacaerys, Lucerys e Joffrey. Deixa Porto Real rumo a Pedra do Dragão diante da hostilidade da corte.",
      "laena": "Casada com Daemon e mãe de Baela e Rhaena. Morre pelo fogo de Vhagar durante um parto sem saída.",
      "harwin": "Sua proximidade com Rhaenyra alimenta suspeitas sobre a paternidade dos príncipes. Morre no incêndio de Harrenhal.",
      "lyonel": "Mão do Rei, morto com Harwin no incêndio de Harrenhal.",
      "larys": "Organiza a morte do pai e do irmão e apresenta o crime a Alicent como um favor.",
      "aegon": "Adolescente, participa das provocações a Aemond. Alicent insiste que ele representa um desafio à sucessão de Rhaenyra.",
      "otto": "Retorna ao cargo de Mão do Rei após a morte de Lyonel."
    },
    "7": {
      "aemond": "Reivindica Vhagar e perde um olho na luta com os sobrinhos. Sua força militar cresce junto com o ressentimento.",
      "laenor": "Sua morte é encenada. Foge de Westeros com Qarl Correy; a família acredita que ele morreu.",
      "rhaenyra": "Casa-se com Daemon depois da fuga secreta de Laenor.",
      "daemon": "Casa-se com Rhaenyra após ajudá-la a encenar a morte de Laenor.",
      "lucerys": "Fere Aemond na luta em Derivamarca, causando a perda do olho do tio."
    },
    "8": {
      "viserys": "Defende Lucerys no salão e tenta reunir a família no jantar. Morre naquela noite.",
      "vaemond": "Contesta a sucessão de Lucerys e é morto por Daemon após insultar a princesa e seus filhos.",
      "alicent": "Interpreta as palavras finais de Viserys como um desejo de coroar seu filho Aegon.",
      "rhaenys": "Apoia Lucerys na disputa por Derivamarca e aceita a aproximação entre suas netas e os filhos de Rhaenyra.",
      "helaena": "Casada com Aegon, participa do último jantar de Viserys."
    },
    "9": {
      "aegon": "É coroado Aegon II no Fosso dos Dragões, com a coroa de Aegon, o Conquistador.",
      "rhaenys": "Escapa de Porto Real montada em Meleys após confrontar os verdes durante a coroação.",
      "mysaria": "Conhecida como Verme Branco, negocia informações sobre Aegon e exige proteção para crianças exploradas na cidade."
    },
    "10": {
      "rhaenyra": "Perde a filha Visenya, é coroada em Pedra do Dragão e recebe a notícia da morte de Lucerys.",
      "lucerys": "Vai como emissário a Ponta Tempestade. Morre com Arrax após a perseguição de Aemond e Vhagar.",
      "aemond": "Persegue Lucerys montado em Vhagar. Perde o controle da dragão, que mata o sobrinho e Arrax.",
      "corlys": "Recupera-se dos ferimentos e declara sua frota e sua casa a favor de Rhaenyra.",
      "jacaerys": "É enviado como emissário ao Vale e ao Norte para buscar alianças para Rhaenyra."
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
