/** @jsx h */
import { h } from 'preact';

import {
  BlendMode,
  PulseMode,
  LockMode,
  FlashingRed,
  SolidRedLights,
  Globe,
  Lightning,
  Lightning2,
  Charge,
  Drop,
  Leaf,
  Diamond,
  Mountain,
  Pocket,
  Snowflake,
  Fabric,
  Dressing,
  Cafe,
  Milkshake,
  HappyHour,
  Protein,
  Fruit,
  DairyFree,
  EssentialOils,
  GlutenFree,
  NoArtificialIngredients,
  NonGMO,
  NoPreservatives,
  NoTransFats,
  NutFree,
  Organic,
  Paleo,
  Raw,
  RealFood,
  SoyFree,
  SustainablePackaging,
  Vegan,
  Vegetarian,
  CheckMark,
  NoArtificialSugar,
} from '../Icons/icons';

const iconSelect = {
  Blue: BlendMode,
  'Blue Flashing': PulseMode,
  Purple: LockMode,
  'Red Flashing': FlashingRed,
  Red: SolidRedLights,
  Globe: Globe,
  Lightning: Lightning,
  Lightning2: Lightning2,
  Charge: Charge,
  Drop: Drop,
  Leaf: Leaf,
  Diamond: Diamond,
  Mountain: Mountain,
  Pocket: Pocket,
  Snowflake: Snowflake,
  Fabric: Fabric,
  Dressing: Dressing,
  Cafe: Cafe,
  Milkshake: Milkshake,
  Protein: Protein,
  HappyHour: HappyHour,
  Fruit: Fruit,
  DairyFree: DairyFree,
  EssentialOils: EssentialOils,
  GlutenFree: GlutenFree,
  NoArtificialIngredients: NoArtificialIngredients,
  NonGMO: NonGMO,
  NoPreservatives: NoPreservatives,
  NoTransFats: NoTransFats,
  NutFree: NutFree,
  Organic: Organic,
  Paleo: Paleo,
  Raw: Raw,
  RealFood: RealFood,
  SoyFree: SoyFree,
  SustainablePackaging: SustainablePackaging,
  Vegan: Vegan,
  Vegetarian: Vegetarian,
  CheckMark: CheckMark,
  NoArtificialSugar: NoArtificialSugar,
};

export type FeatureIconName = keyof typeof iconSelect;

export function FeatureIcon({ name }: { name: FeatureIconName }) {
  return <div class="svg-container">{iconSelect[name]}</div>;
}