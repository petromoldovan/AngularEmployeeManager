class BookmarksController {
    constructor(BookmarksModel) {
        'ngInject';

        this.BookmarksModel = BookmarksModel;
    }

    $onInit() {
        this.BookmarksModel.getBookmarks()
            .then(res => this.bookmarks = res)
    }
}

export default BookmarksController;
