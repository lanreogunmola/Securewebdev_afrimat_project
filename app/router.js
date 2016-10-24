import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ecommerce', function() {
    this.route('product');
  });
  this.route('products');
  this.route('register');
});

export default Router;
