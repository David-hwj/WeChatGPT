from configparser import ConfigParser

CONFIG = ConfigParser()
CONFIG.read("config.ini", encoding="utf-8")

if __name__ == '__main__':
    for config in CONFIG:
        print(config)