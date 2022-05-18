import pkg from 'webpack';
const { DefinePlugin } = pkg;

import { config } from 'dotenv';
config();

export default {
  plugins: [
    new DefinePlugin({
      $ENV: {
        GPT3_API_KEY: JSON.stringify(process.env.GPT3_API_KEY),
      },
    }),
  ],
}
