import { RequestNode, RequestGraph, DomainTerm, ConceptRelationship } from '../types/interfaces.js';

// Basic frontend app that demonstrates the interfaces are working
class App {
  private appElement: HTMLElement;

  constructor() {
    this.appElement = document.getElementById('app')!;
    this.init();
  }

  private init(): void {
    // Create a sample RequestNode to verify interfaces work
    const sampleNode: RequestNode = {
      id: 'test-node-1',
      text: 'Sample request node',
      type: 'root',
      children: [],
      reasoning: 'This is a test node to verify TypeScript interfaces',
      domainTerms: ['test', 'sample'],
      createdAt: new Date(),
      metadata: {
        complexity: 1,
        confidence: 0.9,
        decompositionAttempts: 1
      }
    };

    // Update the UI to show the app is working
    this.appElement.innerHTML = `
      <h1>Request Decomposition System</h1>
      <p>✅ Frontend application loaded successfully</p>
      <p>✅ TypeScript interfaces imported and working</p>
      <details>
        <summary>Sample RequestNode (click to expand)</summary>
        <pre>${JSON.stringify(sampleNode, null, 2)}</pre>
      </details>
    `;

    console.log('App initialized with sample node:', sampleNode);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});