FROM node:18

WORKDIR /app

COPY . .

# ✅ Add this line to fix OpenSSL issue
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
