const app = document.getElementById('app');

if (app) {
  app.textContent = 'Hello from SnapshotFinder (TypeScript)!';
}

// Expose a simple function for testing
export function greet(name: string) {
  return `Hello, ${name}!`;
}

