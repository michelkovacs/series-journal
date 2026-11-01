# Base cartográfica de Westeros

O litoral detalhado de Westeros foi adaptado dos polígonos geográficos distribuídos com **Atlas of Thrones**, de Patrick Triest, por meio do dump `atlas_of_thrones.sql` preservado em `carloscasalar/got-map`.

- Projeto original: https://github.com/triestpa/Atlas-Of-Thrones
- Distribuição dos dados: https://github.com/carloscasalar/got-map/blob/master/postgresql/docker-entrypoint-initdb.d/atlas_of_thrones.sql
- Licença fornecida pelo projeto original: **CC BY-NC-SA 3.0**, copiada em `LICENSE-CC-BY-NC-SA-3.0.txt`.
- Licença da adaptação cartográfica (`westeros.svg` e `westeros-geometry.json`): **CC BY-NC-SA 3.0**.

Modificações: projeção vetorial local, remoção de nomes e domínio político fixos, cores, textura e relevo ilustrativo. A costa de Essos, as pequenas ilhas dos Degraus e o relevo são complementos ilustrativos, não dados topográficos oficiais. O enquadramento e os emblemas são interativos. Coordenadas de Derivamarca e dos pontos internos de Porto Real são aproximadas; estes últimos são deslocados com linhas de referência para facilitar a leitura.

Os dados narrativos originais da base, relativos a Game of Thrones, não são distribuídos nem usados pelo site. Nomes, informações e casas aparecem apenas na camada interativa filtrada pelo episódio de A Casa do Dragão.

Para regenerar a ilustração sem acesso à rede: `python3 scripts/generate-westeros-map.py`.

## Brasões interativos

Os brasões têm fontes e licenças próprias, separadas da base cartográfica. Consulte [autoria e licenças dos brasões](../houses/README.md).
