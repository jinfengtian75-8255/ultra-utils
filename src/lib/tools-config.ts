import {
    Youtube,
    Image,
    QrCode,
    FileText,
    Wand2,
    Type,
    Layers,
    RefreshCcw,
    FileJson,
    Video,
    Calculator,
    Layout
} from 'lucide-react';

export interface ToolConfig {
    id: string;
    href: string;
    icon: any;
    translationKey: string;
    color: string;
}

export const toolsConfig: ToolConfig[] = [
    {
        id: 'youtube-planner',
        href: '/tools/youtube-planner',
        icon: Layout,
        translationKey: 'ytPlanner',
        color: 'bg-red-500',
    },
    {
        id: 'youtube-thumbnail',
        href: '/tools/youtube-thumbnail',
        icon: Youtube,
        translationKey: 'ytGrab',
        color: 'bg-rose-500',
    },
    {
        id: 'qr-generator',
        href: '/tools/qr-generator',
        icon: QrCode,
        translationKey: 'qrGen',
        color: 'bg-blue-600',
    },
    {
        id: 'image-compressor',
        href: '/tools/image-compressor',
        icon: Image,
        translationKey: 'imageMaster',
        color: 'bg-emerald-500',
    },
    {
        id: 'prompt-generator',
        href: '/tools/prompt-generator',
        icon: Wand2,
        translationKey: 'promptGen',
        color: 'bg-purple-500',
    },
    {
        id: 'text-converter',
        href: '/tools/text-converter',
        icon: Type,
        translationKey: 'textConverter',
        color: 'bg-amber-500',
    },
    {
        id: 'background-remover',
        href: '/tools/background-remover',
        icon: Layers,
        translationKey: 'bgRemover',
        color: 'bg-indigo-500',
    },
    {
        id: 'image-restorer',
        href: '/tools/image-restorer',
        icon: RefreshCcw,
        translationKey: 'imageRestorer',
        color: 'bg-cyan-500',
    },
    {
        id: 'pdf-master',
        href: '/tools/pdf-master',
        icon: FileJson,
        translationKey: 'pdfMaster',
        color: 'bg-orange-500',
    },
    {
        id: 'screen-recorder',
        href: '/tools/screen-recorder',
        icon: Video,
        translationKey: 'screenRecorder',
        color: 'bg-sky-500',
    },
    {
        id: 'revenue-calculator',
        href: '/tools/revenue-calculator',
        icon: Calculator,
        translationKey: 'revenueCalc',
        color: 'bg-green-600',
    },
];
