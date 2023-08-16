const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleMainButton = () => {
        if (tg.MainButton.isVisible) tg.MainButton.hide();
        else tg.MainButton.show();

    }

    const onClose = () => {
        tg.close();
    }

    return {
        onToggleMainButton,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user
    }
}

