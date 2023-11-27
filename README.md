# Countries Wiki

Countries Wiki is a web application that allows users to search for information about countries. It provides details such as country names, capitals and languages.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Deployment](#deployment)
- [Built With](#built-with)

## Features
- Search for detailed information about countries.
- View information such as country names, capitals, regions, languages, and more.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:

   ```
   git clone https://github.com/your-username/countries-wiki.git
   ```
Navigate to the project directory:
```
cd countries-wiki
```
Install dependencies:

```
npm install
```
### Usage
Start the server:
```
npm start
```
Open your browser and visit http://localhost:3001.

Use the search bar to look up information about countries.

## API
The application uses the REST countries API to fetch country information.

## Deployment
The project is deployed using Vercel and Render. The backend is hosted at [https://countries-wiki-backend.vercel.app/](https://countries-wiki-backend.onrender.com/) and the frontend at [https://countries-wiki-frontend.vercel.app/](https://countries-wiki-frontend.vercel.app/).

## Built with
- Node.js
- Express
  - Axios
  - cors
- React
