$module = {
    __getattr__ : function(attr){return this[attr]},
    random:function(){
      if(arguments.length > 0){
        throw TypeError("random() takes no arguments ("+arguments.length+" given)")
      } else {
        return float(Math.random());
      }
    },
    randint:function(a,b){return int(Math.floor(Math.random()*(b-a)+a))},
    randrange:function(start,stop,step){
      if(step === undefined) {
        step=1;
      } else if(step == 0) { 
        //raise ValueError("zero step for randrange()");
      }

      if(stop === undefined) {
         stop=start;
         start=0;
      }
      var width=stop-start;
      if (step==1 && width > 0) {
        return start + int(Math.floor(Math.random()*width));
      } else {
        // raise ValueError("empty range for randrange() ("+start+","+stop+','+step+')');
      }
      
      var n;
      if (step > 0) {
         n=Math.floor((width+step-1)/step);
      } else {
         n=Math.floor((width+step+1)/step);
      }
      return start + step*int(Math.floor(Math.random()*n))
      //return int(Math.random()*(stop/step-start/step)*step + start)
    },
    shuffle:function(x, rnd){
      if (x.length <= 1) { return x}

      if (rnd === undefined) {
         rnd=Math.random
      }

      for(var j, o, i = x.length; i; j = parseInt(rnd() * i), o = x[--i], x[i] = x[j], x[j] = o);
    }
}
$module.__class__ = $module // defined in $py_utils
$module.__str__ = function(){return "<module 'random'>"}
