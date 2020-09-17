import {BaseDatabase} from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  private static TABLE_NAME = 'Recipes';

  public async newRecipe(recipe_id: string, user_id: string, title: string, description: string, created: number): Promise<void> {
    await this.getConnection()
      .insert({
        recipe_id,
        user_id,
        title,
        description,
        created
      }).into(RecipeDatabase.TABLE_NAME)
  }
  public async getRecipeById(recipeId: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(RecipeDatabase.TABLE_NAME)
      .where({recipe_id: recipeId});
    return result[0]
  }

}
