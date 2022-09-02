import html2canvas from "html2canvas";
// html转canvas图片
async function toBase64ForDefaultValue(htmlID,color=null) {
  let img = await html2canvas(document.getElementById(htmlID), {
    dpi: 1000,
    backgroundColor: color,
    scale:4
  }).then(function(canvas) {
    let image = canvas.toDataURL("png");
    return image;
  });
  return img;
}
export default toBase64ForDefaultValue;
