var NewQuery = {

  getElement: function(selector) {
    this.element = document.querySelectorAll(selector);
    this.htmlContent = [];
    for(var i = 0; i < this.element.length; i++) {
      this.htmlContent.push(this.element[i].outerHTML);
      console.log(this);
    };
    if(this.htmlContent.length === 1){
      this.currentContent = this.htmlContent[0];
      console.log(this.htmlContent[0]);
      return this.htmlContent[0];
    } else {
      return this;
      // console.log(this);
    };
  },

  first: function() {
    return this.eq(0);
  },

  last: function() {
    return this.eq(this.element.length -1 );
  },

  eq: function(position) {
    this.currentContent = this.element[position];
    return this.element[position];
  },

  html: function(content) {
    // this.element.innerHTML = content;
    // console.log(this.element.innerHTML);
    //console.log(this.currentContent);
    // return this.currentContent;
  }
};