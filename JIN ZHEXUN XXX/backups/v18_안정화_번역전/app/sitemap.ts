import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ultra-utils.com'

    const tools = [
        '/tools/youtube-thumbnail',
        '/tools/qr-generator',
        '/tools/image-compressor',
        '/tools/prompt-generator',
        '/tools/text-converter',
        '/tools/background-remover',
        '/tools/pdf-master',
    ]

    const pages = [
        '/about',
        '/contact',
        '/privacy',
        '/terms',
    ]

    const toolUrls = tools.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const pageUrls = pages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        ...toolUrls,
        ...pageUrls,
    ]
}
