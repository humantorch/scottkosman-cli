# Scott Kosman CLI

[![npm version](https://img.shields.io/npm/v/scottkosman.svg)](https://www.npmjs.com/package/scottkosman)
[![npm downloads](https://img.shields.io/npm/dm/scottkosman.svg)](https://www.npmjs.com/package/scottkosman)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node Version](https://img.shields.io/node/v/scottkosman.svg)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/humantorch/scottkosman-cli/pulls)

A modern, interactive command-line interface built with TypeScript that showcases Scott Kosman's professional information and provides quick access to external links.

## 🚀 Features

- **Interactive Welcome Experience**: Beautiful ASCII art with gradient styling and terminal image display
- **Professional Bio**: Displays Scott's current role and background information
- **Quick Links Menu**: Selectable list of external URLs that open in your default browser
- **Persistent Menu**: Loop back to the menu after opening links - no need to restart
- **Modern CLI Architecture**: Built with TypeScript, Commander.js, and modern Node.js practices
- **Professional Branding**: Custom styling with chalk, figlet, and gradient effects

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g scottkosman
```

### Run with npx (No Installation Required)

```bash
npx scottkosman
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/humantorch/scottkosman-cli.git
cd scottkosman-cli

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev
```

## 🎯 Usage

### Default Experience

Simply run the CLI without any arguments to get the full interactive experience:

```bash
scottkosman
```

This will display:
- Scott's profile image
- ASCII art title with gradient effects
- Professional bio and background information
- Interactive menu of external links (loops until you choose to exit)

### Available Commands

```bash
# Show help information
scottkosman --help

# Display version
scottkosman --version

# Show enhanced help
scottkosman help

# Display CLI information
scottkosman info

# Initialize CLI (if needed)
scottkosman init
```

## 🔗 Quick Links

The CLI provides easy access to:

- 💻 **scottkosman.com**: Visit my personal website
- 📝 **Blog**: Blog posts I've written on leadership, management, and surviving in tech
- 🙋🏻‍♂️ **How To Scott**: My "Manager README", useful info if you currently do or want to work with/for me
- 🌐 **GitHub Profile**: If you're reading this you probably already know what GitHub is
- 🏢 **LinkedIn Profile**: Join my Professional Network™
- 🔑 **1Password**: Where I work
- 📜 **Current Resume**: Check out what I've done in the past
- 📸 **Instagram**: See what I had for lunch
- 🔧 **This CLI Repository**: See how this CLI was built (TypeScript, Commander.js, etc.)
- 📧 **Email Me**: Email? In 2025? I do check this, I promise

## 👨‍💼 About Scott

Halifax-based Engineering Manager at 1Password, 25+ year vet of the technology, marketing, and digital strategy world. A recovering front-end developer who pivoted to management back in 2014, I now enjoy leading teams building the next generation of stuff you do on this "internet" thing. He/him.

## 🛠️ Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Scripts

```bash
# Build the project
npm run build

# Run in development mode
npm run dev

# Start the built version
npm start

# Clean build artifacts
npm run clean

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### Running Tests

This project uses [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/) for testing.

```bash
npm test
```

- Tests are located in `src/**/*.test.ts`
- Menu logic and data are tested in isolation for reliability
- To add more tests, create additional `*.test.ts` files

### Publishing

The project includes automated publishing scripts:

```bash
# Publish with patch version bump (1.0.0 -> 1.0.1)
npm run publish:patch

# Publish with minor version bump (1.0.0 -> 1.1.0)
npm run publish:minor

# Publish with major version bump (1.0.0 -> 2.0.0)
npm run publish:major

# Or use the script directly
./scripts/publish.sh patch
```

These scripts will:
1. Bump the version number
2. Build the project
3. Publish to npm
4. Create a git tag
5. Push changes to GitHub

### Project Structure

```
scottkosman-cli/
├── src/
│   ├── commands/          # CLI commands
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── index.ts           # Main entry point
├── assets/                # Static assets (images, etc.)
├── dist/                  # Built JavaScript files
└── package.json
```

## 🎨 Technologies Used

- **TypeScript**: Type-safe JavaScript development
- **Commander.js**: CLI framework
- **Chalk**: Terminal styling and colors
- **Inquirer**: Interactive command-line interfaces
- **Figlet**: ASCII art text
- **Gradient-string**: Beautiful gradient effects
- **Boxen**: Terminal boxes and borders
- **Terminal-image**: Display images in terminal
- **Open**: Open URLs in default browser

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Website**: [scottkosman.com](https://scottkosman.com)
- **Email**: kosman.scott@gmail.com
- **GitHub**: [@humantorch](https://github.com/humantorch)
- **LinkedIn**: [Scott Kosman](https://linkedin.com/in/scottkosman)

---

Made with ❤️ by Scott Kosman 
