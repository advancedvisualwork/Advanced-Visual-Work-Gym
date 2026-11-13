# 🏋️ AVW Gym — Website Demonstrativo para Academias & Estúdios Fitness

Repositório do modelo **AVW Gym**, uma *landing page* moderna e de alta conversão desenvolvida pela **Advanced Visual Work**. O projeto foi criado para academias, estúdios de treinamento funcional, boxes de CrossFit e personal trainers que desejam apresentar sua estrutura, planos e facilitar o agendamento de aulas experimentais ou matrículas via WhatsApp.

## 🚀 Sobre o Projeto

O **AVW Gym** entrega uma experiência visual intensa e direta ao ponto: apresentação das modalidades e infraestrutura, comparativo claro de planos de assinatura e um fluxo rápido para o aluno agendar uma aula experimental ou iniciar sua matrícula diretamente pelo WhatsApp.

### ✨ Principais Funcionalidades

* **Modalidades & Infraestrutura:**
  * Seção dedicada às áreas de treino (Musculação, Treinamento Funcional, Cardio, Lutas/Aulas Coletivas) com visual editorial de alto impacto e horários de funcionamento.
* **Tabela de Planos Transparente:**
  * Exibição clara dos planos disponíveis (ex: Mensal, Trimestral, Anual) com benefícios destacados, facilitando a comparação e a tomada de decisão do aluno.
* **Agendamento de Aula Experimental & Matrícula:**
  * Fluxo interativo onde o visitante escolhe o **plano ou aula experimental**, seleciona o **turno de preferência** (Manhã, Tarde ou Noite) e informa seu nome.
* **Integração Direta com WhatsApp (`wa.me`):**
  * Geração automática de mensagem pronta com a escolha do aluno, direcionando o contato diretamente para a recepção ou equipe comercial da academia.
* **Design Esportivo & Alta Performance:**
  * Identidade visual em tema escuro (*Dark Mode*), tipografia condensada de forte presença e elementos gráficos dinâmicos.
  * Totalmente responsivo, com barra de ação rápida fixa no mobile para acesso imediato ao botão de matrícula/aula experimental.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica otimizada para SEO local e acessibilidade (`ARIA`).
* **CSS3:** Variáveis customizadas (`:root`), CSS Grid, Flexbox, animações suaves e design responsivo *mobile-first*.
* **JavaScript (ES6+):** *Vanilla JS* leve e sem dependências externas para seleção de planos, validação e integração com a API web do WhatsApp.

## 📂 Estrutura de Arquivos

```text
.
├── index.html          # Estrutura da página, modalidades, planos e formulário
├── style.css           # Estilização em tema escuro, tipografia editorial e responsividade
├── script.js           # Lógica de seleção de planos/aulas e redirecionamento para WhatsApp
└── images/             # Identidade visual e fotografias do ambiente de treino
    ├── logo-mark.png
    └── gym-hero.jpg
```

## ⚙️ Configuração & Personalização

Para adaptar este modelo às informações de uma academia real, edite o objeto `CONFIG` no início do arquivo `script.js`:

```javascript
const CONFIG = {
  whatsapp: "5511900000000", // Número da recepção com DDI + DDD
  gymName: "AVW Gym",        // Nome da academia ou estúdio
  hours: "Seg a Sex, 06h às 22h · Sáb, 08h às 14h",
  plans: [                   // Planos e opções de entrada
    { id: "experimental", name: "Aula Experimental", price: 0, period: "Gratuita", desc: "Conheça nossa estrutura e treine um dia por nossa conta." },
    { id: "mensal",       name: "Plano Mensal",      price: 119, period: "/mês",   desc: "Acesso livre a todas as áreas de musculação e cardio." },
    { id: "anual",        name: "Plano Anual",       price: 89,  period: "/mês",   desc: "Acesso total + aulas coletivas e avaliação física inclusa." }
  ]
};
```

## 👥 Desenvolvedores & Créditos

Este modelo demonstrativo foi idealizado e desenvolvido pela equipe da **Advanced Visual Work**:

* **João Henrique**
* **Matheus**

## 📬 Contato Comercial

Quer um site profissional e rápido para a sua academia ou negócio?

* ✉️ **E-mail:** [advancedvisualwork@gmail.com](mailto:advancedvisualwork@gmail.com)
* 📸 **Instagram:** [@advancedvisualwork](https://www.instagram.com/advancedvisualwork/)

## 📄 Licença

Este projeto é um modelo demonstrativo de propriedade da **Advanced Visual Work**. Todos os direitos reservados © 2026.