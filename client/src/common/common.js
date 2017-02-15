import angular from 'angular';
import CategoriesModel from './models/categories.models';

const CommonModule = angular.module('common', [])
    .service('CategoriesModel', CategoriesModel);

export default CommonModule;