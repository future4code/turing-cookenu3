import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import { getRecipe } from './endpoints/getRecipe';
import { login } from './endpoints/Login';
import { newRecipe } from './endpoints/newRecipe';
import { signUp } from './endpoints/signup';

dotenv.config();

const app = express();
app.use(express.json());

//Criar usuário
app.post('/signup', signUp);

//Criar receita
app.post('/recipe', newRecipe);

//faz login
app.post('/login', login);

//Pegar receita
app.get('/recipe/:id', getRecipe);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error('Failure upon starting server');
  }
});
