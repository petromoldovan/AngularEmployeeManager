import angular from 'angular';
import CategoriesModule from './categories/categories';
import FooterModule from './footer/footer';
import CategoryItemModule from './category-item/category-item';
import BookmarksModule from './bookmarks/bookmarks';


const ComponentsModule = angular.module('components', [
    CategoriesModule.name,
    FooterModule.name,
    CategoryItemModule.name,
    BookmarksModule.name
])


export default ComponentsModule;
