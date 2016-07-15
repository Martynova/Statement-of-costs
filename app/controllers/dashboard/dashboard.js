import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		delete(dashboard){
			console.log('delete');
			dashboard.destroyRecord();
		}
	}
});
