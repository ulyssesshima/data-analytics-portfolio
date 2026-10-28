# Guia para um perfil GitHub atrativo

Este guia transforma o GitHub em uma vitrine profissional, não apenas em um depósito de códigos. O objetivo é posicionar Ulysses como um analista de dados que entende tecnologia, negócio e o contexto físico dos ambientes.

## 1. Posicionamento do perfil

Use uma frase específica. Evite “apaixonado por dados” ou “futuro analista”. Uma opção mais forte:

> Analista de Dados focado em transformar dados de espaços, edifícios e operações em decisões mensuráveis — com Python, SQL, BI e qualidade de dados.

Essa frase comunica área, domínio e método. Se arquitetura e ambientes ainda são uma direção de carreira, escreva “foco em desenvolver projetos aplicados a...” em vez de afirmar experiência que ainda não foi comprovada.

## 2. Bio curta para o GitHub

```text
Analista de Dados | Python · SQL · BI · Data Quality
Projetos aplicados a arquitetura, ambientes e operações
Construindo visualizadores claros para decisões melhores
```

Versão em inglês para ampliar alcance:

```text
Data Analyst | Python · SQL · BI · Data Quality
Applied projects for architecture, built environments and operations
Building clear visual systems for better decisions
```

## 3. Repositório fixado de apresentação

Crie um repositório com o mesmo nome do seu usuário GitHub. O `README.md` desse repositório vira a página inicial do perfil. Estruture-o com:

1. apresentação curta;
2. especialidade e ferramentas;
3. três projetos em destaque;
4. links para portfólio e LinkedIn;
5. forma de contato;
6. o que você está estudando agora.

Não encha a capa com dezenas de badges. Se usar badges, limite-se a tecnologias realmente utilizadas nos projetos apresentados.

## 4. Projetos que podem formar um portfólio excelente

### Projeto A — Building Energy Intelligence

**Pergunta:** quais variáveis estão associadas ao consumo de energia de um edifício?

Entregas recomendadas:

- limpeza e exploração em notebook;
- modelo dimensional simples;
- análise por hora, clima, uso e área;
- dashboard de consumo e anomalias;
- documentação de unidade, período e limitações;
- modelo básico de previsão, se houver dados suficientes.

Código de qualidade esperado: pipeline reproduzível, funções pequenas, schema validado e gráficos que expliquem o fenômeno.

### Projeto B — Thermal Comfort Explorer

**Pergunta:** como temperatura, umidade e ocupação se relacionam com conforto percebido?

Entregas recomendadas:

- dados sintéticos ou fonte pública claramente citada;
- separação entre medição e interpretação;
- visualização temporal e mapa de calor;
- alertas com limiares documentados;
- explicação de que correlação não prova causalidade.

### Projeto C — Space Occupancy & Flow

**Pergunta:** como os ambientes são ocupados ao longo do dia?

Entregas recomendadas:

- ocupação por zona e faixa horária;
- pico, permanência e subutilização;
- visualização de fluxo sem identificar pessoas;
- anonimização por agregação;
- recomendação operacional baseada em evidência.

### Projeto D — Predictive Maintenance for Buildings

**Pergunta:** quais ativos precisam de inspeção prioritária?

Entregas recomendadas:

- cadastro anônimo de ativos;
- histórico de falhas e manutenção;
- score de risco explicável;
- priorização por impacto e urgência;
- comparação entre regra simples e modelo preditivo.

### Projeto E — Material & Lifecycle Intelligence

**Pergunta:** como comparar custo, durabilidade e impacto de alternativas de materiais?

Entregas recomendadas:

- tabela de critérios e unidades;
- análise multicritério explícita;
- cenários com pesos ajustáveis;
- sensibilidade da recomendação;
- seção sobre limites da comparação.

### Projeto F — Spatial Analytics / GIS

**Pergunta:** como contexto urbano, mobilidade e uso do solo se relacionam com um ambiente?

Entregas recomendadas:

- mapa com fonte e licença documentadas;
- agregação espacial para evitar reidentificação;
- comparação entre regiões;
- legenda, escala e sistema de coordenadas;
- narrativa que não confunda proximidade com causa.

## 5. Estrutura recomendada para cada repositório

```text
project-name/
├── README.md
├── LICENSE
├── pyproject.toml ou requirements.txt
├── data/
│   ├── raw/          # nunca incluir dados sensíveis
│   └── processed/
├── notebooks/
│   └── 01_exploracao.ipynb
├── src/
│   ├── config.py
│   ├── io.py
│   ├── validate.py
│   ├── metrics.py
│   └── visualizations.py
├── tests/
│   ├── test_metrics.py
│   └── test_schema.py
├── dashboard/
├── docs/
│   ├── methodology.md
│   └── data_dictionary.md
└── .gitignore
```

## 6. O que diferencia código profissional

Para cada projeto:

- use nomes claros e funções pequenas;
- não deixe lógica crítica apenas em um notebook;
- valide colunas, tipos, unidades e datas;
- trate valores ausentes de forma explícita;
- mantenha `raw` separado de `processed`;
- fixe versões de dependências;
- inclua testes para as métricas principais;
- registre decisões metodológicas;
- escreva como executar do zero;
- inclua pelo menos uma limitação importante;
- evite números mágicos e limiares sem explicação;
- não faça commit de `.env`, tokens ou dados privados.

## 7. README de cada projeto

Use este formato:

```markdown
# Nome do projeto

## Problema
Qual decisão este projeto apoia?

## Contexto
Qual é o domínio e quem usaria o resultado?

## Dados
Fonte, período, granularidade, licença e anonimização.

## Perguntas analíticas
Três a cinco perguntas objetivas.

## Método
Limpeza, transformações, métricas e modelo.

## Resultado
Principais achados e imagens do dashboard.

## Limitações
O que não pode ser concluído.

## Como executar
Comandos completos e ordem de execução.

## Próximos passos
Evoluções técnicas e analíticas.
```

## 8. Plano de publicação em 90 dias

### Dias 1–30: fundação

Finalize o portfólio atual, publique o Dashboard Lab, crie o README de perfil e organize um repositório por projeto. O foco é consistência e documentação, não quantidade.

### Dias 31–60: domínio

Publique um projeto de energia ou conforto térmico e outro de ocupação. Cada um deve ter notebook, script reutilizável, dashboard, dicionário de dados e limitações.

### Dias 61–90: engenharia

Adicione testes, validação de schema, CI, versão de dependências e uma publicação acessível. Depois, escreva um post curto explicando uma decisão analítica de cada projeto.

## 9. Critério de qualidade antes de publicar

Não publique um projeto apenas porque ele tem um gráfico bonito. Antes do push, confirme:

- outra pessoa consegue executar o projeto;
- a origem dos dados está clara;
- as métricas têm fórmula;
- os gráficos têm títulos informativos;
- não há dados pessoais ou proprietários;
- as conclusões não excedem a evidência;
- o README explica o valor do projeto em menos de dois minutos.

## 10. Estratégia de destaque

Prefira três ou quatro projetos muito bem acabados a quinze repositórios incompletos. Uma seleção forte para o perfil seria:

1. Dashboard Lab — sistema de visualização;
2. Building Energy Intelligence — análise ambiental;
3. Space Occupancy & Flow — análise de ambientes;
4. Data Quality Toolkit — engenharia e confiabilidade.

A combinação comunica interface, domínio, análise e engenharia. É isso que transforma um perfil em uma narrativa profissional coerente.
