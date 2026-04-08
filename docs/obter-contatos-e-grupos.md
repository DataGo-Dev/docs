---
id: obter-contatos-e-grupos
title: Obter Contatos e Grupos
sidebar_position: 6
---

Para obter Contatos e Grupos usaremos os métodos da pasta **Gets** dentro da nossa **Collection**, importada em [Postman Collection e Configuração](./postman-collection-e-configuracao.md)

![Pasted image 20250923144852.png](./img/Pasted%20image%2020250923144852.png)

> ⚠️ Após conectar, os contatos/grupos podem demorar até 1 minuto para serem gravados no Nitzap.

### Grupos

Use **GET Grupos** para obter dados de Grupos:

`{{host}}/whatsapp/mygroups`

```json
[
	{
		"id": "a8c70f23-58fc-40a6-9292-ae922fade0cc_120363150576337453@g.us",
		"sessionid": "a8c70f23-58fc-40a6-9292-ae922fade0cc",
		"whatsid": "120363150576337453@g.us",
		"name": "Datago Internos",
		"type": "group",
		"createddate": "2025-09-23T11:21:50.090491-03:00"
	}
	...
]
```

Caso o grupo não estiver aparecendo, você pode usar o parâmetro `force=true`:

`{{host}}/whatsapp/mygroups?force=true`

Isso forçará o recarregamento dos grupos.

### Contatos

Use **GET Contatos** para obter dados de Contatos:

`{{host}}/whatsapp/mycontacts`

```json
[
	{
		"id": "a8c70f23-58fc-40a6-9292-ae922fade0cc_5527999206920@s.whatsapp.net",
		"sessionid": "a8c70f23-58fc-40a6-9292-ae922fade0cc",
		"whatsid": "5527999209090@s.whatsapp.net",
		"name": "Açai Reinado",
		"type": "contact",
		"createddate": "2025-09-23T11:21:49.300645-03:00"
	}
	...
]
```

> ⚠️ A lista de contatos só vai exibir 500 contatos a fim de desempenho.

Para buscar por um contato em toda a sua lista, use o parâmetro **term**:

`{{host}}/whatsapp/mycontacts?term=king`

Busca todos os contatos que tem "king" no nome.
