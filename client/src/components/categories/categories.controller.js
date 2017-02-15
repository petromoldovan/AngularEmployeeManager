class CategoriesController {
    constructor(CategoriesModel) {

      //service to fetch categories
      CategoriesModel.getCategories()
        .then(res => this.categories = res)
    }
}

export default CategoriesController
