**nodemon -r esm .**
<p>nodemon - Checks if project files have changed by restarting Node.</p>
<p>-r - Allows running multiple files simultaneously.</p>
<p>esm - ECMAScript module loader.</p>
<p>. - Indicates the project root</p>

**Trabalhando com pacotes** <br>
Esta forma serve para criar um monorepo, que guarda os arquivos do servidor e da interface do usuário (web).
Com esta configuração é possível instalar as dependências dos dois projeto com apenas um comando.

Inicie o projeto
```
pnpm init
```

Crie o arquivo
```
pnpm-workspaces.yaml
```

Altere o nome do projeto no package.json de cada um dos repositórios (server e web)
Ex: "name": "@api_graphql/server",

```
pnpm i
```

Execute o comando para instalação das dependências
```
pnpm i --filter @api_graphql/server
```



Iniciar o projeto na raiz
```
pnpm --filter @api_graphql/server run start
```