import { IconButton, Portal, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuChevronDown, LuChevronUp, LuMoon, LuSun } from 'react-icons/lu';
import { useColorMode } from '~/components/ui/color-mode';
import { LangSelect } from './lang-select';

export const SettingsFloat = () => {
    const { t } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const [expanded, setExpanded] = useState(false);
    return (
        <Portal>
            <div style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
                <VStack align="flex-end">
                    <IconButton
                        aria-label={t('Search')}
                        variant="subtle"
                        size={{ base: 'md' }}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? <LuChevronDown /> : <LuChevronUp />}
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
