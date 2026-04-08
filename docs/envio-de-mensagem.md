---
id: envio-de-mensagem
title: Envio de Mensagem
sidebar_position: 4
---

Para envio de mensagens usaremos os métodos da pasta **Send** dentro da nossa **Collection**, importada em [Postman Collection e Configuração](./postman-collection-e-configuracao.md)

![Pasted image 20250923102905.png](./img/Pasted%20image%2020250923102905.png)

:::warning[Pré-requisito]
Para enviar mensagem, é necessário obter o token de acesso mencionado em [Conexão com Nitzap](./conexao-com-nitzap.md).
:::

### Enviar Mensagem de Texto

Abra **POST Text**. O corpo da requisição será algo como:

```json
{
	"to": "{{destination}}",
	"message": "OLAAAAAA",
	"type": "text"
}
```

| Parâmetro | Descrição |
| --- | --- |
| **to** | Número configurado na variável **destination** em [Postman Collection](./postman-collection-e-configuracao.md) |
| **message** | A mensagem de texto que deseja enviar |
| **type** | Sempre será `"text"` para mensagem de texto |

**Parâmetros opcionais:**

| Parâmetro | Descrição |
| --- | --- |
| **isForwarded** | Caso preenchido, marca mensagem como encaminhada |
| **quotedMessageKey** | Caso preenchido, menciona a mensagem indicada. O valor deve ser a "key" da mensagem enviada anteriormente |

A key da mensagem pode ser obtida ao usar métodos do tópico [Obter Dados de Conversas](./obter-dados-de-conversas.md)

### Enviar Mensagem com Mídias

```json
{
	"to": "{{destination}}",
	"message": "legenda da mídia",
	"type": "image",
	"isForwarded": false,
	"media": {
		"url": "https://nitzap2private.s3.us-east-1.amazonaws.com/image.jpeg",
		"mimetype": "image/png"
	}
}
```

Os parâmetros **to**, **message**, **isForwarded** e **quotedMessageKey** seguem as mesmas regras descritas acima.

**type** indica o tipo de mídia que será enviado:

| Tipo | Descrição |
| --- | --- |
| **image** | Imagem |
| **video** | Vídeo |
| **audio** | Áudio (não suporta parâmetro **message**) |
| **document** | Qualquer outro arquivo |

O tipo `document` tem algumas particularidades:

```json
{
	"to": "{{destination}}",
	"message": "Curabitur",
	"media": {
		"fileName": "helloFileName.html",
		"url": "https://nitzap2private.s3.us-east-1.amazonaws.com/doc.html"
	},
	"type": "document"
}
```

O parâmetro **fileName** deve ser enviado em `media.fileName`. Ele é responsável por nomear o arquivo do link enviado.

:::warning[Hospedagem de Arquivos]
O Nitzap não irá hospedar os arquivos (imagens/vídeos/áudios/documentos) que não são de origem do Bucket S3 do Nitzap. Se as URLs dos arquivos não estiverem disponíveis em algum momento, elas também ficarão indisponíveis no Aplicativo do Nitzap no Salesforce.
:::

:::tip[Recomendação]
É altamente recomendado que todos os arquivos enviados por API sejam hospedados em apenas um único site, pois essas URLs deverão ser liberadas em URLs confiáveis no Salesforce — [Gerenciar URLs confiáveis](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_manage.htm&type=5) — para ser compatível com o Aplicativo Nitzap 2.0 no Salesforce.
:::

### Sussurro

O Sussurro é a capacidade de enviar uma mensagem de texto internamente onde apenas os usuários do Nitzap são capazes de ver. A mensagem de sussurro **não será enviada** para o destinatário no WhatsApp.

Para isso use **POST Supress Message**:

```json
{
	"to": "{{destination}}",
	"message": "Teste Nitzap",
	"type": "text"
}
```

:::warning[Atenção]
Mensagens de sussurro não são compatíveis com mídias.
:::

### Envio em Massa

É possível enviar várias mensagens numa única requisição (limitado a 100), misturando qualquer tipo de mensagem anteriormente citado (exceto sussurro):

```json
[
	{
		"type": "text",
		"to": "{{destination}}",
		"message": "Olá, tudo bem?",
		"delay": 7.0
	},
	{
		"to": "{{destination}}",
		"message": "Segue a imagem",
		"type": "image",
		"media": {
			"url": "https://nitzap2private.s3.us-east-1.amazonaws.com/image.jpeg",
			"mimetype": "image/png"
		}
	}
]
```

O parâmetro opcional **delay** indica quanto tempo em média (em segundos) deve se esperar para enviar a mensagem do corpo corrente. O delay deve ser no máximo de **60 segundos**. Caso não preenchido, o Nitzap irá definir um delay aleatório de 4 a 7 segundos.
