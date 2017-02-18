class BookmarksModel {
    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.bookmarks = [
            {"id": 1, "title": "this is title 1", "url": "some url", "category": "Development"},
            {"id": 2, "title": "this is title 1", "url": "some url", "category": "Design"},
            {"id": 3, "title": "this is title 1", "url": "some url", "category": "Exercise"},
            {"id": 4, "title": "this is title 1", "url": "some url", "category": "Humor"}
        ]
    }

    getBookmarks() {
        return this.$q.when(this.bookmarks)
    }
}

export default BookmarksModel
