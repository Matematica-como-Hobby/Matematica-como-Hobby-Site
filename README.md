# Matematica-como-Hobby-Site
Site do projeto Solucionariosdo Matematica como Hobby

## Descrição

Este projeto é uma aplicação que permite vizaulizar os arquivos do [Solucionarios](https://github.com/Matematica-como-Hobby/Solucionarios). Abaixo, caso queira, você encontrará instruções sobre como iniciar uma instância local e configurar o ambiente, 

## 🚀 Iniciando uma Instância Local

Para iniciar uma instância local do projeto, siga os passos abaixo:

1. **Certifique-se de que você tem o Node.js instalado**:
   - Você pode baixar o Node.js [aqui](https://nodejs.org/).

2. **Clone o repositório**:
   - Abra o terminal e execute o seguinte comando:
     ```bash
     git clone https://github.com/Matematica-como-Hobby/Matematica-como-Hobby-Site.git
     ```

3. **Navegue até o diretório do projeto**:
   - No terminal, digite:
     ```bash
     cd Matematica-como-Hobby-Site
     ```

4. **Instale as dependências**:
   - Execute o comando:
     ```bash
     npm install
     ```

5. **Inicie o servidor**:
   - Para iniciar a aplicação, digite:
     ```bash
     npm dev
     ```
## 📄 Configuração do Arquivo .env

O projeto requer variáveis de ambiente para funcionar, aqui estão disponibilizadas algumas para localhost.
- Antes de iniciar o servidor você deve criar um arquivo `.env` na raiz do projeto. com o seguinete texto:
```bash
  # Node.js environment configuration file
  NODE_ENV=local

  # Github App configuration
  APP_ID="1228803"
  CLIENT_ID=Iv23lijaPGCzDXEQmCih
  CLIENT_SECRET=d1ec21ae8f0d44ad9732fc62c06a31e0017fe47c
  JWT_SECRET=3971538ad78f1a3278b23abd89e01a882ad9c0d63c301d52cada419f1cac9cb10228d00ffa3b1054f4e72d8eba8595952840bae4ee935ffbd4d534896a776fc2

  # Github Database configuration
  NEXT_PUBLIC_REPO_BRANCH=Development
  NEXT_PUBLIC_REPO_OWNER=DaveAlSv
```




## 🌐 Acesse o Website
Agora, você deve conseguir acessar o site com o seguinte link

[Solucionarios - Site Local](http://localhost:3000)
