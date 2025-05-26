// src/utils/antdConfig.ts
import { message, notification } from "antd";

export const configureAntd = () => {
  message.config({
    top: 100,
    duration: 10,
  });

  notification.config({
    placement: "bottomRight",
    duration: 4,
  });
};
