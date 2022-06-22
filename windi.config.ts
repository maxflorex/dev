import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                teal: {
                    100: '#096',
                },
            },
        },
    },
    plugins: [formsPlugin],
    shortcuts: {
        'btn': 'py-2 px-4 font-bold text-xl rounded-lg shadow bg-teal-500',
        'flex-center': 'flex flex-col items-center justify-center w-full h-full gap-4 p-8',
        'grid-4': 'grid grid-cols-4 w-full gap-4 content-center'
    }
})