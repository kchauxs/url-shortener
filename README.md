<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# URL-Shortener ✂️ 🔗

A simple URL shorte

## Technologies👨‍💻

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeORM](https://typeorm.io/)
- [Nano-ID](https://www.npmjs.com/package/nanoid)
- [Class-validator](https://www.npmjs.com/package/class-validator)
- [Class-transformer](https://www.npmjs.com/package/class-transformer)

## Feactures 🦸

- [x] Shorten a URL
- [x] Return shortened URL
- [x] Seed
- [x] Swagger documentation
- [x] Dockerfile

## Install

1. Clone project
2. `yarn install`
3. Clone the `.env.template` file and rename it to `.env`
4. Change environment variables
5. Running the app `yarn start:dev`

## Install on docker

Build the image

```bash
docker build -t url-shortener-api .
```

Create a container based on the image

```bash
docker run -p 3033:3033 -d --name my-api url-shortener-api
```

## Run SEED

```bash
curl -X 'GET' 'http://localhost:3033/api/v1/seed' -H 'accept: */*'
```

## Swagger documentation

```bash
http://localhost:3033/api
```
