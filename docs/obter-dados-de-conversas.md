---
id: obter-dados-de-conversas
title: Obter Dados de Conversas
sidebar_position: 5
---

Para obter dados de conversas usaremos os métodos da pasta **Gets** dentro da nossa **Collection**, importada em [Postman Collection e Configuração](./postman-collection-e-configuracao.md)

![Pasted image 20250923144852.png](./img/Pasted%20image%2020250923144852.png)

### Metadados das mensagens

Os metadados das mensagens são um conjunto de dados gerais das conversas do celular, contendo informações como quem falou com você, a última mensagem enviada/recebida, data do envio/recebimento, foto do perfil (se disponível), etc.

Para obter os metadados use **GET My Chats MTD**

`{{host}}/whatsapp/get-my-chats-metadata`

```json
{
	"chat_id": "55119659123213_55119659123212",
	"sessionid": "a8c70f23-58fc-40a6-9292-ae922fade0cc",
	"mywhatsid": "55119659123213@s.whatsapp.net",
	"secondwhatsappid": "55119659123212@s.whatsapp.net",
	"name": "Masiero",
	"groupname": null,
	"sequence": 1758576856643,
	"dt_lastmessage": null,
	"dt_second_last_message": "2025-09-22T18:34:16-03:00",
	"createddate": "2025-09-22T18:34:17.767761-03:00",
	"version": 1,
	"text_last_message": "Bom dia",
	"last_message_type": "text",
	"profile_photo": "",
	"isent": false,
	"isgroup": false,
	...
}
```

Nenhum parâmetro necessário.

### Histórico de Mensagens

Para acessar as mensagens de um número específico, use **POST Get Messages**. Esse endpoint sempre retorna as mensagens ordenadas por data de envio de forma decrescente.

`{{host}}/whatsapp/get-messages`

```json
{
	"target": "{{destination}}",
	"skip": 0,
	"take": 100
}
```

| Parâmetro | Descrição |
| --- | --- |
| **target** | Número de telefone da pessoa que deseja consultar o histórico |
| **take** | Quantidade de mensagens que deseja pegar por página |
| **skip** | Quantidade de mensagens que devem ser puladas |

**Paginação:**

- Página inicial = 0
- `skip = paginaAtual * take`

Para paginação sem furar dados, use:

| Parâmetro | Descrição |
| --- | --- |
| **sequence** | Timestamp para pegar apenas mensagens até aquela data |
| **follow** | `'lte'` para menor ou igual à sequência, `'gte'` para maior ou igual |

Você pode usar [esse site](https://www.unixtimestamp.com/) para converter data para timestamp.

:::info[Nota]
Seu timestamp deve ter 13 dígitos. Caso o site lhe der apenas com 10 dígitos, acrescente 3 zeros ao final (ex: `1758576856000`).
:::

**Extra — Ver mensagens de outros usuários**

É possível ver mensagens de outros usuários. Para isso você precisa gerar suas chaves e enviar sua credencial de autorização no cabeçalho conforme descrito em [Autenticação Master](./autenticacao-master.md):

```json
{
	"target": "{{destination}}",
	"skip": 0,
	"take": 100,
	"vOverride": {
		"vFrom": "<NUMERO_DO_USER>"
	}
}
```

Onde **vFrom** deve ser o número do usuário conectado (ex: `55279998787867`). Você verá as mensagens do user **vFrom** para o user **target** e vice versa.

O resultado será algo como:

```json
[
	{
		"id": "21ffe8da-f242-496b-b7d1-ec48167c5b39",
		"msgkey": "3EB0C11B844D60711F5105",
		"sender": "55149818989",
		"participant": "55149818989@s.whatsapp.net",
		"reciver": "552799709090@s.whatsapp.net",
		"type": "text",
		"text": "Test",
		"mimetype": null,
		"url": null,
		"datemsg": "2025-09-22T09:08:12-03:00",
		"pushname": "Sr Nit",
		"isent": true,
		"sessionid": "a8c70f23-58fc-40a6-9292-ae922fade0cc",
		"chatid": "5514981770936_5527997019622",
		"sequence": 1758542892229,
		"message_timestamp": 1758542892000,
		"mywhatsid": "55149818989@s.whatsapp.net",
		"secondwhatsappid": "552799709090@s.whatsapp.net",
		"isgroup": false,
		"readdate": 1758542935000
	},
	...
]
```

Com esses resultados é possível obter **msgkey** para usar na tag **quotedMessageKey** mencionado em [Envio de Mensagem](./envio-de-mensagem.md).

**Exemplo de paginação:**

Página 1:

```json
{
	"target": "{{destination}}",
	"skip": 0,
	"take": 100
}
```

Página 2:

```json
{
	"target": "{{destination}}",
	"skip": 100,
	"take": 100,
	"fallow": "lte",
	"sequence": "1758576856643"
}
```

Página 3:

```json
{
	"target": "{{destination}}",
	"skip": 200,
	"take": 100,
	"fallow": "lte",
	"sequence": "1758576856643"
}
```

:::danger[Cuidado]
Não utilize take maior que 500 para evitar travar o banco.
:::

### Histórico de Mensagens num período de tempo

Também é possível acessar as mensagens de um certo período com timestamp inicial e final:

```json
{
	"target": "{{destination}}",
	"sequence": "1754452800000",
	"finalSequence": "1754442068000",
	"skip": 0,
	"take": 50
}
```

:::danger[Cuidado]
Não utilize take maior que 500 para evitar travar o banco.
:::

| Parâmetro | Descrição |
| --- | --- |
| **sequence** | Data inicial do período (formato Timestamp) |
| **finalSequence** | Data final do período (formato Timestamp) |
| **take** | Quantidade de mensagens que deseja pegar |
| **skip** | Quantidade de mensagens que devem ser puladas |

Você pode usar [esse site](https://www.unixtimestamp.com/) para converter data para timestamp.

:::info[Nota]
Seu timestamp deve ter 13 dígitos. Caso o site lhe der apenas com 10 dígitos, acrescente 3 zeros ao final (ex: `1758576856000`).
:::

As mensagens resultarão no mesmo corpo mencionado acima, porém ordenadas por data em ordem **crescente**.

### Obter foto do perfil

Use **GET Get Profile Picture** para obter o link da foto de perfil do terceiro. Se disponível, a API irá retornar o link temporário. Esse link expira com o tempo e deve ser gerado novamente quando não estiver mais disponível.

`GET {{host}}/whatsapp/getprofilephoto?target={{destination}}`

O retorno será algo como:

```json
{
	"name": "João",
	"ppUrl": "https://pps.whatsapp.net/v/t61.24694-24/..."
}
```

### Obter dados de quem falou com destinatário

Para saber quem falou com tal pessoa, use **GET Who Talked**

`{{host}}/whatsapp/get-who-talked?number={{destination}}`

Você obterá algo como:

```json
[
	{
		"chat_id": "5527996015929_5527997019622",
		"mywhatsid": "5527996015929@s.whatsapp.net",
		"secondwhatsappid": "5527997019622@s.whatsapp.net",
		"qt_messages": 1,
		"qt_sended_messages": 1,
		"qt_received_messages": null,
		"sequence": "1755189401366"
	},
	{
		"chat_id": "5514981770936_5527997019622",
		"mywhatsid": "5514981770936@s.whatsapp.net",
		"secondwhatsappid": "5527997019622@s.whatsapp.net",
		"qt_messages": null,
		"qt_sended_messages": null,
		"qt_received_messages": null,
		"sequence": "1758542892229"
	}
]
```
