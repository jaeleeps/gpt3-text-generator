import { GPT3EngineInterface } from "./text-generator.model";

export const GPT3_ENGINES: GPT3EngineInterface[] = [
  {
    id: 0,
    name: "text-davinci-002",
    temperature: {
      default: 0,
      option: {
        floor: 0,
        ceil: 1,
        step: 0.01,
      },
    },
    max_tokens: {
      default: 32,
      option: {
        floor: 0,
        ceil: 4000,
        step: 1,
      },
    },
    top_p: {
      default: 1,
      option: {
        floor: 0,
        ceil: 1,
        step: 0.01,
      },
    },
    frequency_penalty: {
      default: 0.5,
      option: {
        floor: 0,
        ceil: 2,
        step: 0.01,
      },
    },
    presence_penalty: {
      default: 0,
      option: {
        floor: 0,
        ceil: 2,
        step: 0.01,
      },
    },
  },
  {
    id: 1,
    name: "text-curie-001",
    temperature: {
      default: 0,
      option: {
        floor: 0,
        ceil: 1,
        step: 0.01,
      },
    },
    max_tokens: {
      default: 32,
      option: {
        floor: 0,
        ceil: 2048,
        step: 1,
      },
    },
    top_p: {
      default: 1,
      option: {
        floor: 0,
        ceil: 1,
        step: 0.01,
      },
    },
    frequency_penalty: {
      default: 0.5,
      option: {
        floor: 0,
        ceil: 2,
        step: 0.01,
      },
    },
    presence_penalty: {
      default: 0,
      option: {
        floor: 0,
        ceil: 2,
        step: 0.01,
      },
    },
  },
];
