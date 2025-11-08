import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import HighHeading from '~/components/common/highlighted-heading/highlighted-heading.component';
import i18n from '~/i18n/i18n';
import { SettingsFloat } from '~/routes/home/components/settings-float';
import { Carousel, type CarouselItem } from '../../components/common/carousel/carousel';
import { AvatarCard } from './components/avatar-card';
import { ExternalLink } from './components/external-link';
import ScrollAnimatedScale from './components/scroll-animated-scale';
import images, { HomeImages } from './images';

export function meta() {
    const { t } = i18n;
    return [{ title: t('Brandname') }, { name: 'description', content: `Welcome to ${t('Brandname')} web page!` }];
}

export default function Home() {
    const { t } = useTranslation();
    const cardBg = 'bg';
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
    const sectionGap = 16;
    return (
        <Container maxW="5xl" padding={{ base: 24, mdDown: 6 }}>
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
            <ScrollAnimatedScale>
                <AvatarCard bg={cardBg} mb={sectionGap} image={images[HomeImages.profile]}>
                    <VStack align="flex-start">
                        <HighHeading>Cześć!</HighHeading>
                        <Text>Jestem Magda, zajmuję się krawiectwem. To moja pasja i sposób na zycie.</Text>
                        <Text>Mieszkam w Gdyni z moim pięknym kotem Henryczkiem i takim jednym dziadem.</Text>
                    </VStack>
                </AvatarCard>
            </ScrollAnimatedScale>
            <ScrollAnimatedScale>
                <Carousel mb={sectionGap} items={carouselItems} cardBg={cardBg} />
            </ScrollAnimatedScale>
            <ScrollAnimatedScale>
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
            </ScrollAnimatedScale>
            <SettingsFloat />
        </Container>
    );
}
