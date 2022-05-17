import { Options } from "ng5-slider";

export interface GPT3EngineInterface {
  id: number;
  name: string;
  temperature: {
    default: number;
    option: Options;
  };
  max_tokens: {
    default: number;
    option: Options;
  };
  top_p: {
    default: number;
    option: Options;
  };
  frequency_penalty: {
    default: number;
    option: Options;
  };
  presence_penalty: {
    default: number;
    option: Options;
  };
}

export interface TextGeneratorPromptRequestInferface {
  prompt: string;
  engine: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}
