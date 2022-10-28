import { useDarkMode } from "./DarkModeContext";

export default function useTheme() {
  const [isEnabled] = useDarkMode();
  const bgColor = isEnabled ? "bg-primary" : "bg-secondary";
  const textColor = isEnabled ? "text-secondary" : "text-primary";

  return { isEnabled, bgColor, textColor };
}
