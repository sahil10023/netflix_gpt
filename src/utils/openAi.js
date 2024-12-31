import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    project: "proj_t6gn7onPKAKUrrG3Snm17fLV",
    organization: "org-X8rrQiAdacO1QEiomIC0UnZn",
    dangerouslyAllowBrowser: true,
    maxRetries: 1, // This is the default and can be omitted
});

export default openai;