// chatbot-framework.js

const express = require('express');

class ChatbotFramework {
  constructor() {
    this.app = express();
  }

  // Register middleware for processing incoming messages
  use(middleware) {
    this.app.use(express.json());
    this.app.use(middleware);
  }

  // Set up webhook for receiving messages from the messaging platform
  webhook(path, handler) {
    this.app.post(path, (req, res) => {
      const message = req.body;
      handler(message, res);
    });
  }

  // Start the Express server
  start(port) {
    this.app.listen(port, () => {
      console.log(`Chatbot server running on port ${port}`);
    });
  }
}

module.exports = ChatbotFramework;
