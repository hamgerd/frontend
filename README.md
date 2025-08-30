# Hamgerd

[![Website](https://img.shields.io/badge/website-hamgerd.ir-blue?style=flat-square)](https://www.hamgerd.ir)
[![TypeScript](https://img.shields.io/badge/code-typescript-blue?style=flat-square)](https://www.typescriptlang.org/)

Hamgerd is a modern web application built with TypeScript, designed for speed, modularity, and developer happiness.  
Visit the live site: [hamgerd.ir](https://www.hamgerd.ir)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (install globally with `npm i -g pnpm`)
- [Docker](https://www.docker.com/) (optional, for containerization)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
pnpm run build
pnpm start
```

### Docker

```bash
docker-compose up --build
```

---

## ⚙️ Configuration

- Copy `.env.example` to `.env` and configure your environment variables.
- See `docker-compose.yml` and `Dockerfile` for container setup.

---

## 🗂️ Project Structure

```
/
├── app/                # Main application source
├── components/         # components of code
├── const/              # Constants and shared config
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── models/             # TypeScript models and interfaces
├── public/             # Static assets
├── tests/              # Test files
├── validator/          # Input validation logic
├── Dockerfile
├── docker-compose.yml
├── package.json
└── ...
```

---

## 🧪 Testing

Run unit and integration tests:

```bash
pnpm run test
```

End-to-end tests with Playwright:

```bash
pnpm exec playwright test
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feat/awesome-feature`)
5. Open a Pull Request

## 🌐 Links

- [Website](https://www.hamgerd.ir)
- [GitHub Repo](https://github.com/j2a1ck/hamgerd)
