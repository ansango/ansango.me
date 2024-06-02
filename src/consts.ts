import type { Site } from "@/types";
import { seoContentCollection } from "./content/config";

export const site: Site = {
  url: "https://me.ansango.com",
  name: "me.ansango",
  email: "anibalsantosgo@gmail.com",
  lang: "es",
  pages: {
    home: {
      description:
        "Esta es mi blog personal, donde escribo sobre hábitos, música, viajes y desarrollo personal.",
      entriesPerPage: 15,
    },
    tags: {
      title: "Tags",
      description: "Aquí puedes encontrar todas las etiquetas.",
      entriesPerPage: 20,
    },
    ...seoContentCollection,
  },
};

export const baseLongDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
