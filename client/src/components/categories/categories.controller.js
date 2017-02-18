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
        console.log(category)
    }
}

export default CategoriesController
