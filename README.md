
Built by https://www.blackbox.ai

---

# Neobrutalist Portfolio

## Project Overview
Neobrutalist Portfolio is a web application built using Svelte and Vite, designed to showcase projects and skills in a modern and visually striking manner. This portfolio utilizes the Neobrutalism design aesthetic, leveraging Tailwind CSS for styling and responsive designs.

## Installation
To get started with this project, ensure that you have [Node.js](https://nodejs.org/) installed on your machine. Then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/neobrutalist-portfolio.git
   cd neobrutalist-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
After installing the dependencies, you can start the development server:

```bash
npm run dev
```

This command runs the app in development mode. Open your browser and navigate to `http://localhost:8000` to see your portfolio live.

To build the project for production, use:

```bash
npm run build
```

You can also preview the production build with:

```bash
npm run preview
```

## Features
- **Neobrutalist Design**: A unique aesthetic approach that combines vintage boldness with modern functionality.
- **Responsive Layout**: Built with Tailwind CSS to ensure the portfolio looks great on all devices.
- **Svelte Framework**: Fast, lightweight framework enabling reactive and component-based architecture.
- **Vite Build Tool**: Offers a fast development experience with hot module replacement.

## Dependencies
The project uses the following dependencies listed in `package.json`:

```json
"devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^2.4.2",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "svelte": "^4.0.5",
    "tailwindcss": "^3.3.2",
    "vite": "^4.4.5"
}
```

## Project Structure
Here is an overview of the directory structure of the project:

```
neobrutalist-portfolio/
├── index.html               # The main HTML file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Lock file with installed versions of dependencies
├── vite.config.js           # Configuration for Vite
└── src/
    └── main.js              # Main JavaScript file where the app starts
```

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.