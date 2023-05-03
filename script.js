class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload() {
        this.load.path = './assets/';
        this.load.audio('whoosh', 'whoosh.wav');
    }
    create() {
        this.sound = this.sound.add(
            'whoosh', 
            {
                loop: true,
            }
        );
        this.sound.play();

        this.cameras.main.fadeIn(5000, 0, 0, 0);

        this.graphics = this.add.rectangle(400, 400, 1, 1, 0xb08510).setOrigin(.5, .5);

        // create text object
        this.textObject = this.add.text(
            400, //x
            400,//y
            "NOW PRESENTING", //text
            {
                font: "50px Consolas",
                color: "#f0f0f0",
            } //style
        ).setOrigin(.5, .5);
        this.textObject.setScale(0)

        // Add tweens
        this.tweens.add({
            targets: this.graphics,
            scale: 1000,
            angle: 180,
            duration: 5000,
            ease: 'Sine'
        });

        this.tweens.add({
            targets: this.textObject,
            scale: 1,
            duration: 5000,
            ease: 'Sine'
        });

        this.time.delayedCall(5000, () => {
            this.cameras.main.fadeOut(5000, 0, 0, 0);
            this.tweens.add({
                targets: this.graphics,
                scale: 0,
                angle: 360,
                duration: 5000,
                ease: 'Sine.easeIn'
            });
            this.tweens.add({
                targets: this.textObject,
                scale: 0,
                duration: 5000,
                ease: 'Sine.easeIn'
            });
        });

        this.time.delayedCall(10500, () => { this.scene.start('studio') });
    }


    update() { }
}

class Studio extends Phaser.Scene {
    constructor() {
        super('studio');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('logo', 'logo.png');
        // this.load.image('splash', 'splash.png');
        // this.load.image('title', 'title.png');
        // this.load.audio('ancient_hum', 'ancient_hum.wav');
        this.load.audio('whoosh', 'whoosh.wav');
    }
    create() {
        this.cameras.main.fadeIn(5000, 0, 0, 0);

        this.graphics = this.add.rectangle(400, 400, 1, 1, 0xb08510).setOrigin(.5, .5);

        // create text object
        this.textObject = this.add.text(
            385, //x
            400,//y
`A PYRMD STUDIOS
   PRODUCTION`, //text
            {
                font: "50px Consolas",
                color: "#ffffff",
            } //style
        ).setOrigin(.2, .5);
        this.textObject.setScale(0)

        //create image object 
        this.imageObject = this.add.image(
            400,//x
            400,//y
            'logo',//imagename
        ).setOrigin(.5, .5)
        this.imageObject.setScale(0) //resize

        // Add tweens
        this.tweens.add({
            targets: this.graphics,
            scale: 1000,
            angle: 180,
            duration: 5000,
            ease: 'Sine'
        });

        this.tweens.add({
            targets: this.imageObject,
            scale: 0.3,
            x: 175,
            duration:5000,
            ease: 'Sine'
        });

        this.tweens.add({
            targets: this.textObject,
            scale: 1,
            duration: 5000,
            ease: 'Sine'
        });

        this.time.delayedCall(5000, () => {
            this.cameras.main.fadeOut(5000, 0, 0, 0);
            this.tweens.add({
                targets: this.graphics,
                scale: 0,
                angle: 360,
                duration: 5000,
                ease: 'Sine.easeIn'
            });
            this.tweens.add({
                targets: this.imageObject,
                scale: 0,
                x: 400,
                duration:5000,
                ease: 'Sine.easeIn'
            })
            this.tweens.add({
                targets: this.textObject,
                scale: 0,
                duration: 5000,
                ease: 'Sine.easeIn'
            });
        });
        this.time.delayedCall(10500, () => { this.scene.start('title') });
    }

    update() { }
}

class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    preload() {
        this.load.path = './assets/';
        // this.load.image('logo', 'logo.png');
        this.load.image('splash', 'splash.png');
        this.load.image('title', 'title.png');
        this.load.audio('ancient_hum', 'ancient_hum.wav');
        this.load.audio('whoosh', 'whoosh.wav');
    }
    create() {
        this.sound = this.sound.add(
            'ancient_hum', 
            {
                loop: true,
            }
        );
        this.sound.play();

        this.cameras.main.setBackgroundColor('#000000');

        //create image object 
        this.imageObject = this.add.image(
            310,//x
            500,//y
            'splash',//imagename
        ).setAlpha(0);

        let title = this.add.image(
            400,
            400,
            'title',
        ).setOrigin(.5, .5);
        title.setAlpha(0);
        
        // create text object
        let play = this.add.text(
            460, //x
            250,//y
            "<PLAY>", //text
            {
                font: "50px Consolas",
                color: "#ebe0d1",
            } //style
        ).setAlpha(0);;

        let settings = this.add.text(
            440,
            350,
            "<SETTINGS>",
            {
                font: "50px Consolas",
                color: "#ebe0d1",
            }
        ).setAlpha(0);;

        // Add tweens

        this.tweens.add({
            targets: title,
            alpha: 1,
            duration: 5000,
            ease: 'Sine.easeIn'
        });

        this.time.delayedCall(5500, () => {
            this.tweens.add({
                targets: title,
                y: 115,
                duration:5000,
                ease: 'Sine.easeInOut'
            });

            this.tweens.add({
                targets: this.imageObject,
                alpha: 1,
                duration: 5000,
                ease: 'Sine.easeInOut'
            });
        });

        this.time.delayedCall(10500, () => {
            this.tweens.add({
                targets: play,
                alpha: 1,
                duration:1000,
                ease: 'Sine.easeInOut'
            });
        });

        this.time.delayedCall(11500, () => {
            this.tweens.add({
                targets: settings,
                alpha: 1,
                duration:1000,
                ease: 'Sine.easeInOut'
            });
        });

    }

    update() { }
}


let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 800,
    backgroundColor: 0x785310,
    scene: [Intro, Studio, Title],
}

let game = new Phaser.Game(config);

