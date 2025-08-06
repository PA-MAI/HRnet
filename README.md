# HRNet : Create an employee table app

Welcome to HRnet! This is our company's internal application to create and view employee records.

The HRNet app was originally developed in jQuery, migrated to React at the request of the Technology Department of the financial company WealthHealth. It allows, with the help of an external library, to create a list of employees in a table from a form.

## Identity card

- **Name**: `HRNet`
- **Version**: `1.0.1`
- **Author**: `Pa-Mai`

## Objectives

- Reproduce existing functionality (form + table).
- Improve performance (Lighthouse, SEO).
- Modernize the code with React + Vite.
- Create reusable components and publish a component as an npm package.

## Technologies

- **React** (with Vite)
- **React Router**
- **Redux Toolkit** (state management)
- **Custom Components** :
  - Modal
  - Library react-Drpdwn-ui ( for State and Department)
  - DataTable
- **Lighthouse** (performance audit)
- **ESLint**

### NPM package

[react-drpdwn-ui on npm](https://www.npmjs.com/package/react-drpdwn-ui)

## Contribute to the project

HRNet is an OpenClassRooms project. Feel free to fork the source and contribute with your own features.

## Project structure

src/
components/ → Reusable components
pages/ → Main pages (Create, List)
redux/ → Redux Store & slices
assets/ → Logos, styles, etc.
main.jsx → Entry point

## Install

### Clone the repo

```bash
git clone https://github.com/PA-MAI/hrnet.git

cd hrnet
```

### Install dependencies

```bash
npm install
```

### Install external dropdown library

 ```bash
npm install react-drpdwn-ui
```

#### Display app in dev mode on LOCALHOST:5173

 ```bash
npm run dev
```

#### to rebuild the app in production mode

```bash
npm run build
```

#### Run with optimized performance in prod mode on LOCALHOST:4173

```bash
npm run preview
```

## Audit

Lighthouse results with npm run preview following the build:

| Category       | Score |
| -------------- | ----- |
| Performance    | 100   |
| Accessibility  | 100   |
| Best practices | 100   |
| SEO            | 91+   |

Possible improvements:
Adding unit tests (Vitest or Jest)

## Licensing

Copyright (C) 2025 by WealthHealth company·
Released under the terms of the Creative Commons Licence
