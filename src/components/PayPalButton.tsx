import { useEffect, useId } from 'react';

type PayPalWindow = Window & {
    paypal?: { HostedButtons: (options: { hostedButtonId: string }) => { render: (selector: string) => Promise<unknown> } };
};

export default function PayPalButton() {
    const id = `paypal-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    useEffect(() => {
        let rendered = false;
        const render = () => {
            const paypal = (window as PayPalWindow).paypal;
            const container = document.getElementById(id);
            if (!paypal || !container || rendered || container.childNodes.length) return;
            rendered = true;
            void paypal.HostedButtons({ hostedButtonId: 'TV2K9L7JSS5FA' })
                .render(`#${id}`).catch(() => { rendered = false; });
        };
        const sdk = document.getElementById('paypal-sdk');
        sdk?.addEventListener('load', render);
        render();
        return () => sdk?.removeEventListener('load', render);
    }, [id]);
    return <div id={id} />;
}
