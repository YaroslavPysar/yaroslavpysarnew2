```markdown
# Chatbot Framework

A simple JavaScript framework for building chatbots using Express.js.

## Installation

Install the package using npm:

```bash
npm install express
```

## Usage

```javascript
const ChatbotFramework = require('chatbot-framework');

// Create an instance of ChatbotFramework
const chatbot = new ChatbotFramework();

// Example middleware for processing incoming messages
chatbot.use((req, res, next) => {
  const message = req.body;
  console.log('Received message:', message);
  // Add your message processing logic here
  res.sendStatus(200); // Respond with success status
});

// Set up webhook for receiving messages from the messaging platform
chatbot.webhook('/slack-webhook', (message, res) => {
  // Process Slack messages here
  res.sendStatus(200); // Respond with success status
});

// Start the chatbot server
const port = process.env.PORT || 3000;
chatbot.start(port);
```

Replace the placeholder middleware logic (`console.log('Received message:', message)`) with your actual message processing logic, such as responding to messages, invoking chatbot actions, etc.

## API

### `use(middleware)`

Register middleware for processing incoming messages.

- `middleware`: Express middleware function to process incoming messages.

### `webhook(path, handler)`

Set up webhook for receiving messages from the messaging platform.

- `path`: Path to set up the webhook.
- `handler`: Function to handle incoming messages from the messaging platform.

### `start(port)`

Start the Express server.

- `port`: Port number for the server to listen on.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
