import { Center, Container, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useColorModeValue } from '~/components/ui/color-mode';
import { SettingsFloat } from '~/routes/home/settings-float';
import type { Route } from '../../+types/root';

export function meta({}: Route.MetaArgs) {
    const { t } = useTranslation();
    return [{ title: t('Brandname') }, { name: 'description', content: `Welcome to ${t('Brandname')} web page!` }];
}

export default function Home() {
    const { t } = useTranslation();
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    return (
        <Container maxW="4xl" padding={{ base: 24, mdDown: 12 }}>
            <Center bg={bgColor} borderRadius="lg" padding={{ base: 24, mdDown: 12 }}>
                <Heading color="primary" size={{ base: '3xl', mdDown: 'lg' }}>
                    {t('Brandname')}
                </Heading>
            </Center>
            <SettingsFloat />
        </Container>
    );
}
