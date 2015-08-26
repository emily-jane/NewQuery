var NewQuery = {

  // selectedHTMLElements: document.querySelectorAll();


  getElement: function(selector) {
    this.element = document.querySelectorAll(selector);
    this.htmlContent = [];
    for(var i = 0; i < this.element.length; i++) {
      this.htmlContent.push(this.element[i].outerText);
    };
    if(this.htmlContent.length === 1){
      return this.htmlContent[0];
    } else {
      return this;
    };

  },

  first: function() {
    return this.eq(0);
  },

  last: function() {
    return this.eq(this.element.length -1 );
  },

  eq: function(position) {
    return this.element[position];

  }
};

  // returnInnerHTML: function(element) {

  //   // if (selector[0] === "#") {
  //   //   this.element = document.querySelector(selector).innerHTML;
  //   // };

  //   // if (selector[0] === ".") {
  //     return element.innerHTML;
  //     // this.element = document.querySelectorAll(selector);
  //   // };
  // }



// NewQuery.prototype.returnInnerHTML = function(element) {
//   return element.innerHTML;
// };

//.innerHTML