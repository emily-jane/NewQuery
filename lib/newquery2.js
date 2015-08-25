var NewQuery = {

  getElement: function(selector) {
    this.selector = selector;
    return this.selector;
  },

  eq: function(position) {
    this.selectorTypeCheck(position);
    return this.element;
  }

};

NewQuery.prototype.selectorTypeCheck = function(position) {

  if (selector[0] === "#") {
    this.element = document.getElementById(this.selector.slice(1)).innerHTML;
  };

  if (selector[0] === ".") {
    this.element = document.getElementsByClassName(this.selector.slice(1))[position].innerHTML;
  };
  console.log("you got this far")
};

