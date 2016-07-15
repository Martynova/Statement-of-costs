import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', { path: '/' }, function(){
    this.route('car', function(){
      this.route('new');

      this.route('edit', {
        path: ':dashboard_id/edit'
      });
    });
    this.route('other', function(){
        
  	})

    
  });
});

export default Router;
