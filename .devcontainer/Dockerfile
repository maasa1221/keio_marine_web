FROM node:20-bullseye

# 必要なパッケージのインストール
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの設定
WORKDIR /workspace

# corepackを使用してyarnを有効化
RUN corepack enable yarn

# 開発に便利なツールをyarnでインストール
RUN yarn global add typescript ts-node nodemon

# ユーザーを切り替え
USER node
