import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    agregarConcepto(){
      this.store.createRecord('concepto', {
        factura: this.get('model')
      })
    },
    guardar(){
      let factura = this.get('model');
      let fp = factura.get('formaPago');

      factura.save().then(()=>{
      Ember.RSVP.all( factura.get('conceptos').invoke('save') ).then(()=>{
          window.swal({
            title:'Yey!',
            text:'Se guardo correctamente',
            type:'success'
          })
        })
      })
    },
  }
});
