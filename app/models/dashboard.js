import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	dataName:attr('date'),
	coastCar:attr('number'),
	coastSer:attr('number'),
	coastReffil:attr('number')

});
