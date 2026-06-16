import * as messageService from "../services/messageService.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await messageService.fetchMessages();

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};