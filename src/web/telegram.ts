// Telegram Mini App integration
// Safe to import everywhere — falls back gracefully outside Telegram

export const tg = typeof window !== "undefined" && (window as any).Telegram?.WebApp
  ? (window as any).Telegram.WebApp
  : null;

export const isTelegram = !!tg;

export function tgReady() {
  if (!tg) return;
  tg.ready();
  tg.expand(); // full screen
  tg.setHeaderColor("#0a0a0f");
  tg.setBackgroundColor("#0a0a0f");
  tg.setBottomBarColor("#0a0a0f");
  // Enable closing confirmation on forms
  tg.enableClosingConfirmation?.();
}

export function tgHaptic(type: "light" | "medium" | "heavy" | "rigid" | "soft" = "light") {
  tg?.HapticFeedback?.impactOccurred(type);
}

export function tgBackButton(show: boolean, cb?: () => void) {
  if (!tg) return;
  if (show) {
    tg.BackButton.show();
    if (cb) tg.BackButton.onClick(cb);
  } else {
    tg.BackButton.hide();
  }
}

export function tgMainButton(text: string, cb: () => void, color = "#FFD700", textColor = "#0a0a0f") {
  if (!tg) return;
  tg.MainButton.setText(text);
  tg.MainButton.setParams({ color, text_color: textColor });
  tg.MainButton.onClick(cb);
  tg.MainButton.show();
}

export function tgHideMainButton() {
  tg?.MainButton?.hide();
}

export const tgUser = tg?.initDataUnsafe?.user ?? null;

// Theme colors from Telegram
export const tgTheme = {
  bg: tg?.backgroundColor ?? "#0a0a0f",
  text: tg?.themeParams?.text_color ?? "#ffffff",
  hint: tg?.themeParams?.hint_color ?? "#A0A0B0",
  link: tg?.themeParams?.link_color ?? "#FFD700",
  button: tg?.themeParams?.button_color ?? "#FFD700",
  buttonText: tg?.themeParams?.button_text_color ?? "#0a0a0f",
};
