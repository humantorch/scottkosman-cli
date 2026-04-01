export interface MenuItem {
  name: string;
  value: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  {
    name: '💻 scottkosman.com',
    value: 'https://scottkosman.com',
    description: 'Visit my personal website'
  },
  {
    name: '📝 Blog',
    value: 'https://scottkosman.com/post/blog/',
    description: 'Blog posts on leadership, management, and surviving in tech'
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
    value: 'https://docs.google.com/document/d/1gcEzsNHWAllGH9mt6bfjie900B-rQNiatwdHiRj_Yog/edit?usp=sharing',
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
    description: 'Email? In 2026? I do check this, I promise.'
  },
]; 