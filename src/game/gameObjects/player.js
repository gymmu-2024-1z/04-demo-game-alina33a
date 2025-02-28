import Phaser from "phaser"

// Damit erstellen wir die Player-Klasse, die ein Sprite erweitert.
export default class Player extends Phaser.Physics.Arcade.Sprite {
  // Wenn wir das an dieser Stelle definieren, dann kann speed in allen
  // Methoden der Klasse verwendet werden. Das ist praktisch, um die
  // Geschwindigkeit
  // für den Spieler einheitlich zu steuern.
  speed = 100

  // Das müssen wir nicht im Detail verstehen, Phaser braucht hier einfach die Szene
  // zu welcher das Spielobjekt hinzugefügt wird. Mit x und y geben wir die Position
  // an, wo das Objekt gezeichnet werden soll.
  constructor(scene, x, y) {
    // Das wird auch von Phaser so verlangt. Hier reichen wir eigentlich alles einfach
    // weiter, wir müssen aber noch sagen, welches Spritesheet wir verwenden möchten.
    super(scene, x, y, "player")
    this.scene.add.existing(this)
  }
}
this.scene.physics.add.existing(this, false)

// Damit sagen wir, dass ein Spieler das Spielfeld nicht verlassen kann.
this.body.collideWorldBounds = true

// Setzt den Ankerpunkt, wo der Spieler gezeichnet wird, auf dessen Mitte.
this.setOrigin(0.5, 0.5)

// Das setzt die Grösse der Hitbox des Spielers. So können wir eine leichte
// Überschneidung der Grafiken haben, wir können sozusagen näher an die anderen
// Objekte laufen, und es ist auch einfacher, Lücken von nur einem "Tile" zu
// treffen
// Wenn wir nicht die ganze Breite beanspruchen.
this.setSize(24, 24, false)

// Damit steuern wir, wie fest die Hitbox verschoben wird.
this.setOffset(4, 8)

// In dieser Methode werden die Steuerungen geladen.
this.setControls()

// Lädt die Steuerung für den Spieler, damit wir die Pfeiltasten verwenden können.
setControls()
{
  this.cursor = this.scene.input.keyboard.createCursorKeys()
}

update()
{
  // Wir holen uns aus dem Cursor die Dinge, auf die wir reagieren möchten,
  // also nur die Pfeile.
  const { left, right, up, down } = this.cursor

  // Hier setzen wir einen Schalter. Immer wenn er „wahr“ ist, hat der Spieler keine
  // Bewegung gehabt in diesem Frame. Sobald wir aber Bewegung haben, legen wir
  // den Schalter auf „false“
  let isIdle = true
}
