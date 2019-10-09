var game = new Phaser.Game(0, 0, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update, })
var notes = null;

function preload() {
    game.load.audio('notes', ['assets/aud/keys.mp3', 'assets/aud/keys.ogg'])
}

function create() {
    notes = game.add.audio('notes')
    notes.allowMultiple = true
    secs = 0.0
    duration = 1.5
    for (i = 1; i <= 88; i++ , secs++)
        notes.addMarker(i, secs++, duration)
}

function update() {
}

function play_note(audio_tag) {
    if (audio_tag != -1 && 1 <= audio_tag && 88 >= audio_tag) {
        notes.play(audio_tag)
    }
}
