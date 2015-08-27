var NewQuery = {

  getElement: function(selector) {
    this.element = document.querySelectorAll(selector);
    
    this.htmlContent = [];
    for(var i = 0; i < this.element.length; i++) {
      this.htmlContent.push(this.element[i].outerHTML);
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
    return new NewQueryNode(this.element[position]);
  }
};

function NewQueryNode(element) {
  this.element = element;
  console.log(element);
}

NewQueryNode.prototype.html = function() {
  return this.element.innerHTML;
};