import requests
import json



chaturl = "http://localhost:3000/"
param = {"prompt": "", "conversationId": "112", "parentMessageId": "11"} 

conversationIdDict = {}
parentMessageIdDict = {}

def ask(wxid: str, prompt: str)-> str:
    param = {"prompt": prompt}

    if conversationIdDict.__contains__(wxid):
        param['conversationId'] = conversationIdDict[wxid]
        param['parentMessageId'] = parentMessageIdDict[wxid]

    
    res = requests.get(url=chaturl, params=param)

    data = json.loads(res.text)
    
    conversationIdDict[wxid] = data['conversationId']
    parentMessageIdDict[wxid] = data['parentMessageId']

    return data['text']

if __name__ == '__main__':
    print(ask("", "hello"))