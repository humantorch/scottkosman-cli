import { Command } from 'commander';
import chalk from 'chalk';
import boxen from 'boxen';

export function helpCommand(program: Command): void {
  program
    .command('help')
    .description('Show enhanced help information')
    .action(() => {
      const help = boxen(
        `${chalk.bold.cyan('Scott Kosman CLI Help')}\n\n` +
        `${chalk.gray('Available Commands:')}\n\n` +
        `${chalk.yellow('init')}     ${chalk.gray('Initialize and set up the CLI')}\n` +
        `${chalk.yellow('info')}     ${chalk.gray('Display CLI and system information')}\n` +
        `${chalk.yellow('help')}     ${chalk.gray('Show this help message')}\n\n` +
        `${chalk.gray('Global Options:')}\n` +
        `${chalk.yellow('-v, --version')}  ${chalk.gray('Show version number')}\n` +
        `${chalk.yellow('-d, --debug')}    ${chalk.gray('Enable debug mode')}\n\n` +
        `${chalk.gray('Examples:')}\n` +
        `${chalk.blue('scottkosman init')}     ${chalk.gray('Set up your environment')}\n` +
        `${chalk.blue('scottkosman info')}     ${chalk.gray('Show system information')}\n` +
        `${chalk.blue('scottkosman --help')}   ${chalk.gray('Show standard help')}\n\n` +
        `${chalk.gray('For more information, visit:')}\n` +
        `${chalk.blue('https://github.com/humantorch/scottkosman-cli')}`,
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'cyan',
        }
      );

      console.log(help);
    });
} 