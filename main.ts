controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 3
    mySprite.setImage(assets.tile`myTile56`)
    mySprite.y += 3
    mySprite.setImage(assets.tile`myTile49`)
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.tile`myTile56`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
scene.cameraFollowSprite(mySprite)
