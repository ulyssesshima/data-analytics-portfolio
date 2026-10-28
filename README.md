# Ulysses Shima · Data Analytics for Architecture & Environments



<p align="center">

  <strong>Transformando dados de espaços, edifícios e operações em decisões mais claras.</strong><br />
  
  <sub>Python · SQL · BI · qualidade de dados · automação · arquitetura orientada a evidências</sub>
  
</p>



<p align="center">

  <a href="./dashboards.html">Ver Dashboard Lab</a> ·
  
  <a href="./GUIA_PERFIL_GITHUB.md">Guia do meu perfil GitHub</a> ·
  
  <a href="./data/README.md">Contrato da camada de dados</a>
  
</p>



---



## Sobre este repositório



Este é o laboratório público de Ulysses Ferri Shima para demonstrar como análise de dados, visualização e automação podem apoiar decisões sobre **arquitetura, ambientes construídos, operações prediais, sustentabilidade e experiência dos usuários**.



A proposta é combinar raciocínio analítico com entendimento de contexto: um dashboard não deve apenas mostrar números; deve ajudar a responder **o que está acontecendo, por que importa, qual decisão é possível e quais limitações ainda existem**.



O repositório começa com uma base de visualização interativa e evolui para uma coleção de projetos de dados aplicados a ambientes. Os exemplos atuais usam dados sintéticos, mas a arquitetura foi organizada para receber fontes autorizadas, agregadas e anonimizadas.



> **Transparência:** todos os dados presentes em `data/` são fictícios. Eles não representam clientes, empregadores, edifícios, projetos ou resultados reais.
> 


## O que você encontra aqui



| Entrega | O que demonstra |

| --- | --- |

| **Dashboard Lab** | Três visualizadores interativos para performance, supply chain e qualidade de dados. |

| **Data contracts** | Metadados de origem, granularidade, anonimização, evidência e limitações. |

| **Arquitetura modular** | Separação entre dados, métricas, estado de filtros e viewport. |

| **Interface responsiva** | Visualização em desktop e mobile, modo claro/escuro e módulos configuráveis. |

| **Documentação analítica** | Contexto, hipóteses, decisões, limitações e próximos passos. |



## Projetos atuais



### 01 · Dashboard Lab — sistemas de visualização



Um laboratório visual com três lentes analíticas:



- **Executive Pulse:** KPIs de performance, margem, crescimento e eficiência.
- 
- **Supply Orbit:** disponibilidade, cobertura, rupturas e perdas sintéticas.
- 
- **Data Integrity Matrix:** completude, validade, drift e precisão de modelos.
- 


Cada visualizador possui filtros, tabela de detalhe, gráfico, cartão de insight, modo compacto, tema claro/escuro e estado explícito de evidência.



[**Abrir o Dashboard Lab →**](./dashboards.html)



### 02 · Próxima fronteira — ambientes e arquitetura



Os próximos projetos deste portfólio deverão explorar problemas como:



- conforto térmico e consumo energético;
- 
- ocupação, fluxo e utilização de ambientes;
- 
- manutenção preditiva de ativos prediais;
- 
- custo operacional e ciclo de vida de materiais;
- 
- iluminação, qualidade do ar e experiência do usuário;
- 
- análise espacial com GIS e dados georreferenciados;
- 
- relação entre clima, orientação solar e desempenho do edifício.
- 


Esses temas serão desenvolvidos com dados públicos, dados sintéticos ou dados autorizados. Nenhum projeto deve insinuar uma medição real quando ela não existir.



## Arquitetura técnica



```text

Fonte pública, sintética ou autorizada

                ↓

     Ingestão + data contract

                ↓

      Qualidade + anonimização

                ↓

     Métricas e regras de negócio

                ↓

       Modelo analítico / API

                ↓

       Dashboard + narrativa

                ↓

       Decisão + limitações

```



Neste projeto, a camada de visualização consome arquivos JSON com contrato documentado. Em uma evolução de produção, a mesma interface poderia consumir CSV processado, uma API protegida, um banco relacional ou um pipeline de dados.



A visualização não deve conter credenciais, regras privadas de acesso ou lógica impossível de testar. Métricas importantes devem ser calculadas em uma camada identificável, com fórmula e unidade documentadas.



## Stack e padrões de qualidade



### Ferramentas



- **Análise:** 















