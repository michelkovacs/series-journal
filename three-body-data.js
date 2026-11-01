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
          "focus": "ye",
          "paragraphs": [
            "Durante a Revolução Cultural, Ye Wenjie assiste à humilhação pública do pai, um professor acusado por defender ideias científicas condenadas politicamente. A sessão termina em sua morte, diante de pessoas que poderiam contestar a violência, mas participam dela ou permanecem caladas. Para Ye, a perda se liga à destruição da confiança em colegas, autoridades e laços familiares.",
            "O prólogo apresenta a ciência submetida à coerção e estabelece a dimensão pessoal dessa perseguição. A jovem não observa apenas uma disputa de conceitos: presencia uma sociedade transformar conhecimento e parentesco em motivos para punir alguém."
          ]
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
          "focus": "vera",
          "paragraphs": [
            "No presente, pesquisadores encontram resultados que parecem contradizer as bases de seus campos de estudo, e uma sequência de mortes preocupa os investigadores. O falecimento de Vera Ye reúne antigos colegas do grupo de Oxford, entre eles Jin, Auggie, Saul, Jack e Will. O reencontro combina lembranças da amizade com perguntas sobre o que vinha acontecendo no trabalho científico.",
            "Clarence Shi acompanha pessoas ligadas aos casos enquanto Wade procura compreender o alcance do problema. A investigação ainda não dispõe de uma causa comum: precisa distinguir crises pessoais, resultados inexplicáveis e a possibilidade de uma interferência deliberada."
          ]
        },
        {
          "title": "Uma contagem que só Auggie vê",
          "text": "A pesquisadora começa a enxergar números que ninguém mais vê. Tatiana manda que ela encerre seu projeto de nanofibras e anuncia um sinal no céu.",
          "characters": [
            "auggie",
            "tatiana"
          ],
          "focus": "auggie",
          "paragraphs": [
            "Auggie começa a enxergar uma contagem regressiva sobreposta ao que vê, mas as outras pessoas não conseguem observá-la. O fenômeno a acompanha fora do laboratório e torna difícil continuar a rotina. Tatiana a aborda sabendo o que está acontecendo e determina que encerre a pesquisa de nanofibras, ligando a contagem ao avanço de seu projeto.",
            "A mulher também anuncia um sinal que poderá ser observado no céu. Sem explicar o mecanismo, oferece a Auggie uma demonstração de que conhece e controla algo que a pesquisadora não consegue medir. A exigência transforma a experiência isolada em uma ameaça dirigida a uma atividade específica."
          ]
        },
        {
          "title": "O universo parece piscar",
          "text": "A observação do céu deixa de ser uma rotina científica. O fenômeno previsto por Tatiana transforma a ameaça particular a Auggie em algo muito maior.",
          "characters": [
            "auggie",
            "saul"
          ],
          "focus": "auggie",
          "paragraphs": [
            "Auggie e Saul aguardam o horário indicado por Tatiana e observam o céu noturno parecer piscar. A experiência corresponde ao aviso e impede que Auggie trate a contagem apenas como um problema de sua percepção. O que acontece diante deles passa a conectar a ameaça recebida à aparência do próprio universo.",
            "Os dois ficam sem uma explicação para o fenômeno. O encerramento do episódio amplia as perguntas que cercam as mortes e os experimentos: alguém parece capaz de produzir uma demonstração muito maior que o alcance de um laboratório, mas a origem dessa capacidade permanece desconhecida."
          ]
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
          "focus": "auggie",
          "paragraphs": [
            "Auggie interrompe o projeto de nanofibras, e os números deixam de aparecer. O alívio estabelece uma relação entre obedecer à ordem de Tatiana e recuperar uma percepção normal, mas não oferece uma explicação para o que ocorreu. A pesquisadora não sabe quem a está vigiando nem como uma mudança no laboratório pode controlar o fenômeno.",
            "Parar o trabalho também afeta uma tecnologia que ela e sua equipe levaram tempo para desenvolver. O problema deixa de ser apenas suportar a contagem: a ameaça passa a decidir quais pesquisas ela consegue continuar sem colocá-la novamente sob pressão."
          ]
        },
        {
          "title": "Um mundo que recomeça",
          "text": "Jin experimenta o headset associado a Vera; Jack também entra no jogo. Eles encontram civilizações sujeitas a eras estáveis e caóticas e tentam entender as regras daquele ambiente.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin",
          "paragraphs": [
            "Jin experimenta um headset ligado a Vera e entra em um ambiente que responde a seus movimentos e parece fisicamente real. Jack também participa do jogo, no qual diferentes civilizações tentam sobreviver a mudanças extremas de temperatura e de condições ambientais. Cada fracasso pode destruir a sociedade e iniciar outra tentativa.",
            "Os dois procuram identificar um padrão que permita prever as eras estáveis e caóticas. O jogo exige observar, formular hipóteses e reconsiderar explicações, enquanto a figura de uma criança torna as perdas daquela população menos abstratas para Jin."
          ]
        },
        {
          "title": "O Sol como amplificador",
          "text": "No passado, o trabalho de Ye Wenjie na base Costa Vermelha abre uma possibilidade de comunicação muito além da Terra. Seu encontro com Mike Evans reforça o debate sobre o futuro humano.",
          "characters": [
            "ye",
            "mike"
          ],
          "focus": "ye",
          "paragraphs": [
            "Na base Costa Vermelha, Ye trabalha dentro de um programa de comunicação controlado por militares e autoridades políticas. Seus estudos apontam que o Sol pode funcionar como amplificador de um sinal, abrindo uma possibilidade de transmissão muito além do alcance previsto para os equipamentos. Uma escolha técnica pode, assim, romper os limites impostos à operação.",
            "As lembranças de seu contato com Mike Evans acrescentam outra fonte de desilusão: a destruição do ambiente e a dificuldade de proteger vidas contra interesses humanos. A pesquisa de Ye passa a se ligar a uma pergunta sobre quem, se alguém, poderia corrigir esse comportamento."
          ]
        },
        {
          "title": "A resposta a um aviso",
          "text": "Ye recebe um alerta de uma fonte extraterrestre que recomenda não responder. Desiludida com a humanidade, ela escolhe estabelecer contato mesmo assim.",
          "characters": [
            "ye"
          ],
          "focus": "ye",
          "paragraphs": [
            "Ye recebe uma resposta de origem extraterrestre que não se apresenta como convite amistoso. A mensagem parte de alguém que a adverte a não responder, pois uma nova transmissão poderá permitir que seu mundo seja localizado. Ela tem diante de si uma confirmação de contato acompanhada por um aviso explícito sobre o risco de prosseguir.",
            "Mesmo assim, decide enviar uma resposta e convida a intervenção dessa civilização. A escolha nasce de sua desconfiança na humanidade, mas não vem acompanhada de garantias sobre as intenções ou os métodos daqueles a quem oferece a possibilidade de chegar à Terra."
          ]
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
          "focus": "auggie",
          "paragraphs": [
            "A possibilidade de retomar o trabalho com nanofibras faz a contagem reaparecer para Auggie. O retorno dos números repete a associação entre a ameaça e uma decisão de pesquisa, reduzindo a chance de ela interpretar o primeiro episódio como coincidência. A pressão parece acompanhar o desenvolvimento da tecnologia, e não apenas sua presença em determinado lugar.",
            "Auggie precisa decidir se insiste no projeto sem compreender os meios usados contra ela. Interromper a atividade oferece uma trégua pessoal, mas também entrega a alguém desconhecido o poder de limitar o que a equipe pode construir."
          ]
        },
        {
          "title": "Três sóis, um destino instável",
          "text": "Jin e Jack atravessam novos desafios do jogo. A combinação de três estrelas explica a alternância imprevisível de condições e a repetição de catástrofes.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin",
          "paragraphs": [
            "Jin e Jack avançam no jogo e encontram novas tentativas de explicar as catástrofes. As mudanças não dependem de um único Sol em um sistema previsível: a presença de três estrelas submete o planeta a combinações instáveis, capazes de arruinar os cálculos feitos para uma era anterior. As soluções propostas repetidamente deixam de funcionar.",
            "A descoberta muda a natureza do desafio. Não basta encontrar um calendário melhor ou corrigir a teoria de um governante; é preciso encarar a dificuldade do próprio sistema e o sofrimento de uma população que vive entre períodos de sobrevivência e destruição."
          ]
        },
        {
          "title": "Salvar a população, não a equação",
          "text": "A experiência exige que os participantes pensem na sobrevivência dos habitantes. O jogo começa a funcionar como um convite para uma causa real, ligada aos San-Ti.",
          "characters": [
            "jin",
            "jack",
            "sophon"
          ],
          "focus": "jin",
          "paragraphs": [
            "Ao avançar, Jin percebe que a experiência não valoriza apenas a capacidade de resolver uma equação. A preocupação com os habitantes e a tentativa de salvá-los têm um papel central na seleção dos jogadores. O ambiente virtual começa a revelar sua ligação com uma civilização real e com pessoas que procuram obter apoio para ela na Terra.",
            "A apresentação dos San-Ti transforma a curiosidade em uma proposta de adesão. Jin e Jack precisam decidir o que fazer com a explicação recebida: reconhecer o sofrimento mostrado no jogo não significa aceitar automaticamente a organização que os convidou."
          ]
        },
        {
          "title": "Uma recusa fatal",
          "text": "Jack rejeita o recrutamento. Tatiana o mata em sua casa; os recursos de vigilância ao redor não conseguem impedir nem esclarecer o ataque.",
          "characters": [
            "jack",
            "tatiana",
            "shi"
          ],
          "focus": "jack",
          "paragraphs": [
            "Jack rejeita o recrutamento e questiona as pessoas por trás do jogo. Depois, Tatiana o procura em sua casa, e o confronto termina com sua morte. O ataque demonstra que a organização não trata a recusa como uma simples decisão de parar de jogar ou encerrar um contato comercial.",
            "Os meios de vigilância disponíveis não fornecem aos investigadores uma explicação suficiente do que aconteceu. Para os amigos de Jack, a ameaça deixa de se limitar a números, experiências virtuais e avisos: alguém foi morto depois de dizer que não queria participar."
          ]
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
          "focus": "ye",
          "paragraphs": [
            "As lembranças de Ye Wenjie e Mike Evans mostram como o contato extraterrestre ganhou continuidade e uma organização humana ao redor. Evans coloca recursos a serviço dessa ligação, e o Judgment Day funciona como uma base material para as comunicações. O movimento reúne convicção, infraestrutura e capacidade de agir em diferentes lugares.",
            "O que chegou a Jin e Jack como um jogo sofisticado faz parte de uma rede construída ao longo de décadas. Para a investigação, compreender essa estrutura exige identificar seus integrantes e também os meios pelos quais mantêm o contato que defendem."
          ]
        },
        {
          "title": "Jin aceita uma missão perigosa",
          "text": "Depois da morte de Jack, Wade e Shi propõem que Jin ajude a identificar a rede que a recrutou. Ela participa de um encontro da organização.",
          "characters": [
            "jin",
            "shi",
            "wade"
          ],
          "focus": "jin",
          "paragraphs": [
            "Depois da morte de Jack, Jin aceita colaborar com Wade e Shi para descobrir mais sobre a organização que a procurou. Ela precisa apresentar-se como alguém receptivo ao convite, embora tenha razões pessoais para temer e desconfiar dos recrutadores. O acesso à reunião oferece uma oportunidade de identificar a liderança e os participantes.",
            "A missão depende de manter a aparência de adesão durante o encontro. Jin não dispõe de respostas completas sobre a capacidade de vigilância dos adversários, de modo que a operação envolve um risco que não pode ser afastado apenas pela presença de apoio policial."
          ]
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
          "focus": "ye",
          "paragraphs": [
            "Na reunião, Jin encontra Ye Wenjie apresentada como uma liderança importante da organização. A revelação liga alguém que ela conhece ao movimento responsável pelo recrutamento e que continua cercado pelas suspeitas sobre a morte de Jack. A intervenção policial interrompe o encontro e permite prender Ye e outros participantes.",
            "Tatiana, porém, consegue escapar depois de ameaçar Jin. A ação atinge parte da rede humana sem eliminar todos os seus agentes. Jin sai do encontro com uma compreensão diferente do passado de Ye, mas também com a percepção de que sua colaboração a expôs pessoalmente."
          ]
        },
        {
          "title": "O problema da mentira",
          "text": "Em conversa com Evans, os San-Ti descobrem a distância entre pensamento, palavra e ficção entre os humanos. A confiança que sustentava o contato se desfaz.",
          "characters": [
            "mike"
          ],
          "focus": "mike",
          "paragraphs": [
            "Evans conversa com os San-Ti e usa uma história de ficção para explicar o comportamento humano. Seus interlocutores não compreendem inicialmente como alguém pode dizer algo diferente do que sabe ou pensa. A explicação da mentira transforma uma conversa aparentemente simples em um problema de confiança entre as duas espécies.",
            "Os San-Ti percebem que aquilo que escutam dos aliados humanos pode não corresponder à intenção real de quem fala. Evans tenta preservar a relação, mas a descoberta altera os termos do contato: linguagem e aparência deixam de oferecer a segurança que seus interlocutores supunham existir."
          ]
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
          "focus": "ye",
          "paragraphs": [
            "Presa após a operação contra a reunião, Ye Wenjie é interrogada sobre a origem do contato e sobre a organização formada para apoiar os San-Ti. Ela precisa explicar decisões tomadas muito antes da investigação atual, ligando sua experiência na Costa Vermelha ao movimento que os agentes encontraram no presente.",
            "A conversa também expõe os limites de sua posição. O compromisso que assumiu e a importância que atribui ao próprio papel não garantem que os San-Ti ainda precisem dela ou dos demais colaboradores humanos. O contato tem objetivos que não dependem da lealdade dessas pessoas."
          ]
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
          "focus": "wade",
          "paragraphs": [
            "Wade prepara a interceptação do Judgment Day no Canal do Panamá para recuperar seus registros sem permitir que sejam destruídos antes da apreensão. A operação utiliza as nanofibras de Auggie, estendidas no trajeto da embarcação, e conta com a participação de Raj. Quando o navio atravessa a passagem, os fios cortam sua estrutura e atingem as pessoas a bordo.",
            "A equipe consegue avançar na busca pelos dados, mas a execução provoca uma mortandade. Para Auggie, o resultado torna concreto um uso de sua pesquisa que ela não consegue tratar apenas como êxito técnico. O custo da operação passa a acompanhar as informações recuperadas."
          ]
        },
        {
          "title": "A explicação dos sophons",
          "text": "Jin e Wade acessam os registros. A interface virtual explica que supercomputadores construídos a partir de prótons podem observar a humanidade e sabotar experimentos científicos.",
          "characters": [
            "jin",
            "wade",
            "sophon"
          ],
          "focus": "jin",
          "paragraphs": [
            "A análise dos registros leva Jin e Wade a uma apresentação virtual dos mecanismos usados pelos San-Ti. Eles conhecem os sophons: estruturas computacionais produzidas a partir de prótons, capazes de observar a atividade humana e interferir nos experimentos necessários para o avanço da ciência. Os resultados absurdos dos laboratórios passam a ter uma explicação comum.",
            "A descoberta esclarece também por que o adversário sabe tanto sobre os preparativos terrestres. A humanidade não enfrenta apenas uma frota distante: sua capacidade de investigar e de desenvolver uma resposta já está sendo limitada por recursos presentes aqui."
          ]
        },
        {
          "title": "Uma ameaça para todos",
          "text": "A interferência deixa de ser um segredo restrito aos investigadores. Mensagens e manifestações em escala global tornam pública a vulnerabilidade humana diante dos San-Ti.",
          "characters": [
            "jin",
            "wade",
            "auggie"
          ],
          "focus": "jin",
          "paragraphs": [
            "A ameaça passa a ser demonstrada publicamente por mensagens que aparecem em escala global, incluindo a declaração de que os humanos são insetos. A situação deixa de pertencer apenas aos cientistas e investigadores que acompanhavam os casos. Pessoas sem contato com a organização ou com os laboratórios também recebem a manifestação do poder adversário.",
            "A divulgação impõe uma mudança de escala à resposta. Já não basta esclarecer mortes e fenômenos isolados: governos e sociedade precisam lidar com uma ameaça anunciada, ao mesmo tempo que os instrumentos para compreendê-la e combatê-la continuam sob interferência."
          ]
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
          "focus": "wade",
          "paragraphs": [
            "Com a ameaça conhecida, a defesa passa a exigir articulação internacional e projetos capazes de durar muito além de um mandato político. Wade procura aproveitar o longo tempo de viagem da frota, tratando a distância como uma oportunidade de preparação. Isso não elimina a urgência, pois a vigilância e o bloqueio científico já afetam as decisões do presente.",
            "Os cientistas precisam trabalhar com um horizonte diferente do habitual: muitas consequências de seus planos ocorrerão depois de suas próprias vidas. A preparação passa a combinar pesquisa, recursos militares e decisões sobre o que é possível preservar ou transmitir às gerações seguintes."
          ]
        },
        {
          "title": "O Projeto Escada",
          "text": "Jin trabalha na proposta de acelerar uma pequena sonda com uma vela impulsionada por explosões nucleares. O objetivo é alcançar a frota em viagem, muito antes de sua chegada à Terra.",
          "characters": [
            "jin",
            "wade",
            "raj"
          ],
          "focus": "jin",
          "paragraphs": [
            "Jin desenvolve o Projeto Escada, que tenta acelerar uma sonda até uma velocidade suficiente para alcançar a frota em viagem. A proposta usa uma vela submetida a impulsos de explosões nucleares, buscando contornar os limites de propulsão de uma nave convencional. Cada etapa precisa conciliar a distância do alvo, a energia disponível e a resistência do equipamento.",
            "A massa da carga se torna um obstáculo decisivo: transportar mais material exige um desempenho que o sistema talvez não consiga fornecer. O projeto avança, portanto, por sucessivas reduções e ajustes, sem que o objetivo estratégico de alcançar os San-Ti deixe de orientar a equipe."
          ]
        },
        {
          "title": "As consequências do Panamá",
          "text": "Auggie confronta o uso de sua tecnologia e o custo humano da operação. A prioridade militar da defesa afeta também o relacionamento de Jin com Raj.",
          "characters": [
            "auggie",
            "jin",
            "raj"
          ],
          "focus": "auggie",
          "paragraphs": [
            "Auggie enfrenta as imagens e as consequências da destruição do Judgment Day. O uso das nanofibras liga seu trabalho a mortes que ela não aceita reduzir a um problema de necessidade militar. Raj e os responsáveis pela operação defendem decisões tomadas no contexto da ameaça, mas essa justificativa não encerra seu conflito.",
            "Jin também precisa lidar com as diferenças entre os valores pessoais e as prioridades da defesa, inclusive em sua relação com Raj. As discussões mostram como pessoas que reconhecem o mesmo perigo podem discordar profundamente sobre o que é legítimo fazer em nome de uma resposta."
          ]
        },
        {
          "title": "Uma estrela para Jin",
          "text": "Com câncer terminal, Will decide usar parte da herança de Jack para comprar um certificado de uma estrela para Jin. O presente expressa sentimentos que ele tem dificuldade de dizer.",
          "characters": [
            "will",
            "jin",
            "jack"
          ],
          "focus": "will",
          "paragraphs": [
            "Will, com câncer terminal, recebe a possibilidade de usar parte da herança deixada por Jack em algo que sobreviva ao tempo que lhe resta. Ele compra para Jin um certificado associado a uma estrela, escolhendo um presente ligado à curiosidade e ao trabalho da amiga. O gesto oferece uma forma indireta de expressar sentimentos que ele tem dificuldade de declarar.",
            "A decisão acontece enquanto os amigos estão absorvidos pelos projetos de defesa e por mudanças em suas próprias vidas. Para Will, a estrela é uma maneira de deixar algo a Jin sem transformar o presente em uma exigência de reciprocidade ou em uma promessa que não pode cumprir."
          ]
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
          "focus": "wade",
          "paragraphs": [
            "Wade apresenta os avanços que tornam a hibernação uma possibilidade para acompanhar a defesa ao longo dos séculos. A ideia permitiria que uma mesma pessoa atravessasse grandes intervalos de tempo, mas o Projeto Escada enfrenta uma limitação imediata: sua capacidade de impulsionar carga continua muito pequena para a missão originalmente imaginada.",
            "A equipe precisa reconsiderar o que pode realmente ser enviado. A discussão deixa de girar apenas em torno de uma nave mais eficiente e passa a exigir uma redução radical da carga, aproximando um problema de engenharia de escolhas sobre a vida humana."
          ]
        },
        {
          "title": "Uma conversa com Saul",
          "text": "Ye Wenjie encontra Saul e lhe conta uma história sobre Einstein e Deus. O sentido da conversa permanece indireto, mas suas palavras chamam atenção para algo que não pode ser dito abertamente.",
          "characters": [
            "ye",
            "saul"
          ],
          "focus": "ye",
          "paragraphs": [
            "Ye Wenjie procura Saul e conta uma história em que Einstein encontra Deus. A conversa parece uma piada deslocada do contexto da crise, mas Ye escolhe cuidadosamente uma forma indireta de falar. Saul escuta sem receber uma tradução do que ela pretende transmitir ou uma instrução clara sobre como agir.",
            "O encontro chama atenção justamente por deixar algo por entender. A narrativa não autoriza, naquele momento, uma conclusão completa sobre o significado do aviso. Saul fica com palavras que podem ter uma importância maior que a aparência casual da conversa."
          ]
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
          "focus": "will",
          "paragraphs": [
            "A redução da carga do Projeto Escada leva à proposta de enviar um cérebro preservado. Will aceita participar, colocando sua própria condição terminal no centro de uma decisão que tem valor estratégico para os demais. A proposta envolve consentimento, preparação médica e a possibilidade de que os San-Ti encontrem o material enviado.",
            "Saul acompanha o amigo no fim da vida, enquanto Jin tenta chegar para se despedir. Ela não consegue ter a conversa no momento que desejava. A missão se torna inseparável dessa perda: o que a equipe trata como carga tem nome, vínculos e uma história compartilhada com seus integrantes."
          ]
        },
        {
          "title": "Uma tecnologia aberta",
          "text": "Auggie disponibiliza sua pesquisa, retirando do controle exclusivo de uma empresa o conhecimento das nanofibras. Sua decisão segue um caminho diferente da concentração militar da tecnologia.",
          "characters": [
            "auggie"
          ],
          "focus": "auggie",
          "paragraphs": [
            "Auggie decide tornar pública a pesquisa das nanofibras, permitindo que outras pessoas tenham acesso ao conhecimento desenvolvido. A abertura retira a tecnologia do controle exclusivo de uma empresa e contrasta com a concentração de informações e recursos que caracteriza parte dos preparativos militares.",
            "A escolha não apaga o que ocorreu no Panamá, mas muda a maneira como ela responde ao uso de sua invenção. Em vez de limitar a discussão ao arrependimento, Auggie toma uma medida concreta sobre quem poderá conhecer, reproduzir e aplicar aquele trabalho."
          ]
        },
        {
          "title": "O retorno à Costa Vermelha",
          "text": "Ye volta ao local associado à sua decisão original. Tatiana a encontra, e as duas compartilham o pôr do sol em uma despedida que encerra sua trajetória.",
          "characters": [
            "ye",
            "tatiana"
          ],
          "focus": "ye",
          "paragraphs": [
            "Ye Wenjie retorna ao local da antiga base Costa Vermelha, onde tomou a decisão de responder à mensagem extraterrestre. Tatiana vai ao seu encontro, aproximando a iniciadora do contato de uma agente que agora atua segundo os interesses dos San-Ti. A visita tem o caráter de uma despedida, sem transformar o encontro em uma reconciliação com o passado.",
            "As duas observam o pôr do sol em um lugar ligado ao começo de toda a crise. A cena encerra a participação de Ye na temporada sob o peso de escolhas cujas consequências ultrapassam sua vida e já não estão sob seu controle."
          ]
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
          "focus": "saul",
          "paragraphs": [
            "Uma pessoa que estava próxima de Saul morre em um atropelamento, e os investigadores concluem que ele é o alvo de uma sequência de ameaças. Shi o coloca sob proteção e o conduz às Nações Unidas. Saul precisa seguir procedimentos de segurança antes mesmo de compreender o motivo de ter adquirido tamanha importância.",
            "O deslocamento mostra que sua rotina anterior deixou de ser possível. Ele não anunciou um plano contra os San-Ti nem escolheu assumir um papel público, mas alguém já considera necessário impedi-lo de agir. A investigação precisa protegê-lo enquanto procura compreender essa decisão do adversário."
          ]
        },
        {
          "title": "A mente como refúgio",
          "text": "Lilian Joseph apresenta o Projeto Wallfacer. Saul é um dos escolhidos para formular planos que podem permanecer apenas no pensamento, fora da leitura dos sophons; sua recusa não o retira do programa.",
          "characters": [
            "saul",
            "lilian",
            "shi"
          ],
          "focus": "saul",
          "paragraphs": [
            "Nas Nações Unidas, Lilian Joseph apresenta os Wallfacers, encarregados de desenvolver estratégias que podem permanecer apenas em suas mentes. A escolha parte de uma diferença importante: os sophons observam comunicações e ações, mas não leem diretamente o pensamento. Saul é anunciado entre os escolhidos e recebe recursos e proteção para uma função que não solicitou.",
            "Ele tenta recusar o posto, mas sua negativa pode ser interpretada como parte de uma estratégia deliberadamente incompreensível para quem observa. O programa cria uma situação em que explicar suas intenções nem sempre ajuda a ser entendido, e em que o segredo depende da própria pessoa que formula o plano."
          ]
        },
        {
          "title": "A trajetória se perde",
          "text": "A sonda do Projeto Escada parte com o cérebro de Will. Uma falha no sistema da vela a desvia da rota planejada, frustrando Jin e a equipe.",
          "characters": [
            "jin",
            "will",
            "wade"
          ],
          "focus": "jin",
          "paragraphs": [
            "A equipe realiza o lançamento da sonda do Projeto Escada, levando o cérebro preservado de Will na trajetória calculada para alcançar a frota. Jin acompanha a execução de um plano que concentra meses de trabalho e a lembrança do amigo. Durante o percurso, uma falha no sistema de sustentação da vela altera a orientação do equipamento.",
            "A sonda se desvia e deixa de seguir a rota necessária para cumprir a missão. O envio aconteceu, mas o objetivo estratégico não foi alcançado como planejado. Para Jin, a confirmação do desvio transforma o resultado técnico em mais uma experiência de perda ligada a Will."
          ]
        },
        {
          "title": "A ameaça continua próxima",
          "text": "Mesmo com iniciativas de defesa em andamento, os San-Ti demonstram a Wade que continuam capazes de interferir em sua percepção. A vigilância segue condicionando a resposta humana.",
          "characters": [
            "wade",
            "sophon"
          ],
          "focus": "wade",
          "paragraphs": [
            "Mesmo depois das iniciativas de defesa e do lançamento, Wade recebe uma demonstração de que os San-Ti continuam capazes de interferir no que ele percebe. A intimidação atinge diretamente alguém que dirige a resposta terrestre, lembrando que uma posição de autoridade não oferece isolamento diante dos recursos adversários.",
            "A ameaça combina distância e proximidade: a frota ainda está em viagem, mas a pressão sobre os humanos já é constante. Wade precisa prosseguir com projetos de longo prazo sem poder supor que seus deslocamentos, conversas ou decisões estejam fora do alcance da vigilância."
          ]
        },
        {
          "title": "Uma razão para continuar",
          "text": "Shi leva Jin e Saul a observar insetos que persistem apesar das tentativas humanas de eliminá-los. A imagem oferece uma resposta ao desprezo dos San-Ti e um motivo para retomar o trabalho.",
          "characters": [
            "shi",
            "jin",
            "saul"
          ],
          "focus": "shi",
          "paragraphs": [
            "Shi leva Jin e Saul para observar uma grande quantidade de insetos. Ele lembra que os humanos usam muitos recursos para eliminá-los e, apesar disso, não conseguem fazê-los desaparecer. A visita retoma a ofensa feita pelos San-Ti, mas transforma a comparação em outra forma de olhar para a desigualdade entre as espécies.",
            "Jin e Saul chegam desanimados pelas perdas e pelos fracassos recentes. Shi não lhes oferece uma arma nova nem uma garantia de vitória; oferece um exemplo de persistência. A temporada termina com uma razão para continuar trabalhando, mesmo sem uma solução imediata para o perigo."
          ]
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
