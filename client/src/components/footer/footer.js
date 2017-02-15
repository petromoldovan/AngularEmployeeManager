import angular from 'angular';
import footerComponent from './footer.component';


const footerModule = angular.module('customfooter', [])
    .component('customfooter', footerComponent);


export default footerModule;
