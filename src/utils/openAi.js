import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openAi = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openAi