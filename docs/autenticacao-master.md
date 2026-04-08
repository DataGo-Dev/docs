---
id: autenticacao-master
title: Autenticação Master
sidebar_position: 10
---

### Credenciais Mestre

Para gerenciamento de algumas funções do Nitzap, você precisa gerar **Credenciais Mestre**. Essa opção só está disponível dentro do Salesforce na aba **Nitzap App Configs** e não pode ser feita via API.

![Pasted image 20250923154248.png](./img/Pasted%20image%2020250923154248.png)

### Master Key

A chave deve ser enviada no cabeçalho com o nome **X-Master-Key**, com valor definido passado pela Datago.

A Master Key deve ter o seguinte formato:

`MasterID:MasterSecret`

Ou seja, se seu Master ID for `123` e seu Master Secret for `ABC`:

`123:ABC`

![Pasted image 20250923160821.png](./img/Pasted%20image%2020250923160821.png)

Caso não tenha sua chave, entre em contato com a Datago e solicite-a para conseguir usar algumas funções do Nitzap de acesso mais restrito.
