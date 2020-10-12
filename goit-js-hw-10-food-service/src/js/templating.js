import menu from '../menu.json';
import foodItemTemplate from '../templates/food-items.hbs';

const refs = {
  foodMenu: document.querySelector('.js-menu'),
};

const buildFoodMenu = items => {
  const markup = items.map(item => foodItemTemplate(item)).join('');

  refs.foodMenu.insertAdjacentHTML('beforeend', markup);
};

buildFoodMenu(menu);
