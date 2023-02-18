# WeChatGPT

快速将ChatGPT接入你的微信

# Overview

使用这个项目能快速将ChatGPT接入你的微信，让你的微信好友或群聊能直接和ChatGPT对话。

# Usage

## Prerequisite

1. windows(windows server or PC)
2. python 3.8+
3. node 18+

## Startup

### Step1 Start Wechat Hook Server

1. download [Wechat3.6.0.18](https://pan.baidu.com/s/1X2_gAKVi6QEiFqAgnFHJ3g?pwd=nkv6)
2. double click **Server/funtool_3.6.0.18-1.0.0013非注入版**.exe to run Wechat hook
3. fill a port(default is 5555) in popup window and click start button

### Step2 Start ChatGPT service

1. install npm package, run:`cd ChatGPT/node-api & npm install`
2. config your ChatGPT ApiKey in **ChatGPT/node-api/.env** , you can generate your ApiKey in: https://platform.openai.com/account/api-keys
3. start ChatGPT service, run:`npx tsx conversionService.ts`

### Step3 Start Process Client

1. prepare python environment, run:`cd Client & python -m venv .venv`
2. activate python virtual environment

   1. if you are running in Linux/MacOS, run: `source .venv/bin/activate`
   2. if you are running in Windows, double click to run **Client/.venv/bin/Activate.ps1**
3. install python package, run:`pip3 install -r requirements.txt`
4. config the IP and port of Wechat Hook Server in **Client/config.txt** start client, run:`python client.py`

## Reference

Wechat Hook service from: https://github.com/cixingguangming55555/wechat-bot/

ChatGPT service from: https://github.com/transitive-bullshit/chatgpt-api
