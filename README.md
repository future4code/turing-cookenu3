> Projeto Back-end Web

# Projeto Cookenu! # 🍩🍪🍕🍔

O projeto Cookenu é uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:
******************
### Funcionalidades
> -  ✅ Signup;
> -  ✅ Login;
> - Pegar próprio perfil;
> - Pegar perfil de outro usuário;
> -  ✅ Criar receita;
> -  ✅ Pegar receita;
> - Seguir usuário;
> - Deixar de seguir usuário;
> - Pegar feed de receitas;
****************

### Tabelas utilizadas no projeto

##### Criar usuários
```
CREATE TABLE Users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```

##### Criar Receitas
```
CREATE TABLE Recipes (
recipe_id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
user_id VARCHAR(255) NOT NULL,
created BIGINT NOT NULL,
FOREIGN KEY(User_id) REFERENCES Users(id)
);
```
***************
### Tecnologias utilizadas no projeto 
> -   bcrypt -  [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
> -    express -  [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
> -    Json Web Token -  [https://jwt.io/](https://jwt.io/)
> -   knex -  [http://knexjs.org/](http://knexjs.org/)
> -    node JS -  [https://nodejs.org/en/](https://nodejs.org/en/)
> -    uuid -  [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)
> -    dotenv -  [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
> -    moment -  [https://momentjs.com/](https://momentjs.com/)
> -    mysql -  [https://www.mysql.com/](https://www.mysql.com/)
> -    typescript -  [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
> -    javascript -  [https://www.javascript.com/](https://www.javascript.com/)
> -    ts-node-dev -  [https://www.npmjs.com/package/ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

****************

### Projeto colaborativo LabeNu
[Diego Molinari](https://github.com/diegotjmolinari)
[Paulo Viana](https://github.com/paulodev1612)
[Pedro Villalba](https://github.com/elprogramadorpedro)