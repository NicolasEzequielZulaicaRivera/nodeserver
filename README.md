# Node Server

## Running the server

- Development: `npm run dev`
- Production: `npm start`
- Production Container: `docker-compose up`

### Configuration

- Default port : `8080`

### Documentation

Documentation will be generated at `{app}/api-docs`

- Swagger [ [Example](https://petstore.swagger.io/) ]
- Automatic Documentation [ [Tutorial](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do) ]

### Docker

- Build : `docker build -t nodeserver .`
- Run : `docker run -p 8080:8080 nodeserver`
- Compose: `docker-compose up`

### Workflow - CI/CD

- Cancel Redundant Deploys
- Setup ( Checkout Repo , Install Node & Dependencies )
- Run Linter
- Run Tests
- Upload to heroku

#### Upload to Heroku

The pipeline deploys the server automatically on pushing to **master**

You'll need to set the following actions secrets:

- `HEROKU_NAME`: App name
- `HEROKU_EMAIL`: Account email
- `HEROKU_API_KEY`: Account API key

##### Generating API Key

```
$ heroku login
$ heroku authorizations:create
```

use token from created auth

## Resources

- [Node-Express](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [Autogenerate Docs](https://www.youtube.com/watch?v=apouPYPh_as)
- [Docker](https://www.youtube.com/watch?v=gAkwW2tuIqE)
- [CI/CD](https://youtu.be/sIhm4YOMK6Q) [ [playlist](https://www.youtube.com/playlist?list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7) | [fullstackopen](https://fullstackopen.com/en/) ]
