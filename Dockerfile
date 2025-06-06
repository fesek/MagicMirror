FROM node:22
#FROM arm32v7/node:22

RUN set -e; \
    apt update; \
    apt install -y gettext; \
    rm -rf /var/lib/apt/lists/*

ARG branch=master

ENV NODE_ENV production
WORKDIR /opt/magic_mirror

RUN git clone --depth 1 -b ${branch} https://github.com/fesek/MagicMirror.git .
RUN rm -rf modules /opt/default_modules
RUN rm -rf config /opt/default_config
RUN npm install --unsafe-perm --silent

COPY config/ ./config/
COPY modules/ ./modules/
COPY css/ ./css/

EXPOSE 8080
CMD ["node", "serveronly"]
