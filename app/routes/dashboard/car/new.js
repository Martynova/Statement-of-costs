import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('dashboard');
	},
	resetController(controller, isExiting) {
		if (isExiting) {
			console.log('----- resetController hook called -----');
			var model = controller.get('model');
			if(model.get('isNew')){
				 model.destroyRecord();
			}
		}
	}
});