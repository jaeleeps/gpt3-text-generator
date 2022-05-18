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
  {
    id: 80,
    label: "MENUITEMS.COMPONENTS.TEXT",
    isTitle: true,
  },
  {
    id: 81,
    label: "MENUITEMS.UIELEMENTS.TEXT",
    icon: "bx-tone",
    subItems: [
      {
        id: 82,
        label: "MENUITEMS.UIELEMENTS.LIST.ALERTS",
        link: "/ui/alerts",
        parentId: 81,
      },
      {
        id: 83,
        label: "MENUITEMS.UIELEMENTS.LIST.BUTTONS",
        link: "/ui/buttons",
        parentId: 81,
      },
      {
        id: 84,
        label: "MENUITEMS.UIELEMENTS.LIST.CARDS",
        link: "/ui/cards",
        parentId: 81,
      },
      {
        id: 85,
        label: "MENUITEMS.UIELEMENTS.LIST.CAROUSEL",
        link: "/ui/carousel",
        parentId: 81,
      },
      {
        id: 86,
        label: "MENUITEMS.UIELEMENTS.LIST.DROPDOWNS",
        link: "/ui/dropdowns",
        parentId: 81,
      },
      {
        id: 87,
        label: "MENUITEMS.UIELEMENTS.LIST.GRID",
        link: "/ui/grid",
        parentId: 81,
      },
      {
        id: 88,
        label: "MENUITEMS.UIELEMENTS.LIST.IMAGES",
        link: "/ui/images",
        parentId: 81,
      },
      {
        id: 88,
        label: "MENUITEMS.UIELEMENTS.LIST.LIGHTBOX",
        link: "/ui/lightbox",
        parentId: 81,
      },
      {
        id: 89,
        label: "MENUITEMS.UIELEMENTS.LIST.MODALS",
        link: "/ui/modals",
        parentId: 81,
      },
      {
        id: 90,
        label: "MENUITEMS.UIELEMENTS.LIST.RANGESLIDER",
        link: "/ui/rangeslider",
        parentId: 81,
      },
      {
        id: 91,
        label: "MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR",
        link: "/ui/progressbar",
        parentId: 81,
      },
      {
        id: 92,
        label: "MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER",
        link: "/ui/placeholder",
        parentId: 81,
      },
      {
        id: 93,
        label: "MENUITEMS.UIELEMENTS.LIST.SWEETALERT",
        link: "/ui/sweet-alert",
        parentId: 81,
      },
      {
        id: 94,
        label: "MENUITEMS.UIELEMENTS.LIST.TABS",
        link: "/ui/tabs-accordions",
        parentId: 81,
      },
      {
        id: 95,
        label: "MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY",
        link: "/ui/typography",
        parentId: 81,
      },
      {
        id: 96,
        label: "MENUITEMS.UIELEMENTS.LIST.VIDEO",
        link: "/ui/video",
        parentId: 81,
      },
      {
        id: 97,
        label: "MENUITEMS.UIELEMENTS.LIST.GENERAL",
        link: "/ui/general",
        parentId: 81,
      },
      {
        id: 98,
        label: "MENUITEMS.UIELEMENTS.LIST.COLORS",
        link: "/ui/colors",
        parentId: 81,
      },
      {
        id: 99,
        label: "MENUITEMS.UIELEMENTS.LIST.CROPPER",
        link: "/ui/image-crop",
        parentId: 81,
      },
    ],
  },
  {
    id: 100,
    label: "MENUITEMS.FORMS.TEXT",
    icon: "bxs-eraser",
    badge: {
      variant: "danger",
      text: "MENUITEMS.FORMS.BADGE",
    },
    subItems: [
      {
        id: 101,
        label: "MENUITEMS.FORMS.LIST.ELEMENTS",
        link: "/form/elements",
        parentId: 100,
      },
      {
        id: 102,
        label: "MENUITEMS.FORMS.LIST.LAYOUTS",
        link: "/form/layouts",
        parentId: 100,
      },
      {
        id: 103,
        label: "MENUITEMS.FORMS.LIST.VALIDATION",
        link: "/form/validation",
        parentId: 100,
      },
      {
        id: 104,
        label: "MENUITEMS.FORMS.LIST.ADVANCED",
        link: "/form/advanced",
        parentId: 100,
      },
      {
        id: 105,
        label: "MENUITEMS.FORMS.LIST.EDITOR",
        link: "/form/editor",
        parentId: 100,
      },
      {
        id: 106,
        label: "MENUITEMS.FORMS.LIST.FILEUPLOAD",
        link: "/form/uploads",
        parentId: 100,
      },
      {
        id: 107,
        label: "MENUITEMS.FORMS.LIST.REPEATER",
        link: "/form/repeater",
        parentId: 100,
      },
      {
        id: 108,
        label: "MENUITEMS.FORMS.LIST.WIZARD",
        link: "/form/wizard",
        parentId: 100,
      },
      {
        id: 109,
        label: "MENUITEMS.FORMS.LIST.MASK",
        link: "/form/mask",
        parentId: 100,
      },
    ],
  },
  {
    id: 110,
    icon: "bx-list-ul",
    label: "MENUITEMS.TABLES.TEXT",
    subItems: [
      {
        id: 111,
        label: "MENUITEMS.TABLES.LIST.BASIC",
        link: "/tables/basic",
        parentId: 110,
      },
      {
        id: 112,
        label: "MENUITEMS.TABLES.LIST.ADVANCED",
        link: "/tables/advanced",
        parentId: 110,
      },
    ],
  },
  {
    id: 113,
    icon: "bxs-bar-chart-alt-2",
    label: "MENUITEMS.CHARTS.TEXT",
    subItems: [
      {
        id: 114,
        label: "MENUITEMS.CHARTS.LIST.APEX",
        link: "/charts/apex",
        parentId: 113,
      },
      {
        id: 115,
        label: "MENUITEMS.CHARTS.LIST.CHARTJS",
        link: "/charts/chartjs",
        parentId: 113,
      },
      {
        id: 116,
        label: "MENUITEMS.CHARTS.LIST.CHARTIST",
        link: "/charts/chartist",
        parentId: 113,
      },
      {
        id: 117,
        label: "MENUITEMS.CHARTS.LIST.ECHART",
        link: "/charts/echart",
        parentId: 113,
      },
    ],
  },
  {
    id: 118,
    label: "MENUITEMS.ICONS.TEXT",
    icon: "bx-aperture",
    subItems: [
      {
        id: 119,
        label: "MENUITEMS.ICONS.LIST.BOXICONS",
        link: "/icons/boxicons",
        parentId: 118,
      },
      {
        id: 120,
        label: "MENUITEMS.ICONS.LIST.MATERIALDESIGN",
        link: "/icons/materialdesign",
        parentId: 118,
      },
      {
        id: 121,
        label: "MENUITEMS.ICONS.LIST.DRIPICONS",
        link: "/icons/dripicons",
        parentId: 118,
      },
      {
        id: 122,
        label: "MENUITEMS.ICONS.LIST.FONTAWESOME",
        link: "/icons/fontawesome",
        parentId: 118,
      },
    ],
  },
  {
    id: 123,
    label: "MENUITEMS.MAPS.TEXT",
    icon: "bx-map",
    subItems: [
      {
        id: 124,
        label: "MENUITEMS.MAPS.LIST.GOOGLEMAP",
        link: "/maps/google",
        parentId: 123,
      },
    ],
  },
  {
    id: 125,
    label: "MENUITEMS.MULTILEVEL.TEXT",
    icon: "bx-share-alt",
    subItems: [
      {
        id: 126,
        label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.1",
        link: "#",
        parentId: 125,
      },
      {
        id: 127,
        label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.2",
        parentId: 125,
        subItems: [
          {
            id: 128,
            label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1",
            parentId: 127,
          },
          {
            id: 129,
            label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2",
            parentId: 127,
          },
        ],
      },
    ],
  },
];
