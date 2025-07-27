# Source Code Structure

## Directory Organization

### `/types`
Core TypeScript interfaces and type definitions used throughout the application.

### `/frontend`
Lit web components and frontend-specific code.
- `/components` - Reusable Lit components

### `/backend`
Backend application code following hexagonal architecture.
- `/core` - Domain logic and use cases
- `/adapters` - External integrations (Claude CLI, Database)

## Build Process

The TypeScript compiler (`tsc`) compiles all source files to the `/dist` directory, maintaining the same folder structure.