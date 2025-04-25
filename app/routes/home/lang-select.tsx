import { type RadioGroupValueChangeDetails } from '@chakra-ui/react';
import { type FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SegmentedControl } from '~/components/ui/segmented-control';

const langItems = [
    { value: 'pl', label: 'PL' },
    { value: 'en', label: 'EN' },
];
export const LangSelect: FunctionComponent = () => {
    const { i18n } = useTranslation();
    const langChange = useCallback(
        (event: RadioGroupValueChangeDetails) => {
            i18n.changeLanguage(event.value);
        },
        [i18n]
    );

    return <SegmentedControl value={i18n.language} onValueChange={langChange} items={langItems} />;
};
