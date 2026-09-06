import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

import { enResourceStrings } from "./en";
import { frResourceStrings } from "./fr";

const i18n = new I18n({
  en: enResourceStrings,
  fr: frResourceStrings
});

i18n.enableFallback = true;
i18n.locale = Localization.getLocales()[0]?.languageCode ?? "en";

export const localize = text => i18n.t(text);
