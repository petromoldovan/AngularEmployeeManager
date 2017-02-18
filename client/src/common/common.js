import angular from 'angular';
import CategoriesModel from './models/categories.models';
import ApiModel from './models/api.models';
import BookmarksModel from './models/bookmarks.model'


const CommonModule = angular.module('common', [])
    .service('CategoriesModel', CategoriesModel)
    .service('ApiModel', ApiModel)
    .service('BookmarksModel', BookmarksModel)


export default CommonModule;
