var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Pin1 = createSprite(200, 300, 20, 20);
Pin1.shapeColor="gray"
var Pin2 = createSprite(180, 320, 20, 20);
Pin2.shapeColor="gray"
var Pin3 = createSprite(220, 320, 20, 20);
Pin3.shapeColor="gray"
var Pin4 = createSprite(160, 340, 20, 20);
Pin4.shapeColor="gray"
var Pin5 = createSprite(200, 340, 20, 20);
Pin5.shapeColor="gray"
var Pin6 = createSprite(240, 340, 20, 20);
Pin6.shapeColor="gray"
var Squariad = createSprite(200, 390, 20, 20);
Squariad.shapeColor="white"

Squariad.velocityX= 4
Squariad.velocityY= 0.5


function draw() {
background("lightgray");
createEdgeSprites();

Squariad.bounceOff(edges);
Pin1.bounceOff(edges);
Pin2.bounceOff(edges);
Pin3.bounceOff(edges);
Pin4.bounceOff(edges);
Pin5.bounceOff(edges);
Pin6.bounceOff(edges);

Pin1.bounce(Squariad);
Pin2.bounce(Squariad);
Pin3.bounce(Squariad);
Pin4.bounce(Squariad);
Pin5.bounce(Squariad);
Pin6.bounce(Squariad);

Pin1.bounce(Pin2);
Pin1.bounce(Pin3);
Pin1.bounce(Pin4);
Pin1.bounce(Pin5);
Pin1.bounce(Pin6);

Pin2.bounce(Pin3);
Pin2.bounce(Pin4);
Pin2.bounce(Pin5);
Pin2.bounce(Pin6);

Pin3.bounce(Pin4);
Pin3.bounce(Pin5);
Pin3.bounce(Pin6);

Pin4.bounce(Pin5);
Pin4.bounce(Pin6);

Pin5.bounce(Pin6);

drawSprites();  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
