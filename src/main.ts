/*
 * @Author: Allen OYang
 * @Email:  allenwill211@gmail.com
 * @Date: 2023-09-02 11:53:15
 * @LastEditTime: 2023-09-02 13:57:44
 * @LastEditors: Allen OYang allenwill211@gmail.com
 * @FilePath: /node-langchain/src/main.ts
 */
// import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PromptTemplate } from 'langchain/prompts';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 });

const chat = new ChatOpenAI({ temperature: 0 });

async function init() {
  obtainTemplate();

  // const template = 'What is a good name for a company that makes {product}?';

  // const prompt = new PromptTemplate({
  //   template: template,

  //   inputVariables: ['product'],
  // });
}

/**
 * 查找对应的模版文件
 */
async function obtainTemplate() {
  const templatePath = path.join(__dirname, '../prompt_templates');
  const templateName = process.argv[2];

  if (!templateName) {
    console.error('Please provide the template name.');
    process.exit(1);
  }

  const templateFile = path.join(templatePath, `${templateName}.ts`);

  fs.access(templateFile, fs.constants.F_OK, async (err) => {
    if (err) {
      console.error(`Template file ${templateName}.ts does not exist.`);
      process.exit(1);
    }

    // 运行对应的模板文件
    const { default: template } = await import(templateFile);
    runTemplate(template);
  });
}

async function runTemplate(template: any) {
  const response = await chat.call([new SystemChatMessage(template.system), new HumanChatMessage(template.human)]);
  console.log(response.content);
}

init();
