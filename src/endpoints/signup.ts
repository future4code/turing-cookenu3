import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const signUp = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password) {
      throw new Error('Você precisa inserir todas as informações');
    }

    if (password.length < 6) {
      throw new Error(
        'Sua senha é menor do que o recomendado, ela deve possuir no mínimo 6 caracteres',
      );
    }
    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();
  
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);
  
    const userDataBase = new UserDatabase();
    await userDataBase.registerUser(
      id,
      name,
      email,
      hashPassword
    );
  
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id});
  
    res.status(200).send({
      message: 'Usuário criado com sucesso',
      token
    });
    } catch (e) {
    res.status(400).send({
      message: e.message
    })
    }
    await BaseDatabase.destroyConnection();
  };