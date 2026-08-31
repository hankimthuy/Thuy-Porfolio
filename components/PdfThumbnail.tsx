'use client';

import { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf.mjs';

GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PdfThumbnailProps {
    pdfUrl: string;
    className?: string;
    pageNumber?: number;
    scale?: number;
}

export default function PdfThumbnail({ pdfUrl, className, pageNumber = 1, scale = 1.1 }: PdfThumbnailProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        let cancelled = false;

        async function render() {
            try {
                setStatus('loading');
                setErrorMessage('');

                const loadingTask = (getDocument as any)({ url: pdfUrl, disableWorker: true });

                const pdf: any = await Promise.race([
                    loadingTask.promise,
                    new Promise((_, reject) => {
                        window.setTimeout(() => {
                            try {
                                loadingTask.destroy();
                            } catch {
                            }
                            reject(new Error('PDF preview timed out'));
                        }, 10000);
                    }),
                ]);
                const page = await pdf.getPage(pageNumber);

                if (cancelled) return;

                const viewport = page.getViewport({ scale });
                const canvas = canvasRef.current;
                if (!canvas) return;

                const context = canvas.getContext('2d');
                if (!context) return;

                canvas.width = Math.floor(viewport.width);
                canvas.height = Math.floor(viewport.height);

                await (page as any).render({ canvasContext: context, viewport, canvas }).promise;

                if (cancelled) return;
                setStatus('idle');
            } catch (err) {
                if (cancelled) return;
                setStatus('error');
                setErrorMessage(err instanceof Error ? err.message : 'Failed to load PDF');
            }
        }

        render();

        return () => {
            cancelled = true;
        };
    }, [pdfUrl, pageNumber, scale]);

    return (
        <a href={pdfUrl} target="_blank" rel="noreferrer" className="block">
            <div className={`relative ${className ?? ''}`}>
                <canvas ref={canvasRef} className="w-full h-auto" />

                {status === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-plum-700 bg-surface/60">
                        Loading preview...
                    </div>
                )}

                {status === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sm text-plum-700 px-4 text-center bg-surface/80">
                        <div>Unable to preview PDF</div>
                        {errorMessage && <div className="text-xs text-plum-700/70">{errorMessage}</div>}
                    </div>
                )}
            </div>
        </a>
    );
}
