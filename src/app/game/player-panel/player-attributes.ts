export enum PlayerAttributes {
  CHARM,
  HERBS,
  BLOOD,
  POTIONS,
  GOLD,
  VICTORY_POINTS
}

export const ATTRIBUTE_INDEXES = Object.keys(PlayerAttributes).map(v => Number(v)).filter(v => !isNaN(v));
export const ZERO_ARRAY_FOR_ATTRIBUTES = Object.keys(PlayerAttributes).filter(v => !isNaN(Number(v) )).map(v => 0);
