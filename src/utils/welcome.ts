import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
// import boxen from 'boxen'; // Uncomment when using the info box
import terminalImage from 'terminal-image';
import path from 'path';
import fs from 'fs';
import inquirer from 'inquirer';
import open from 'open';

interface MenuItem {
  name: string;
  value: string;
  description?: string;
}

const menuItems: MenuItem[] = [
  {
    name: '💻 scottkosman.com',
    value: 'https://scottkosman.com',
    description: 'Visit my personal website'
  },
  {
    name: '🙋🏻‍♂️ How To Scott',
    value: 'https://scottkosman.com/post/readme/',
    description: 'My "Manager README", useful info if you currently do or want to work with/for me'
  },
  {
    name: '🌐 GitHub Profile',
    value: 'https://github.com/humantorch',
    description: 'If you\'re reading this you probably already know what GitHub is'
  },
  {
    name: '🏢 LinkedIn Profile',
    value: 'https://linkedin.com/in/scottkosman',
    description: 'Join my Professional Network™'
  },
  {
    name: '🔑 1Password',
    value: 'https://1password.com',
    description: 'Where I work'
  },
  {
    name: '📜 Current Resume',
    value: 'https://docs.google.com/document/d/1gcEzsNHWAllGH9mt6bfjie900B-rQNiatwdHiRj_Yog/edit?tab=t.0#heading=h.f5t1zjbkvcg2',
    description: 'Check out what I\'ve done in the past'
  },
  {
    name: '📸 Instagram',
    value: 'https://instagram.com/humantorch',
    description: 'See what I had for lunch'
  },
  {
    name: '🔧 This CLI Repository',
    value: 'https://github.com/humantorch/scottkosman-cli',
    description: 'See how this CLI was built (TypeScript, Commander.js, etc.)'
  },
  {
    name: '📧 Email Me',
    value: 'mailto:kosman.scott@gmail.com',
    description: 'Email? In 2025? I do check this, I promise.'
  },
];

export async function showWelcome(): Promise<void> {
  // Clear and display everything ONCE
  console.clear();

  // Display image (if available)
  const imagePath = path.join(__dirname, '../../assets/scott.png');
  if (fs.existsSync(imagePath)) {
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      const image = await terminalImage.buffer(imageBuffer, { width: 20, height: 'auto' });
      console.log(image.trim());
    } catch (e) {
      // Ignore image errors, continue
    }
  }

  // Create ASCII art title
  const title = figlet.textSync('Scott Kosman', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  // Apply gradient to the title
  const gradientTitle = gradient(['#ff6b6b', '#4ecdc4', '#45b7d1'])(title);

  // Display everything
  console.log(gradientTitle);

  // Create subtitle
  const subtitle = chalk.bold('Toronto-based Engineering Manager at 1Password, 20+ year vet of the technology,\nmarketing, and digital strategy world. A recovering front-end developer who pivoted\nto management back in 2014, I now enjoy leading teams building the next generation\nof stuff you do on this "internet" thing. He/him.');

  // Create info box (commented out for now, but can be reused later)
  // const info = boxen(
  //   `${chalk.bold('Welcome!')}\n\n` +
  //   `${chalk.gray('This is a modern CLI built with:')}\n` +
  //   `${chalk.blue('• TypeScript')}\n` +
  //   `${chalk.blue('• Commander.js')}\n` +
  //   `${chalk.blue('• Chalk for styling')}\n` +
  //   `${chalk.blue('• Modern Node.js')}\n\n` +
  //   `${chalk.gray('Use')} ${chalk.yellow('scottkosman --help')} ${chalk.gray('to see available commands')}`,
  //   {
  //     padding: 1,
  //     margin: 1,
  //     borderStyle: 'round',
  //     borderColor: 'cyan',
  //   }
  // );

  // Display everything
  console.log(subtitle);
  // console.log(info); // Uncomment this line to show the info box
  console.log();

  // Show interactive menu
  console.log(chalk.cyan('🔗 Quick Links - Select a link to open:\n'));
  try {
    while (true) {
      const { selectedUrl } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedUrl',
          message: 'Choose an option:',
          choices: [
            ...menuItems.map(item => ({
              name: `${item.name}${item.description ? ` - ${item.description}` : ''}`,
              value: item.value
            })),
            new inquirer.Separator(),
            {
              name: '❌ Exit',
              value: 'exit'
            }
          ],
          pageSize: 10
        }
      ]);

      if (selectedUrl === 'exit') {
        console.log(chalk.gray('\n👋 Thanks for using Scott Kosman CLI!'));
        break;
      }

      console.log(chalk.green(`\n🚀 Opening: ${selectedUrl}`));
      await open(selectedUrl);
      console.log(chalk.gray('URL opened in your default browser!'));
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red('Error opening URL:'), error.message);
    } else {
      console.error(chalk.red('An unexpected error occurred'));
    }
  }
} 