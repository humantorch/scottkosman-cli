import { describe, it, expect } from '@jest/globals';
import { menuItems } from './menuItems';

describe('menuItems', () => {
  it('should contain all expected items in the correct order', () => {
    // Names in order (update if you change menu order)
    const expectedNames = [
      '💻 scottkosman.com',
      '⚙️ blackglass.me',
      '📝 Blog',
      '🙋🏻‍♂️ How To Scott',
      '🌐 GitHub Profile',
      '🏢 LinkedIn Profile',
      '🔑 1Password',
      '📜 Current Resume',
      '📸 Instagram',
      '🔧 This CLI Repository',
      '📧 Email Me',
    ];
    expect(menuItems.map(item => item.name)).toEqual(expectedNames);
  });

  it('should have correct values for the CLI repo and email links', () => {
    const repo = menuItems.find(item => item.name.includes('CLI Repository'));
    const email = menuItems.find(item => item.name.includes('Email'));
    expect(repo).toBeDefined();
    expect(repo?.value).toBe('https://github.com/humantorch/scottkosman-cli');
    expect(email).toBeDefined();
    expect(email?.value).toBe('mailto:kosman.scott@gmail.com');
  });

  it('should have a description for every item', () => {
    for (const item of menuItems) {
      expect(typeof item.description).toBe('string');
      expect(item.description?.length).toBeGreaterThan(0);
    }
  });
}); 