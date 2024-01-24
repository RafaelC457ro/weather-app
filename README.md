# Weather App

## Description

This is a simple weather app that uses the OpenWeather API to display the current weather
and a 7-day forecast for a given city.
And allows the user to switch between cities and view the weather for each city.
Also, user can change the units of the temperature
between Fahrenheit and Celsius.

## how run the app

Make sure you have [nvm](https://github.com/nvm-sh/nvm) installed or at least node 20.11.0.

```bash
nvm install
nvm use

npm install

npm run dev
```

go to http://localhost:3000

## how run the tests

```bash
npm test
```

## how run the tests with coverage

```bash
npm test -- --coverage
```

## dev notes

- I used Vite.js to build the app, because it's fast and easy to use. But I totally understand if the project
  uses create-react-app or webpack.
- I used Vitest to run the tests, because it's fast and it's pretty similar to Jest. But I totally understand
  if the project uses Jest.
- I used Tailwind CSS to style the app, because it's fast and easy to use. But I totally understand if the
  project uses another CSS framework or even plain CSS or SCSS and CssInJS.
- I used react-query to fetch the data, because it's fast and easy to use. But I totally understand if the
  project uses another library or even plain fetch.

## Author

Rafael Castro
