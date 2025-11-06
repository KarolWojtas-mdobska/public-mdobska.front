import { IconButton, Portal, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuEllipsisVertical, LuMoon, LuSun, LuX } from 'react-icons/lu';
import { useColorMode } from '~/components/ui/color-mode';
import { LangSelect } from './lang-select';

export const SettingsFloat = () => {
    const { t } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const offset = useBreakpointValue({ md: '2rem' }, { fallback: '2rem' }) ?? '1rem';
    const [expanded, setExpanded] = useState(false);
    return (
        <Portal>
            <div style={{ position: 'fixed', bottom: offset, right: offset }}>
                <VStack align="flex-end">
                    <IconButton
                        aria-label={t('Search')}
                        variant="subtle"
                        size={{ base: 'md' }}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? <LuX /> : <LuEllipsisVertical />}
                    </IconButton>
                    {expanded && (
                        <IconButton aria-label="Switch color mode" onClick={() => toggleColorMode()} variant="subtle">
                            {colorMode === 'light' ? <LuMoon /> : <LuSun />}
                        </IconButton>
                    )}
                    {expanded && <LangSelect />}
                </VStack>
            </div>
        </Portal>
    );
};
