import React, { useState } from "react";
import PDF from "../assets/Mustapha_Kromah2.pdf";
import { pdfjs, Document, Page } from "react-pdf";
import Footer from "../components/Footer";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const maxWidth = 800;
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [showPDF, setShowPDF] = useState(true);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const handleDownload = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
         open(fileURL, '_blank')  //alternative to the a link opens embedded adobe viewer !CHECK SAFARI!
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mustapha_Kromah2.pdf";
        alink.click(); 
      });
    });
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
    <><div className="bgImg2 text-white">
      <div className="pb-2 mx-5 ">
        <h1 className="pb-2 text-3xl  ">Resume</h1>
        <h6>
          Toggle here to view my{" "}
          <a href="#image" onClick={handleClick} className="underline">
            resume
          </a>{" "}
          as an image. 
        </h6>
        Click here to download my{" "}
        <a href="#download" onClick={handleDownload} className="underline">
          resume as a pdf.
        </a>
      </div>
      {showPDF ? (
        <div className="mx-5 flex flex-row">
          <ul className="mx-5">
            <p className="font-bold text-white"> Front-end Proficiencies</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>MUI</li>
            <li>TailwindCSS</li>
          </ul>

          <ul className="mx-5 basis-50">
            <p className="font-bold"> Back-end Proficiencies</p>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
         
        </div>
      ) : (
        <div className="">
          <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={
                containerWidth
                  ? Math.min(containerWidth, maxWidth) - 30
                  : maxWidth
              }
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          
        </div>
      )}
      </div>
      <Footer></Footer>
    </>
  );
}