# Decap CMS React Demo

This is a demonstration project showcasing the integration of [Decap CMS](https://decapcms.org/) with a [React](https://react.dev/) application built with [Vite](https://vitejs.dev/). The project also includes internationalization using [i18next](https://www.i18next.com/).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sulenchy/decap-cms-react-demo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Development

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173/`.

## Decap CMS

The Decap CMS admin interface is available at `http://localhost:5173/admin/`.

The configuration for the CMS is located in `public/admin/config.yml`. It is configured to use a GitHub backend.

## Internationalization

This project uses [i18next](https://www.i18next.com/) for internationalization. The language files are located in the `public/locales` directory.

The supported languages are English, French, and German.

To add a new language:

1.  Add the language to the `supportedLngs` array in `src/i18n.js`.
2.  Create a new directory for the language in `public/locales`.
3.  Create a `translation.json` file in the new language directory.
4.  Add the new language to the `collections` in `public/admin/config.yml`.