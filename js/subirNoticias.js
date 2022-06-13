/* let uploadNews = document.getElementById ('btnUploadNews');
uploadNews.addEventListener ('click', submitForm());
function submitForm () {
    title = document.getElementById ('titleNews').ariaValueMax;
    console.log (title);

    content = document.getElementById ('contentNews').ariaValueMax;
    console.log (content);
} */

let uploadNews = document.getElementById ('btnUploadNews');
uploadNews.addEventListener ('submit', submitForm());
function submitForm () {
    title = document.getElementById ('titleNews').ariaValueMax;
    console.log (title);

    content = document.getElementById ('contentNews').ariaValueMax;
    console.log (content);
}