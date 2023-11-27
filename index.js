
Application = PIXI.Application;

const app = new Application({
    width: 1200,
    height: 800,
    backgroundColor: 0x011633,
    resolution: window.devicePixelRatio || 1,
    transparent: false,
    antialias: true,
});
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

async function Karin() {
    PIXI.Assets.add('karin_home', './art/blueArchive/karin/Karin_home.json');
    const karin = await PIXI.Assets.load('karin_home');
    console.log(karin.spineData);
    const karinSpine = new PIXI.spine.Spine(karin.spineData);

    karinSpine.position.set(innerWidth / 2 - 200, innerHeight / 2 + 200);
    karinSpine.scale.set(0.25, 0.25);
    karinSpine.interactive = true;
    karinSpine.buttonMode = true;
    karinSpine.state.setAnimation(0, 'Idle_01', true);
    karinSpine.state.timeScale = 0.5;
    karinSpine.autoUpdate = true;
    

    let clickCount = 1;

    karinSpine.on('pointerdown', function () {
        console.log('clicked karin');
        if (clickCount <= 5) {
            karinSpine.state.setAnimation(0, `Dev_Talk_0${clickCount}`, false);
            console.log(clickCount);
            clickCount++;
        } else {
            karinSpine.state.setAnimation(0, 'Idle_01', true);
            clickCount = 1;
        }
    });

    app.stage.addChild(karinSpine);
}   

async function Shiroko() {
    PIXI.Assets.add('Shiroko_home', './art/blueArchive/shiroko/Shiroko_ridingsuit_home.json');
    const shiroko = await PIXI.Assets.load('Shiroko_home')
    console.log(shiroko.spineData);
    const shirokoSpine = new PIXI.spine.Spine(shiroko.spineData);

    shirokoSpine.position.set(innerWidth / 2 - 200, innerHeight / 2 + 200);
    shirokoSpine.scale.set(0.25, 0.25);
    shirokoSpine.interactive = true;
    shirokoSpine.buttonMode = true;
    shirokoSpine.state.setAnimation(0, 'Idle_01', true);
    shirokoSpine.state.timeScale = 0.5;
    shirokoSpine.autoUpdate = true;
    

    let clickCount = 1;

    shirokoSpine.on('pointerdown', function () {
        console.log('clicked karin');
        if (clickCount <= 5) {
            shirokoSpine.state.setAnimation(0, `Dev_Talk_0${clickCount}`, false);
            console.log(clickCount);
            clickCount++;
        } else {
            shirokoSpine.state.setAnimation(0, 'Idle_01', true);
            clickCount = 1;
        }
    });

    app.stage.addChild(shirokoSpine);
}   

async function Hihumi() {
    PIXI.Assets.add('Hihumi_home', './art/blueArchive/hihumi/Hihumi_home.json');
    const hihumi = await PIXI.Assets.load('Hihumi_home')
    console.log(hihumi.spineData);
    const hihumiSpine = new PIXI.spine.Spine(hihumi.spineData);

    hihumiSpine.position.set(innerWidth / 2 - 200, innerHeight / 2 + 200);
    hihumiSpine.scale.set(0.25, 0.25);
    hihumiSpine.interactive = true;
    hihumiSpine.buttonMode = true;
    hihumiSpine.state.setAnimation(0, 'Start_Idle_01', true);
    hihumiSpine.state.timeScale = 0.5;
    hihumiSpine.autoUpdate = true;
    

    let clickCount = 1;

    hihumiSpine.on('pointerdown', function () {
        console.log('clicked hihumi');
        if (clickCount <= 6) {
            hihumiSpine.state.setAnimation(0, `Dev_Talk_0${clickCount}`, false);
            console.log(clickCount);
            clickCount++;
        } else {
            hihumiSpine.state.setAnimation(0, 'Idle_01', true);
            clickCount = 1;
        }
    });

    app.stage.addChild(hihumiSpine);
}   

// Shiroko();
// Karin();
Hihumi();