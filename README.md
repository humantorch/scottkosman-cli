# Scott Kosman CLI

A modern, interactive command-line interface built with TypeScript that showcases Scott Kosman's professional information and provides quick access to external links.

## 🚀 Features

- **Interactive Welcome Experience**: Beautiful ASCII art with gradient styling and terminal image display
- **Quick Links Menu**: Selectable list of external URLs that open in your default browser
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
- Welcome message with project information
- Interactive menu of external links

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

- 📝 **Blog/Website**: Personal website and blog
- 🙋🏻‍♂️ **How To Scott**: Manager README with useful information
- 🌐 **GitHub Profile**: Code repositories and contributions
- 💼 **LinkedIn Profile**: Professional network
- 📸 **Instagram**: Personal updates and photos
- 📧 **Email**: Direct contact via email
- 🔑 **1Password**: Current workplace

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