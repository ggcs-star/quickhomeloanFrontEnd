import { Container } from '../../../../components/Layout';
import React from 'react';
import { productDetailPages } from '../../../../db/assets';
import { useLocation } from 'react-router-dom';

const EnterpriseRows = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : 'localpulse';
    const product = productDetailPages[currentSlug];
    const enterpriseRows = product?.enterpriseRows || { leftColumn: [], rightColumn: [] };

    return (
        <Container>
            <section className="font-axiforma my-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column */}
                        <div className="w-full lg:w-7/12 space-y-8">
                            {enterpriseRows.leftColumn.map((row, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
                                    <h4 className="text-2xl font-bold mb-4">{row.title}</h4>
                                    {row.paragraphs && row.paragraphs.map((p, i) => (
                                        <p key={i} className={`mb-4 lg:text-xl${row.italic ? ' italic' : ''}`} dangerouslySetInnerHTML={{ __html: p }} />
                                    ))}
                                    {row.extraParagraphs && row.extraParagraphs.map((p, i) => (
                                        <p key={i + 'extra'} className={`mb-4 lg:text-xl${row.italic ? ' italic' : ''}`} dangerouslySetInnerHTML={{ __html: p }} />
                                    ))}
                                    {row.image && (
                                        <img
                                            src={row.image}
                                            className={row.imageClass || "w-full border rounded-t-lg -mb-5"}
                                            alt={row.imageAlt || ''}
                                            loading="lazy"
                                        />
                                    )}
                                    {row.links && row.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target={link.target || "_self"}
                                            rel={link.rel || ''}
                                            className={link.className}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Right Column */}
                        <div className="w-full lg:w-5/12 space-y-8">
                            {enterpriseRows.rightColumn.map((row, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
                                    <h4 className="text-2xl font-bold mb-4">{row.title}</h4>
                                    {row.paragraphs && row.paragraphs.map((p, i) => (
                                        <p key={i} className={`mb-4 lg:text-xl${row.italic ? ' italic' : ''}`} dangerouslySetInnerHTML={{ __html: p }} />
                                    ))}
                                    {row.extraParagraphs && row.extraParagraphs.map((p, i) => (
                                        <p key={i + 'extra'} className={`mb-4 lg:text-xl${row.italic ? ' italic' : ''}`} dangerouslySetInnerHTML={{ __html: p }} />
                                    ))}
                                    {row.image && (
                                        <img
                                            src={row.image}
                                            className={row.imageClass || "w-full border rounded-t-lg -mb-5"}
                                            alt={row.imageAlt || ''}
                                            loading="lazy"
                                        />
                                    )}
                                    {row.links && row.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target={link.target || "_self"}
                                            rel={link.rel || ''}
                                            className={link.className}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default EnterpriseRows;