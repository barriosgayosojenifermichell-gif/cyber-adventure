enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Ataque = SpriteKind.create()
    export const Protección = SpriteKind.create()
    export const Flier = SpriteKind.create()
    export const Bumper = SpriteKind.create()
}
/**
 * SALTO
 */
/**
 * VARIABLES
 * 
 * doble_salto = True
 * 
 * puerta = None
 * 
 * puerta_creada = False
 */
/**
 * =====================
 */
/**
 * =====================
 */
/**
 * =====================
 */
/**
 * COMPROBAR SUELO
 */
/**
 * =====================
 */
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    let pixelsToMeters: number;
if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        pixelsToMeters = 0
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(1)
        music.powerUp.play()
    } else {
        info.changeLifeBy(-1)
        sprite.say("Ow!", invincibilityPeriod)
        music.powerDown.play()
    }
    pause(invincibilityPeriod)
})
function setLevelTileMap (level: number) {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (escudo_listo) {
        escudo_listo = false
        escudo_activo = true
        escudo.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(3000)
        escudo_activo = false
        escudo.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(5000)
        escudo_listo = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite2, location) {
    info.changeLifeBy(1)
    currentLevel += 1
    if (true) {
        game.splash("Siguiente nivel desbloqueado!")
        setLevelTileMap(currentLevel)
    } else {
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
        music.stopAllSounds()
    }
})
// =====================
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (saltos < 2) {
        programador.vy = -120
        saltos += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (espada_activa) {
        sprites.destroy(espada)
        espada_activa = false
    } else {
        espada = sprites.create(assets.image`espadiña`, SpriteKind.Ataque)
        espada.setPosition(programador.x + 10, programador.y)
        espada.setScale(0.5, ScaleAnchor.Middle)
        espada_activa = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flier, function (sprite3, otherSprite2) {
    info.changeLifeBy(-1)
    sprite3.say("Ow!", invincibilityPeriod * 1.5)
    music.powerDown.play()
    pause(invincibilityPeriod * 1.5)
})
function createEnemies () {
    let gravity: number;
// enemy that moves back and forth
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        gravity = 0
        bumper = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 7 2 7 7 7 2 f . . . . . 
            . . f 7 7 7 2 7 2 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 7 f . . . 
            . f 7 7 7 2 7 7 7 2 7 7 f . . . 
            . f 7 7 7 2 7 7 7 2 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 2 2 2 7 7 7 7 7 f . 
            . . f 7 7 2 2 7 2 2 7 7 7 7 f . 
            . . f 7 7 2 7 7 7 2 2 7 7 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . . . f f 7 7 7 7 7 7 7 f . . 
            . . . . . . f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bumper)
        tiles.placeOnTile(bumper, value5)
        tiles.setTileAt(null, assets.tile`transparency16`)
        bumper.ay = gravity
    }
}
// =====================
// RECOGER MONEDA
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player22, coin) {
    info.changeScoreBy(1)
    coin.setPosition(randint(20, 140), randint(20, 100))
})
function hasNextLevel () {
	
}
sprites.onOverlap(SpriteKind.Ataque, SpriteKind.Enemy, function (sprite4, otherSprite3) {
    sprites.destroy(otherSprite3)
})
// =====================
// TOCAR ENEMIGO
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player2, enemy) {
    info.changeLifeBy(-1)
    music.stopAllSounds()
    game.gameOver(false)
})
let heroFacingLeft = false
let bumper: Sprite = null
let espada: Sprite = null
let saltos = 0
let invincibilityPeriod = 0
let index = 0
let moneda: Sprite = null
let escudo: Sprite = null
let programador: Sprite = null
let currentLevel = 0
let escudo_activo = false
let escudo_listo = false
let espada_activa = false
let puede_saltar = false
let tiene_llave = false
music.play(music.createSong(hex`00de000408180702001c000c960064006d019001000478002c010000640032000000000a0600052a0000002f00011130004000011940006d00011870007f0001128000ae000111b000c000010dc000fd00010c03001c0001dc00690000045e0100040000000000000000000005640001040003c00000011001011d10012001012020013001019730014001011840015001011d50016001012060017001019770018001011880019001011d9001a0010120a001b0010197b001bf010118c001d001011dd001e0010120e001f0010197f0010002011800021002011d10022002012020023002019730024002011840025002011d50026002012060027002019770028002011880029002011d9002a0020120a002b0020197b002bf020118c002d002011dd002e0020120e002f0020197f0020003011804001c00100500640000041e000004000000000000000000000000000a040004460100000400010504000700018708000c0001080c001000018710001400010514001800018418001d00010540004400010544004700018748004c0001084c005000018750005400010554005800018458005d00010580008400010584008800018788008c0001088c009000018790009400010594009800018498009e000105c000c4000105c400c8000187c800cc000108cc00d0000187d000d4000105d400da0002840500020402010504020702018708020c0201080c021002018710021402010514021802018418021d02010540024402010544024702018748024c0201084c025002018750025402010554025802018458025d02010580028402010584028802018788028c0201088c029002018790029402010594029802018498029e020105c002c4020105c402c8020187c802cc020108cc02d0020187d002d4020105d402da0202840505001c000f0a006400f4010a0000040000000000000000000000000000000002a00200000400012904000800013008000c00012e0c000f00013010001600013518001b0001291c001e00013020002200012e24002500013028002c00013530003300012934003600013038003a00012e40004200012944004600013048004b00012e4c004f00013050005600013558005b0001295c005f00013060006200012e64006600013068006b0001296c006f00013570007300013374007700013078007b00012e7c007d00013080008400012984008800013088008c00012e8c008f00013090009600013598009b0001299c009e000130a000a200012ea400a5000130a800ac000135b000b3000129b400b6000130b800ba00012ec000c2000129c400c6000130c800cb00012ecc00cf000130d000d6000135d800db000129dc00df000130e000e200012ee400e6000130e800eb000129ec00ef000135f000f3000133f400f7000130f800fb00012efc00fd00013000010401012904010801013008010c01012e0c010f01013010011601013518011b0101291c011e01013020012201012e24012501013028012c01013530013301012934013601013038013a01012e40014201012944014601013048014b01012e4c014f01013050015601013558015b0101295c015f01013060016201012e64016601013068016b0101296c016f01013570017301013374017701013078017b01012e7c017d01013080018301012984018701013088018a01012e8c018e01013090019701013598019a0101299c019f010130a001a201012ea401a5010130a801af010135b001b3010129b401b8010130b801bb01012ec001c3010129c401c7010130c801cb01012ecc01ce010130d001d6010135d801db010129dc01df010130e001e201012ee401e701012ce801ea0101abec01ee010131f001f3010130f401f80101b7f801fb010135fc01ff01013107001c00020a006400f401640000040000000000000000000000000000000003780004012c01011d30013c0101244001600101a360016d01019f71017601011876017b01019a7c018001019c8001a001011db001b8010197c001de01011100022802011d30023d02012440025f0201a360026902011d72027702011877027b02019a7c028002019c8002aa02011db002ba020197c002fc02011108001c000e050046006603320000040a002d00000064001400013200020100022e0200000400011808001200011118001c00010c20002400011824002800019728002c00011630003400011138004000011940004400011848005200011158005c00010c60006400011864006800019768006c00011670007400011178008000011980008400011888009300011198009d00010ca000a4000118a400a8000197a800ac000116b000b4000111b800c0000119c000c3000118c800d2000111d800dd00010ce000e4000118e400e8000111e800ed00010cf0000001018b00010401011808011201011118011c01010c20012401011824012801019728012c01011630013401011138014001011940014401011848015201011158015c01010c60016401011864016801019768016c01011670017401011178018001011980018401011888019301011198019d01010ca001a4010118a401a8010197a801ac010116b001b4010111b801c0010119c001c3010118c801d2010111d801dd01010ce001e4010118e401e8010111e801ed01010cf0010002018b00020402011808021202011118021c02010c20022402011824022802019728022c02011630023402011138024002011940024402011848025202011158025c02010c60026402011864026802019768026c02011670027402011178028002011980028402011888029302011198029d02010ca002a4020118a402a8020197a802ac020116b002b4020111b802c0020119c002c3020118c802d2020111d802dd02010ce002e4020118e402e8020111e802ed02010cf0020003018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a604000004000301061204000500010608000a000306120b0c001000010b1000140002061614001700011118001b0004010a1112200024000501060b11122400260002061128002c0004061112162c002f0001113000340002061138003a000211123c003e00011140004400040106111244004600010648004c0005060b111205500054000306111654005700011158005b000401120a115c005d000111600064000501060b11126400650002061168006c0004061112166c006e0001117000730002061178007a00030312117c007e0002031180008400040106111284008500010688008d0004060b1112900094000306111694009600011198009b0004010a11129c009e000111a000a4000501060b1112a400a600020611a800ac000406111216ac00af000111b000b200020611b400b6000111b800bb00021112bc00bd000111c000c4000401061112c400c5000106c800cd0004060b1112d000d40003061116d400d6000111d800db0004010a1112e000e400050106120b11e400e700020611e800ec000406111216ec00ee000111f000f300020611f800fb00011100010401040106121304010501010608010a010306120b0c011001010b10011301010614011701011118011b0104010a1112200124010501060b11122401260102061128012c0104061112162c012f0101113001340102061138013a010211123c013e01011140014401040106111244014601010648014c0105060b111205500154010306111654015701011158015b010401120a115c015d010111600164010501060b11126401650102061168016c0104061112166c016e0101117001730102061178017a01030312117c017e0102031180018401040106111284018501010688018d0104060b1112900194010306111694019601011198019b0104010a11129c019e010111a001a4010501060b1112a401a601020611a801ac010406111216ac01af010111b001b201020611b401b6010111b801bb01021112bc01bd010111c001c4010401061112c401c5010106c801cd0104060b1112d001d40103061116d401d6010111d801db0104010a1112e001e401050106120b11e401e701020611e801ec010406111216ec01ee010111f001f301020611f801fb0101110002060202011208020a02011210021402011614021702011118021a0203011112200224020301111224022602011128022c02031112162c022f02011130023402011138023a020211123c023e020111400247020301111248024b02031112055002540202111654025702011158025b02030112115c025d020111600264020301111264026502011168026c02031112166c026e02011170027302011178027a02030312117c027e0202031180028602040104111288028c020211129002940202111694029602011198029a02030111129c029e020111a002a40203011112a402a6020111a802ac0203111216ac02af020111b002b2020111b402b6020111b802bb02021112bc02bd020111c002c4020401061112c402c5020106c802cb0203061112cc02ce020106d002d40203061116d402d6020111d802da0203011112e002e4020401061211e402e702020611e802ec020406111216ec02ee020111f002f30203040611f802fb0201110239393939393939033535353535353535353535353535353535353535353535353535353535353535042222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222220557575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757575757073a2a3a3b3731323631303e2e2e3b382a312f282408606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060097f2f7f7f33557f7f3b2e4e393f207f317f45317f2b7f1d372b326e7f7f207f31347f257f2d3c28312939287f1e7f37347f7f3740232f377f2f7f7f33557f7f3b2e4e393f207f317f45317f2b7f1d372b326e7f7f207f31347f257f2d3c28312939287f1e7f37347f7f3740232f377f0c2e557f7f3b424e393f207f4345317f2b7f37372b436e7f7f3a47347f257f2d3c28312939287f1e3b2937347f7f3740232f37`), music.PlaybackMode.LoopingInBackground)
espada_activa = false
escudo_listo = true
escudo_activo = false
scene.setBackgroundImage(assets.image`fondo con murcielagos`)
// =====================
// MAPA
// =====================
tiles.setTilemap(tilemap`diseño de las plataformas`)
setLevelTileMap(currentLevel)
setLevelTileMap(currentLevel)
programador = sprites.create(assets.image`programador`, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
escudo = sprites.create(assets.image`escudo_campodefuerza`, SpriteKind.Protección)
escudo.setImage(assets.image`escudo_campodefuerza`)
escudo.setFlag(SpriteFlag.AutoDestroy, false)
animation.runImageAnimation(
programador,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
true
)
programador.setPosition(20, 30)
controller.moveSprite(programador, 100, 0)
programador.ay = 350
// La cámara sigue al jugador
scene.cameraFollowSprite(programador)
// =====================
// ENEMIGO
// =====================
let enemigo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
enemigo.setPosition(150, 50)
// El enemigo sigue al jugador
enemigo.follow(programador, 50)
// =====================
// VIDA Y PUNTOS
// =====================
info.setLife(5)
info.setScore(0)
// =====================
// MONEDA
// =====================
for (let value of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
    moneda = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(moneda, value)
}
while (index < 0) {
    enemigo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemigo.setPosition(randint(200, 100), 20)
    enemigo.follow(programador, 40)
    index += 1
}
game.onUpdate(function () {
    if (programador.isHittingTile(CollisionDirection.Bottom)) {
        saltos = 0
    }
})
game.onUpdate(function () {
    escudo.x = programador.x
    escudo.y = programador.y
})
// set up hero animations
game.onUpdate(function () {
    if (programador.vx < 0) {
        heroFacingLeft = true
    } else if (programador.vx > 0) {
        heroFacingLeft = false
    }
    if (programador.isHittingTile(CollisionDirection.Top)) {
        programador.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(programador, ActionKind.Walking)
        } else {
            animation.setAction(programador, ActionKind.Walking)
        }
    } else if (programador.vy < 20 && !(programador.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(programador, ActionKind.Walking)
        } else {
            animation.setAction(programador, ActionKind.Walking)
        }
    } else if (programador.vx < 0) {
        animation.setAction(programador, ActionKind.Walking)
    } else if (programador.vx > 0) {
        animation.setAction(programador, ActionKind.Walking)
    } else if (heroFacingLeft) {
        animation.setAction(programador, ActionKind.Walking)
    } else {
        animation.setAction(programador, ActionKind.Walking)
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value8.x - programador.x) < 60) {
            if (value8.x - programador.x < -5) {
                value8.vx = 25
            } else if (value8.x - programador.x > 5) {
                value8.vx = -25
            }
            if (value8.y - programador.y < -5) {
                value8.vy = 25
            } else if (value8.y - programador.y > 5) {
                value8.vy = -25
            }
            animation.setAction(value8, ActionKind.Walking)
        } else {
            value8.vy = -20
            value8.vx = 0
            animation.setAction(value8, ActionKind.Walking)
        }
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value9.isHittingTile(CollisionDirection.Left)) {
            value9.vx = Math.randomRange(30, 60)
        } else if (value9.isHittingTile(CollisionDirection.Right)) {
            value9.vx = Math.randomRange(-60, -30)
        }
    }
})
game.onUpdateInterval(20, function () {
    if (espada_activa) {
        espada.setPosition(programador.x + 10, programador.y)
    }
})
forever(function () {
    escudo.x = programador.x
    escudo.y = programador.y
})
