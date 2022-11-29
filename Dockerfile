FROM node:18
RUN npm install -g @angular/cli
USER node
EXPOSE 4200 4200
ENV NG_CLI_ANALYTICS=ci
