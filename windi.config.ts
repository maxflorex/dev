import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
const defaultTheme = require("windicss/defaultTheme");

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                off: '#f6ebe4',
                azul: '#23bbd5',
                nara: '#e49a35',
                rosa: '#f37264',
                navy: '#16405a'
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ["Corben", ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [formsPlugin],
    shortcuts: {
        'btn': 'py-2 px-4 font-semibold rounded-sm bg-navy hover:bg-azul text-off',
        'flex-center': 'flex flex-col items-center justify-center w-full h-full gap-4 p-8',
        'flex-between': 'flex items-center justify-between w-full h-full gap-4 p-8',
        'grid-4': 'grid grid-cols-4 w-full gap-4 content-center',
        'grid-2': 'grid lg:grid-cols-2 w-full gap-4 content-center',
        'slidew': 'min-w-1/4 md:min-w-1/6 lg:min-w-1/8 xl:min-w-1/10',
        'slidesingle': 'min-w-full'
    }
})
