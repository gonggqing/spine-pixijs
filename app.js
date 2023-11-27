
Application = PIXI.Application;

const app = new Application(
    {
        width: 1920,
        height: 1080,
        transparent: false,
        antialias: true,
    }
);

app.renderer.backgroundColor = '0x011633';

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

PIXI.Assets.load(['./art/tilesheet/little_prince.json',
                './art/little_prince_10.png'])
        .then(() => {
            const animes = PIXI.Assets.cache.get('./art/tilesheet/little_prince.json').data.animations;
            const animeIcon = PIXI.Sprite.from('./art/little_prince_10.png')
            animeIcon.position.set(200, 200);
            animeIcon.scale.set(.5, .5);
            app.stage.addChild(animeIcon)
            


            const animeSprite = PIXI.AnimatedSprite.fromFrames(animes["character/walk"]);
            animeSprite.interactive = true;
            animeSprite.buttonMode = true;

            let isClicked = false;

            animeSprite.on('pointerdown', function () {
                console.log('clicked anime');
                
                isClicked = !isClicked;

                isClicked? animeSprite.play() : animeSprite.stop();
            })
            animeSprite.animationSpeed = 0.05;
            animeSprite.position.set(400, 200);
            animeSprite.scale.set(.5, .5);
            
            
            app.stage.addChild(animeSprite)
        })

PIXI.Assets.add('raptor', './art/spine/raptor-pro.json')

PIXI.Assets.load('raptor').then((resource) => {
    console.log(resource)
    console.log(resource.spineData)
    const raptor = new PIXI.spine.Spine(resource.spineData);

    console.log(raptor)
    raptor.state.setAnimation(0, 'roar', true);
    raptor.state.timeScale = 0.5;
    raptor.autoUpdate = true;

    raptor.scale.set(0.5, 0.5);
    raptor.position.set(innerWidth / 2, innerHeight / 2)

    app.stage.addChild(raptor);
    raptor.interactive = true; 
    raptor.buttonMode = true;
    isClicked = false;
    raptor.on('pointerdown', function () {
        console.log('clicked raptor');
        
        isClicked = !isClicked;
        isClicked? raptor.state.setAnimation(0, 'jump', true) :raptor.state.addAnimation(0, 'walk', true, 0);
        
    })

})


PIXI.Assets.add('spineboy', './art/spine/spineboy-pro.json')

PIXI.Assets.load('spineboy').then((resource) => {
    console.log(resource)
    console.log(resource.spineData)
    const spineboy = new PIXI.spine.Spine(resource.spineData);

    console.log(spineboy)
    spineboy.state.setAnimation(0, 'run', true);
    spineboy.state.timeScale = 0.5;
    spineboy.autoUpdate = true;

    spineboy.scale.set(0.5, 0.5);
    spineboy.position.set(innerWidth / 1.5, innerHeight / 1.5)

    app.stage.addChild(spineboy);

})

PIXI.Assets.add('dragon', './art/spine/dragon.json')

PIXI.Assets.load('dragon').then((resource) => {
    console.log(resource)
    console.log(resource.spineData)
    const dragon = new PIXI.spine.Spine(resource.spineData);

    console.log(dragon)
    dragon.state.setAnimation(0, 'flying', true);
    dragon.state.timeScale = 0.5;
    dragon.autoUpdate = true;

    dragon.scale.set(0.5, 0.5);
    dragon.position.set(600, 400)

    app.stage.addChild(dragon);

})


document.body.appendChild(app.view);



