import angular from 'angular';
import CategoriesModule from './categories/categories';
import FooterModule from './footer/footer';


const ComponentsModule = angular.module('components', [
    CategoriesModule.name,
    FooterModule.name
])

export default ComponentsModule;
