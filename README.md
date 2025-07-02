# Image API

A simple API to generate PNG images with text using Node.js, Express, and Canvas.

---

## Technologies Used

- Node.js  
- TypeScript  
- Express  
- Canvas (library for image creation)  
- Jest (for testing)  

---

## Features

- Generates a PNG image with the text sent in the POST `/generate` request body.  

---

## How to Use

### Install dependencies

```bash
npm install
```

### Run the API locally

```bash
npm run start
```

### Send a request to generate an image

Endpoint: `POST /generate`

Example JSON request body:

```json
{
  "text": "Hello, world!"
}
```

Response: PNG image generated with the provided text.

### Tests

Run tests with:

```bash
npm test
```

---

## Project Structure

- `src/controllers` - logic for the image generation endpoint.  
- `src/routes` - API route definitions.  
- `src/services` - function that creates the text image.  
- `src/tests` - automated tests.  
- `dist` - transpiled code (do not commit this folder).  

---

## Author

Diogo Rodrigues  
[GitHub](https://github.com/DiogoABRodrigues)  
[LinkedIn](https://www.linkedin.com/in/diogo-rodrigues-9b08b3339/)

---



