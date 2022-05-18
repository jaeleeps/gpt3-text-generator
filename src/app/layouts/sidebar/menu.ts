import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1000,
    label: "MENUITEMS.TEXT_GENERATOR.TEXT",
    isTitle: true,
  },
  {
    id: 1100,
    label: "MENUITEMS.TEXT_GENERATOR_PROMPT.TEXT",
    icon: "bx-edit-alt",
    link: "/text-generator/prompt",
  },
  {
    id: 1200,
    label: "MENUITEMS.TEXT_GENERATOR_ARCHIVE.TEXT",
    icon: "bx-archive",
    link: "/text-generator/archive"
  },
];
