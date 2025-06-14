---
title: Transicionando de DevOps para Software Enginner
author: Antonio Azambuja
date: "2025-06-13"
summary: "Isso não é um guia mas sim um relato da minha experiencia dos primeiros meses após uma transição de carreira"
image: src/assets/transitioning-from-devops-to-swe.png
tags:
  - "devops"
  - "sre"
  - "carreira"
  - "swe"
---

## Onde eu estava?

``` bash
$ whoami
Antonio Azambuja
```

Bom, dando um resumo rápido sobre mim e minha carreira: Tenho 26 anos e trabalho com tecnologia a cerca de 7 anos (obrigado timeline do LinkedIn). Foram basicamente 1 ano como suporte de TI, 5 anos como DevOps/SRE e nos últimos 8 meses como Software Engineer.

Em cargos de DevOps/SRE desenvolvi projetos com bastante código para alcançar alguns objetivos. O detalhe importante aqui é que todos foram construídos com pouca ou nenhuma boa prática de desenvolvimento aplicada.

Eu não sei se todos os meus colegas DevOps e SREs por ai compartilham desse sentimento mas eu sempre senti um pouco de sindrome do impostor por não saber desenvolver um software. Meu inicio de carreira foi marcado por uma base muito sólida em desenvolvimento e infraestrutura que pavimentou minha estrada nos cargos de infraestrutura e agora no cargo de Software Engineer.

Mas programar sempre foi um hobby pra mim. Durante meus anos atuando como DevOps/SRE sempre foi um diferencial profissional interessante poder resolver problemas com código.

Agora, para ajudar você, caro leitor e interessado(a) em entender um pouco dessa transição de DevOps para SWE vamos entender um pouco mais sobre as minhas experiências.

### DevOps - Criar ferramental e habilitar a independência da pessoa desenvolvedora

Durante minha jornada como DevOps as responsabilidades eram sempre de entregar um ferramental com a característica de ser *plug-and-play*. O objetivo era tudo ser facilmente aclopado e desacoplado pelos usuários e afim de entregar autonomia para a pessoa desenvolvedora. Pois a última coisa que queremos como equipe DevOps é um ferramental que precisa de intervenção do time para ser implementado. Se formos levar em consideraçãao uma empresa de médio porte o número de desenvolvedores será sempre maior que o de DevOps e essa conta não iria bater nunca. Isso levaria a exaustão do time em poucos meses.

Para esse artigo 2 cases são super importantes:

- Uma CLI em Python para criar e orquestrar clusters Elasticsearch construídos em EC2 na AWS. O nosso objetivo era ter uma forma prática para orquestrar os nós presentes em clusters Elasticsearch respeitando a reindexação de indices causados pela adição ou remoção de nós garantindo zero downtime para os clientes. Isso habilitou o time de DevOps realizar as seguintes mudanças em ambientes produtivos sem downtime:
  - Adicionar e remover nós;
  - Aumentar e diminuir tamanho de disco;
- Orquestrador de queries em banco de dados e exportar métricas para o Prometheus usando Golang e Prometheus Pushgateway. O nosso objetivo era ter uma forma prática de criar métricas a partir de queries de banco de dados uma vez que precisavamos de visibilidade de métricas técnicas para a equipe de DBRE. Contudo, esse projeto habilitou muitos sistemas que não faziam exposição de métricas de negócio sistematicamente. Com isso criarmos um sistema que nos permitiu:
  - Criar métricas de banco de dados e criar iniciativas para melhorar a performance do sistema da companhia;
  - Criar dashboards baseados em métricas de negócio para melhorar visibilidade do negócio em sistemas criticos;

### Site Reliability Enginner - Garantir a estabilidade dos serviços da companhia

Nessa etapa da minha carreira eu estava buscando amadurecimento profissional que a metodologia SRE me entregou pela forma de trabalho colaborativa entre equipes de SRE e desenvolvedores para garantir confiabilidade e resiliência. Nossa responsabilidade era garantir confiabilidade e resiliência dos sistemas seja por automação, war rooms, análise de incidentes, análise de comportamentos, monitoramento de serviços e pipelines.

Você já precisou analisar o comportamento de um servico com HPA ativo usando métricas customizados que fazem scale up e down com base no número de mensagens em um tópico Kafka? Coisas que se aprendem quando se atua como SRE. Você ainda não terá conhecimento sobre como construir um sistema desses mas com certeza irá te ajudar caso você precise um dia. **E me ajudou futuramente**.

Tive a oportunidade de construir 2 cases que são relevantes para esse artigo:

- Uma integração entre Jenkins e GitLab para automaticamente aplicar um projeto Terraform via Atlantis (Terraform Pull Request Automation para GitHub): Esse foi um projeto criado pois tinhamos um sistema que necessitava de uma pipeline CI/CD para AWS Lambda usando Terraform. Por questões de segurança toda e qualquer alteração deveria ser realizada via Atlantis, para fins de auditoria. Integrei uma pipeline Jenkins com o objetivo de automatizar o processo de deploys via Terraform abstraindo a necessidade de conhecimento dos desenvolvedores em:
  - Alterar arquivos Terraform com nova versão do package gerado;
  - Execução do processo de plan e apply do Terraform;
  - Possuir a permissão de SRE para realizar deploy de código Terraform na AWS via Atlantis;
  - Processo de rollback de versões;
  - Canary deploy com AWS Lambda;
- Cronjob para fazer coleta de informações de Infoblox DTCs: Esse foi um projeto criado para entender como estavam as configurações de DTCs no Infoblox. Infoblox é um DNS Server que tinha uma funcionalidade chamada DTC, responsável por fazer o balanceamento de requisições HTTP baseado em DNS, ou seja, podiamos configurar um sistema multi-cloud com balanceamento Round Robin ou por porcentagem, por exemplo. Construi um script Python para realizar a consulta dessas informações no Infoblox e atualizar uma base de dados que foi usada para:
  - Criar um dashboard com as informações dos DTCs;
  - Planejar e implementar padronizações baseado em best practices de DNS para sistemas em multi-cloud;

## Motivações de carreira

Durante todo esse percurso eu parava para refletir: Como será minha carreira se seguir nesse caminho? Como eu gostaria que fosse?

Em alguns momentos da minha carreira eu parei para analisar alguns exemplos da comunidade Tech e como eles utilizaram seus conhecimentos prévios em SWE para migrar de forma efetiva para DevOps e SRE e contribuir em projetos onde ambos os conhecimentos eram necessários. Mas então veio a dúvida: Será que consigo fazer uma transição efetiva saindo do lado contrário, ou seja: SRE/DevOps para SWE?

Eu almejava uma carreira multidisciplinar. Amo IaC, DevOps, SRE, Cloud Native, Containers, Cloud e CI/CD, e como vocês viram nas minhas experiências anteriores eu sempre mantive um amor mesmo que pouco por desenvolvimento de software. Gostava de me envolver nas demandas de desenvolvimento de software do time e discutir com os devs sobre arquitetura de software contribuindo com as minhas visões. Era uma das minhas partes preferidas do trabalho.

## A mudança de rota. Onde eu estou?

Okay, agora vamos falar um pouco da grande mudança que impulsionou a escrita desse artigo. Recentemente eu aceitei uma nova oportunidade em uma equipe de Platform Engineer. Nossa responsabilidade é habilitar a independência e diminuir a carga cognitiva dos desenvolvedores ao automatizar e criar uma plataforma poderosa de Continuous Delivery. Basicamente, o time é uma equipe de desenvolvimento de software com forte conhecimento em processos de CI/CD com Kubernetes. Então, hoje eu sou um dev.

Hoje, meus conhecimentos em infraestrutura conquistados pelos anos na carreira DevOps e SRE são aproveitados em conjunto com meus novos conhecimentos em Software Engineer.

## Aprendizados

Então, depois de alguns meses posso dizer que essa foi uma das decisões mais dificies da minha carreira. Foram alguns obstáculos superados até aqui:
1. Mudar meu mindset para o de um time de desenvolvimento com: prazos, features novas, reviews de código e desenvolvimento de código;
2. Acompanhar ritmo do time de entrega de features;
3. Entender o contexto que estava inserido na nova empresa;
4. Entregar features funcionais sem bugs;
5. (Em andamento) Como entregar features funcionais sem bugs e com uma boa qualidade de código? Seguindo princípios de SOLID, Design Patterns, Clean Code e Arquitetura de Software.

Entendi como é difícil desenvolver soft e hard skills que nunca haviam sido desenvolvidas. Mas posso dizer que tem valido a pena. Sinto que estou no caminho certo e que possuo muitas possibilidades diferentes agora. Hoje eu consigo visualizar um futuro interessante para minha carreira.

Em breve teremos nesse blog artigos misturando meus dois mundos: infraestrutura e código que basicamente é o profissional que sou agora.

E é isso. Obrigado!
