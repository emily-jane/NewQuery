var NewQuery = function(){

};

NewQuery.prototype.getElement = function(selector) {
  this.selectorTypeCheck(selector);
  console.log(this.element);
  return this.element;



};

NewQuery.prototype.selectorTypeCheck = function(selector) {

  if (selector[0] === "#") {
    this.element = document.querySelector(selector).innerHTML;
  };

  if (selector[0] === ".") {
    this.element = document.querySelectorAll(selector)[0].innerHTML;
  };
};

NewQuery.prototype.eq = function(position) {
  return getElement[position];
};




// newQuery.eq()
// .getElement('.test-class')
// .eq(1) -- >  document.getElementsByClassName(selector.slice(1))[1]