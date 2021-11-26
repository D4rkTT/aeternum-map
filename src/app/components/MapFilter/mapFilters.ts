import { i18n } from '../../i18n/i18n';

export type FilterItem = {
  type: string;
  category: string;
  title: string;
  iconUrl: string;
  hasName?: boolean;
  hasLevel?: boolean;
  maxTier?: number;
};

export const mapFilters: FilterItem[] = [
  {
    category: 'locations',
    type: 'expedition',
    title: i18n('Expedition'),
    iconUrl: '/pois/expedition.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'fort',
    title: i18n('Fort'),
    iconUrl: '/pois/fort.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'outpost',
    title: i18n('Outpost'),
    iconUrl: '/pois/outpost.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'settlement',
    title: i18n('Settlement'),
    iconUrl: '/pois/settlement.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'spiritShrine',
    title: i18n('Spirit Shrine'),
    iconUrl: '/pois/spiritShrine.webp',
    hasName: true,
  },
  {
    category: 'chests',
    type: 'chestsEliteAncient',
    title: i18n('Elite Ancient Chest'),
    iconUrl: '/pois/chest_elite2.webp',
  },
  {
    category: 'chests',
    type: 'chestsEliteSupplies',
    title: i18n('Elite Supply Stockpile'),
    iconUrl: '/pois/chest_elite4.webp',
  },
  {
    category: 'chests',
    type: 'chestsLargeAlchemy',
    title: i18n('Alchemy Stockpile'),
    iconUrl: '/pois/chest_large1.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsLargeAncient',
    title: i18n('Ancient Chest'),
    iconUrl: '/pois/chest_large2.webp',
  },
  {
    category: 'chests',
    type: 'chestsLargeProvisions',
    title: i18n('Provisions Stockpile'),
    iconUrl: '/pois/chest_large3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsLargeSupplies',
    title: i18n('Supply Stockpile'),
    iconUrl: '/pois/chest_large4.webp',
  },
  {
    category: 'chests',
    type: 'chestsMediumAlchemy',
    title: i18n('Alchemy Crate'),
    iconUrl: '/pois/chest_medium1.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsMediumAncient',
    title: i18n('Ancient Coffer'),
    iconUrl: '/pois/chest_medium2.webp',
  },
  {
    category: 'chests',
    type: 'chestsMediumProvisions',
    title: i18n('Provisions Crate'),
    iconUrl: '/pois/chest_medium3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsMediumSupplies',
    title: i18n('Supply Crate'),
    iconUrl: '/pois/chest_medium4.webp',
  },
  {
    category: 'chests',
    type: 'chestsCommonAncient',
    title: i18n('Ancient Urn'),
    iconUrl: '/pois/chest_common2.webp',
  },
  {
    category: 'chests',
    type: 'chestsCommonProvisions',
    title: i18n('Provisions Cache'),
    iconUrl: '/pois/chest_common3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsCommonSupplies',
    title: i18n('Supply Cache'),
    iconUrl: '/pois/chest_common4.webp',
  },
  {
    category: 'enemies',
    type: 'boss',
    title: i18n('Boss'),
    iconUrl: '/pois/boss.webp',
    hasName: true,
    hasLevel: true,
  },
  {
    category: 'enemies',
    type: 'bossElite',
    title: i18n('Elite Boss'),
    iconUrl: '/pois/boss.webp',
    hasName: true,
    hasLevel: true,
  },
  {
    category: 'skinning',
    type: 'alligator',
    title: i18n('Alligator'),
    iconUrl: '/pois/alligator.webp',
  },
  {
    category: 'skinning',
    type: 'bear',
    title: i18n('Bear'),
    iconUrl: '/pois/bear.webp',
  },
  {
    category: 'skinning',
    type: 'bison',
    title: i18n('Bison'),
    iconUrl: '/pois/bison.webp',
  },
  {
    category: 'skinning',
    type: 'boar',
    title: i18n('Boar'),
    iconUrl: '/pois/boar.webp',
  },
  {
    category: 'skinning',
    type: 'cow',
    title: i18n('Cow'),
    iconUrl: '/pois/cow.webp',
  },
  {
    category: 'skinning',
    type: 'elk',
    title: i18n('Elk'),
    iconUrl: '/pois/elk.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_forest',
    title: i18n('Elemential Forest'),
    iconUrl: '/pois/elk.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_mountain',
    title: i18n('Elemential Mountain'),
    iconUrl: '/pois/bear.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_tundra',
    title: i18n('Elemential Tundra'),
    iconUrl: '/pois/wolf.webp',
  },
  {
    category: 'skinning',
    type: 'goat',
    title: i18n('Goat'),
    iconUrl: '/pois/sheep.webp',
  },
  {
    category: 'skinning',
    type: 'lion',
    title: i18n('Lion'),
    iconUrl: '/pois/puma.webp',
  },
  {
    category: 'skinning',
    type: 'lynx',
    title: i18n('Lynx'),
    iconUrl: '/pois/lynx.webp',
  },
  {
    category: 'skinning',
    type: 'pig',
    title: i18n('Pig'),
    iconUrl: '/pois/pig.webp',
  },
  {
    category: 'skinning',
    type: 'rabbit',
    title: i18n('Rabbit'),
    iconUrl: '/pois/hare.webp',
  },
  {
    category: 'skinning',
    type: 'sheep',
    title: i18n('Sheep'),
    iconUrl: '/pois/sheep.webp',
  },
  {
    category: 'skinning',
    type: 'turkey',
    title: i18n('Turkey'),
    iconUrl: '/pois/turkey.webp',
  },
  {
    category: 'skinning',
    type: 'wolf',
    title: i18n('Wolf'),
    iconUrl: '/pois/wolf.webp',
  },
  {
    category: 'mining',
    type: 'crystal',
    title: i18n('Crystal'),
    iconUrl: '/pois/crystal.webp',
  },
  {
    category: 'mining',
    type: 'gold',
    title: i18n('Gold'),
    iconUrl: '/pois/gold.webp',
  },
  {
    category: 'mining',
    type: 'iron',
    title: i18n('Iron'),
    iconUrl: '/pois/iron.webp',
  },
  {
    category: 'mining',
    type: 'lodestone',
    title: i18n('Lodestone'),
    iconUrl: '/pois/lodestone.webp',
  },
  {
    category: 'mining',
    type: 'oil',
    title: i18n('Oil'),
    iconUrl: '/pois/oil.webp',
  },
  {
    category: 'mining',
    type: 'orichalcum',
    title: i18n('Orichalcum'),
    iconUrl: '/pois/orichalcum.webp',
  },
  {
    category: 'mining',
    type: 'platinum',
    title: i18n('Platinum'),
    iconUrl: '/pois/platinum.webp',
  },
  {
    category: 'mining',
    type: 'saltpeter',
    title: i18n('Saltpeter'),
    iconUrl: '/pois/saltpeter.webp',
  },

  {
    category: 'mining',
    type: 'silver',
    title: i18n('Silver'),
    iconUrl: '/pois/silver.webp',
  },
  {
    category: 'mining',
    type: 'starmetal',
    title: i18n('Starmetal'),
    iconUrl: '/pois/starmetal.webp',
  },
  {
    category: 'fishing',
    type: 'fish_hotspot1',
    title: i18n('Fish Broad'),
    iconUrl: '/pois/fish_hotspot1.webp',
  },
  {
    category: 'fishing',
    type: 'fish_hotspot2',
    title: i18n('Fish Rare'),
    iconUrl: '/pois/fish_hotspot2.webp',
  },
  {
    category: 'fishing',
    type: 'fish_hotspot3',
    title: i18n('Fish Secret'),
    iconUrl: '/pois/fish_hotspot3.webp',
  },
  {
    category: 'logging',
    type: 'ironwood',
    title: i18n('Ironwood Tree'),
    iconUrl: '/pois/ironwood_compass.webp',
  },
  {
    category: 'logging',
    type: 'wyrdwood',
    title: i18n('Wyrdwood Tree'),
    iconUrl: '/pois/wyrdwood_compass.webp',
  },
  {
    category: 'farming',
    type: 'azoth_spring',
    title: i18n('Azoth Spring'),
    iconUrl: '/pois/azoth_spring.webp',
  },
  {
    category: 'farming',
    type: 'fungus',
    title: i18n('Fungus'),
    iconUrl: '/pois/fungi.webp',
  },
  {
    category: 'farming',
    type: 'hemp',
    title: i18n('Hemp'),
    iconUrl: '/pois/hemp_compass.webp',
  },
  {
    category: 'farming',
    type: 'herb',
    title: i18n('Herb'),
    iconUrl: '/pois/herbs.webp',
  },
  {
    category: 'farming',
    type: 'silkweed',
    title: i18n('Silkweed'),
    iconUrl: '/pois/silkweed.webp',
  },
  {
    category: 'farming',
    type: 'wirefiber',
    title: i18n('Wirefiber'),
    iconUrl: '/pois/wirefiber.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'barley',
    title: i18n('Barley'),
    iconUrl: '/pois/barley.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'berry',
    title: i18n('Berry'),
    iconUrl: '/pois/berry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'blueberry',
    title: i18n('Blueberry'),
    iconUrl: '/pois/blueberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'broccoli',
    title: i18n('Broccoli'),
    iconUrl: '/pois/broccoli.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'cabbage',
    title: i18n('Cabbage'),
    iconUrl: '/pois/cabbage.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'carrot',
    title: i18n('Carrot'),
    iconUrl: '/pois/carrot.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'corn',
    title: i18n('Corn'),
    iconUrl: '/pois/corn.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'cranberry',
    title: i18n('Cranberry'),
    iconUrl: '/pois/cranberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'honey',
    title: i18n('Honey'),
    iconUrl: '/pois/honey.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'milk',
    title: i18n('Milk'),
    iconUrl: '/pois/milk.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'nuts',
    title: i18n('Nuts'),
    iconUrl: '/pois/nuts.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'potato',
    title: i18n('Potato'),
    iconUrl: '/pois/potato.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'pumpkin',
    title: i18n('Pumpkin'),
    iconUrl: '/pois/pumpkin.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'squash',
    title: i18n('Squash'),
    iconUrl: '/pois/squash.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'strawberry',
    title: i18n('Strawberry'),
    iconUrl: '/pois/strawberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'turkey_nest',
    title: i18n('Turkey Nest'),
    iconUrl: '/pois/turkey_nest.webp',
  },
  {
    category: 'npc',
    type: 'npc_generic',
    title: i18n('Generic'),
    iconUrl: '/pois/npc_generic.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_inn',
    title: i18n('Inn'),
    iconUrl: '/pois/npc_inn.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_covenant',
    title: i18n('Covenant'),
    iconUrl: '/pois/npc_covenant.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_marauder',
    title: i18n('Marauder'),
    iconUrl: '/pois/npc_marauder.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_syndicate',
    title: i18n('Syndicate'),
    iconUrl: '/pois/npc_syndicate.webp',
    hasName: true,
  },
  {
    category: 'lore',
    type: 'lore_note',
    title: i18n('Lore Note'),
    iconUrl: '/pois/lore_note.webp',
    hasName: true,
  },
  {
    category: 'essences',
    type: 'essences_shockbulb',
    title: i18n('Shockbulb'),
    iconUrl: '/pois/wind_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_shockspire',
    title: i18n('Shockspire'),
    iconUrl: '/pois/wind_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_lightning_beetle',
    title: i18n('Ligthning Beetle'),
    iconUrl: '/pois/wind_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightroot',
    title: i18n('Blightroot'),
    iconUrl: '/pois/death_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightcrag',
    title: i18n('Blightcrag'),
    iconUrl: '/pois/death_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightmoth',
    title: i18n('Blightmoth'),
    iconUrl: '/pois/death_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthspine',
    title: i18n('Earthspine'),
    iconUrl: '/pois/earth_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthcrag',
    title: i18n('Earthcrag'),
    iconUrl: '/pois/earth_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthshell_turtle',
    title: i18n('Earthshell Turtle'),
    iconUrl: '/pois/earth_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_dragonglory',
    title: i18n('Dragonglory'),
    iconUrl: '/pois/fire_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_scorchstone',
    title: i18n('Scorchstone'),
    iconUrl: '/pois/fire_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_salamander_snail',
    title: i18n('Salamander Snail'),
    iconUrl: '/pois/fire_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifebloom',
    title: i18n('Lifebloom'),
    iconUrl: '/pois/life_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifejewel',
    title: i18n('Lifejewel'),
    iconUrl: '/pois/life_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifemoth',
    title: i18n('Lifemoth'),
    iconUrl: '/pois/life_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulsprout',
    title: i18n('Soulsprout'),
    iconUrl: '/pois/spirit_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulspire',
    title: i18n('Soulspire'),
    iconUrl: '/pois/spirit_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulwyrm',
    title: i18n('Soulwyrm'),
    iconUrl: '/pois/spirit_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_rivercress',
    title: i18n('Rivercress'),
    iconUrl: '/pois/water_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_springstone',
    title: i18n('Springstone'),
    iconUrl: '/pois/water_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_floating_spinefish',
    title: i18n('Floating Spinefish'),
    iconUrl: '/pois/water_boid.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_black_primsabloom',
    title: i18n('Black Prismabloom'),
    iconUrl: '/pois/pigment_black.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_blue_primsabloom',
    title: i18n('Blue Prismabloom'),
    iconUrl: '/pois/pigment_blue.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_brown_primsabloom',
    title: i18n('Brown Prismabloom'),
    iconUrl: '/pois/pigment_brown.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_cyan_primsabloom',
    title: i18n('Cyan Prismabloom'),
    iconUrl: '/pois/pigment_cyan.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_green_primsabloom',
    title: i18n('Green Prismabloom'),
    iconUrl: '/pois/pigment_green.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_magenta_primsabloom',
    title: i18n('Magenta Prismabloom'),
    iconUrl: '/pois/pigment_magenta.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_orange_primsabloom',
    title: i18n('Orange Prismabloom'),
    iconUrl: '/pois/pigment_orange.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_red_primsabloom',
    title: i18n('Red Prismabloom'),
    iconUrl: '/pois/pigment_red.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_turquoise_primsabloom',
    title: i18n('Turquoise Prismabloom'),
    iconUrl: '/pois/pigment_turquoise.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_violet_primsabloom',
    title: i18n('Violet Prismabloom'),
    iconUrl: '/pois/pigment_violet.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_white_primsabloom',
    title: i18n('White Prismabloom'),
    iconUrl: '/pois/pigment_white.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_yellow_primsabloom',
    title: i18n('Yellow Prismabloom'),
    iconUrl: '/pois/pigment_yellow.webp',
  },
  {
    category: 'service',
    type: 'service_arcane_repository',
    title: i18n('Arcane Repository'),
    iconUrl: '/pois/service_arcane_repository.webp',
  },
  {
    category: 'service',
    type: 'service_forge',
    title: i18n('Forge'),
    iconUrl: '/pois/service_forge.webp',
  },
  {
    category: 'service',
    type: 'service_kitchen',
    title: i18n('Kitchen'),
    iconUrl: '/pois/service_kitchen.webp',
  },
  {
    category: 'service',
    type: 'service_loom',
    title: i18n('Loom'),
    iconUrl: '/pois/service_loom.webp',
  },
  {
    category: 'service',
    type: 'service_outfitting',
    title: i18n('Outfitting'),
    iconUrl: '/pois/service_outfitting.webp',
  },
  {
    category: 'service',
    type: 'service_smelter',
    title: i18n('Smelter'),
    iconUrl: '/pois/service_smelter.webp',
  },
  {
    category: 'service',
    type: 'service_stonecutting',
    title: i18n('Stonecutting'),
    iconUrl: '/pois/service_stonecutting.webp',
  },
  {
    category: 'service',
    type: 'service_storage',
    title: i18n('Storage'),
    iconUrl: '/pois/service_storage.webp',
  },
  {
    category: 'service',
    type: 'service_tannery',
    title: i18n('Tannery'),
    iconUrl: '/pois/service_tannery.webp',
  },
  {
    category: 'service',
    type: 'service_territory_board',
    title: i18n('Territory Board'),
    iconUrl: '/pois/service_territory_board.webp',
  },
  {
    category: 'service',
    type: 'service_town_board',
    title: i18n('Town Board'),
    iconUrl: '/pois/service_town_board.webp',
  },
  {
    category: 'service',
    type: 'service_trading_post',
    title: i18n('Trading Post'),
    iconUrl: '/pois/service_trading_post.webp',
  },
  {
    category: 'service',
    type: 'service_war_board',
    title: i18n('War Board'),
    iconUrl: '/pois/service_warboard.webp',
  },
  {
    category: 'service',
    type: 'service_woodshop',
    title: i18n('Woodshop'),
    iconUrl: '/pois/service_woodshop.webp',
  },
  {
    category: 'service',
    type: 'service_workshop',
    title: i18n('Workshop'),
    iconUrl: '/pois/service_workshop.webp',
  },
  {
    category: 'other',
    type: 'miscellaneous',
    title: i18n('Miscellaneous'),
    iconUrl: '/pois/other.webp',
  },
];

export type MapFiltersCategory = {
  value: string;
  title: string;
  filters: FilterItem[];
  borderColor?: string;
};

export const mapFiltersCategories: MapFiltersCategory[] = [
  {
    value: 'locations',
    title: i18n('Locations'),
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'locations'
    ),
  },
  {
    value: 'chests',
    title: i18n('Chests'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'chests'),
    borderColor: 'rgba(200, 200, 200, 0.7)',
  },
  {
    value: 'enemies',
    title: i18n('Enemies'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'enemies'),
    borderColor: 'rgba(220, 20, 60, 0.7)',
  },
  {
    value: 'farming',
    title: i18n('Farming'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'farming'),
    borderColor: 'rgba(34, 139, 34, 0.7)',
  },
  {
    value: 'cooking_ingredients',
    title: i18n('Cooking Ingredients'),
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'cooking_ingredients'
    ),
    borderColor: 'rgba(0, 100, 0, 0.7)',
  },
  {
    value: 'fishing',
    title: i18n('Fishing'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'fishing'),
    borderColor: 'rgba(30, 144, 255, 0.7)',
  },
  {
    value: 'logging',
    title: i18n('Logging'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'logging'),
    borderColor: 'rgba(85, 107, 47, 0.7)',
  },
  {
    value: 'mining',
    title: i18n('Mining'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'mining'),
    borderColor: 'rgba(255, 235, 205, 0.7)',
  },
  {
    value: 'skinning',
    title: i18n('Skinning'),
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'skinning'
    ),
    borderColor: 'rgba(205, 133, 63, 0.7)',
  },
  {
    value: 'lore',
    title: i18n('Lore'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'lore'),
    borderColor: 'rgba(65, 105, 225, 0.7)',
  },
  {
    value: 'essences',
    title: i18n('Essences'),
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'essences'
    ),
    borderColor: 'rgba(75, 0, 130, 0.7)',
  },
  {
    value: 'pigment',
    title: i18n('Pigments'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'pigment'),
    borderColor: 'rgba(250, 128, 114, 0.7)',
  },
  {
    value: 'npc',
    title: i18n('NPC'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'npc'),
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  {
    value: 'service',
    title: i18n('Services'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'service'),
    borderColor: 'rgba(112, 128, 144, 0.7)',
  },
  {
    value: 'other',
    title: i18n('Other'),
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'other'),
    borderColor: 'rgba(80, 80, 80, 0.7)',
  },
];
