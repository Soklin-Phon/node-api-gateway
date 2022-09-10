const ADMIN_SERVICE = process.env.ADMIN_SERVICE || 'http://localhost:9000';
const EXAM_SERVICE = process.env.EXAM_SERVICE || 'http://localhost:9020';
const STREAM_SERVICE = process.env.STREAM_SERVICE || 'http://localhost:9010';
const FILE_SERVICE = process.env.FILE_SERVICE || 'http://localhost:9030';
const PDF_SERVICE = process.env.PDF_SERVICE || 'http://localhost:9031';

export const ROUTES = [
    {
        url: '/admin',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: ADMIN_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/admin`]: '',
            },
        }
    },
    {
        url: '/exam',
        proxy: {
            target: EXAM_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/exam`]: '',
            },
        }
    },
    {
        url: '/stream',
        proxy: {
            target: STREAM_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/stream`]: '',
            },
        }
    },
    {
        url: '/file',
        proxy: {
            target: FILE_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/file`]: '',
            },
        }
    },
    {
        url: '/pdf',
        proxy: {
            target: PDF_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/pdf`]: '',
            },
        }
    }
]