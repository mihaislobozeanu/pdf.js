// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// Hello world example for browserify: worker bundle.

(typeof window !== 'undefined' ? window : {}).pdfjsDistBuildPdfWorker =
	require('embed-pdfjs-dist/build/pdf.worker');
