# 🚀 Cypress Login Tests - Automação de Testes com Cypress, Cucumber e JavaScript

Este repositório contém um projeto de automação de testes utilizando **Cypress**, **Cucumber** e **JavaScript**, aplicando o design pattern **Page Objects** para garantir um código mais organizado, reutilizável e de fácil manutenção.  

## 📌 Tecnologias utilizadas  
✅ **Cypress** para testes de front-end rápidos e confiáveis  
✅ **Cucumber** para escrita de cenários BDD, tornando os testes mais legíveis  
✅ **JavaScript** para criar o código, personalizar e integrar as automações  
✅ **Page Objects** para separar a lógica da interface dos testes  
✅ **Inversão de Dependências** (em breve) para desacoplar e tornar o código mais flexível  

## 📂 Estrutura do projeto  
```
- e2e  
  - features/ (arquivos .feature - cenários de teste)  
  - pages/ (arquivos Page Object - abstração das páginas)  
  - steps_definitions/ (arquivos de implementação dos testes)  
```

## 🚀 Como rodar os testes localmente  

### 1️⃣ Pré-requisitos  
Antes de começar, certifique-se de ter instalado:  
- [Node.js](https://nodejs.org/) (versão 14 ou superior)  
- [Git](https://git-scm.com/)  

### 2️⃣ Clonar o repositório  
Abra o terminal e execute:  
```sh
git clone https://github.com/joohwho/cypressLoginTests.git
cd cypressLoginTests
```

### 3️⃣ Instalar as dependências  
Execute o seguinte comando para instalar os pacotes necessários:  
```sh
npm install
```

### 4️⃣ Executar os testes  

#### 🔹 Rodar os testes no modo interativo (UI do Cypress)  
```sh
npx cypress open
```
Selecione o navegador desejado e clique no teste que deseja executar.  

#### 🔹 Rodar os testes no modo headless (linha de comando)  
```sh
npx cypress run
```
Ou utilize a interface do próprio Cypress - Recomendado

## 📜 Exemplo de um cenário de teste (Gherkin)  

```gherkin
Feature: Login

Scenario: Login with valid credentials
    Given I open the login page
    When I enter "username" in the username field
    And I enter "p@ssWord" in the password field
    And I click the login button
    Then I should see the dashboard page
```

## 🎯 Próximos passos  
- Aplicar **Inversão de Dependências** nas Page Objects para maior desacoplamento e flexibilidade  
- Melhorar a cobertura de testes com novos cenários  

📌 Feedbacks e sugestões são bem-vindos! Vamos trocar ideias!  

---

Feito com ❤️ por joowho  

#Cypress #Cucumber #JavaScript #PageObjects #TestesAutomatizados #QA #QualityAssurance #AutomaçãoDeTestes  
```
