import { Command } from 'commander';
import chalk from 'chalk';
import boxen from 'boxen';
import { version } from '../../package.json';

export function infoCommand(program: Command): void {
  program
    .command('info')
    .description('Display information about the Scott Kosman CLI')
    .action(() => {
      const info = boxen(
        `${chalk.bold.cyan('Scott Kosman CLI')}\n\n` +
        `${chalk.gray('Version:')} ${chalk.white(version)}\n` +
        `${chalk.gray('Node.js:')} ${chalk.white(process.version)}\n` +
        `${chalk.gray('Platform:')} ${chalk.white(process.platform)}\n` +
        `${chalk.gray('Architecture:')} ${chalk.white(process.arch)}\n\n` +
        `${chalk.gray('Built with modern tools:')}\n` +
        `${chalk.blue('• TypeScript')}\n` +
        `${chalk.blue('• Commander.js')}\n` +
        `${chalk.blue('• Chalk for styling')}\n` +
        `${chalk.blue('• Inquirer for prompts')}\n` +
        `${chalk.blue('• Ora for spinners')}\n\n` +
        `${chalk.yellow('GitHub:')} https://github.com/humantorch/scottkosman-cli`,
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'cyan',
        }
      );

      console.log(info);
    });
} 