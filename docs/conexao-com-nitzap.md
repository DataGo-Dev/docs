---
id: conexao-com-nitzap
title: Conexão com Nitzap
sidebar_position: 3
---

Para conectar usaremos os métodos da pasta **Connect** dentro da nossa **Collection**, importada em [📂 Postman Collection e Configuração](./postman-collection-e-configuracao.md)

![Pasted image 20250923100509.png](./img/Pasted%20image%2020250923100509.png)

### Métodos de Conexão

Para Usuários da API, recomendamos conectar pelo Método **GET Connect Pair Code**, pois não é necessário ler o QR Code

### Opção 1: Pair Code (Recomendado)

Use **GET Connect Pair Code**

`{{host}}/whatsapp/connect/{{numberConnect}}?useCode=true`

![Pasted image 20250923101252.png](./img/Pasted%20image%2020250923101252.png)

Ao Enviar a requisição você obterá um código:

1. Abra o WhatsApp no seu celular, vá em **Aparelhos conectados**
2. Vá em **Conectar um aparelho** > **Conectar com número de telefone**
3. Insira o código que apareceu pra você

### Opção 2: QR Code

Se optar por QR CODE, você deve enviar a requisição e copiar o link completo da resposta e colar no seu navegador. Dessa forma o QR Code será exibido pra você.

> ⚠️ O QR code vale por 40 segundos, logo é necessário lê-lo rapidamente

`{{host}}/whatsapp/connect/{{numberConnect}}`

![Pasted image 20250923100954.png](./img/Pasted%20image%2020250923100954.png)

Você verá algo como:

![Pasted image 20250923101120.png](./img/Pasted%20image%2020250923101120.png)

Certifique-se de copiar todo o link `data:image/png;base64,...`

Então basta ler o QR CODE.

### Após conectar

Uma vez conectado no aparelho celular, você deverá mandar uma request para **GET Status Secret**

`{{host}}/whatsapp/status/{{sessionId}}`

Apenas enviando a requisição o Postman vai automaticamente guardar suas credenciais.

Logo em seguida deve-se apenas clicar em **POST Login** e o Postman vai automaticamente gerar o token de acesso para ser capaz de usar os outros métodos da API.

> ⚠️ O Token de acesso vale por **1 Hora**. Todas as vezes que o token expirar, será necessário clicar novamente em **POST Login** para continuar usando os outros métodos.
