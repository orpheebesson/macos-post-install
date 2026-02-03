import { IApp } from '@/types/app'

export const apps: IApp[] = [
  {
    id: 'chrome',
    name: 'Google Chrome',
    description:
      'A fast, widely used browser built for performance, simplicity, and seamless integration with Google services.',
    icon: {
      value: 'CustomGoogleChrome',
    },
    cask: 'google-chrome',
    category: 'browser',
  },
  {
    id: 'chromium',
    name: 'Chromium',
    description:
      'An open-source browser project that powers many modern browsers with speed and flexibility.',
    icon: {
      value: 'CustomChromium',
      color: '#1371E4',
    },
    cask: 'chromium',
    category: 'browser',
  },
  {
    id: 'firefox',
    name: 'Firefox',
    description:
      'An open-source browser focused on privacy, performance, and user control.',
    icon: {
      value: 'SiFirefox',
      color: '#FF7139',
    },
    cask: 'firefox',
    category: 'browser',
  },
  {
    id: 'arc',
    name: 'Arc',
    description:
      'A modern browser that reimagines web navigation with clarity and productivity.',
    icon: {
      value: 'CustomArc',
    },
    cask: 'arc',
    category: 'browser',
  },
  {
    id: 'brave',
    name: 'Brave',
    description:
      'A privacy-first browser that blocks ads and trackers by default while staying fast and secure.',
    icon: {
      value: 'SiBrave',
      color: '#FB542B',
    },
    cask: 'brave-browser',
    category: 'browser',
  },
  {
    id: 'chatgpt-atlas',
    name: 'ChatGPT Atlas',
    description: 'Unlock the web with ChatGPT by your side.',
    icon: {
      value: 'CustomChatGPTAtlas',
    },
    cask: 'chatgpt-atlas',
    category: 'browser',
  },
  {
    id: 'comet',
    name: 'Comet',
    description:
      'Perplexity’s AI-powered browser, built for faster and more intelligent web exploration.',
    icon: {
      value: 'CustomComet',
    },
    cask: 'comet',
    category: 'browser',
  },
  {
    id: 'dia',
    name: 'Dia',
    description:
      'AI-powered browser created by the team behind Arc, rethinking how we interact with the web.',
    icon: {
      value: 'CustomDia',
    },
    cask: 'thebrowsercompany-dia',
    category: 'browser',
  },
  {
    id: 'microsoft-edge',
    name: 'Microsoft Edge',
    description:
      'Fast, secure browser from Microsoft with seamless integration with Windows and Microsoft services.',
    icon: {
      value: 'FaEdge',
      color: '#0078D7',
    },
    cask: 'microsoft-edge',
    category: 'browser',
  },
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
  },
  {
    id: 'notion-calendar',
    name: 'Notion Calendar',
    description:
      'A calendar feature in Notion for scheduling, organizing, and visualizing tasks and events.',
    icon: {
      value: 'CustomNotionCalendar',
    },
    cask: 'notion-calendar',
    category: 'productivity',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description:
      'An open-source knowledge management app for creating and linking notes.',
    icon: {
      value: 'SiObsidian',
      color: '#8B5CF6',
    },
    cask: 'obsidian',
    category: 'productivity',
  },
  {
    id: 'evernote',
    name: 'Evernote',
    description:
      'A note-taking app for capturing, organizing, and syncing ideas across devices.',
    icon: {
      value: 'SiEvernote',
      color: '#01A92D',
    },
    cask: 'evernote',
    category: 'productivity',
  },
  {
    id: 'loom',
    name: 'Loom',
    description:
      'Free online screen recording tool with advanced video editing and video storage.',
    icon: {
      value: 'SiLoom',
      color: '#5F5AEE',
    },
    cask: 'loom',
    category: 'productivity',
  },
  {
    id: 'screen-studio',
    name: 'Screen Studio',
    description:
      'Opinionated screen recorder that makes your videos look beautiful with minimal effort.',
    icon: {
      value: 'CustomScreenStudio',
    },
    cask: 'screen-studio',
    category: 'productivity',
  },
  {
    id: 'todoist',
    name: 'Todoist',
    description:
      'A task management app for organizing, prioritizing, and tracking your to-dos.',
    icon: {
      value: 'SiTodoist',
      color: '#E54232',
    },
    cask: 'todoist-app',
    category: 'productivity',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description:
      'A music streaming platform for discovering, listening to, and sharing songs and podcasts.',
    icon: {
      value: 'SiSpotify',
      color: '#1DB954',
    },
    cask: 'spotify',
    category: 'media-player',
  },
  {
    id: 'deezer',
    name: 'Deezer',
    description:
      'A music streaming service offering millions of tracks, playlists, and personalized recommendations.',
    icon: {
      value: 'CustomDeezer',
    },
    cask: 'deezer',
    category: 'media-player',
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description:
      'A free, open-source code editor for building and debugging applications across multiple languages.',
    icon: {
      value: 'VscVscode',
      color: '#007ACC',
    },
    cask: 'visual-studio-code',
    category: 'development',
  },
  {
    id: 'docker-desktop',
    name: 'Docker Desktop',
    description:
      'Open-source platform designed to help developers build, share, and run container applications.',
    icon: {
      value: 'SiDocker',
      color: '#2496ED',
    },
    cask: 'docker-desktop',
    category: 'development',
  },
  {
    id: 'intellij-idea',
    name: 'IntelliJ IDEA',
    description:
      'JetBrains IDE for pro development in Java and Kotlin, with support for many other languages and frameworks.',
    icon: {
      value: 'SiIntellijidea',
      color: '#000000',
    },
    cask: 'intellij-idea',
    category: 'development',
  },
  {
    id: 'webstorm',
    name: 'WebStorm',
    description:
      'Powerful IDE for JavaScript and web development, designed for efficient coding and debugging.',
    icon: {
      value: 'SiWebstorm',
      color: '#000000',
    },
    cask: 'webstorm',
    category: 'development',
  },
  {
    id: 'postman',
    name: 'Postman',
    description:
      'Unify API design, testing, documentation, and monitoring in one platform.',
    icon: {
      value: 'SiPostman',
      color: '#F86836',
    },
    cask: 'postman',
    category: 'development',
  },
  {
    id: 'codex',
    name: 'Codex',
    description:
      'AI coding agent that helps you write, review, and ship code faster.',
    icon: {
      value: 'CustomCodex',
    },
    cask: 'codex',
    category: 'development',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'Fork of Visual Studio Code with additional AI features.',
    icon: {
      value: 'CustomCursor',
    },
    cask: 'cursor',
    category: 'development',
  },
  {
    id: 'hyper',
    name: 'Hyper',
    description:
      'Bbeautiful and extensible experience for command-line interface users, built on open web standards.',
    icon: {
      value: 'CustomHyper',
    },
    cask: 'hyper',
    category: 'development',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI chatbot for everyday use.',
    icon: {
      value: 'CustomChatGPT',
    },
    cask: 'chatgpt',
    category: 'ai',
  },
  {
    id: 'raycast',
    name: 'Raycast',
    description:
      'Collection of powerful productivity tools all within an extendable launcher.',
    icon: {
      value: 'SiRaycast',
      color: '#F85F5F',
    },
    cask: 'raycast',
    category: 'system-utility',
  },
  {
    id: 'discord',
    name: 'Discord',
    description:
      'A communication platform for communities, combining chat, voice, and video in one place.',
    icon: {
      value: 'SiDiscord',
      color: '#5865F2',
    },
    cask: 'discord',
    category: 'communication',
  },
  {
    id: 'slack',
    name: 'Slack',
    description:
      'A collaboration tool that brings team conversations, files, and workflows together.',
    icon: {
      value: 'CustomSlack',
    },
    cask: 'slack',
    category: 'communication',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description:
      'Messaging app for fast, secure text, voice, and video communication.',
    icon: {
      value: 'SiWhatsapp',
      color: '#25D366',
    },
    cask: 'whatsapp',
    category: 'communication',
  },
  {
    id: 'signal',
    name: 'Signal',
    description: 'Instant messaging application focusing on security',
    icon: {
      value: 'SiSignal',
      color: '#3A76F0',
    },
    cask: 'signal',
    category: 'communication',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description:
      'Cloud-based messaging app with a focus on security and speed.',
    icon: {
      value: 'SiTelegram',
      color: '#0088CC',
    },
    cask: 'telegram',
    category: 'communication',
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description:
      'A video conferencing platform for meetings, webinars, and team collaboration.',
    icon: {
      value: 'CustomZoom',
    },
    cask: 'zoom',
    category: 'communication',
  },
  {
    id: 'figma',
    name: 'Figma',
    description:
      'A cloud-based design tool for interface design, prototyping, and collaborative creativity.',
    icon: {
      value: 'CustomFigma',
    },
    cask: 'figma',
    category: 'creation',
  },
  {
    id: 'blender',
    name: 'Blender',
    description:
      'A powerful open-source 3D creation suite for modeling, animation, rendering, and more.',
    icon: {
      value: 'SiBlender',
      color: '#F5792A',
    },
    cask: 'blender',
    category: 'creation',
  },
  {
    id: 'obs',
    name: 'OBS Studio',
    description: 'Open-source software for live streaming and screen recording',
    icon: {
      value: 'SiObsstudio',
      color: '#000000',
    },
    cask: 'obs',
    category: 'creation',
  },
  {
    id: 'vlc',
    name: 'VLC',
    description:
      'Open-source media player that supports nearly all audio and video formats.',
    icon: {
      value: 'SiVlcmediaplayer',
      color: '#FF8800',
    },
    cask: 'vlc',
    category: 'media-player',
  },
  {
    id: 'plex',
    name: 'Plex',
    description:
      'First-and-only streaming platform to offer free ad-supported movies, shows, and live TV together.',
    icon: {
      value: 'CustomPlex',
      color: '#E5A00D',
    },
    cask: 'plex',
    category: 'media-player',
  },
  {
    id: 'handbrake',
    name: 'HandBrake',
    description:
      'Open-source video transcoder available for Linux, Mac, and Windows',
    icon: {
      value: 'CustomHandbrake',
    },
    cask: 'handbrake',
    category: 'creation',
  },
  {
    id: '1password',
    name: '1Password',
    description:
      'Password manager that keeps all passwords secure behind one password.',
    icon: {
      value: 'Si1Password',
      color: '#1A285F',
    },
    cask: '1password',
    category: 'security-privacy',
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    description:
      'Open-source password manager for securely storing and managing credentials across devices.',
    icon: {
      value: 'SiBitwarden',
      color: '#165DDD',
    },
    cask: 'bitwarden',
    category: 'security-privacy',
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    description:
      'Password manager that securely stores and autofills your passwords across devices.',
    icon: {
      value: 'SiLastpass',
      color: '#D32D28',
    },
    cask: 'lastpass',
    category: 'security-privacy',
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    description: 'VPN client for secure internet access and private browsing',
    icon: {
      value: 'SiNordvpn',
      color: '#3E5FFF',
    },
    cask: 'nordvpn',
    category: 'security-privacy',
  },
  {
    id: 'steam',
    name: 'Steam',
    description: 'Video game digital distribution service.',
    icon: {
      value: 'SiSteam',
      color: '#000000',
    },
    cask: 'steam',
    category: 'gaming',
  },
]
