import { IItemDetails } from "./interfaces/IItemDetails";
import { SourceTypes } from "./enums/SourceTypes";
import { ItemType } from "./enums/ItemType";

export type CarpetMap = {
    rugName: string;
    itemDetails: Array<IItemDetails>;
    rugBorderSource: string;
}

/**********************************************************************************************************
 * Rings
 *********************************************************************************************************/
const redRing: IItemDetails = {
    title: 'Firey Ring',
    body: 'A golden ring with a ruby fastened to its exterior. The ring is warm to the touch. Grants the bearer access to the Fire Bolt cantrip. If the user has no spellcasting modifier, they may use their Wisdom modifier. Wearing more than one spell-ring at once will cause the user to take 1 level of exhaustion every 10 seconds.',
    iconSource: './images/Item_Shop/Items/Rings/Ring Jewel Red.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.wondrous,
};

const greenRing: IItemDetails = {
    title: 'Frigid Ring',
    body: 'A silver ring with a sapphire fastened to its exterior. The ring is cold to the touch. Grants the bearer access to the Ray of Frost cantrip. If the user has no spellcasting modifier, they may use their Wisdom modifier. Wearing more than one spell-ring at once will cause the user to take 1 level of exhaustion every 10 seconds.',
    iconSource: './images/Item_Shop/Items/Rings/Ring Silver Jewel Green.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.wondrous,
};

const ring_floral: IItemDetails = {
    title: 'Ring of Floral Accomodation',
    body: 'A silver ring with the likeness of a pink rose fastened to its exterior. When touched to any surface, that surface will sprout flowers at a rapid pace for the next 6 seconds.',
    iconSource: './images/Item_Shop/Items/Rings/Ring Floral.png',
    source: SourceTypes.homebrew,
    itemCost: 50,
    type: ItemType.wondrous,
};

/**********************************************************************************************************
 * Weapons
 *********************************************************************************************************/
const weapon_club: IItemDetails = {
    title: 'Club',
    body: 'A stout bludgeoning weapon made of oak. Attacks with this weapon deal 1d4 bludgeoning damage. [Properties: Light]',
    iconSource: './images/Item_Shop/Items/Weapons/club.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_dagger: IItemDetails = {
    title: 'Dagger',
    body: 'A small piercing weapon. Attacks with this weapon deal 1d4 piercing damage. [Properties: Finesse, Light, Thrown (range 20/60)]',
    iconSource: './images/Item_Shop/Items/Weapons/dagger.png',
    source: SourceTypes.official,
    itemCost: 2,
    type: ItemType.weapon,
};

const weapon_greatclub: IItemDetails = {
    title: 'Greatclub',
    body: 'A massive bludgeoning weapon. Attacks with this weapon deal 1d8 bludgeoning damage. [Properties: Two-handed]',
    iconSource: './images/Item_Shop/Items/Weapons/greatclub.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_handaxe: IItemDetails = {
    title: 'Handaxe',
    body: 'A small throwing axe. Attacks with this weapon deal 1d6 slashing damage. [Properties: Light, Thrown (range 20/60)]',
    iconSource: './images/Item_Shop/Items/Weapons/handaxe.png',
    source: SourceTypes.official,
    itemCost: 5,
    type: ItemType.weapon,
};

const weapon_javelin: IItemDetails = {
    title: 'Javelin',
    body: 'A long, pointed, throwing weapon. Attacks with this weapon deal 1d6 piercing damage. [Properties: Thrown (range 30/120)]',
    iconSource: './images/Item_Shop/Items/Weapons/javelin.png',
    source: SourceTypes.official,
    itemCost: 5,
    type: ItemType.weapon,
};

const weapon_light_hammer: IItemDetails = {
    title: 'Light Hammer',
    body: 'A small bludgeoning weapon. Attacks with this weapon deal 1d4 bludgeoning damage. [Properties: Light, Thrown (range 20/60)]',
    iconSource: './images/Item_Shop/Items/Weapons/light_hammer.png',
    source: SourceTypes.official,
    itemCost: 2,
    type: ItemType.weapon,
};

 const weapon_mace: IItemDetails = {
    title: 'Mace',
    body: 'A bludgeoning weapon. Attacks with this weapon deal 1d6 bludgeoning damage.',
    iconSource: './images/Item_Shop/Items/Weapons/mace.png',
    source: SourceTypes.official,
    itemCost: 5,
    type: ItemType.weapon,
};

const weapon_quarterstaff: IItemDetails = {
    title: 'Quarterstaff',
    body: 'A long, bludgeoning weapon made of oak. Attacks with this weapon deal 1d6 bludgeoning damage. [Properties: Versatile (1d8)]',
    iconSource: './images/Item_Shop/Items/Weapons/quarterstaff.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_sickle: IItemDetails = {
    title: 'Sickle',
    body: 'A curved weapon made of steel. Attacks with this weapon deal 1d4 slashing damage. [Properties: Light]',
    iconSource: './images/Item_Shop/Items/Weapons/sickle.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

 const weapon_spear: IItemDetails = {
    title: 'Spear',
    body: 'A long, pointed weapon. Attacks with this weapon deal 1d6 piercing damage. [Properties: Thrown (range 20/60), Versatile (1d8)]',
    iconSource: './images/Item_Shop/Items/Weapons/spear.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_shortsword: IItemDetails = {
    title: 'Shortsword',
    body: 'A short, pointed weapon. Attacks with this weapon deal 1d6 piercing damage. [Properties: Finesse, Light]',
    iconSource: './images/Item_Shop/Items/Weapons/shortsword.png',
    source: SourceTypes.official,
    itemCost: 10,
    type: ItemType.weapon,
};

const weapon_snake_staff: IItemDetails = {
    title: 'Snake Staff',
    body: 'A long oaken staff. The staff is wrapped by the likeness of a clay snake. Attacks with this weapon deal 1d4 bludgeoning damage and 1d4 poison damage.',
    iconSource: './images/Item_Shop/Items/Weapons/Cleric Staff Snake Green.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.weapon,
};

const weapon_dart: IItemDetails = {
    title: 'Darts',
    body: 'A small thrown weapon. 20 darts line a leather pouch. Attacks with this weapon deal 1d4 piercing damage. [Properties: Finesse, Thrown (range 20/60)]',
    iconSource: './images/Item_Shop/Items/Weapons/dart.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_light_crossbow: IItemDetails = {
    title: 'Light Crossbow',
    body: 'A light, mechanical device used for firing arrows across large distances. Attacks with this weapon deal 1d8 piercing damage. [Properties: Ammunition (range 80/320), Loading, Two-handed]',
    iconSource: './images/Item_Shop/Items/Weapons/light_crossbow.png',
    source: SourceTypes.official,
    itemCost: 25,
    type: ItemType.weapon,
};

const weapon_shortbow: IItemDetails = {
    title: 'Shortbow',
    body: 'A long, curved piece of wood held taut by a length of wire. Attacks with this weapon deal 1d6 piercing damage. [Properties: Ammunition (range 80/320), Two-handed]',
    iconSource: './images/Item_Shop/Items/Weapons/shortbow.png',
    source: SourceTypes.official,
    itemCost: 25,
    type: ItemType.weapon,
};

const weapon_sling: IItemDetails = {
    title: 'Sling',
    body: 'A small pocket held by two lengths of rope. When spun quickly, it can hurl projectiles at lethal speed. Attacks with this weapon deal 1d4 bludgeoning damage. [Properties: Ammunition (range 30/120)]',
    iconSource: './images/Item_Shop/Items/Weapons/sling.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_battleaxe: IItemDetails = {
    title: 'Battleaxe',
    body: 'A large, double-bladed axe. Attacks with this weapon deal 1d8 slashing damage. [Properties: Versatile (1d10)]',
    iconSource: './images/Item_Shop/Items/Weapons/battleaxe.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_glaive: IItemDetails = {
    title: 'Glaive',
    body: 'A long polearm with a menacing length of steel at one end. Attacks with this weapon deal 1d10 slashing damage. [Properties: Heavy, Reach, Two-handed]',
    iconSource: './images/Item_Shop/Items/Weapons/glaive.png',
    source: SourceTypes.official,
    itemCost: 1,
    type: ItemType.weapon,
};

const weapon_longsword: IItemDetails = {
    title: 'Longsword',
    body: 'A large, double-bladed axe. Attacks with this weapon deal 1d8 slashing damage. [Properties: Versatile (1d10)]',
    iconSource: './images/Item_Shop/Items/Weapons/longsword.png',
    source: SourceTypes.official,
    itemCost: 15,
    type: ItemType.weapon,
};


/**********************************************************************************************************
 * Potions
 *********************************************************************************************************/
const potion_healing_low: IItemDetails = {
    title: 'Small Healing Potion',
    body: 'A small healing potion. Heals 2d4+2 when consumed.',
    iconSource: './images/Item_Shop/Items/Potions/LowHealthPotion.png',
    source: SourceTypes.official,
    itemCost: 50,
    type: ItemType.potion,
}; 

const potion_mana_low: IItemDetails = {
    title: 'Small Mana Potion',
    body: 'A small mana potion. Restores 1 level 1 spell slot when consumed. Use of this potion will result in a withdrawal effect.',
    iconSource: './images/Item_Shop/Items/Potions/LowManaPotion.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

const potion_angelic: IItemDetails = {
    title: 'Angelic Potion',
    body: 'A large, winged potion. The bottle is miraculously light. Bubbles rise endlessly from the bottom of the glass. When consumed, heals 2d4+2 hitpoints and grants the user the ability to fly for the next 18 seconds (3 rounds of combat). Use of this potion will result in a withdrawal effect.',
    iconSource: './images/Item_Shop/Items/Potions/AngelicPotion.png',
    source: SourceTypes.homebrew,
    itemCost: 250,
    type: ItemType.potion,
};

const potion_dark_contract: IItemDetails = {
    title: 'Potion of the Dark Contract',
    body: 'A dark, bubbling brew. Light that enters the bottle does not return. On consuming this potion, take 2d4 necrotic damage. Your next attack gains bonus damage equal to twice the necrotic damage that you have taken.',
    iconSource: './images/Item_Shop/Items/Potions/DarkContractPotion.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

const potion_tiamat: IItemDetails = {
    title: "Tiamat's Brew",
    body: "A rainbow of shifting colors lives in this bottle. On consumption, cast the Dragon's Breath spell on self. Consuming this potion will result in a withdrawal effect.",
    iconSource: './images/Item_Shop/Items/Potions/potion_tiamat.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

const potion_poison_miasma: IItemDetails = {
    title: 'Poisonous Miasma',
    body: 'A swirling, toxic potion. The likeness of a long, green, clay snake is enveloped around the bottle. When used, causes a weapon to deal an additional 2 poison damage to attacks that deal slashing or piercing damage. The effect lasts 24 hours. Application takes 1 minute, and this item is consumed on use.',
    iconSource: './images/Item_Shop/Items/Potions/poison.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

const potion_poison_burning: IItemDetails = {
    title: 'Burning Miasma',
    body: 'A swirling, heated potion. The likeness of a long, red, clay snake is enveloped around the bottle. When used, causes a weapon to deal an additional 2 fire damage to attacks that deal slashing or piercing damage. The effect lasts 24 hours. Application takes 1 minute, and this item is consumed on use.',
    iconSource: './images/Item_Shop/Items/Potions/poison_burning.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

const potion_poison_lightning: IItemDetails = {
    title: 'Electric Miasma',
    body: 'A swirling, shocking potion. The likeness of a long, yellow, clay snake is enveloped around the bottle. When used, causes a weapon to deal an additional 2 lightning damage to attacks that deal slashing or piercing damage. The effect lasts 24 hours. Application takes 1 minute, and this item is consumed on use.',
    iconSource: './images/Item_Shop/Items/Potions/poison_lightning.png',
    source: SourceTypes.homebrew,
    itemCost: 100,
    type: ItemType.potion,
};

/**
 * @description A mapping for each carpet and its contents in the bazaar.
 */
export const CarpetMaps: CarpetMap[] = [
    {
        rugName: 'Simple Weapons',
        rugBorderSource: "url(/images/Item_Shop/Items/Rugs/purplerug.png)",
        itemDetails: [
            weapon_spear,
            weapon_shortsword,
            weapon_club,
            weapon_dagger,
            weapon_greatclub,
            weapon_handaxe,
            weapon_javelin,
            weapon_light_hammer,
            weapon_mace,
            weapon_quarterstaff,
            weapon_sickle,
        ]
    },
    {
        rugName: 'Potions',
        rugBorderSource: "url(/images/Item_Shop/Items/Rugs/bluerug.png)",
        itemDetails: [
            potion_healing_low,
            potion_mana_low,
            potion_angelic,
            potion_tiamat,
            potion_dark_contract,
            potion_poison_miasma,
            potion_poison_burning,
            potion_poison_lightning,
        ]
    },
    {
        rugName: 'Rings',
        rugBorderSource: "url(/images/Item_Shop/Items/Rugs/greenrug.png)",
        itemDetails: [
            redRing,
            greenRing,
            ring_floral
        ]
    },
    {
        rugName: 'Simple Ranged Weapons',
        rugBorderSource: "url(/images/Item_Shop/Items/Rugs/redrug.png)",
        itemDetails: [
            weapon_dart,
            weapon_light_crossbow,
            weapon_shortbow,
            weapon_sling,
        ]
    },
    {
        rugName: 'Martial Weapons',
        rugBorderSource: "url(/images/Item_Shop/Items/Rugs/purplerug.png)",
        itemDetails: [
            weapon_battleaxe,
            weapon_glaive,
            weapon_longsword,
        ]
    },
];
