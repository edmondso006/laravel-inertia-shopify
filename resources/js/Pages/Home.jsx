import { Card, Text } from '@shopify/polaris';
import { useAppBridge } from '@shopify/app-bridge-react';
import { useEffect } from 'react';

export default function Home({ message }) {
    const app = useAppBridge();
    console.log('App Bridge instance:', app);

    useEffect(() => {
        app.toast.show('Welcome to the Home Page!');
    }, []);
    return (
        <Card>
            <Text as="h2" variant="bodyMd">
                {message}
            </Text>
        </Card>
    );
}
