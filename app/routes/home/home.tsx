import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuInstagram } from 'react-icons/lu';
import { useColorMode } from '~/components/ui/color-mode';
import { SettingsFloat } from '~/routes/home/settings-float';
import type { Route } from '../../+types/root';
import { ExternalLink } from './external-link';

export function meta({}: Route.MetaArgs) {
    const { t } = useTranslation();
    return [{ title: t('Brandname') }, { name: 'description', content: `Welcome to ${t('Brandname')} web page!` }];
}

export default function Home() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const { colorMode } = useColorMode();
    useEffect(() => setMounted(true), []);
    return (
        <Container maxW="4xl" padding={{ base: 24, mdDown: 12 }}>
            <VStack
                w="100%"
                borderRadius="lg"
                padding={{ base: 24, mdDown: 12 }}
                shadow={{ base: 'md' }}
                mb="8"
                bg={mounted && colorMode == 'dark' ? 'gray.900/30' : undefined}
                align="center"
                gap="6"
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            scale: {
                                type: 'spring',
                                visualDuration: 0.4,
                                bounce: 0.5,
                            },
                        },
                    }}
                >
                    <Heading size={{ base: '5xl', mdDown: '2xl' }} fontFamily="brand" letterSpacing="widest">
                        {t('Brandname')}
                    </Heading>
                </motion.div>
                <Text textStyle="md">Krawiectwo</Text>
            </VStack>

            <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
                <ExternalLink title="Instagram" description="" href="https://www.instagram.com/magda.dobska" />
                <ExternalLink
                    title="Vinted"
                    description=""
                    href="https://www.vinted.pl/member/91177021"
                    avatar={<LuInstagram />}
                />
            </SimpleGrid>
            <SettingsFloat />
        </Container>
    );
}
