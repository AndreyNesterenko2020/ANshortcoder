//released 2020-11-19, 10:55
//by Andrey N
const ANshortcoder = {
  init: function(){
    console.log('version '+ANshortcoder.ver)
    ANshortcoder.tmp.continueExecution = 1;
    if(window.shortCoderDataBase != undefined){
      null;
    } else{
      ANshortcoder.error('window.shortCoderDataBase is not defined');
      ANshortcoder.tmp.continueExecution = 0;
    }
    if(ANshortcoder.tmp.continueExecution == 1){
      for(var a=1;a<=document.all.length-1;a++){
        if(document.all[0].innerHTML.includes('&gt;--')){
          var e = document.all[0].innerHTML;
          e = document.all[0].innerHTML.split('&gt;--')[1];
          e = e.split('--&lt;')[0];
          document.all[0].innerHTML = document.all[0].innerHTML.replace('&gt;--','');
          document.all[0].innerHTML = document.all[0].innerHTML.replace('--&lt;','');
          try{
            document.all[0].innerHTML = document.all[0].innerHTML.replace(e,eval('window.shortCoderDataBase.'+e));
          }
          catch(Error){
            ANshortcoder.error(Error);
          }
        };
      };
    }
  },
  error: function(errorCause){
    console.error('ANshortcoder error: ',errorCause);
  },
  ver: '1.0.0',
  tmp: {},
};