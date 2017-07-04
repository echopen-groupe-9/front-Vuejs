/**
 * Created by Thib on 04/07/2017.
 */
export default {
    FadeInElem: {
        init() {
            this.getElement(['div'])
        },

        getElement (elementsTab) {
            for (let i = 0; i < elementsTab.length; i++) {
                let element = document.querySelectorAll(elementsTab);
                for (let j = 0; j < element.length; j++) {
                    this.fadeIn(element[j], 50)
                }
            }

        },

        fadeIn (elementToScroll, offset) {
            document.addEventListener('scroll', () => {
                if (window.pageYOffset + window.innerHeight + offset >= elementToScroll.offsetTop) {
                    elementToScroll.className = "js-isShown";
                }
                else {
                    elementToScroll.classList.remove("js-isShown");
                }
            });
        }
    }
}
