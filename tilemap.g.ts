// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "platformer2":
            case "platformer5":return tiles.createTilemap(hex`30000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030400000000000010000000000000000000000000000000000010000000000000000000100000000000000000000000080700000000000602050000000000000103040000000000000605000000000000000001030400000000000000000000080700000000000b0b0b0000000000000a08070000010400000b0b00000104000000000a080700000000000000000000080703030400000c0f0d0000010400000a080700000a0700000c0d00000a07000001030a08070304000000000000000008080808070000000e0000000a0709090a080700000a070000000000000a0700000a08080808080703030303030303030808080807090909090909090a08080808080709090a070909090909090a0709090a0808080808080808080808080808`, img`
................................................
................................................
22..............................................
22.....222......222......22........222..........
22..............222..22......22....222..........
22222.......22..222..22......22..2222222........
22222.......22..222..22......22..222222222222222
22222.......2222222..22......22..222222222222222
`, [gallerytilemaps.baseTransparency16,sprites.builtin.oceanSand5,sprites.builtin.oceanSand2,sprites.builtin.oceanSand6,sprites.builtin.oceanSand7,sprites.builtin.oceanSand3,sprites.builtin.oceanSand1,gallerytilemaps.myTile,gallerytilemaps.myTile0,sprites.builtin.coral4,gallerytilemaps.myTile1,sprites.builtin.oceanSand8,sprites.builtin.oceanSand13,sprites.builtin.oceanSand15,sprites.builtin.oceanSand12,gallerytilemaps.myTile4,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
