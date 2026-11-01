const THREE_BODY_DATA = {
  "characters": [
    {
      "id": "ye",
      "name": "Ye Wenjie",
      "cat": "passado",
      "from": 1,
      "desc": "Astrofísica marcada pela violência da Revolução Cultural. No presente, é a mãe de Vera Ye."
    },
    {
      "id": "jin",
      "name": "Jin Cheng",
      "cat": "cientistas",
      "from": 1,
      "desc": "Física teórica e integrante do grupo de amigos formado em Oxford. Procura uma explicação para os resultados impossíveis dos experimentos."
    },
    {
      "id": "saul",
      "name": "Saul Durand",
      "cat": "cientistas",
      "from": 1,
      "desc": "Físico ligado ao laboratório de Vera Ye e amigo de Jin, Auggie, Jack e Will. Enfrenta a crise da ciência com ceticismo."
    },
    {
      "id": "auggie",
      "name": "Auggie Salazar",
      "cat": "cientistas",
      "from": 1,
      "desc": "Pesquisadora de nanofibras. Uma contagem regressiva invade sua visão, enquanto uma desconhecida exige que abandone o trabalho."
    },
    {
      "id": "jack",
      "name": "Jack Rooney",
      "cat": "cientistas",
      "from": 1,
      "desc": "Ex-pesquisador que construiu uma empresa de alimentos. Mantém amizade próxima com o grupo de Oxford, em especial Will."
    },
    {
      "id": "will",
      "name": "Will Downing",
      "cat": "cientistas",
      "from": 1,
      "desc": "Professor e amigo do grupo de Oxford. Seus sentimentos por Jin convivem com uma postura reservada."
    },
    {
      "id": "shi",
      "name": "Clarence Shi (Da Shi)",
      "cat": "defesa",
      "from": 1,
      "desc": "Investigador encarregado de seguir os casos envolvendo cientistas. Trabalha para Thomas Wade."
    },
    {
      "id": "wade",
      "name": "Thomas Wade",
      "cat": "defesa",
      "from": 1,
      "desc": "Dirige uma estrutura de inteligência que investiga a ameaça aos cientistas. Adota métodos pragmáticos e pouco transparentes."
    },
    {
      "id": "tatiana",
      "name": "Tatiana Haas",
      "cat": "contatos",
      "from": 1,
      "desc": "Mulher que se aproxima de Auggie e a pressiona a interromper a pesquisa. Sabe mais sobre a contagem do que deveria."
    },
    {
      "id": "vera",
      "name": "Vera Ye",
      "cat": "cientistas",
      "from": 1,
      "desc": "Cientista ligada ao grupo de Oxford e filha de Ye Wenjie. Sua morte reúne os antigos colegas e amplia a investigação."
    },
    {
      "id": "ye-father",
      "name": "Ye Zhetai",
      "cat": "passado",
      "from": 1,
      "desc": "Pai de Ye Wenjie e professor de física. É morto durante uma sessão pública de perseguição política na Revolução Cultural."
    },
    {
      "id": "mike",
      "name": "Mike Evans",
      "cat": "contatos",
      "from": 2,
      "desc": "Ambientalista que Ye Wenjie conhece na China. Compartilha com ela o desencanto diante da destruição ambiental."
    },
    {
      "id": "raj",
      "name": "Raj Varma",
      "cat": "defesa",
      "from": 1,
      "desc": "Oficial da Marinha britânica e namorado de Jin Cheng. Sua formação militar contrasta com a visão dos cientistas."
    },
    {
      "id": "sophon",
      "name": "Guia do jogo",
      "cat": "contatos",
      "from": 2,
      "desc": "Figura que aparece na experiência virtual associada ao headset. Orienta participantes por um mundo regido por condições extremas."
    },
    {
      "id": "lilian",
      "name": "Lilian Joseph",
      "cat": "defesa",
      "from": 8,
      "desc": "Secretária-geral da ONU. Apresenta a iniciativa Wallfacer como parte da resposta internacional à ameaça San-Ti."
    }
  ],
  "links": [
    {
      "a": "ye",
      "b": "ye-father",
      "label": "Filha e pai",
      "start": 1,
      "end": 8
    },
    {
      "a": "ye",
      "b": "vera",
      "label": "Mãe e filha",
      "start": 1,
      "end": 8
    },
    {
      "a": "vera",
      "b": "saul",
      "label": "Laboratório e pesquisa",
      "start": 1,
      "end": 8
    },
    {
      "a": "vera",
      "b": "jin",
      "label": "Vínculo acadêmico",
      "start": 1,
      "end": 8
    },
    {
      "a": "shi",
      "b": "wade",
      "label": "Investigação sob comando",
      "start": 1,
      "end": 8
    },
    {
      "a": "jin",
      "b": "raj",
      "label": "Relacionamento",
      "start": 1,
      "end": 8
    },
    {
      "a": "auggie",
      "b": "tatiana",
      "label": "Ameaça e contagem",
      "start": 1,
      "end": 8
    },
    {
      "a": "will",
      "b": "jack",
      "label": "Amizade próxima",
      "start": 1,
      "end": 8
    },
    {
      "a": "will",
      "b": "jin",
      "label": "Amizade e afeto reservado",
      "start": 1,
      "end": 8
    },
    {
      "a": "saul",
      "b": "auggie",
      "label": "Amizade e proximidade",
      "start": 1,
      "end": 8
    },
    {
      "a": "jin",
      "b": "saul",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "jin",
      "b": "auggie",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "jin",
      "b": "jack",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "saul",
      "b": "will",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "auggie",
      "b": "will",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "jack",
      "b": "auggie",
      "label": "Amigos de Oxford",
      "start": 1,
      "end": 8
    },
    {
      "a": "ye",
      "b": "mike",
      "label": "Encontro na China",
      "start": 2,
      "end": 8
    },
    {
      "a": "jin",
      "b": "sophon",
      "label": "Participante e guia do jogo",
      "start": 2,
      "end": 8
    },
    {
      "a": "jack",
      "b": "sophon",
      "label": "Participante e guia do jogo",
      "start": 2,
      "end": 8
    },
    {
      "a": "tatiana",
      "b": "jack",
      "label": "Recusa ao recrutamento e assassinato",
      "start": 3,
      "end": 8
    },
    {
      "a": "jin",
      "b": "shi",
      "label": "Infiltração e investigação",
      "start": 4,
      "end": 8
    },
    {
      "a": "jin",
      "b": "wade",
      "label": "Cooperação contra a ameaça",
      "start": 4,
      "end": 8
    },
    {
      "a": "ye",
      "b": "tatiana",
      "label": "Movimento aliado aos San-Ti",
      "start": 4,
      "end": 8
    },
    {
      "a": "wade",
      "b": "auggie",
      "label": "Nanofibras na operação do Panamá",
      "start": 5,
      "end": 8
    },
    {
      "a": "raj",
      "b": "auggie",
      "label": "Operação no Judgment Day",
      "start": 5,
      "end": 8
    },
    {
      "a": "wade",
      "b": "sophon",
      "label": "Revelação dos sophons",
      "start": 5,
      "end": 8
    },
    {
      "a": "jin",
      "b": "will",
      "label": "Presente da estrela",
      "start": 6,
      "end": 8
    },
    {
      "a": "ye",
      "b": "saul",
      "label": "Conversa enigmática",
      "start": 7,
      "end": 8
    },
    {
      "a": "wade",
      "b": "will",
      "label": "Cérebro para o Projeto Escada",
      "start": 7,
      "end": 8
    },
    {
      "a": "ye",
      "b": "tatiana",
      "label": "Despedida na Costa Vermelha",
      "start": 7,
      "end": 8
    },
    {
      "a": "shi",
      "b": "saul",
      "label": "Proteção contra atentados",
      "start": 8,
      "end": 8
    },
    {
      "a": "lilian",
      "b": "saul",
      "label": "Nomeação como Wallfacer",
      "start": 8,
      "end": 8
    }
  ],
  "episodes": [
    {
      "number": 1,
      "title": "Countdown",
      "date": "2024-03-21",
      "lead": "Uma falha na ciência liga uma tragédia do passado a um mistério no presente.",
      "events": [
        {
          "title": "A origem de uma ruptura",
          "text": "Na China da Revolução Cultural, Ye Wenjie presencia a morte do pai. A perseguição política e as experiências que se seguem abalam sua confiança na humanidade.",
          "characters": [
            "ye",
            "ye-father"
          ],
          "focus": "ye"
        },
        {
          "title": "Experimentos sem resposta",
          "text": "Resultados incompatíveis entre si e mortes de pesquisadores inquietam o meio científico. A morte de Vera Ye reúne seus antigos colegas e coloca o grupo de Oxford sob observação.",
          "characters": [
            "vera",
            "saul",
            "jin",
            "shi"
          ],
          "focus": "vera"
        },
        {
          "title": "Uma contagem que só Auggie vê",
          "text": "A pesquisadora começa a enxergar números que ninguém mais vê. Tatiana manda que ela encerre seu projeto de nanofibras e anuncia um sinal no céu.",
          "characters": [
            "auggie",
            "tatiana"
          ],
          "focus": "auggie"
        },
        {
          "title": "O universo parece piscar",
          "text": "A observação do céu deixa de ser uma rotina científica. O fenômeno previsto por Tatiana transforma a ameaça particular a Auggie em algo muito maior.",
          "characters": [
            "auggie",
            "saul"
          ],
          "focus": "auggie"
        }
      ],
      "questions": [
        "Quem interfere nas pesquisas e na percepção de Auggie?",
        "O que conecta as mortes de cientistas?",
        "Como o céu pode apresentar um fenômeno que desafia a física?"
      ]
    },
    {
      "number": 2,
      "title": "Red Coast",
      "date": "2024-03-21",
      "lead": "Um jogo impossível e uma mensagem distante ampliam a escala do problema.",
      "events": [
        {
          "title": "O preço de parar a pesquisa",
          "text": "Auggie suspende o trabalho com nanofibras, e a contagem desaparece. A coincidência torna a ameaça concreta, sem esclarecer sua origem.",
          "characters": [
            "auggie"
          ],
          "focus": "auggie"
        },
        {
          "title": "Um mundo que recomeça",
          "text": "Jin experimenta o headset associado a Vera; Jack também entra no jogo. Eles encontram civilizações sujeitas a eras estáveis e caóticas e tentam entender as regras daquele ambiente.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin"
        },
        {
          "title": "O Sol como amplificador",
          "text": "No passado, o trabalho de Ye Wenjie na base Costa Vermelha abre uma possibilidade de comunicação muito além da Terra. Seu encontro com Mike Evans reforça o debate sobre o futuro humano.",
          "characters": [
            "ye",
            "mike"
          ],
          "focus": "ye"
        },
        {
          "title": "A resposta a um aviso",
          "text": "Ye recebe um alerta de uma fonte extraterrestre que recomenda não responder. Desiludida com a humanidade, ela escolhe estabelecer contato mesmo assim.",
          "characters": [
            "ye"
          ],
          "focus": "ye"
        }
      ],
      "questions": [
        "O que o jogo está selecionando entre seus participantes?",
        "Quem enviou o alerta recebido por Ye Wenjie?",
        "Quais serão as consequências de sua resposta?"
      ]
    },
    {
      "number": 3,
      "title": "Destroyer of Worlds",
      "date": "2024-03-21",
      "lead": "A experiência virtual revela uma civilização em busca de sobrevivência.",
      "events": [
        {
          "title": "Uma tecnologia sob coerção",
          "text": "A tentativa de retomar as nanofibras traz de volta a contagem. A pressão sobre Auggie impede que o avanço técnico siga seu curso normal.",
          "characters": [
            "auggie"
          ],
          "focus": "auggie"
        },
        {
          "title": "Três sóis, um destino instável",
          "text": "Jin e Jack atravessam novos desafios do jogo. A combinação de três estrelas explica a alternância imprevisível de condições e a repetição de catástrofes.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin"
        },
        {
          "title": "Salvar a população, não a equação",
          "text": "A experiência exige que os participantes pensem na sobrevivência dos habitantes. O jogo começa a funcionar como um convite para uma causa real, ligada aos San-Ti.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin"
        },
        {
          "title": "Uma recusa fatal",
          "text": "Jack rejeita o recrutamento. Tatiana o mata em sua casa; os recursos de vigilância ao redor não conseguem impedir nem esclarecer o ataque.",
          "characters": [
            "jack",
            "tatiana",
            "shi"
          ],
          "focus": "jack"
        }
      ],
      "questions": [
        "Como Tatiana consegue escapar da vigilância?",
        "Quem organiza o recrutamento dos jogadores?",
        "O que o destino de Jack significa para Jin e seus amigos?"
      ]
    },
    {
      "number": 4,
      "title": "Our Lord",
      "date": "2024-03-21",
      "lead": "A investigação chega à organização humana por trás do contato.",
      "events": [
        {
          "title": "Uma aliança construída por décadas",
          "text": "O passado de Ye e Evans se conecta às comunicações com os San-Ti. O navio Judgment Day integra a infraestrutura desse vínculo.",
          "characters": [
            "ye",
            "mike"
          ],
          "focus": "ye"
        },
        {
          "title": "Jin aceita uma missão perigosa",
          "text": "Depois da morte de Jack, Wade e Shi propõem que Jin ajude a identificar a rede que a recrutou. Ela participa de um encontro da organização.",
          "characters": [
            "jin",
            "shi",
            "wade"
          ],
          "focus": "jin"
        },
        {
          "title": "A líder e a operação policial",
          "text": "Ye Wenjie aparece como figura central do movimento. A reunião é invadida, Ye é presa e Tatiana escapa após ameaçar Jin.",
          "characters": [
            "ye",
            "jin",
            "tatiana",
            "shi"
          ],
          "focus": "ye"
        },
        {
          "title": "O problema da mentira",
          "text": "Em conversa com Evans, os San-Ti descobrem a distância entre pensamento, palavra e ficção entre os humanos. A confiança que sustentava o contato se desfaz.",
          "characters": [
            "mike"
          ],
          "focus": "mike"
        }
      ],
      "questions": [
        "Por que os San-Ti deixam de confiar em seus aliados humanos?",
        "O que há nos registros guardados no Judgment Day?",
        "Como Ye Wenjie justificará sua participação?"
      ]
    },
    {
      "number": 5,
      "title": "Judgment Day",
      "date": "2024-03-21",
      "lead": "Uma vitória tática revela uma ameaça já presente na Terra.",
      "events": [
        {
          "title": "Uma prisioneira dispensável",
          "text": "Ye é interrogada sobre o contato e a organização. Sua posição mostra que os antigos aliados humanos podem ter deixado de ser necessários aos San-Ti.",
          "characters": [
            "ye",
            "shi",
            "wade"
          ],
          "focus": "ye"
        },
        {
          "title": "A travessia do navio",
          "text": "Wade organiza uma operação no Canal do Panamá. Com a participação de Raj e a tecnologia de Auggie, nanofibras destroem o Judgment Day para permitir a recuperação dos dados.",
          "characters": [
            "wade",
            "raj",
            "auggie",
            "mike"
          ],
          "focus": "wade"
        },
        {
          "title": "A explicação dos sophons",
          "text": "Jin e Wade acessam os registros. A interface virtual explica que supercomputadores construídos a partir de prótons podem observar a humanidade e sabotar experimentos científicos.",
          "characters": [
            "jin",
            "wade",
            "sophon"
          ],
          "focus": "jin"
        },
        {
          "title": "Uma ameaça para todos",
          "text": "A interferência deixa de ser um segredo restrito aos investigadores. Mensagens e manifestações em escala global tornam pública a vulnerabilidade humana diante dos San-Ti.",
          "characters": [
            "jin",
            "wade",
            "auggie"
          ],
          "focus": "jin"
        }
      ],
      "questions": [
        "Como desenvolver ciência sob vigilância e sabotagem?",
        "Como impedir a chegada da frota prevista para cerca de quatro séculos depois?",
        "Qual é o limite ético das operações comandadas por Wade?"
      ]
    },
    {
      "number": 6,
      "title": "The Stars Our Destination",
      "date": "2024-03-21",
      "lead": "A resposta militar ganha um projeto científico, enquanto Will faz um gesto íntimo.",
      "events": [
        {
          "title": "Uma crise de alcance planetário",
          "text": "A exposição da ameaça força uma resposta internacional. Wade procura transformar o tempo até a chegada da frota em uma vantagem estratégica.",
          "characters": [
            "wade",
            "jin"
          ],
          "focus": "wade"
        },
        {
          "title": "O Projeto Escada",
          "text": "Jin trabalha na proposta de acelerar uma pequena sonda com uma vela impulsionada por explosões nucleares. O objetivo é alcançar a frota em viagem, muito antes de sua chegada à Terra.",
          "characters": [
            "jin",
            "wade",
            "raj"
          ],
          "focus": "jin"
        },
        {
          "title": "As consequências do Panamá",
          "text": "Auggie confronta o uso de sua tecnologia e o custo humano da operação. A prioridade militar da defesa afeta também o relacionamento de Jin com Raj.",
          "characters": [
            "auggie",
            "jin",
            "raj"
          ],
          "focus": "auggie"
        },
        {
          "title": "Uma estrela para Jin",
          "text": "Com câncer terminal, Will decide usar parte da herança de Jack para comprar um certificado de uma estrela para Jin. O presente expressa sentimentos que ele tem dificuldade de dizer.",
          "characters": [
            "will",
            "jin",
            "jack"
          ],
          "focus": "will"
        }
      ],
      "questions": [
        "O Projeto Escada pode funcionar com os recursos disponíveis?",
        "Will contará a Jin sobre o presente e seus sentimentos?",
        "Como conciliar a defesa do planeta com a responsabilidade pelos meios empregados?"
      ]
    },
    {
      "number": 7,
      "title": "Only Advance",
      "date": "2024-03-21",
      "lead": "A estratégia de longo prazo exige escolhas profundamente pessoais.",
      "events": [
        {
          "title": "Um futuro além de uma vida",
          "text": "Wade demonstra os avanços em hibernação e considera acompanhar a defesa por séculos. As limitações da propulsão reduzem radicalmente a carga possível da sonda.",
          "characters": [
            "wade",
            "jin"
          ],
          "focus": "wade"
        },
        {
          "title": "Uma conversa com Saul",
          "text": "Ye Wenjie encontra Saul e lhe conta uma história sobre Einstein e Deus. O sentido da conversa permanece indireto, mas suas palavras chamam atenção para algo que não pode ser dito abertamente.",
          "characters": [
            "ye",
            "saul"
          ],
          "focus": "ye"
        },
        {
          "title": "A escolha de Will",
          "text": "A proposta passa a envolver o envio de um cérebro preservado. Will aceita participar, Saul acompanha seu fim de vida e Jin chega tarde demais para se despedir como gostaria.",
          "characters": [
            "will",
            "saul",
            "jin",
            "wade"
          ],
          "focus": "will"
        },
        {
          "title": "Uma tecnologia aberta",
          "text": "Auggie disponibiliza sua pesquisa, retirando do controle exclusivo de uma empresa o conhecimento das nanofibras. Sua decisão segue um caminho diferente da concentração militar da tecnologia.",
          "characters": [
            "auggie"
          ],
          "focus": "auggie"
        },
        {
          "title": "O retorno à Costa Vermelha",
          "text": "Ye volta ao local associado à sua decisão original. Tatiana a encontra, e as duas compartilham o pôr do sol em uma despedida que encerra sua trajetória.",
          "characters": [
            "ye",
            "tatiana"
          ],
          "focus": "ye"
        }
      ],
      "questions": [
        "O que Ye tentou comunicar a Saul?",
        "O que acontecerá ao cérebro de Will durante a missão?",
        "A hibernação pode preservar uma estratégia humana ao longo dos séculos?"
      ]
    },
    {
      "number": 8,
      "title": "Wallfacer",
      "date": "2024-03-21",
      "lead": "A humanidade busca um espaço que seus adversários ainda não conseguem observar.",
      "events": [
        {
          "title": "Saul vira alvo",
          "text": "Uma morte em um atropelamento e novas ameaças revelam que Saul está sendo visado. Shi o coloca sob proteção e o leva às Nações Unidas.",
          "characters": [
            "saul",
            "shi"
          ],
          "focus": "saul"
        },
        {
          "title": "A mente como refúgio",
          "text": "Lilian Joseph apresenta o Projeto Wallfacer. Saul é um dos escolhidos para formular planos que podem permanecer apenas no pensamento, fora da leitura dos sophons; sua recusa não o retira do programa.",
          "characters": [
            "saul",
            "lilian",
            "shi"
          ],
          "focus": "saul"
        },
        {
          "title": "A trajetória se perde",
          "text": "A sonda do Projeto Escada parte com o cérebro de Will. Uma falha no sistema da vela a desvia da rota planejada, frustrando Jin e a equipe.",
          "characters": [
            "jin",
            "will",
            "wade"
          ],
          "focus": "jin"
        },
        {
          "title": "A ameaça continua próxima",
          "text": "Mesmo com iniciativas de defesa em andamento, os San-Ti demonstram a Wade que continuam capazes de interferir em sua percepção. A vigilância segue condicionando a resposta humana.",
          "characters": [
            "wade",
            "sophon"
          ],
          "focus": "wade"
        },
        {
          "title": "Uma razão para continuar",
          "text": "Shi leva Jin e Saul a observar insetos que persistem apesar das tentativas humanas de eliminá-los. A imagem oferece uma resposta ao desprezo dos San-Ti e um motivo para retomar o trabalho.",
          "characters": [
            "shi",
            "jin",
            "saul"
          ],
          "focus": "shi"
        }
      ],
      "questions": [
        "Por que Saul foi escolhido e por que é alvo dos San-Ti?",
        "Qual será o destino da sonda desviada?",
        "A humanidade conseguirá transformar sua opacidade mental em vantagem estratégica?"
      ]
    }
  ],
  "updates": {
    "2": {
      "ye": "Na base Costa Vermelha, responde a uma mensagem extraterrestre apesar do alerta de não fazê-lo. Seu encontro com Evans aproxima duas visões desencantadas da humanidade.",
      "jin": "Entra no jogo do headset e procura entender as eras estáveis e caóticas.",
      "jack": "Participa do jogo ao lado de Jin.",
      "auggie": "Suspende a pesquisa de nanofibras, e a contagem desaparece."
    },
    "3": {
      "jack": "Recusa participar da causa apresentada pelo jogo. É morto por Tatiana em sua casa.",
      "tatiana": "Mata Jack depois de sua recusa ao recrutamento e escapa da vigilância.",
      "sophon": "A experiência virtual apresenta os San-Ti, cuja civilização enfrenta condições catastróficas em um sistema de três estrelas."
    },
    "4": {
      "ye": "É revelada como líder do movimento aliado aos San-Ti e presa na operação contra a reunião.",
      "jin": "Ajuda Wade e Shi infiltrando-se na reunião dos apoiadores dos San-Ti.",
      "mike": "Mantém as comunicações do movimento a bordo do Judgment Day. Perde a confiança dos San-Ti quando eles compreendem que os humanos podem mentir."
    },
    "5": {
      "mike": "Está no Judgment Day quando o navio é destruído na operação do Panamá.",
      "auggie": "Sua tecnologia é usada para destruir o Judgment Day. O custo da operação a abala.",
      "raj": "Participa do comando operacional da ação no Panamá.",
      "sophon": "A guia explica os sophons: supercomputadores associados a prótons, usados para vigiar a Terra e bloquear o avanço da física.",
      "wade": "Consegue recuperar os dados do navio e conhecer a natureza da ameaça já presente na Terra."
    },
    "6": {
      "will": "Com câncer terminal, usa parte da herança de Jack para comprar uma estrela em nome de Jin.",
      "jin": "Desenvolve o Projeto Escada: uma sonda acelerada por uma sequência de explosões nucleares.",
      "raj": "Integra os esforços de defesa; sua postura militar provoca atritos com Jin."
    },
    "7": {
      "will": "Aceita ter o cérebro preservado para a missão do Projeto Escada. Morre com Saul por perto; Jin chega depois.",
      "ye": "Fala de modo enigmático com Saul e retorna à Costa Vermelha, onde Tatiana a encontra em uma despedida final.",
      "auggie": "Torna pública sua pesquisa de nanofibras.",
      "wade": "Planeja recorrer à hibernação para acompanhar uma defesa que pode durar séculos.",
      "saul": "Recebe uma história enigmática de Ye e acompanha a despedida de Will."
    },
    "8": {
      "saul": "Após tentativas de assassinato, é escolhido como Wallfacer pela ONU. Precisa entender por que os San-Ti o consideram perigoso.",
      "jin": "Acompanha a falha da sonda que leva o cérebro de Will. Ao lado de Saul, encontra em uma observação de Shi uma razão para não desistir.",
      "auggie": "Aplica sua tecnologia de filtragem de água em uma comunidade no México.",
      "shi": "Protege Saul e oferece a ele e a Jin uma imagem da persistência humana por meio dos insetos.",
      "wade": "Apesar do fracasso inicial da missão, prossegue com o planejamento de longo prazo e sofre uma demonstração da interferência dos San-Ti."
    }
  },
  "places": [
    {
      "name": "Universidade de Oxford",
      "from_": 1,
      "desc": "Ambiente de formação e pesquisa que liga Vera aos cinco amigos."
    },
    {
      "name": "Londres",
      "from_": 1,
      "desc": "Centro dos encontros do grupo e de parte da investigação de Shi."
    },
    {
      "name": "China durante a Revolução Cultural",
      "from_": 1,
      "desc": "Contexto da perseguição que marca a juventude de Ye Wenjie."
    },
    {
      "name": "Base Costa Vermelha",
      "from_": 1,
      "desc": "Instalação chinesa de pesquisa e transmissão de rádio."
    },
    {
      "name": "Mundo virtual do headset",
      "from_": 2,
      "desc": "Simulação de civilizações sujeitas a eras estáveis e caóticas."
    },
    {
      "name": "Judgment Day",
      "from_": 4,
      "desc": "Navio usado pela organização ligada aos San-Ti."
    },
    {
      "name": "Canal do Panamá",
      "from_": 5,
      "desc": "Local da operação para recuperar os dados do Judgment Day."
    },
    {
      "name": "Instalações do Projeto Escada",
      "from_": 6,
      "desc": "Centro da pesquisa de propulsão e preparação de uma missão de encontro à frota."
    },
    {
      "name": "Sede da ONU, Nova York",
      "from_": 8,
      "desc": "Local de apresentação do Projeto Wallfacer."
    },
    {
      "name": "Comunidade no México",
      "from_": 8,
      "desc": "Auggie emprega as nanofibras na filtragem de água para a população local."
    }
  ]
};
