class CategoriesController {
    constructor(CategoriesModel, ApiModel) {

      this.CategoriesModel = CategoriesModel
      this.ApiModel = ApiModel
    }

    $onInit() {
        //service to fetch categories
        this.CategoriesModel.getCategories()
            .then(res => this.categories = res)

        //ajax data fetch
        this.ApiModel.fetchData()
            .then(res => console.log(res))
    }

    onCategorySelected(category) {
        this.CategoriesModel.setCurrentCategory(category)
    }

    isCurrentCategory(category) {
        return this.CategoriesModel.getCurrentCategory() && this.CategoriesModel.getCurrentCategory().id === category.id
    }
}

export default CategoriesController
