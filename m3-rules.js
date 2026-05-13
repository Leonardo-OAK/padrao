/**
 * REGRAS DO MÓDULO 3 — PLANO DE TRATAMENTO
 * Este arquivo contém as regras de combinação para atualizar a timeline e o resumo.
 * As chaves (key) devem estar em ordem alfabética, separadas por ponto e vírgula (;).
 * Total de combinações cobertas: 31 (todas as possíveis com 5 opções)
 */
window.M3_RULES = [

  // ─── DEFAULT ────────────────────────────────────────────────────────────
  {
    key: "DEFAULT",
    card1_title: "Selecione opções para realizar a simulação",
    card1_text: "",
    card2_title: "",
    card2_text: "",
    card3_title: "",
    card3_text: "",
    card4_title: "",
    card4_text: "",
    card5_title: "",
    card5_text: "",
    summary_text: "",
    sessionsnumber_text: "-",
    frequency_text: "x por semana"
  },

  // ─── 1 OPÇÃO (5 combinações) ─────────────────────────────────────────────

  {
    key: "Enzimas",
    card1_title: "Avaliação Inicial",
    card1_text: "Análise da área a ser tratada e definição do protocolo enzimático.",
    card2_title: "Primeira Aplicação",
    card2_text: "Aplicação das enzimas com foco na área de maior concentração de gordura.",
    card3_title: "Sessão de Reforço",
    card3_text: "Reaplicação para ampliar a ação lipolítica no tecido.",
    card4_title: "Acompanhamento",
    card4_text: "Avaliação da resposta do tecido e ajuste de dose se necessário.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade do plano.",
    summary_text: "Plano focado na quebra química do tecido adiposo por meio de enzimas lipolíticas.",
    sessionsnumber_text: "4 a 6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico",
    card1_title: "Avaliação Metabólica",
    card1_text: "Análise do perfil metabólico e definição do protocolo de aplicação.",
    card2_title: "Aplicação",
    card2_text: "Administração do estímulo metabólico para acelerar a queima de gordura.",
    card3_title: "",
    card3_text: "",
    card4_title: "",
    card4_text: "",
    card5_title: "",
    card5_text: "",
    summary_text: "Plano focado em acelerar o metabolismo e potencializar a queima calórica de forma sistêmica.",
    sessionsnumber_text: "1 sessão",
    frequency_text: "1x por trimestre"
  },

  {
    key: "Hidrolipo",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área e definição dos pontos de infiltração.",
    card2_title: "Infiltração",
    card2_text: "Aplicação da solução fisiológica para fragmentação mecânica da gordura.",
    card3_title: "Drenagem",
    card3_text: "Estímulo para eliminação do conteúdo liberado pelo procedimento.",
    card4_title: "Acompanhamento",
    card4_text: "Avaliação da resposta e monitoramento de edema e resultado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano focado em redução localizada por meio de infiltração e fragmentação mecânica do tecido adiposo.",
    sessionsnumber_text: "3 a 5 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Massagens",
    card1_title: "Avaliação de Contorno",
    card1_text: "Análise do tônus, circulação e retenção hídrica da área.",
    card2_title: "Modelagem Inicial",
    card2_text: "Manobras de drenagem e mobilização do tecido para ativação circulatória.",
    card3_title: "Sessão de Modelagem",
    card3_text: "Técnicas de pressão e deslizamento para contorno e firmeza.",
    card4_title: "Intensificação",
    card4_text: "Aumento da pressão e ritmo para potencializar o resultado.",
    card5_title: "Manutenção",
    card5_text: "Sessão de manutenção para consolidar o contorno obtido.",
    summary_text: "Plano focado em modelagem, drenagem e melhora da circulação local por meio de técnicas manuais.",
    sessionsnumber_text: "5 a 10 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Ultrassom",
    card1_title: "Avaliação Inicial",
    card1_text: "Análise da gordura localizada e definição da potência e área de aplicação.",
    card2_title: "Primeira Sessão",
    card2_text: "Aplicação do ultrassom cavitacional para início da quebra mecânica do tecido adiposo.",
    card3_title: "Sessão de Progressão",
    card3_text: "Continuidade do protocolo com ajuste de parâmetros conforme resposta do tecido.",
    card4_title: "Intensificação",
    card4_text: "Sessão com foco nos pontos de maior resistência identificados nas etapas anteriores.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade do plano.",
    summary_text: "Plano focado na quebra mecânica do tecido adiposo por ondas de ultrassom cavitacional.",
    sessionsnumber_text: "4 sessões",
    frequency_text: "1x por semana"
  },

  // ─── 2 OPÇÕES (10 combinações) ───────────────────────────────────────────

  {
    key: "Enzimas;Estímulo Metabólico",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise do perfil metabólico e mapeamento da área para aplicação enzimática.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para a quebra localizada.",
    card3_title: "Aplicação de Enzimas",
    card3_text: "Ação lipolítica local potencializada pelo metabolismo ativado.",
    card4_title: "Acompanhamento",
    card4_text: "Monitoramento da resposta e ajuste de dose enzimática.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano combinado de ação local e sistêmica, unindo enzimas lipolíticas e ativação metabólica.",
    sessionsnumber_text: "4 a 6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Hidrolipo",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área e definição dos pontos de infiltração e aplicação enzimática.",
    card2_title: "Hidrolipo",
    card2_text: "Infiltração para fragmentação mecânica inicial do tecido adiposo.",
    card3_title: "Enzimas",
    card3_text: "Aplicação enzimática para ampliar a quebra química do tecido fragmentado.",
    card4_title: "Drenagem",
    card4_text: "Estímulo para eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano de ação dupla com fragmentação mecânica por hidrolipo e quebra química por enzimas.",
    sessionsnumber_text: "4 a 6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Massagens",
    card1_title: "Avaliação Inicial",
    card1_text: "Análise da área, tônus e definição do protocolo combinado.",
    card2_title: "Aplicação de Enzimas",
    card2_text: "Ação lipolítica localizada para início da quebra do tecido adiposo.",
    card3_title: "Massagem Modeladora",
    card3_text: "Manobras para potencializar a eliminação das substâncias liberadas pelas enzimas.",
    card4_title: "Sessão Combinada",
    card4_text: "Aplicação sequencial de enzimas e massagem para ampliar o resultado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que une quebra enzimática e drenagem manual para resultado mais rápido e modelado.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Enzimas;Ultrassom",
    card1_title: "Avaliação Combinada",
    card1_text: "Análise da área para definição do protocolo de enzimas e parâmetros do ultrassom.",
    card2_title: "Enzimas",
    card2_text: "Aplicação inicial para início da quebra química do tecido adiposo.",
    card3_title: "Enzimas e Ultrassom",
    card3_text: "Sessão combinada para ampliar a ação lipolítica química e mecânica.",
    card4_title: "Enzimas e Ultrassom",
    card4_text: "Continuidade do protocolo com ajuste de parâmetros.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade do plano.",
    summary_text: "Plano sinérgico combinando quebra química por enzimas e quebra mecânica por ultrassom.",
    sessionsnumber_text: "5 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico;Hidrolipo",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise metabólica e mapeamento da área para hidrolipo.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para a redução localizada.",
    card3_title: "Hidrolipo",
    card3_text: "Infiltração com fragmentação mecânica potencializada pelo metabolismo ativo.",
    card4_title: "Drenagem",
    card4_text: "Estímulo para eliminação acelerada pelo metabolismo ativado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que combina ativação metabólica sistêmica com redução localizada por hidrolipo.",
    sessionsnumber_text: "4 a 5 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico;Massagens",
    card1_title: "Avaliação Inicial",
    card1_text: "Análise metabólica e avaliação do tônus e circulação local.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para potencializar a resposta às sessões de massagem.",
    card3_title: "Massagem Modeladora",
    card3_text: "Manobras de drenagem e modelagem com metabolismo ativado.",
    card4_title: "Sessão de Intensificação",
    card4_text: "Técnicas mais profundas para contorno e redução de medidas.",
    card5_title: "Manutenção",
    card5_text: "Sessão final de consolidação e orientação para manutenção.",
    summary_text: "Plano que une aceleração metabólica sistêmica com modelagem manual para um resultado mais completo.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Estímulo Metabólico;Ultrassom",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise metabólica e definição dos parâmetros de ultrassom.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para ampliar a resposta ao ultrassom.",
    card3_title: "Ultrassom",
    card3_text: "Quebra mecânica do tecido adiposo com metabolismo potencializado.",
    card4_title: "Ultrassom",
    card4_text: "Continuidade do protocolo com ajuste de parâmetros.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que combina ultrassom cavitacional com ativação metabólica para ampliar a eliminação de gordura.",
    sessionsnumber_text: "4 a 6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Hidrolipo;Massagens",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área e definição dos pontos de infiltração e protocolo manual.",
    card2_title: "Hidrolipo",
    card2_text: "Infiltração para fragmentação mecânica do tecido adiposo.",
    card3_title: "Massagem Drenante",
    card3_text: "Manobras para acelerar a eliminação do conteúdo liberado pelo hidrolipo.",
    card4_title: "Sessão Combinada",
    card4_text: "Hidrolipo com massagem subsequente para potencializar o resultado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano de continuidade.",
    summary_text: "Plano que combina hidrolipo para redução localizada com massagem drenante para acelerar os resultados.",
    sessionsnumber_text: "4 a 6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Hidrolipo;Ultrassom",
    card1_title: "Avaliação Combinada",
    card1_text: "Mapeamento para infiltração e ajuste de potência do ultrassom.",
    card2_title: "Infiltração",
    card2_text: "Aplicação de solução para potencializar o ultrassom cavitacional.",
    card3_title: "Sessão Híbrida",
    card3_text: "Combinação de hidrolipoclasia e ultrassom cavitacional.",
    card4_title: "Eliminação",
    card4_text: "Processo intenso de eliminação de lipídios liberados.",
    card5_title: "Consolidação",
    card5_text: "Reavaliação da redução de medidas e ajuste do plano.",
    summary_text: "Plano focado em redução localizada com hidrolipo e ultrassom. Reavaliação inclusa para cumprimento do objetivo.",
    sessionsnumber_text: "5 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Massagens;Ultrassom",
    card1_title: "Avaliação de Contorno",
    card1_text: "Análise da gordura localizada, tônus muscular e circulação.",
    card2_title: "Ultrassom",
    card2_text: "Quebra mecânica do tecido adiposo para mobilização da gordura localizada.",
    card3_title: "Massagem Drenante",
    card3_text: "Manobras para acelerar a eliminação da gordura mobilizada pelo ultrassom.",
    card4_title: "Sessão Integrada",
    card4_text: "Ultrassom seguido de massagem modeladora para contorno e firmeza.",
    card5_title: "Finalização",
    card5_text: "Sessão de consolidação com foco em contorno e tônus da região.",
    summary_text: "Plano focado em redução de medidas e modelagem corporal combinando ultrassom e técnicas manuais.",
    sessionsnumber_text: "8 sessões",
    frequency_text: "2x por semana"
  },

  // ─── 3 OPÇÕES (10 combinações) ───────────────────────────────────────────

  {
    key: "Enzimas;Estímulo Metabólico;Hidrolipo",
    card1_title: "Avaliação Completa",
    card1_text: "Análise metabólica e mapeamento da área para infiltração e enzimas.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para os procedimentos locais.",
    card3_title: "Hidrolipo",
    card3_text: "Infiltração para fragmentação mecânica do tecido adiposo.",
    card4_title: "Enzimas",
    card4_text: "Aplicação enzimática para ampliar a quebra química do tecido fragmentado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano de tripla ação com ativação metabólica, fragmentação mecânica por hidrolipo e quebra enzimática.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Estímulo Metabólico;Massagens",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise metabólica, tônus e mapeamento para protocolo enzimático.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para potencializar a resposta local.",
    card3_title: "Enzimas",
    card3_text: "Aplicação lipolítica para quebra química do tecido adiposo.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado pelas enzimas.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que combina ativação metabólica, ação enzimática e drenagem manual para um resultado mais completo.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Enzimas;Estímulo Metabólico;Ultrassom",
    card1_title: "Avaliação Sistêmica",
    card1_text: "Análise metabólica e definição do protocolo enzimático e de ultrassom.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para ampliar a resposta aos procedimentos locais.",
    card3_title: "Ação Potencializada",
    card3_text: "Enzimas e ultrassom com metabolismo ativo para máxima ação lipolítica.",
    card4_title: "Drenagem",
    card4_text: "Estímulo para eliminação rápida dos ativos liberados.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano de alta performance com quebra química, mecânica e suporte metabólico sistêmico.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Hidrolipo;Massagens",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área para definição do protocolo combinado.",
    card2_title: "Hidrolipo",
    card2_text: "Infiltração para fragmentação mecânica do tecido adiposo.",
    card3_title: "Enzimas",
    card3_text: "Aplicação enzimática sobre o tecido já fragmentado para ampliar a quebra.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano intensivo que une fragmentação mecânica, quebra enzimática e drenagem manual.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Hidrolipo;Ultrassom",
    card1_title: "Avaliação de Lise",
    card1_text: "Foco em quebra química e mecânica profunda do tecido adiposo.",
    card2_title: "Infiltração",
    card2_text: "Preparação do tecido com solução e enzimas para ampliar a ação do ultrassom.",
    card3_title: "Lise Adiposa",
    card3_text: "Ação conjunta de hidrolipo, enzimas e ultrassom para destruição de adipócitos.",
    card4_title: "Eliminação",
    card4_text: "Foco nas vias de excreção da gordura liberada.",
    card5_title: "Revisão",
    card5_text: "Ajuste de pontos e definição de continuidade.",
    summary_text: "Plano intensivo de redução por quebra química e mecânica profunda, sem foco metabólico inicial.",
    sessionsnumber_text: "6 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Massagens;Ultrassom",
    card1_title: "Avaliação Inicial",
    card1_text: "Análise da área e definição do protocolo combinado.",
    card2_title: "Enzimas e Ultrassom",
    card2_text: "Quebra química e mecânica do tecido adiposo em sessão combinada.",
    card3_title: "Massagem Drenante",
    card3_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card4_title: "Sessão Integrada",
    card4_text: "Enzimas, ultrassom e massagem em sequência para ampliar o resultado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano completo com quebra química, mecânica e drenagem manual para redução e modelagem.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Estímulo Metabólico;Hidrolipo;Massagens",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise metabólica, tônus e mapeamento para o protocolo combinado.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para os procedimentos locais.",
    card3_title: "Hidrolipo",
    card3_text: "Infiltração com fragmentação mecânica potencializada pelo metabolismo ativo.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que combina ativação metabólica, redução por hidrolipo e drenagem manual.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico;Hidrolipo;Ultrassom",
    card1_title: "Avaliação Avançada",
    card1_text: "Mapeamento completo incluindo perfil metabólico e parâmetros de ultrassom.",
    card2_title: "Estímulo Metabólico e Preparação",
    card2_text: "Infiltração e ativação metabólica prévia para potencializar o ultrassom.",
    card3_title: "Tripla Ação",
    card3_text: "Hidrolipo, ultrassom e estímulo metabólico em sessão combinada.",
    card4_title: "Metabolização",
    card4_text: "Aceleração da queima da gordura liberada pelos procedimentos locais.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano completo combinando redução mecânica por hidrolipo e ultrassom com aceleração metabólica.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico;Massagens;Ultrassom",
    card1_title: "Avaliação Integrada",
    card1_text: "Análise metabólica, tônus e definição do protocolo combinado.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para potencializar a resposta ao ultrassom e à massagem.",
    card3_title: "Ultrassom",
    card3_text: "Quebra mecânica do tecido adiposo com metabolismo ativado.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação da gordura mobilizada.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano que une ativação metabólica, quebra por ultrassom e drenagem manual para resultado completo.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Hidrolipo;Massagens;Ultrassom",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área para infiltração, potência do ultrassom e protocolo manual.",
    card2_title: "Hidrolipo",
    card2_text: "Infiltração para fragmentação mecânica do tecido adiposo.",
    card3_title: "Ultrassom",
    card3_text: "Quebra mecânica complementar para ampliar a destruição de adipócitos.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e definição de continuidade.",
    summary_text: "Plano de redução localizada com dupla ação mecânica por hidrolipo e ultrassom, com drenagem manual.",
    sessionsnumber_text: "6 a 8 sessões",
    frequency_text: "1x por semana"
  },

  // ─── 4 OPÇÕES (5 combinações) ────────────────────────────────────────────

  {
    key: "Enzimas;Estímulo Metabólico;Hidrolipo;Massagens",
    card1_title: "Avaliação Completa",
    card1_text: "Análise metabólica, tônus e mapeamento para o protocolo de quatro frentes.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para os procedimentos locais.",
    card3_title: "Hidrolipo e Enzimas",
    card3_text: "Fragmentação mecânica e quebra enzimática em sessão combinada.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano de quatro frentes com ativação metabólica, redução mecânica, quebra enzimática e drenagem manual.",
    sessionsnumber_text: "8 a 10 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Enzimas;Estímulo Metabólico;Hidrolipo;Ultrassom",
    card1_title: "Protocolo Full",
    card1_text: "Mapeamento total de todas as frentes de tratamento.",
    card2_title: "Preparação",
    card2_text: "Infiltração e ativação sistêmica.",
    card3_title: "Sessão Master",
    card3_text: "Combinação de todas as tecnologias disponíveis.",
    card4_title: "Recuperação",
    card4_text: "Monitoramento pós-procedimento completo.",
    card5_title: "Consolidação",
    card5_text: "Plano de longo prazo para manutenção.",
    summary_text: "O protocolo mais completo para redução de medidas e melhora metabólica.",
    sessionsnumber_text: "12 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Enzimas;Estímulo Metabólico;Massagens;Ultrassom",
    card1_title: "Avaliação Avançada",
    card1_text: "Análise metabólica e definição do protocolo de quatro frentes.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para potencializar todos os procedimentos.",
    card3_title: "Enzimas e Ultrassom",
    card3_text: "Quebra química e mecânica do tecido adiposo com metabolismo ativo.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano avançado com ativação metabólica, quebra química, mecânica e drenagem manual integradas.",
    sessionsnumber_text: "8 a 10 sessões",
    frequency_text: "1x a 2x por semana"
  },

  {
    key: "Enzimas;Hidrolipo;Massagens;Ultrassom",
    card1_title: "Avaliação e Mapeamento",
    card1_text: "Análise da área para o protocolo de quatro frentes.",
    card2_title: "Hidrolipo",
    card2_text: "Infiltração para fragmentação mecânica inicial do tecido adiposo.",
    card3_title: "Enzimas e Ultrassom",
    card3_text: "Quebra química e mecânica complementar para ampliar a destruição de adipócitos.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação do conteúdo liberado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano intensivo com hidrolipo, enzimas, ultrassom e drenagem manual para redução máxima.",
    sessionsnumber_text: "8 a 10 sessões",
    frequency_text: "1x por semana"
  },

  {
    key: "Estímulo Metabólico;Hidrolipo;Massagens;Ultrassom",
    card1_title: "Avaliação Completa",
    card1_text: "Análise metabólica e mapeamento para o protocolo de quatro frentes.",
    card2_title: "Estímulo Metabólico",
    card2_text: "Ativação sistêmica para preparar o organismo para os procedimentos locais.",
    card3_title: "Hidrolipo e Ultrassom",
    card3_text: "Dupla ação mecânica para fragmentação e destruição do tecido adiposo.",
    card4_title: "Massagem Drenante",
    card4_text: "Manobras para acelerar a eliminação com metabolismo ativado.",
    card5_title: "Reavaliação",
    card5_text: "Comparação de medidas e ajuste do plano.",
    summary_text: "Plano completo com ativação metabólica, dupla ação mecânica e drenagem manual.",
    sessionsnumber_text: "8 a 10 sessões",
    frequency_text: "1x a 2x por semana"
  },

  // ─── 5 OPÇÕES (1 combinação) ─────────────────────────────────────────────

  {
    key: "Enzimas;Estímulo Metabólico;Hidrolipo;Massagens;Ultrassom",
    card1_title: "Protocolo Máximo",
    card1_text: "Avaliação completa de todas as frentes: metabólica, mecânica, química e manual.",
    card2_title: "Estímulo Metabólico e Preparação",
    card2_text: "Ativação sistêmica e infiltração para potencializar todos os procedimentos.",
    card3_title: "Sessão Full",
    card3_text: "Hidrolipo, enzimas e ultrassom em sequência para máxima destruição adiposa.",
    card4_title: "Massagem e Drenagem",
    card4_text: "Manobras intensas para acelerar a eliminação com metabolismo ativado.",
    card5_title: "Consolidação",
    card5_text: "Reavaliação completa de medidas e plano de manutenção.",
    summary_text: "O protocolo mais completo disponível, unindo todas as frentes de tratamento para resultado máximo.",
    sessionsnumber_text: "10 a 12 sessões",
    frequency_text: "1x a 2x por semana"
  }

];
