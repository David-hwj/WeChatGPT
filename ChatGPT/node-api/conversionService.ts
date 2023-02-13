import express from 'express';
import * as url from 'url';
import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'
import { ChatGPTAPI } from './src'

dotenv.config()

const app = express();
const port = 3000;

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    debug: false
  })

async function chat(prompt, conversationId, parentMessageId) {
    let res;
    if(conversationId==null){
        res = await oraPromise(
            api.sendMessage(prompt), {text: prompt});
    }else{
        res = await oraPromise(
            api.sendMessage(prompt, {
              conversationId: conversationId,
              parentMessageId: parentMessageId
            }),
            {
              text: prompt
            }
          )
    }
    return res;
    
}

app.get('/', (req, res) => {
    const queryData = url.parse(req.url, true).query;

    console.log(queryData);

    chat(queryData.prompt, queryData.conversationId, queryData.parentMessageId).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })

});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
