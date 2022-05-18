# GPT3 Text Completion Prompt

## Features

### GPT Engine Setting / Prompt Input

![Alt text](./readme_img/readme_prompt_input_01.gif?raw=true "Title")

User can choose a desired engine among 4 engines that OpenAI provides and set request parameters.
[GPT3 Engines](https://www.notion.so/ccff8b15cdc44b9580128774ec3084d0)

| LATEST ENGINE    | DESCRIPTION                                                                                                                                                                        | MAX REQUEST  | TRAINING DATA  |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|----------------|
| text-davinci-002 | Most capable GPT-3 model. Can do any task the other models can do, often with less context. In addition to responding to prompts, also supports inserting completions within text. | 4,000 tokens | Up to Jun 2021 |
| text-curie-001   | Very capable, but faster and lower cost than Davinci.                                                                                                                              | 2,048 tokens | Up to Oct 2019 |
| text-babbage-001 | Capable of straightforward tasks, very fast, and lower cost.                                                                                                                       | 2,048 tokens | Up to Oct 2019 |
| text-ada-001     | Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.                                                                                      | 2,048 tokens | Up to Oct 2019 |

### Responses

![Alt text](./readme_img/readme_prompt_response_01.gif?raw=true "Title")
The text completion results are temporally saved in `Reponse` list. User can copy the prompt or response text on
clipboard.

### Archiving

![Alt text](./readme_img/readme_archive_01.gif?raw=true "Title")
Archived text completion results are displayed on `Archive` page. User can edit the list of the archived items and rate
each completion result.

## Structures

```
src
├─ app
│  ├─ app-routing.module.ts
│  ├─ app.component.html
│  ├─ app.component.scss
│  ├─ app.component.spec.ts
│  ├─ app.component.ts
│  ├─ app.module.ts
│  ├─ core
│  │  ├─ core.module.ts
│  │  ├─ guards
│  │  │  └─ auth.guard.ts
│  │  ├─ helpers
│  │  │  ├─ error.interceptor.ts
│  │  │  ├─ fake-backend.ts
│  │  │  └─ jwt.interceptor.ts
│  │  ├─ models
│  │  │  └─ auth.models.ts
│  │  └─ ...
│  ├─ layouts
│  │  └─ ...
│  ├─ pages
│  │  ├─ form
│  │  │  └─ ...
│  │  ├─ icons
│  │  │  └─ ...
│  │  ├─ pages-routing.module.ts
│  │  ├─ pages.module.ts
│  │  ├─ text-generator
│  │  │  ├─ archive
│  │  │  │  └─ ...
│  │  │  ├─ components
│  │  │  │  ├─ text-generator-archive-card
│  │  │  │  └─ ...
│  │  │  ├─ prompt
│  │  │  │  └─ ...
│  │  │  ├─ services
│  │  │  │  └─ ...
│  │  │  ├─ text-generator-home
│  │  │  │  └─ ...
│  │  │  ├─ text-generator-routing.module.ts
│  │  │  ├─ text-generator.data.ts
│  │  │  ├─ text-generator.model.ts
│  │  │  └─ text-generator.module.ts
│  │  ├─ ui
│  │  │  └─ ...
│  │  └─ utility
│  │     └─ ...
│  └─ shared
│     └─ ...
├─ assets
├─ environments
│  ├─ environment.prod.ts
│  └─ environment.ts
├─ favicon.ico
├─ index.html
├─ main.ts
├─ polyfills.ts
├─ styles.scss
└─ test.ts
```

- `src/app/layout`: application top bar and side navigation bar
- `src/app/pages`: page module wrapping text-generater module and enabling lazy loading
  - `src/app/text-generator`
    - `src/app/text-generator/archive`: `Archive` page component
    - `src/app/text-generator/prompt`: `Prompt` page component
    - `src/app/text-generator/servicies`: including api, alert, localStorage services
    - `src/app/text-generator/components`: including the components shared in `Archive` and `Prompt` page
  - `src/app/form`: form components
  - `src/app/ui`: ui components

## Angular 13 Setting

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
