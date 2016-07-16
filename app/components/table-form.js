import Ember from 'ember';

export default Ember.Component.extend({
	/*modelValues: Ember.computed('model.[]', 'model.@each.fullCoast', function() {
    return this.get('model').mapBy('fullCoast');
  }),
	modelSum: Ember.computed.sum('modelValues'),
	avgExpensePerDay: Ember.computed('modelSum', function() {
		console.log(this.get('coasts.dataName'));
    /*const dateParts = this.get('model.dataName').split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const daysInMonth = new Date(year, month, 0).getDate();
    return this.get('modelSum')/30;*/
    //console.log(Ember.keys(this));
    
  //}),
  getAllDate: Ember.computed('model.[]', 'model.@each.dataName', function(){
  	console.log("getAllName",this.get('model').mapBy('dataName'));
  	return this.get('model').mapBy('dataName');
  }),
  sortOneDay: Ember.computed('getAllDate', 'model', function(){
  	const nameAllData = this.get('getAllDate');
  	const daysInMonth = new Date().getDate();
  	console.log('daysInMonth', daysInMonth);

  		
  	
  	 this.get('model').forEach(function(item){
				console.log(item.dataName);
  	 })
  }),
  sortDefinition: ['dataName'],
  sortedDashboard: Ember.computed.sort('model', 'sortDefinition'),
	actions:{
		delete(dashboard){
			console.log('delete');
			dashboard.destroyRecord();
		}, 
		click(){
			console.log('hello');
			
		}
	
	}
});
