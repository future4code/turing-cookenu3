import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export const newRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();

    const authenticationData = authenticator.verify(token);
    const userId = authenticationData.id;
  
    const idGenerator = new IdGenerator();
    const recipeId = idGenerator.generateId();

    const title = req.body.title;
    const description = req.body.description;

    const created = Date.now();

    const recipeDatabase = new RecipeDatabase();
    await recipeDatabase.newRecipe(
      recipeId,
      userId,
      title,
      description,
      created
    );
    res.status(200).send({
      message: 'Sua receita foi criada com sucesso'
    })
      

  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
  await BaseDatabase.destroyConnection();
};
