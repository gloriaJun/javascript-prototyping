import html2canvas from 'html2canvas';

export const htmlToCanvasDataURL = async (el) => {
    let canvas = await html2canvas(el, {
        useCORS: true,
    });
    return canvas.toDataURL();
}