Movie List Application
=============================

The application provides various features such as listing movies, pagination, search functionality, filtering by release year and type, and viewing detailed information about each movie.


Installation
------------

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
   ` git clone <repository-url>`
2. Navigate to the project directory:
   `cd ia-frontend-test-case`
3. Install dependencies using npm:
   `pnpm install`

4. Generate API key (www.omdbapi.com/apikey.aspx) and set VITE_OMDB_API_KEY inside `.env.example`

5. Change name `.env.example` to `.env`

Usage
-----

To start the development server and view the application in your browser, run:

`  pnpm start   `

This will start the development server and open the application in your default web browser.

Features
--------

* List movies in a table/grid with columns for name, release date, and IMDb ID.

* Pagination to display 10 movies per page.

* Search functionality to search for movies by name.

* Filter movies by release year.

* Filter movies by type (movie, TV series, or TV series episodes).

* View detailed information about each movie, including poster, title, duration, genre, director, cast, and IMDb rating.

* Responsive design for mobile and desktop devices.

Technologies
-----------------

* React.js

* Legend State

* React Query

* Shadcn/ui

* React Router

* Axios

* TypeScript

* Tailwind


License
-------

This project is licensed under the MIT License.