import { Metadata } from 'next'
import PromptGeneratorClient from './PromptGeneratorClient'

export const metadata: Metadata = {
    title: 'AI Art & Music Prompt Generator | Midjourney, Suno, SD | UltraUtils',
    description: 'Create high-quality AI prompts for Midjourney, Suno, and Stable Diffusion. Optimize your AI art and music generation with professional styles, genres, and subjects. Free creative toolkit.',
    keywords: ['ai prompt generator', 'midjourney prompt tool', 'suno ai music prompts', 'stable diffusion generator', 'ai art prompts', '프롬프트 생성기', '미드저니 프롬프트', '수노 프롬프트'],
    openGraph: {
        title: 'AI Art & Music Prompt Generator | UltraUtils',
        description: 'Generate professional AI prompts for art and music instantly.',
        url: 'https://ultra-utils.com/tools/prompt-generator',
    }
}

export default function page() {
    return (
        <PromptGeneratorClient />
    )
}
