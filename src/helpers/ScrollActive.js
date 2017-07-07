/**
 * Imports
 */
import windowSize from '../utils/window/window-size';

/**
 * ScrollActiveClass
 */
export default class ScrollActiveClass {

  constructor(element, options) {
    options = options || {};
    this.el = element;
    this.screenOffset = options.screenOffset || "bottom";
    this.yoyo =  options.yoyo;
    this.elHeight = this.el.offsetHeight;

    if (this.el) {
      this.getScreenOffset();
      this.initCurrentPosition(); /* Set after load page */
      this.bindEvents();
    }
  }


  bindEvents() {
    /* Launch Scroll function*/
    if (!this._bindedScroll) {
      this._bindedScroll = this.prepareScrollPosition.bind(this);
      window.addEventListener('scroll', this._bindedScroll);
    }

    if (!this._bindedResize) {
      this._bindedResize = this.onResize.bind(this);
      window.addEventListener('resize', this._bindedResize);
    }
  }

  unBindEvents() {
    if (this._bindedScroll) {
      window.removeEventListener('scroll', this._bindedScroll);
      this._bindedScroll = null;
    }

    if (this._bindedResize) {
      window.removeEventListener('resize', this._bindedResize);
      this._bindedResize = null;
    }
  }



  getScreenOffset() {

    /* Get ScreenOffset to start animation */
    if (this.screenOffset === "top") {
      this.screenOffsetVal = 0;
    } else if (this.screenOffset === "middle") {
      this.screenOffsetVal = windowSize()[1] * .5;
    } else if (this.screenOffset === "bottom" ) {
      this.screenOffsetVal = windowSize()[1] * .7;
    }
  }


  calcDistance() {

    // Calc scrollTop of body and ParentElement
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    // Calc rect of element
    let elRect = this.el.getBoundingClientRect();
    let elTop = elRect.top + scrollTop;

    /* Calc distance */
    let distance = scrollTop - elTop;

    return distance;
  }



  initCurrentPosition() {

    let dist = this.calcDistance();

    if (dist >= -this.screenOffsetVal) {
      this.el.classList.add('is-active');

    } else {

      if (this.yoyo) {
        this.el.classList.remove('is-active');
      }

    }

  }



  prepareScrollPosition() {
    this.initCurrentPosition();
  }



  onResize() {
    this.elHeight = this.el.offsetHeight;
    this.getScreenOffset();
    this.initCurrentPosition(); /* Set after load page */

  }

}
