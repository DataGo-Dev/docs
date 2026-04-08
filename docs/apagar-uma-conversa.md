---
id: apagar-uma-conversa
title: Apagar uma conversa
sidebar_position: 7
---

Para apagar uma conversa usaremos os métodos da pasta **Danger** dentro da nossa **Collection**, importada em [Postman Collection e Configuração](./postman-collection-e-configuracao.md)

![Screenshot 2025-09-23 at 14.45.33.png](./img/Screenshot%202025-09-23%20at%2014.45.33.png)

Use **DELETE Delete Chat** informando o número de telefone do destinatário no parâmetro target:

`{{host}}/whatsapp/delete-messages?target={{destination}}`

Isso irá deletar todas as conversas e metadados da conversa entre o número conectado atual e o destinatário.
