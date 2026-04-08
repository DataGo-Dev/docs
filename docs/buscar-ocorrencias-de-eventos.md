---
id: buscar-ocorrencias-de-eventos
title: Buscar Ocorrências de Eventos
sidebar_position: 7
---

Busca ocorrências de eventos de registro de **chamadas** e **visualizações únicas** de acordo com o período especificado.

### Endpoint

**POST** `{{host}}/whatsapp/get-occurrences`

### Body

O corpo da requisição deve conter as datas no formato **RFC 3339**:

```json
{
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-01-31T23:59:59Z"
}
```

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| **startDate** | string | Sim | Data inicial do período (formato RFC 3339) |
| **endDate** | string | Sim | Data final do período (formato RFC 3339) |

:::info[Formato de Data]
As datas devem seguir o padrão RFC 3339 (ex: `2024-01-15T10:30:00Z`). O "Z" no final indica o fuso horário UTC.
:::

### Exemplo com cURL

```bash
curl https://{{host}}/whatsapp/get-occurrences \
  --request POST \
  --header 'Content-Type: application/json' \
  --header 'Authorization: YOUR_SECRET_TOKEN' \
  --data '{
    "endDate": "2024-01-31T23:59:59Z",
    "startDate": "2024-01-01T00:00:00Z"
  }'
```

### Respostas

#### 200 — Ocorrências de eventos

Retorna um array de objetos com as ocorrências encontradas no período:

```json
[
  {
    "dateMsg": "2024-01-15T10:30:00Z",
    "id": "1234567890",
    "mywhatsid": "5511999999999@s.whatsapp.net",
    "secondwhatsappid": "5511888888888@s.whatsapp.net",
    "sequence": 1,
    "type": "CALL_TERMINATED"
  }
]
```

| Campo | Tipo | Descrição |
| --- | --- | --- |
| **dateMsg** | string | Data e hora do evento |
| **id** | string | Identificador único do evento |
| **mywhatsid** | string | Número do usuário conectado |
| **secondwhatsappid** | string | Número do outro participante |
| **sequence** | integer | Sequência numérica do evento |
| **type** | string (enum) | Tipo do evento |

**Tipos de evento possíveis:**

| Tipo | Descrição |
| --- | --- |
| `view_once` | Visualização única (foto/vídeo que desaparece) |
| `CALL_TERMINATED` | Chamada encerrada |
| `CALL_REJECTED` | Chamada rejeitada |

#### 400 — Erro de validação

Retornado quando `startDate` ou `endDate` não são informados ou não estão no formato RFC 3339.

#### 500 — Erro interno

Erro ao buscar ocorrências de eventos no servidor.
