import template from './category-item.html';

const categoryItemComponent = {
    bindings: {
        selected: '&',
        category: '<'   //one way data binding -> from parent to child. Change detection is only on parent
    },
    template,
    controllerAs: 'categoryItemCtrl'
}

export default categoryItemComponent;
