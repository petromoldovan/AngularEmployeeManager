class BookmarksModel {
    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.bookmarks = [
            {"id": 1, "title": "category: Development lorem ipsum", "url": "some url", "category": "Development"},
            {"id": 2, "title": "category: Design lorem ipsum", "category": "Design"},
            {"id": 3, "title": "category: Exercise lorem ipsum", "category": "Exercise"},
            {"id": 4, "title": "category: Humor lorem ipsum", "category": "Humor"},
            {"id": 5, "title": "category: Design lorem ipsum", "category": "Design"},
            {"id": 6, "title": "category: Exercise lorem ipsum", "category": "Exercise"},
        ]
    }

    getBookmarks() {
        return this.$q.when(this.bookmarks)
    }
}

export default BookmarksModel
