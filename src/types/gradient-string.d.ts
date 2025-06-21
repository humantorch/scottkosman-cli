declare module 'gradient-string' {
  function gradient(colors: string[]): (text: string) => string;
  export = gradient;
} 