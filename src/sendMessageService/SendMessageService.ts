import axios from "axios";
import { MessageData } from "../types";

const apiUrl = import.meta.env.VITE_EMAIL_API_URL;
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const sendMessage = async (messageData: MessageData): Promise<boolean> => {
  const emailData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      subject: "MESSAGE_FROM_WEBSITE",
      name: messageData.name,
      email: messageData.email,
      message: messageData.message,
    },
  };

  try {
    const result = await axios.post(apiUrl, emailData);

    if (result.status >= 200 && result.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default sendMessage;
