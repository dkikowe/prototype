# Bitcoin Prototype - Telegram Mini App

Bitcoin mining prototype application designed for Telegram Mini App platform.

## Features

- 🪙 Bitcoin mining simulation
- 🔍 Token finder with terminal interface
- 📡 Live feed with real-time updates
- 🎨 Modern dark theme UI
- 📱 Optimized for mobile devices

## Telegram Mini App Setup

### 1. Bot Configuration

1. Create a new bot using [@BotFather](https://t.me/BotFather)
2. Use `/newapp` command to create a Mini App
3. Set the web app URL to your deployed application
4. Configure the bot settings:

```
Bot Commands:
/start - Start the Bitcoin Prototype
/help - Show help information

Web App Settings:
- Fullscreen: Enabled
- Disable web page preview: Enabled
- Disable notification: Disabled
```

### 2. Deployment

The app is configured for fullscreen mode and optimized for Telegram Web App environment.

### 3. Features

- **Token Finder**: Search for Bitcoin addresses with terminal-style interface
- **Live Feed**: Real-time updates of mining activities
- **Responsive Design**: Optimized for mobile devices
- **Dark Theme**: Modern UI with dark color scheme

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Configuration

Update `telegram-config.json` with your bot details:

```json
{
  "telegram": {
    "bot_username": "@your_bot_username",
    "webapp_url": "https://your-domain.com",
    "fullscreen": true
  }
}
```

## Deployment

Deploy to your preferred hosting platform (Vercel, Netlify, etc.) and update the web app URL in your bot configuration.

## License

MIT License