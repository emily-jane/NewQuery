var NewQuery = {

  getElement: function(selector) {
    this.selectorTypeCheck(selector);
    console.log(this.element);
    return this.element;
  },

  eq: function(position) {
    if (this.element.count === 1) {
      return getElement[0];
    } else {
      return getElement[position];
    }
  },

  selectorTypeCheck: function(selector) {

    // if (selector[0] === "#") {
    //   this.element = document.querySelector(selector).innerHTML;
    // };

    // if (selector[0] === ".") {
      this.element = document.querySelectorAll(selector)[0].innerHTML;
    // };
  }
};
