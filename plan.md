# Portfólio Ulysses Shima — direção visual

## Conceito escolhido

**Editorial data-native**: uma estética de estúdio analítico, com contraste alto, tipografia grande, cartões de evidência e sinais visuais inspirados em dashboards — sem parecer um template de currículo.

### Princípios
- Clareza antes de ornamentação.
- Métricas sempre acompanhadas de contexto e status de evidência.
- Contraste entre superfície escura, verde-lima de ação e verde-água de confiança.
- Layout assimétrico com ritmo editorial, não uma grade genérica de cards.

### Sistema visual
- Fundo profundo e superfícies verdes escuras para transmitir rigor e foco.
- Verde-lima como cor proprietária para ação, indicadores e palavras-chave.
- Verde-água para qualidade, dados e confiança.
- Tipografia de sistema para carregar rápido e manter legibilidade.
- Motivos recorrentes: barras, linhas de tendência, círculos de pulso e etiquetas técnicas.

### Voz
Direta, precisa e confiante. Exemplos: “Dados que saem da planilha e entram na decisão.” / “Experiência real, apresentada com precisão.”

## Estrutura

- `index.html`: página única e conteúdo semântico.
- `styles.css`: identidade visual responsiva, tema claro/escuro e visualizações decorativas não factuais.
- `script.js`: alternância de tema e entrada suave de blocos.
- `manus-routes.json`: rota pública `/`.
- `ANALISE_CRITICA.md`: diagnóstico e plano de fortalecimento do currículo.
- `TODO.md`: entregas concluídas e evidências que faltam.

## Dashboard Lab

A nova página `dashboards.html` demonstra três visualizadores com dados fictícios e não sensíveis: Executive Pulse, Supply Orbit e Data Integrity Matrix. A direção visual combina minimalismo premium inspirado em produtos Apple, sobriedade de banking premium associada a JP Morgan e uma ambientação futurista de observatório de dados.

A arquitetura demonstrada separa `dashboard.js` em dados simulados, camada de métricas e renderização de viewport. Os componentes são modulares e os controles permitem trocar visualizador, período, contexto, módulos visíveis, compactação e tema sem dependências externas de backend. O aviso de simulação é permanente e explícito.
