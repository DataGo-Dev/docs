---
id: postman-collection-e-configuracao
title: Postman Collection e Configuração
sidebar_position: 2
---

Baixe a coleção do Postman clicando no arquivo anexado abaixo.

[Download Nitzap Postman Collection](https://drive.google.com/file/d/1XSboMzN3BYoBvHLNIMB2Z9n97dehwHTN/view?usp=drive_link)

Para importar o arquivo é necessário baixar o Postman clicando abaixo:

[Download Postman](https://www.postman.com/downloads/)

## 1. Importação

Para importar a Collection baixada, abra o Postman e clique em **Import**

![Screenshot 2025-09-23 at 09.42.33.png](./img/Screenshot%202025-09-23%20at%2009.42.33.png)

Arraste e solte o arquivo na janela que se abrirá ao clicar no botão anteriormente citado.

Uma vez importado irá aparecer uma nova coleção no Postman semelhante a essa:

![Screenshot 2025-09-23 at 09.48.15.png](./img/Screenshot%202025-09-23%20at%2009.48.15.png)

## 2. Configuração

Conforme a imagem abaixo, clique em **Environments/Ambientes** e logo em seguida clique na seta para criar um novo ambiente.

![Screenshot 2025-09-23 at 09.51.36.png](./img/Screenshot%202025-09-23%20at%2009.51.36.png)

Na janela que se abriu configure as seguintes variáveis:

| Variável | Descrição |
| --- | --- |
| **host** | A URL do seu servidor. Caso não souber qual a URL, entre em contato com a Datago (+55 27 99601-5929 - Atendimento Nitzap) |
| **numberConnect** | Número de telefone que irá se conectar ao Nitzap (Ex: `5527997010101`) |
| **destination** | Número de telefone para enviar mensagens ou obter informações (Ex: `5527997010101`) |

Crie também as variáveis abaixo e **deixe em branco**, pois serão preenchidas automaticamente:

- **sessionId**
- **secret**
- **tokenNitzap**

Verifique se o ambiente atual com o nome que você criou está devidamente selecionado nas variáveis de ambiente antes de seguir para o próximo passo:

![Screenshot 2025-09-23 at 11.12.39.png](./img/Screenshot%202025-09-23%20at%2011.12.39.png)

Agora seu ambiente está configurado e pronto para uso.

**Próximo passo:** [Conexão com Nitzap](./conexao-com-nitzap.md)
