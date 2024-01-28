import './utils/focus-lock';
import './utils/scroll-lock';
import './vendor/liga/accordion';
import './vendor/liga/custom-select';
import {Form} from './vendor/liga/form-validate/form';
import { initMenu } from './modules/menu';
import { initSliders } from './modules/slider';
import './utils';


window.addEventListener('DOMContentLoaded', () => {
  initSliders();
  initMenu();

  const form = new Form();
  window.form = form;
  form.init();

  window.addEventListener('load', () => {

  });
});
