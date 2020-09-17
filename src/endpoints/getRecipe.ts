import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { Authenticator } from '../services/Authenticator';
import moment from 'moment';

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const recipeId = req.params.id as any;

    const authenticator = new Authenticator();
    authenticator.verify(token);

    const recipeDatabase = new RecipeDatabase();
    const recipe = await recipeDatabase.getRecipeById(recipeId);

    const dateRecipe = moment(recipe.created).format('DD/MM/YYYY');

    res.status(200).send({
      message: 'Sua receita é',
      id: recipe.recipe_id,
      title: recipe.title,
      description: recipe.description,
      created: dateRecipe,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
  await BaseDatabase.destroyConnection();
};
