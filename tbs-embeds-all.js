(function(){var s=document.createElement('style');s.textContent=".tbs-embed{--e-tx:#1f1b16;--e-mu:#5e564a;--e-bg:#fffdf8;--e-bg2:#f8f0e3;--e-bd:#e6d9c1;--e-line:#eadcc4;--e-ac:#0f6e56;--e-bl:#2a78d6;margin:1.6rem 0;color:var(--e-tx);font:16px/1.5 system-ui,-apple-system,'Segoe UI',sans-serif;box-sizing:border-box}\n.tbs-embed *{box-sizing:border-box}\n.tbs-embed .cap{font-size:13px;color:var(--e-mu);margin:.6rem 0 0}\n.tbs-anim .tbs-reveal{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s ease}\n.tbs-anim .tbs-reveal.in{opacity:1;transform:none}\n.tbs-loop{display:flex;flex-wrap:wrap;gap:.5rem;background:var(--e-bg2);border-radius:8px;padding:1rem}\n.tbs-loop .lp-step{flex:1 1 150px;border:1px solid;border-radius:8px;padding:.7rem .8rem;text-align:center}\n.tbs-loop .lp-step b{display:block;font-weight:600}\n.tbs-loop .lp-step span{font-size:13px;color:var(--e-mu)}\n.tbs-loop .s1{border-color:#7f77dd;background:rgba(127,119,221,.15)}\n.tbs-loop .s2{border-color:#1d9e75;background:rgba(29,158,117,.15)}\n.tbs-loop .s3{border-color:#d85a30;background:rgba(216,90,48,.15)}\n.tbs-loop .lp-arr{align-self:center;color:var(--e-mu);font-size:1.3rem}\n.tbs-loop .lp-arr span,.tbs-loop .lp-back span{display:inline-block}\n.tbs-loop .lp-back{flex-basis:100%;text-align:center;font-size:13px;color:var(--e-mu);margin-top:.3rem}\n@media(max-width:560px){.tbs-loop .lp-step{flex-basis:100%}.tbs-loop .lp-arr{flex-basis:100%;text-align:center}.tbs-loop .lp-arr span{transform:rotate(90deg)}}\n.tbs-anim .tbs-loop .lp-step,.tbs-anim .tbs-loop .lp-arr,.tbs-anim .tbs-loop .lp-back{opacity:0;transform:translateY(10px);transition:opacity .5s ease,transform .5s ease}\n.tbs-anim .tbs-loop.in .lp-step,.tbs-anim .tbs-loop.in .lp-arr,.tbs-anim .tbs-loop.in .lp-back{opacity:1;transform:none}\n.tbs-anim .tbs-loop.in .s1{transition-delay:.1s}.tbs-anim .tbs-loop.in .a1{transition-delay:.4s}\n.tbs-anim .tbs-loop.in .s2{transition-delay:.7s}.tbs-anim .tbs-loop.in .a2{transition-delay:1s}\n.tbs-anim .tbs-loop.in .s3{transition-delay:1.3s}.tbs-anim .tbs-loop.in .lp-back{transition-delay:1.7s}\n.tbs-anim .tbs-loop.in .lp-back span{animation:tbsSpin 1.2s ease-in-out 2.1s 2}\n@keyframes tbsSpin{to{transform:rotate(-360deg)}}\n.tbs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}\n.tbs-stats .st{background:var(--e-bg2);border-radius:8px;padding:1rem}\n.tbs-stats small{display:block;font-size:13px;color:var(--e-mu)}\n.tbs-stats strong{display:block;font-size:2rem;font-weight:500;line-height:1.2;margin:.2rem 0}\n.tbs-stats .st-bar{height:6px;background:var(--e-bd);border-radius:3px;margin:.5rem 0;overflow:hidden}\n.tbs-stats .st-bar i{display:block;height:100%;background:var(--e-bl);border-radius:3px;transition:width 1.2s ease .3s}\n.tbs-stats .w80{width:80%}.tbs-stats .w26{width:26%}\n.tbs-anim .tbs-stats:not(.in) .st-bar i{width:0}\n.tbs-embed.tbs-quote{margin:1.6rem 0;padding:1rem 1.2rem;background:var(--e-bg2);border-radius:8px;position:relative;overflow:hidden}\n.tbs-quote p{font:italic 1.35rem/1.4 Georgia,serif;margin:0 0 .5rem}\n.tbs-quote cite{font-size:13px;color:var(--e-mu);font-style:normal}\n.tbs-quote:before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--e-ac);transform-origin:top;transition:transform .8s ease .3s}\n.tbs-anim .tbs-quote:not(.in):before{transform:scaleY(0)}\n.tbs-speed{background:var(--e-bg2);border-radius:8px;padding:1rem}\n.tbs-speed .sp-fallback{margin:0}\n.tbs-speed .sp-top{display:flex;justify-content:space-between;font-size:14px;margin-bottom:.4rem}\n.tbs-speed input{width:100%;accent-color:var(--e-bl);margin:0 0 .8rem}\n.tbs-speed .sp-out{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:.6rem}\n.tbs-speed .sp-out div{background:var(--e-bg);border-radius:8px;padding:.5rem .8rem}\n.tbs-speed small{display:block;font-size:12px;color:var(--e-mu)}\n.tbs-speed b{font-size:1.4rem;font-weight:500}\n.tbs-speed svg{width:100%;height:auto;display:block}\n.tbs-speed .sp-t{fill:var(--e-mu);font:11px system-ui,sans-serif}\n.tbs-speed .sp-l{stroke:var(--e-bd);stroke-width:1}\n.tbs-speed .sp-c{fill:none;stroke:var(--e-bl);stroke-width:2.5}\n.tbs-speed .sp-d{fill:var(--e-bl);stroke:var(--e-bg2);stroke-width:2}\n.tbs-loop .cap{flex-basis:100%;margin:.2rem 0 0;text-align:center}\n.tbs-stats .cap{grid-column:1/-1;margin:0}\n.tbs-loop,.tbs-stats .st,.tbs-embed.tbs-quote,.tbs-speed,.tbs-embed.tbs-poll{border:1px solid var(--e-line)}\n.tbs-poll{--tp-bg:#f8f0e3;--tp-bd:#d9c9ad;--tp-tx:#1f1b16;--tp-mu:#5e564a;--tp-ac:#2a78d6;--tp-fill:#bcd3f2;\n  max-width:100%;margin:1.6rem 0;padding:1rem;background:var(--tp-bg);color:var(--tp-tx);border-radius:8px;\n  font:16px/1.5 system-ui,-apple-system,'Segoe UI',sans-serif;box-sizing:border-box}\n.tbs-poll *{box-sizing:border-box}\n.tbs-poll .tp-q{font-weight:600;font-size:1.1rem;margin:0 0 .8rem}\n.tbs-poll .tp-opt{display:block;width:100%;text-align:left;padding:.7rem .9rem;margin:0 0 .5rem;background:transparent;\n  color:inherit;border:1px solid var(--tp-bd);border-radius:8px;font:inherit;cursor:pointer}\n.tbs-poll .tp-opt:hover,.tbs-poll .tp-opt:focus-visible{border-color:var(--tp-ac);outline:none}\n.tbs-poll .tp-opt:disabled{opacity:.6;cursor:default}\n.tbs-poll .tp-note{font-size:13px;color:var(--tp-mu);margin:.5rem 0 0}\n.tbs-poll .tp-link{background:none;border:0;padding:0;color:var(--tp-ac);font:inherit;text-decoration:underline;cursor:pointer}\n.tbs-poll .tp-row{margin:0 0 .7rem}\n.tbs-poll .tp-head{display:flex;justify-content:space-between;gap:.5rem;font-size:15px;margin-bottom:.25rem}\n.tbs-poll .tp-track{height:12px;background:var(--tp-bd);border-radius:6px;overflow:hidden}\n.tbs-poll .tp-fill{height:100%;width:0;background:var(--tp-fill);border-radius:6px;transition:width .6s ease}\n.tbs-poll .mine .tp-fill{background:var(--tp-ac)}\n@media(prefers-reduced-motion:reduce){.tbs-poll .tp-fill{transition:none}}";(document.head||document.documentElement).appendChild(s)})();
(function(){
if(window.__tbsPoll)return;window.__tbsPoll=1;
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function init(root){
  var id=root.getAttribute('data-poll'),
      api=root.getAttribute('data-api'),
      key='tbsPoll:'+id,q=root.querySelector('.tp-q'),body=root.querySelector('.tp-body'),voted=null,last=null;
  try{voted=localStorage.getItem(key)}catch(e){}
  function j(u,o){return fetch(u,o).then(function(r){if(!r.ok)throw new Error(r.status);return r.json()}).then(function(d){if(d.error)throw new Error(d.error);return d})}
  function fail(msg){body.textContent='';body.appendChild(el('p','tp-note',msg||'The poll could not load. Please try again later.'))}
  function choices(d){
    last=d;q.textContent=d.question;body.textContent='';
    d.options.forEach(function(o){
      var b=el('button','tp-opt',o.label);b.type='button';
      b.addEventListener('click',function(){cast(o.key,body.querySelectorAll('.tp-opt'))});
      body.appendChild(b)});
    var n=el('p','tp-note','Results appear after you vote. ');
    var l=el('button','tp-link','See results');l.type='button';
    l.addEventListener('click',function(){results(last,true)});
    n.appendChild(l);body.appendChild(n)}
  function results(d,preview){
    last=d;q.textContent=d.question;body.textContent='';
    if(d.state!=='ready'){
      body.appendChild(el('p','tp-note',d.state==='empty'?'No votes yet.':'Thanks. Results will show once more readers have voted.'));
    }else{
      d.options.forEach(function(o){
        var r=el('div','tp-row'+(o.key===voted?' mine':'')),h=el('div','tp-head'),f=el('div','tp-fill'),t=el('div','tp-track');
        h.appendChild(el('span',null,(o.key===voted?'\u2713 ':'')+o.label));h.appendChild(el('span',null,o.percent+'%'));
        t.setAttribute('role','progressbar');t.setAttribute('aria-valuemin','0');t.setAttribute('aria-valuemax','100');
        t.setAttribute('aria-valuenow',o.percent);t.setAttribute('aria-label',o.label);
        t.appendChild(f);r.appendChild(h);r.appendChild(t);body.appendChild(r);
        requestAnimationFrame(function(){requestAnimationFrame(function(){f.style.width=o.percent+'%'})})})}
    if(preview&&!voted){var b=el('button','tp-link','Back to vote');b.type='button';b.addEventListener('click',function(){choices(last)});
      var p=el('p','tp-note');p.appendChild(b);body.appendChild(p)}}
  function cast(opt,btns){
    btns.forEach(function(b){b.disabled=true});
    j(api,{method:'POST',body:JSON.stringify({poll:id,option:opt})})
    .then(function(d){voted=opt;try{localStorage.setItem(key,opt)}catch(e){}results(d)})
    .catch(function(e){choices(last);
      body.appendChild(el('p','tp-note',e.message==='busy'?'The poll is busy right now. Please try again in a minute.':'Your vote could not be saved. Please try again.'))})}
  j(api+(api.indexOf('?')<0?'?':'&')+'poll='+encodeURIComponent(id),{cache:'no-store'})
    .then(function(d){voted?results(d):choices(d)}).catch(function(){fail()})
}
function run(){[].forEach.call(document.querySelectorAll('.tbs-poll[data-poll]'),init)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
(function(){
var d=document,h=d.documentElement,n=0;
h.classList.add('tbs-js');
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!rm)h.classList.add('tbs-anim');
var anim=h.classList.contains('tbs-anim');
function sp(t){return Math.pow(1.3103,Math.log(1-t/18.75)/Math.log(0.76))}
function X(t){return 40+t/18*340}
function Y(v){return 190-v/13*160}
function count(el){
  var to=parseFloat(el.getAttribute('data-count')),s=el.getAttribute('data-suffix')||'',t0=null;
  function f(ts){if(!t0)t0=ts;var k=Math.min((ts-t0)/1200,1);el.textContent=Math.round(to*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)}
  el.textContent='0'+s;requestAnimationFrame(f)}
function speed(el){
  var css='html,body{margin:0;background:transparent}body{font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;color:#1f1b16;padding:16px}.top{display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px}input{width:100%;margin:0 0 12px;accent-color:#2a78d6}.out{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px}.out div{flex:1 1 140px;background:#fffdf8;border-radius:8px;padding:8px 12px}small{display:block;font-size:12px;color:#5e564a}b{font-size:1.4rem;font-weight:500}svg{width:100%;height:auto;display:block}.t{fill:#5e564a;font:11px system-ui,sans-serif}.l{stroke:#e6d9c1;stroke-width:1}.c{fill:none;stroke:#2a78d6;stroke-width:2.5}.d{fill:#2a78d6;stroke:#f8f0e3;stroke-width:2}.cap{font-size:13px;color:#5e564a;margin:8px 0 0}';
  var html='\x3c!DOCTYPE html>\x3chtml>\x3chead>\x3cmeta charset="utf-8">\x3cmeta name="viewport" content="width=device-width,initial-scale=1">\x3cstyle>'+css+'\x3c/style>\x3c/head>\x3cbody>'
   +'\x3cdiv class="top">\x3cspan>Months after full automation\x3c/span>\x3coutput id="o">0.0\x3c/output>\x3c/div>'
   +'\x3cinput id="r" type="range" min="0" max="17.2" step="0.1" value="0" aria-label="Months after full automation">'
   +'\x3cdiv class="out">\x3cdiv>\x3csmall>AI progress speed\x3c/small>\x3cb id="x">1.0x\x3c/b>\x3c/div>\x3cdiv>\x3csmall>A year of progress takes\x3c/small>\x3cb id="w">52 weeks\x3c/b>\x3c/div>\x3c/div>'
   +'\x3csvg id="s" viewBox="0 0 400 232" role="img" aria-label="Curve rising from 1x to about 11x over 17 months, steepening over time. A dot marks the slider position.">\x3c/svg>'
   +'\x3cp class="cap">TBS illustration of the paper\'s model: each doubling of AI software quality takes 76% as long as the last, starting at 4.5 months. A model, not a forecast.\x3c/p>\x3c/body>\x3c/html>';
  var f=d.createElement('iframe'),ready=false,want=false,begin=null;
  f.title='Interactive chart: AI progress speed over time';
  f.setAttribute('scrolling','no');
  f.style.cssText='display:block;width:100%;height:470px;border:0;background:transparent';
  f.srcdoc=html;
  el.style.padding='0';el.style.overflow='hidden';
  el.textContent='';el.appendChild(f);
  function fit(){try{f.style.height=Math.ceil(f.contentDocument.body.getBoundingClientRect().height)+'px'}catch(e){}}
  el._go=function(){if(ready&&begin)begin();else want=true};
  f.addEventListener('load',function(){
    var D=f.contentDocument,r=D.getElementById('r'),o=D.getElementById('o'),x=D.getElementById('x'),w=D.getElementById('w'),s=D.getElementById('s');
    var g='';
    [1,5,10].forEach(function(v){var y=Y(v);g+='\x3cline class="l" x1="40" x2="380" y1="'+y+'" y2="'+y+'"'+(v===10?' stroke-dasharray="4 4"':'')+'/>\x3ctext class="t" x="34" y="'+(y+4)+'" text-anchor="end">'+v+'x\x3c/text>'});
    [0,6,12,18].forEach(function(t){g+='\x3ctext class="t" x="'+X(t)+'" y="208" text-anchor="middle">'+t+'\x3c/text>'});
    g+='\x3ctext class="t" x="210" y="226" text-anchor="middle">Months after full automation\x3c/text>';
    var p='';for(var t=0;t<=17.2;t+=0.2)p+=(p?'L':'M')+X(t).toFixed(1)+' '+Y(sp(t)).toFixed(1);
    s.innerHTML=g+'\x3cpath class="c" d="'+p+'"/>\x3ccircle class="d" r="6"/>';
    var c=s.querySelector('.c'),dot=s.querySelector('.d'),touched=false;
    function set(t){var v=sp(t);o.textContent=t.toFixed(1);x.textContent=v.toFixed(1)+'x';w.textContent=(52/v).toFixed(1)+' weeks';dot.setAttribute('cx',X(t));dot.setAttribute('cy',Y(v))}
    r.addEventListener('input',function(){touched=true;set(parseFloat(r.value))});
    set(0);
    if(anim){var L=c.getTotalLength();c.style.strokeDasharray=L;c.style.strokeDashoffset=L;dot.style.opacity=0;
      begin=function(){begin=null;c.style.transition='stroke-dashoffset 1.4s ease';c.style.strokeDashoffset=0;
        setTimeout(function(){dot.style.opacity=1;var t0=null;
          (function step(ts){if(touched)return;if(!t0)t0=ts;var k=Math.min((ts-t0)/2600,1),tt=17.2*k;r.value=tt;set(tt);if(k<1)requestAnimationFrame(step)})(performance.now())},1500)}}
    ready=true;fit();setTimeout(fit,300);setTimeout(fit,1200);
    if(want&&begin)begin();
  });
  window.addEventListener('resize',fit);
}
function reveal(el){el.classList.add('in');
  if(anim)[].forEach.call(el.querySelectorAll('[data-count]'),count);
  if(el._go)el._go()}
function run(){
  [].forEach.call(d.querySelectorAll('.tbs-speed'),speed);
  var els=d.querySelectorAll('.tbs-reveal');
  if(!anim){[].forEach.call(els,function(e){e.classList.add('in')})}
  else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){reveal(e.target);io.unobserve(e.target)}})},{threshold:.25});
    [].forEach.call(els,function(e){io.observe(e)})}
  if(d.querySelector('.twitter-tweet')&&!window.twttr){var s=d.createElement('script');s.async=true;s.src='https://platform.twitter.com/widgets.js';d.body.appendChild(s)}
}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',run);else run();
})();
