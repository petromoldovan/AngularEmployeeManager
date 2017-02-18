class BookmarksController {
    constructor(BookmarksModel, CategoriesModel) {
        'ngInject';

        this.BookmarksModel = BookmarksModel;
        this.CategoriesModel = CategoriesModel;
    }

    $onInit() {
        this.BookmarksModel.getBookmarks()
            .then(res => this.bookmarks = res)

        //pass to filter in html to folter all bookmarks based on current category. In the end we add bind to bind context of func to the categoriesModel
        this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel)
    }
}

export default BookmarksController;
