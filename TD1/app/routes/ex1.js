import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object'

const Note = EmberObject.extend({
  size:computed('content',function(){
      if(this.get('content').length>0) {
        this.set('styleNote','alert-info');
        this.set('alertVisible', true);
        this.set('info', 'Note modifiée');
      }
      return this.get('MAX')-this.get('content').length;
  }),
  style:computed('size',function(){
    if(this.get('size')>50){
      return "alert-info";
    }else if (this.get('size')>25){
      return "alert-warning";
    }else return "alert-danger";
  }),
});
export default Route.extend({
    model(){
      return Note.create({
        MAX:100,
        content:""
      })
    },
    actions:{
      save:function(model) {
        console.log('textarea has been saved');
        model.set('alertVisible',true);
        let content=model.get('content');
        model.set('info',`Note sauvegardée: <b>${content}</b>`);
        model.set('styleNote','alert-success')
      },
      delete:function(model){
        console.log('textarea has been deleted');
        model.set('content',"");
        model.set('alertVisible',false);
      }
    }
});
