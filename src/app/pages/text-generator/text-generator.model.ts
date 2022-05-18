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
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

export interface TextGeneratorChoiceInterface {
  text: string;
  index: number;
  logprobs: any;
  finish_reason: string;
}

export interface TextGeneratorPromptResponseInferface {
  created: number; // 1652792314
  id: string; // "cmpl-58r4UCfoJ3iJzXRC8Y2fkTD5lCgOC"
  model: string; // "text-curie-001"
  object: string; //"text_completion"
  choices: TextGeneratorChoiceInterface[];
}

export interface TextGeneratorCompletionInterface {
  engine: string;
  req: TextGeneratorPromptRequestInferface;
  res: TextGeneratorPromptResponseInferface;
  received_at: Date;
}

export interface TextGeneratorCompletionListItemInterface
  extends TextGeneratorCompletionInterface {
  archived: boolean;
}

export interface TextGeneratorCompletionArchivedItemInterface
  extends TextGeneratorCompletionInterface {
  rating: number;
}
