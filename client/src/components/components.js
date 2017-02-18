import angular from 'angular';
import CategoriesModule from './categories/categories';
import FooterModule from './footer/footer';
import categoryItemModule from './category-item/category-item';


const ComponentsModule = angular.module('components', [
    CategoriesModule.name,
    FooterModule.name,
    categoryItemModule.name
])

export default ComponentsModule;
