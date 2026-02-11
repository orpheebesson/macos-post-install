# Contributing to macOS Post-Install Script Generator

Thanks for contributing to this project. Please read these guidelines before contributing.

## Table of contents

- [Getting started](#getting-started)
- [Development setup](#development-setup)
- [Project structure](#project-structure)
- [How to contribute](#how-to-contribute)
- [Code style guidelines](#code-style-guidelines)
- [Commit convention](#commit-convention)
- [Pull request](#pull-request)
- [Labels](#labels)

## Getting started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/macos-post-install.git`
3. Create a new branch: `git checkout -b feat/your-feature-name`

## Development setup

### System requirements

Before you begin, make sure your development environment meets the following requirements:

- Node.js: 20.9 or higher
- Operating systems: macOS, Windows (including WSL), and Linux

### Installation

```bash
cd macos-post-install
npm install
```

### Run the development server

1. Run `npm run dev` to start the development server
2. Visit `http://localhost:3000` to view your application

### Build the app

```bash
npm run build
```

## Project structure

```
macos-post-install/
├── .github/
│   └── ISSUE_TEMPLATE/      # Issue templates
├── app/
│   ├── components/          # Components
│   │   ├── atoms/           # Smallest, indivisible UI elements (buttons, inputs, icons, text, etc.)
│   │   ├── moles/           # Simple combinations of atoms forming a single, focused component
│   │   └── organisms/       # Complex components composed of multiple molecules and atoms
│   ├── context/             # Context providers
│   ├── data/
│   │   ├── apps.ts          # App definitions
│   │   └── categories.ts    # Category definitions
│   ├── hooks/               # Custom hooks
│   ├── types/               # Type definitions
│   └── utils/               # Utility functions
└── public/                  # Static assets
```

## How to contribute

### Adding app to the catalog

#### App types

```typescript
export type TAppIcon = keyof typeof Icons

export interface IApp {
  id: string
  name: string
  description: string
  icon: {
    value: TAppIcon
    color?: string
  }
  cask: string
  category: TAppCategory
}
```

#### Finding the Homebrew cask token

You can find it by searching your app on https://formulae.brew.sh/cask/. The token value is after the `brew install --cask` part in the installation command.

#### Icons

This project is using [React Icons](https://react-icons.github.io/react-icons/). Import icons from:

- `react-icons/si` - Simple Icons - **preferred for software**
- `react-icons/fa` - Font Awesome
- `react-icons/fi` - Feather Icons
- `react-icons/vsc` - VS Code Icons

If an icon doesn't exist, you can create a custom one in `app/components/atoms/icons/`.

#### App categories

| Category ID        | Description                      |
| ------------------ | -------------------------------- |
| `browser`          | Web browsing and search          |
| `communication`    | Chat, video calls, and messaging |
| `media-player`     | Play audio and video             |
| `productivity`     | Organize tasks and work          |
| `development`      | IDEs, editors, and dev tools     |
| `creation`         | Design, write, and create        |
| `ai`               | AI-powered applications          |
| `gaming`           | Play and manage games            |
| `system-utility`   | Optimize and manage your system  |
| `security-privacy` | Protect data and privacy         |

#### Category types

```typescript
export type TAppCategory =
  | 'browser'
  | 'productivity'
  | 'media-player'
  | 'communication'
  | 'development'
  | 'creation'
  | 'ai'
  | 'gaming'
  | 'security-privacy'
  | 'system-utility'

export interface ICategory {
  id: TAppCategory
  name: string
  icon: string
  description: string
}
```

#### Example : adding new app

1. Go to the `src/app/data/apps.ts` file
2. Add the app object in the `apps` array:

```typescript
{
  id: 'notion',
  name: 'Notion',
  description:
    'An all-in-one workspace for notes, tasks, databases, and team collaboration.',
  icon: {
    value: 'SiNotion',
    color: '#000000',
  },
  cask: 'notion',
  category: 'productivity',
}
```

3. The app will be automatically imported

### Modifying the UI

When modifying UI components:

1. **Understand the component structure** - Components are in `app/components/` and use atomic design pattern
2. **Follow existing design** - Match the app style
3. **Use Tailwind CSS** - All styling uses [Tailwind CSS](https://tailwindcss.com/) with custom theme
4. **Test responsiveness** - Ensure changes work on different screen sizes

## Code style guidelines

- Use functional components with hooks
- Use ES6+ features (arrow functions, destructuring, etc.)
- Keep components small and focused
- Use meaningful variable and function names
- Add comments only when logic isn't self-evident

## Commit convention

This project is using [Conventional Commits](https://www.conventionalcommits.org/):

| Commit type | Description                                                                                            | Example                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `feat`      | New feature                                                                                            | `feat: add Notion to apps catalog`                          |
| `fix`       | Bug fix                                                                                                | `fix: correct Homebrew cask token for Brave`                |
| `docs`      | Documentation only changes                                                                             | `docs: add contribution guide`                              |
| `style`     | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | `style: remove empty line`                                  |
| `refactor`  | A code change that neither fixes a bug nor adds a feature                                              | `refactor: add constant for repository url`                 |
| `perf`      | A code change that improves performance                                                                | `perf: improve page speed score`                            |
| `test`      | Adding missing tests or correcting existing tests                                                      | `test: add integration tests for script generation process` |
| `build`     | Changes that affect the build system or external dependencies                                          | `build: upgrade Next.js to 16`                              |
| `ci`        | Changes to the CI configuration files and scripts                                                      | `ci: dd code quality checks in GitHub Actions`              |
| `chore`     | Other changes that don't modify app or test files                                                      | `chore: update .gitignore`                                  |
| `revert`    | Reverts a previous commit                                                                              | `revert: "fix: correct CSS color for button background"`    |

## Pull request

1. **Create a branch** from `main` with a descriptive name:
   - `feat/add-notion-app`
   - `fix/script-export`
   - `docs/update-readme`

2. **Make your changes** following the guidelines above

3. **Test locally**:

   ```bash
   npm run build   # Ensure build succeeds
   npm run dev     # Test in browser
   ```

4. **Commit** using conventional commit format

5. **Push** to your fork and create a Pull Request

6. **Fill out the PR template** completely

7. **Address feedback** if reviewers request changes

In general, please also make sure that there are no unrelated changes in a PR. For example, if your editor has made any changes to whitespace or formatting elsewhere in a file that you edited, please revert these so it is more obvious what your PR changes. And please avoid including multiple unrelated features or fixes in a single PR. If it is possible to separate them, it is better to have multiple PRs to review and merge separately. In general, a PR should do one thing only.

## Labels

Use these labels to categorize your issues and PRs:

| Label           | Description                                |
| --------------- | ------------------------------------------ |
| `bug`           | Something isn't working                    |
| `catalog`       | Anything related to the catalog            |
| `documentation` | Improvements or additions to documentation |
| `duplicate`     | Issue or pull request already exists       |
| `enhancement`   | New feature or request                     |
| `help wanted`   | Extra attention is needed                  |
| `invalid`       | This doesn't seem right                    |
| `question`      | Further information is requested           |

---

## Questions?

If you have questions or need help:

1. Check existing [issues](https://github.com/orpheebesson/macos-post-install/issues)
2. Open a new issue with your question
3. Read through the codebase - it's well-structured and documented

Thank you for contributing!
