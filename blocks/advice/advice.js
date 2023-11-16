export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    let imgUrl;

    // setup image footer-socials
    [...block.children].forEach((row) => {

        [...row.children].forEach((col) => {

            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper) {
                    picWrapper.classList.add('expert-advice');
                    picWrapper.parentNode.classList.add('advice-flex')

                    //get background
                    imgUrl = pic.querySelector('img').src;
                    pic.remove();
                }
            }
            const title = col.querySelector('h2');
            if(title) {
                const picWrapper = title.closest('div');
                if (picWrapper) {
                    picWrapper.classList.add('article');
                }
            }
        });
    });


    //additional divs
    let originalElement = document.querySelector('.expert-advice');
    let newDiv = document.createElement('div');
    newDiv.appendChild(originalElement.cloneNode(true));
    newDiv.classList.add('expert-advice-wrapper');
    newDiv.style.backgroundImage = `url(${imgUrl})`;
    originalElement.parentNode.replaceChild(newDiv, originalElement);

    originalElement = document.querySelector('.article');
    newDiv = document.createElement('div');
    newDiv.appendChild(originalElement.cloneNode(true));
    newDiv.classList.add('article-wrapper');
    originalElement.parentNode.replaceChild(newDiv, originalElement);
}