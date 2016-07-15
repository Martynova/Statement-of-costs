import Ember from 'ember';

export default Ember.Component.extend({
	getCoastsDay: Ember.computed('coasts.dataName', 'coasts.fullCoast',{
		get(){
			var dataName = this.get('coasts.dataName');
			var fullCoast = this.get('coasts.fullCoast');
			console.log(dataName, fullCoast);
		}
	}),
	actions:{
		delete(dashboard){
			console.log('delete');
			dashboard.destroyRecord();
		}
	
	}
});
