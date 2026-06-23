import * as messageRepository from "../repositories/messageRepository.js";

export const fetchMessages = async () => {
  return await messageRepository.getMessages();
};