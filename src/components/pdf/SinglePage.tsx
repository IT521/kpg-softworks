import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function SinglePage({
    pdf,
    width,
}: {
    pdf: string;
    width: number;
}) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1); // setting 1 to show first page

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage(event: any) {
        event?.preventDefault();
        changePage(-1);
    }

    function nextPage(event: any) {
        event?.preventDefault();
        changePage(1);
    }

    function setPage(page: number, event: any) {
        event?.preventDefault();
        setPageNumber(page);
    }

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={width} />
            </Document>
            <p>
                Page {pageNumber || (numPages ? 1 : '--')} of&nbsp;
                {numPages || '--'}
            </p>
            <nav>
                <div className="pagination">
                    <a
                        href="/"
                        style={{
                            pointerEvents: pageNumber <= 1 ? 'none' : 'auto',
                        }}
                        onClick={previousPage}
                    >
                        &laquo;
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(1, event)}
                    >
                        1
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(2, event)}
                    >
                        2
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(3, event)}
                    >
                        3
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(4, event)}
                    >
                        4
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(5, event)}
                    >
                        5
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(6, event)}
                    >
                        6
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={(event) => setPage(7, event)}
                    >
                        7
                    </a>
                    <a
                        href="/"
                        style={{
                            pointerEvents:
                                pageNumber >= numPages ? 'none' : 'auto',
                        }}
                        onClick={nextPage}
                    >
                        &raquo;
                    </a>
                </div>
            </nav>
        </div>
    );
}
