import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { MessageAssets } from "../types";

interface MessageMeProps {
  assets: MessageAssets;
}

const MessageMe = ({ assets }: MessageMeProps) => {
  const { t } = useTranslation();
  const [messageData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...messageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const serviceId = "your_service_id";
    const templateId = "your_template_id";
    const publicKey = "your_public_key";

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
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData
      );
      setResult(t(assets.messageSuccess));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResult(t(assets.messageFailed));
    }
    setLoading(false);
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-darkBg shadow-lg rounded-xl text-darkerText">
      <h2 className="text-2xl font-semibold text-center mb-4 text-jungleGreen">
        {t(assets.h2HeaderKey)}
      </h2>
      {result.length > 0 && (
        <p className="text-center text-junglePink mb-4">{result}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={messageData.name}
          onChange={handleChange}
          placeholder={t(assets.namePlh)}
          required
          className="p-3 rounded-lg bg-lightBg text-darkerText focus:ring-2 focus:ring-junglePink"
        />
        <input
          type="email"
          name="email"
          value={messageData.email}
          onChange={handleChange}
          placeholder={t(assets.emailPlh)}
          required
          className="p-3 rounded-lg bg-lightBg text-darkerText focus:ring-2 focus:ring-junglePink"
        />
        <textarea
          name="message"
          value={messageData.message}
          onChange={handleChange}
          placeholder={t(assets.msgPlh)}
          rows={5}
          required
          className="p-3 rounded-lg bg-lightBg text-darkerText focus:ring-2 focus:ring-junglePink"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`p-3 rounded-lg font-semibold text-lightBg transition ${
            loading ? "bg-gray-400" : "bg-junglePink hover:bg-opacity-80"
          }`}
        >
          {loading ? t(assets.msgBtnOnLoading) : t(assets.msgBtnSend)}
        </button>
      </form>
    </div>
  );
};

export default MessageMe;
