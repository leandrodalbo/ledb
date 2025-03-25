import axios from "axios";
import { MessageData } from "../types";

const apiUrl =
  process.env.EMAIL_API_URL || "https://api.emailjs.com/api/v1.0/email/send";
const serviceId = process.env.EMAIL_SERVICE_ID;
const templateId = process.env.EMAIL_TEMPLATE_ID;
const publicKey = process.env.EMAIL_PUBLIC_KEY;

const sendMessage = async (messageData: MessageData): Promise<boolean> => {
  const emailData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      user_name: messageData.name,
      user_email: messageData.email,
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
