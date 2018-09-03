import I18n from "ex-react-native-i18n";

import { enResourceStrings } from "./en";
import { frResourceStrings } from "./fr";

export const localize = text => {
  I18n.fallbacks = true;
  I18n.translations = {
    en: enResourceStrings,
    "en-GB": enResourceStrings,
    "fr-FR": frResourceStrings
  };
  return I18n.t(text);
};
