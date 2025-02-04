const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
      preload: preload,
      create: create,
      update: update
    }
};

const game = new Phaser.Game(config);

let peixinho

function preload() {
  this.load.image('mar', './assets/bg_azul-escuro.png');

  this.load.image('logo', './assets/logo-inteli_branco.png');

  this.load.image('peixe', './assets/peixes/peixinho_laranja.png');

  this.load.image('concha', './assets/concha.png');

  this.load.image('peixe_listra', './assets/peixes/peixe_listra.png');
  
  this.load.image('peixe_rosa', './assets/peixes/peixe_rosa.png');

  this.load.image('peixe_turquesa', './assets/peixes/peixe_turquesa.png');
}

function create() {
  this.add.image(400, 300, 'mar');
  this.add.image(400, 525, 'logo').setScale(0.5);

  peixinho = this.add.image(400, 300, 'peixe')

  peixinho.setFlip(true, false);

  this.add.image(400, 300, 'concha')

  this.add.image(400, 200, 'peixe_listra')

  this.add.image(600, 400, 'peixe_rosa')

  this.add.image(200, 400, 'peixe_turquesa')
}

function update() {
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}