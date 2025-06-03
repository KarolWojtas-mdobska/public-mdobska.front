'use client';

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                brand: {
                    value: 'Marcellus, serif',
                },
            },
        },
        semanticTokens: {
            colors: {
                primary: {
                    value: {
                        _light: '#A8BAB6',
                        _dark: 'red',
                    },
                },
                primaryGradient: {
                    value: {
                        base: 'linear-gradient(230deg, rgba(255,0,0,0) 70%,  #A8BAB6);',
                    },
                },
            },
            shadows: {
                primary: {
                    value: {
                        base: '8px 8px 0 0 {colors.primary}',
                    },
                },
            },
        },
    },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
