import * as messageRepository from "../repositories/messageRepository";

export const fetchMessages = async () => {
  return await messageRepository.getMessages();
};