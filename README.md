# Aurora Framework

A modern framework for building both web and native applications using AstroJS, React, TailwindCSS, and Nanostores.

## Project Structure

```
.
├── apps/
│   ├── web/          # Web application (Astro + React)
│   └── native/       # Native application (Tauri + Astro)
├── packages/
│   └── ui/           # Shared UI components
└── package.json      # Root package configuration
```

## Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)
- Rust (for native app development)

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Compile the local UI package:

   ```bash
   cd packages/ui && pnpm build
   ```

3. Start the web application:

   ```bash
   pnpm dev:web
   ```

4. Start the native application:

   ```bash
   pnpm dev:native
   ```

## Features

- **Shared UI Components**: Reusable components in the `packages/ui` directory
- **State Management**: Using Nanostores for efficient state management
- **Styling**: TailwindCSS for consistent styling across platforms
- **Type Safety**: Full TypeScript support

## Development

### Web Application

The web application is built with AstroJS and React, providing a fast and modern web experience.

### Native Application

The native application uses Tauri to create a desktop application with native capabilities while sharing code with the web version.

## Building

- Build web application:

  ```bash
  pnpm build:web
  ```

- Build native application:

  ```bash
  pnpm build:native
  ```

## License

MIT
