import angular from 'angular';
import categoriesComponent from './categories.component';
import categoryItemModule from '../category-item/category-item';


const CategoriesModule = angular.module('categories', [
        categoryItemModule.name
])
    .component('categories', categoriesComponent);

export default CategoriesModule;
