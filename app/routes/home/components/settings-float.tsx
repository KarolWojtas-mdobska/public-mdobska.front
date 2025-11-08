import { IconButton, Portal, useBreakpointValue, VStack } from '@chakra-ui/react';
import type { TargetAndTransition } from 'motion/react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useMemo, useState, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { LuEllipsisVertical, LuMoon, LuSun, LuX } from 'react-icons/lu';
import { useColorMode } from '~/components/ui/color-mode';
import { LangSelect } from './lang-select';

const AnimatedSettingsItem = ({ children }: PropsWithChildren) => {
    const exitState = useMemo<TargetAndTransition>(() => ({ translateX: '300%' }), []);
    return (
        <motion.div layout initial={exitState} animate={{ translateX: 0 }} exit={exitState}>
            {children}
        </motion.div>
    );
};

export const SettingsFloat = () => {
    const { t } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const offset = useBreakpointValue({ md: '2rem' }, { fallback: '2rem' }) ?? '1rem';
    const [expanded, setExpanded] = useState(false);
    return (
        <Portal>
            <div style={{ position: 'fixed', bottom: offset, right: offset }}>
                <LayoutGroup>
                    <VStack align="flex-end">
                        <AnimatePresence mode="popLayout">
                            {expanded && (
                                <AnimatedSettingsItem>
                                    <IconButton
                                        aria-label="Switch color mode"
                                        onClick={() => toggleColorMode()}
                                        variant="subtle"
                                    >
                                        {colorMode === 'light' ? <LuMoon /> : <LuSun />}
                                    </IconButton>
                                </AnimatedSettingsItem>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {expanded && (
                                <AnimatedSettingsItem>
                                    <LangSelect />
                                </AnimatedSettingsItem>
                            )}
                        </AnimatePresence>
                        <motion.div layout>
                            <IconButton
                                aria-label={t('Search')}
                                variant="subtle"
                                size={{ base: 'md' }}
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? <LuX /> : <LuEllipsisVertical />}
                            </IconButton>
                        </motion.div>
                    </VStack>
                </LayoutGroup>
            </div>
        </Portal>
    );
};
