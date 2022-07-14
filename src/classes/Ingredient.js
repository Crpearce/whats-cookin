class Ingredient {
    constructor(ingredientInfo) {
        this.id = ingredientInfo.id;
        this.name = ingredientInfo.name;
        this.estimatedCostInCents = ingredientInfo.estimatedCostInCents;
    }

    findIngredientName() {
      return this.name
    }

};

module.exports = Ingredient;
