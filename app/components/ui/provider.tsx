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
                sunsetGradient: {
                    value: 'linear-gradient(to bottom, rgb(109, 199, 255, .7), rgb(205, 164, 252, .7), rgb(252, 226, 164, .7))',
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
    globalCss: {
        body: {
            backgroundColor: {
                _light: 'bg.subtle',
                _dark: 'bg.muted',
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
