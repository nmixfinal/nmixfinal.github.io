$(document).ready(function() {

  TweenLite.defaultEase = Power1.easeInOut;

  var SMController1 = new ScrollMagic.Controller();

  var $ball1 = $("#ball1");
  var $ball2 = $("#ball2");
  var $ball3 = $("#ball3");
  var $ball4 = $("#ball4");
  var $ball5 = $("#ball5");
  var $box1 = $("#box1");
  var tlm = new TimelineMax({onComplete:myFunction});
  tlm.fromTo('#ball1',  3, {left:'10%', opacity:0}, { left:'43%', top:'3%', opacity:.3},  '=.5')
  //.fromTo($ball2, 3,  { x: percentToPixel($ball2, 0), opacity: 0}, { x: percentToPixel($ball2, 47), opacity: .7 }, '=.5')
  .fromTo('#text1',  3, {left:'0%', top:'1%', opacity:1}, { left:'0%', top:'-51%', opacity:2},  '=.5')
  .fromTo('#ball2',  3, {left:'10%', top:'3%', opacity:0}, { left:'43%', top:'3%', opacity:.3},  '=.5')
  .fromTo('#text2',  3, {left:'0%', top:'1%', opacity:1}, { left:'0%', top:'-65%', opacity:2},  '=.5')
  .fromTo('#ball3',  3, {left:'10%', top:'3%', opacity:0}, { left:'43%', top:'3%', opacity:.3},  '=.5')
  .fromTo('#text3',  3, {left:'0%', top:'1%', opacity:1}, { left:'0%', top:'-80%', opacity:2},  '=.5')
  .fromTo('#ball4',  3, {left:'10%', top:'3%', opacity:0}, { left:'43%', top:'3%', opacity:.3},  '=.5')
  .fromTo('#text4',  3, {left:'0%', top:'1%', opacity:1}, { left:'0%', top:'-95%', opacity:2},  '=.5')
  .fromTo('#box1',  2, {left:'10%', opacity:0}, { left:'43%', opacity:.6},  '=.5')
  //.fromTo('#box1',  1, {x:300, y:50, opacity:0}, { x:200, y:50, opacity:1},  '-=0')
  .to('.ball', 1, {opacity:0})
  .to('.circle-one', 2, { x:300,  y:300, opacity: 0  })
  .fromTo('#box1', 2, {borderRadius:'50%'}, {borderRadius:'10%'})
  .to('#box1', 2, {rotation:90, left:'43%'})

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
    , duration:1500
    , triggerHook: 0.2
  })
  .setTween(tlm)
  .setPin('#holder')
  .addTo(SMController1)

  function myFunction(){
    console.log('myFunction()')
  }

});
