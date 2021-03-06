controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.create(assets.tile`myTile55`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile50`)
        mySprite.y += -3
    } else {
        mySprite.setImage(assets.tile`myTile55`)
        mySprite.y += -3
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sprites.create(assets.tile`myTile55`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile50`)
        mySprite.y += -3
    } else {
        mySprite.setImage(assets.tile`myTile55`)
        mySprite.y += -3
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sprites.create(assets.tile`myTile53`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile54`)
        mySprite.x += 3
    } else {
        mySprite.setImage(assets.tile`myTile53`)
        mySprite.x += 3
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.create(assets.tile`myTile51`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile52`)
        mySprite.x += -3
    } else {
        mySprite.setImage(assets.tile`myTile51`)
        mySprite.x += -3
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.create(assets.tile`myTile53`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile54`)
        mySprite.x += 3
    } else {
        mySprite.setImage(assets.tile`myTile53`)
        mySprite.x += 3
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sprites.create(assets.tile`myTile56`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile49`)
        mySprite.y += 3
    } else {
        mySprite.setImage(assets.tile`myTile56`)
        mySprite.y += 3
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.create(assets.tile`myTile56`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile49`)
        mySprite.y += 3
    } else {
        mySprite.setImage(assets.tile`myTile56`)
        mySprite.y += 3
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sprites.create(assets.tile`myTile51`, SpriteKind.Player).image == mySprite.image) {
        mySprite.setImage(assets.tile`myTile52`)
        mySprite.x += -3
    } else {
        mySprite.setImage(assets.tile`myTile51`)
        mySprite.x += -3
    }
})
let mySprite: Sprite = null
let overworldmap = [tiles.createMap(tilemap`level4`), tiles.createMap(tilemap`level2`)]
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.tile`myTile56`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
scene.cameraFollowSprite(mySprite)
forever(function () {
    info.setScore(0)
    if (mySprite.left <= 5) {
        if (tiles.getLoadedMap() == tiles.createMap(tilemap`level2`)) {
            tiles.loadMap(tiles.createMap(tilemap`level4`))
            mySprite.setPosition(scene.screenWidth(), mySprite.y)
        }
    }
})
