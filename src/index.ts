#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { version } from '../package.json';
import { showWelcome } from './utils/welcome';
import { initCommand } from './commands/init';
import { infoCommand } from './commands/info';
import { helpCommand } from './commands/help';

const program = new Command();

// Set up the CLI
program
  .name('scottkosman')
  .description('Scott Kosman CLI - A modern command-line interface')
  .version(version, '-v, --version')
  .option('-d, --debug', 'Enable debug mode');

// Add commands
initCommand(program);
infoCommand(program);
helpCommand(program);

// Default action when no command is provided
program.action(async () => {
  await showWelcome();
});

// Handle errors gracefully
program.exitOverride();

try {
  program.parse();
} catch (err) {
  if (err instanceof Error) {
    console.error(chalk.red('Error:'), err.message);
  } else {
    console.error(chalk.red('An unexpected error occurred'));
  }
  process.exit(1);
} 