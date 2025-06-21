import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import { showWelcome } from '../utils/welcome';

export function initCommand(program: Command): void {
  program
    .command('init')
    .description('Initialize and set up the Scott Kosman CLI')
    .action(async () => {
      await showWelcome();
      
      console.log(chalk.blue('🚀 Initializing Scott Kosman CLI...\n'));

      const spinner = ora('Setting up your environment...').start();

      try {
        // Simulate some setup work
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        spinner.succeed('Environment setup complete!');

        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What\'s your name?',
            default: 'Developer',
          },
          {
            type: 'list',
            name: 'theme',
            message: 'Choose your preferred theme:',
            choices: ['Light', 'Dark', 'Auto'],
            default: 'Auto',
          },
          {
            type: 'confirm',
            name: 'notifications',
            message: 'Enable notifications?',
            default: true,
          },
        ]);

        console.log(chalk.green('\n✅ Setup complete!'));
        console.log(chalk.gray(`Welcome, ${answers.name}!`));
        console.log(chalk.gray(`Theme: ${answers.theme}`));
        console.log(chalk.gray(`Notifications: ${answers.notifications ? 'Enabled' : 'Disabled'}`));
        
        console.log(chalk.yellow('\n💡 Tip: Run "scottkosman --help" to see all available commands'));
        
      } catch (error) {
        spinner.fail('Setup failed');
        console.error(chalk.red('Error during setup:'), error);
      }
    });
} 