---
id: gerenciamento-de-webhooks
title: Gerenciamento de Webhooks
sidebar_position: 8
---

Para gerenciar os webhooks usaremos os métodos da pasta **Webhooks** dentro da nossa **Collection**, importada em [Postman Collection e Configuração](./postman-collection-e-configuracao.md)

> Para usar as funções de gerenciamento Webhook, você deve ter acesso à sua chave de [Autenticação Master](./autenticacao-master.md)

![Pasted image 20250923150933.png](./img/Pasted%20image%2020250923150933.png)

### Criar ou Atualizar um Webhook

Use **POST Create/Update**

`{{host}}/webhook/post`

O corpo da requisição deve ser algo como:

```json
{
	"id": "a8c70f23-58fc-40a6-9292-ae922fade0cc",
	"name": "Meu Webhook",
	"is_active": true,
	"url": "https://test-webhook-ia.onrender.com/webhook",
	"secret": "xxxxx",
	"events": [
		"CONNECTION_UPDATE",
		"ON_MESSAGE",
		"MESSAGE_UPDATE"
	],
	"tracked_users": [
		"5514981770936"
	]
}
```

Para **criar** um novo registro, não mande a chave **id** no JSON. Apenas para **atualização** você deve mandar o **id** informando qual o Webhook que deseja atualizar.

| Parâmetro | Descrição |
| --- | --- |
| **name** | Nome do seu Webhook |
| **is_active** | Ativa e desativa o webhook |
| **url** | A URL do seu webhook (deve ser HTTPS) |
| **secret** | Será enviado junto ao **Authorization Header** para verificar a autenticidade dos dados |
| **tracked_users** | Números de telefones conectados que receberão os eventos |

**events** — Para ver o que cada evento faz, use:

`{{host}}/webhook/allowed-events`

```json
{
	"CONNECTION_UPDATE": "Quando há alteração na conexão",
	"MESSAGE_UPDATE": "Quando há alteração na mensagem (leitura, edição, etc)",
	"ON_GROUP_MESSAGE": "Quando Envia e Recebe mensagem em grupo",
	"ON_MESSAGE": "Quando Envia e Recebe mensagem"
	...
}
```

### Listar Webhooks

Para listar todos os Webhooks use **GET**:

`{{host}}/webhook/get`

```json
[
	{
		"id": "c20bcd6a-7dd9-4692-83f4-f481321091ff",
		"name": "Teste",
		"isactive": true,
		"url": "https://nitzapdemo.app.n8n.cloud/webhook-test/agentedevnitzap",
		"secret": "xxxxxx",
		"events": [
			"ON_MESSAGE",
			"MESSAGE_UPDATE"
		],
		"tracked_users": [
			"5514981770936"
		],
		"createddate": "2025-09-22T15:52:15.961656-03:00",
		"modifieddate": "2025-09-22T17:06:15.6085-03:00"
	}
]
```

### Deletar Webhook

Use **DEL Delete**:

`{{host}}/webhook/delete/{webhook_id}`

A variável de caminho deve conter o ID do webhook que deseja deletar.
