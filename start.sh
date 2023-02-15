#!/bin/bash


# 启动ChatGPT service
pid=`ps -ef|grep conversionService.ts|grep loader.js|awk '{print $2}' `  
if [ "${pid}" ]; then
    kill -9 ${pid}
fi
cd $(dirname "$0")
cd ChatGPT/node-api
npm install
npx tsx conversionService.ts&


# 启动Client
cd ../../Client
rm -rf .venv
python -m venv .venv

source .venv/bin/activate

python -m pip install -r requirements.txt
python client.py
