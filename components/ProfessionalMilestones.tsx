import type { ReactNode } from 'react';
import { FiCpu, FiGlobe, FiZap } from 'react-icons/fi';
import PdfThumbnail from '@/components/PdfThumbnail';

interface MilestoneCardProps {
    title: string;
    subtitle?: string;
    content: ReactNode;
}

function MilestoneCard({ title, subtitle, content }: MilestoneCardProps) {
    return (
        <div className="relative rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-200 will-change-transform hover:shadow-lg hover:shadow-indigo-200/60 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4EEFF]/55 via-white to-[#DCD6F7]/40" />

            <div className="relative z-10 p-6">
                <h3 className="mt-0 text-xl lg:text-[24px] font-semibold leading-[1.15] text-[#424874]">{title}</h3>
                {subtitle && <div className="mt-2 text-sm font-semibold text-[#424874]/70">{subtitle}</div>}

                <div className="mt-5 text-[15px] leading-[1.7] text-[#424874]/90">{content}</div>
            </div>
        </div>
    );
}

export default function ProfessionalMilestones() {
    return (
        <section id="professional-milestones" className="py-10 lg:py-[70px] bg-white">
            <div className="max-w-[1728px] mx-auto px-6 lg:px-[200px]">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-[56px] font-semibold leading-[1.1] text-[#424874]">Professional Milestones</h2>
                    <p className="mt-4 text-base lg:text-[18px] text-[#424874]/80 max-w-[920px] mx-auto">
                        Highlights that show how I collaborate, build, and design experiences that ship.
                    </p>
                </div>

                <div className="mt-10 lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <MilestoneCard
                        title="Bosch Global Software Technologies"
                        content={
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                                        <FiCpu aria-hidden="true" className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <strong className="font-bold text-indigo-900">Complex UI:</strong> Digitalized manufacturing processes into one simple web interface.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                                        <FiGlobe aria-hidden="true" className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <strong className="font-bold text-indigo-900">Direct Collaboration:</strong> Worked with international clients in English from requirements to final delivery.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                                        <FiZap aria-hidden="true" className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <strong className="font-bold text-indigo-900">Problem Solver:</strong> Designed workflows that improved team efficiency and earned high praise.
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    <MilestoneCard
                        title="Google UX Design Professional Certificate"
                        content={
                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                                <div className="lg:basis-1/2">
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <div>
                                                <strong className="font-bold text-indigo-900">UX Research</strong>
                                            </div>
                                            <div>
                                                <strong className="font-bold text-indigo-900">Wireframing &amp; Prototyping</strong>
                                            </div>
                                            <div>
                                                <strong className="font-bold text-indigo-900">Usability Testing</strong>
                                            </div>
                                            <div>
                                                <strong className="font-bold text-indigo-900">User-Centric Bridge</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:basis-1/2">
                                    <PdfThumbnail
                                        pdfUrl="/pdf/Coursera%20K0EK4KJTLR3S.pdf"
                                        className="w-full border border-[#E0E7FF] rounded-lg shadow-sm overflow-hidden bg-white"
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
