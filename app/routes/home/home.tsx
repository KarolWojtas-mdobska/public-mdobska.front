import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LuConstruction } from 'react-icons/lu';
import HighHeading from '~/components/common/highlighted-heading/highlighted-heading.component';
import { useColorMode } from '~/components/ui/color-mode';
import { useMounted } from '~/hooks/mounted';
import { SettingsFloat } from '~/routes/home/settings-float';
import type { Route } from '../../+types/root';
import { Carousel, type CarouselItem } from '../../components/common/carousel/carousel';
import { AvatarCard } from './avatar-card';
import { ExternalLink } from './external-link';
import images, { HomeImages } from './images';

export function meta({}: Route.MetaArgs) {
    const { t } = useTranslation();
    return [{ title: t('Brandname') }, { name: 'description', content: `Welcome to ${t('Brandname')} web page!` }];
}

export default function Home() {
    const { t } = useTranslation();
    const mounted = useMounted();
    const { colorMode } = useColorMode();
    const cardBg = mounted && colorMode == 'dark' ? 'gray.900/30' : undefined;
    const carouselItems = useMemo<CarouselItem[]>(
        () => [
            {
                id: 'bands',
                image: images[HomeImages.bands],
                content: <HighHeading>Opaski</HighHeading>,
            },
            {
                id: 'scrunchies',
                image: images[HomeImages.scrunchies],
                content: <HighHeading>Scrunchie</HighHeading>,
            },
        ],
        []
    );
    return (
        <Container maxW="4xl" padding={{ base: 24, mdDown: 6 }}>
            <VStack
                w="100%"
                rounded="xl"
                padding={{ base: 24, mdDown: 12 }}
                shadow={{ base: 'md' }}
                bg={cardBg}
                align="center"
                gap="6"
                mb="16"
            >
                <Heading size={{ base: '5xl', mdDown: '4xl' }} fontFamily="brand" letterSpacing="widest">
                    {t('Brandname')}
                </Heading>
            </VStack>
            <AvatarCard bg={cardBg} mb="12" image={images[HomeImages.profile]}>
                <VStack align="flex-start">
                    <HighHeading>Cześć!</HighHeading>
                    <Text>Jestem Magda, zajmuję się krawiectwem. To moja pasja i sposób na zycie.</Text>
                    <Text>Mieszkam w Gdyni z moim pięknym kotem Henryczkiem i takim jednym dziadem.</Text>
                </VStack>
            </AvatarCard>
            <Carousel mb={16} items={carouselItems} cardBg={cardBg} />
            <SimpleGrid gap={4} columns={{ base: 1, md: 2 }} h="100%">
                <ExternalLink
                    title="Instagram"
                    description={t('MainLink.InstagramDesc')}
                    href="https://www.instagram.com/magda.dobska"
                />
                <ExternalLink
                    title="Vinted"
                    description={t('MainLink.VintedDesc')}
                    href="https://www.vinted.pl/member/91177021"
                />
            </SimpleGrid>
            <VStack padding={{ base: 24, mdDown: 12 }}>
                <LuConstruction />
                <Text>{t('WebsiteContruction')}</Text>
            </VStack>
            <SettingsFloat />
        </Container>
    );
}
