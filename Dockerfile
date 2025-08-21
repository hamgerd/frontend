FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

USER node

CMD ["pnpm", "start", "-p", "3000", "-H", "0.0.0.0"]