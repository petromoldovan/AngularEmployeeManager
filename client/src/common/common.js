import angular from 'angular';
import CategoriesModel from './models/categories.models';
import ApiModel from './models/api.models';


const CommonModule = angular.module('common', [])
    .service('CategoriesModel', CategoriesModel)
    .service('ApiModel', ApiModel)


export default CommonModule;
