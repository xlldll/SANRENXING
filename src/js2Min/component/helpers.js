let helpers =  {
  formatPrice :  function(cents) {
    return '$' + ( (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
  },
  rando : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  slugify : function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  },
  getFunName : function() {
	  var adjectives = ['a', 'b', 'c', 'd', 'e'];
	
	  var nouns = ['f1', 'f2'];
    
    return `${this.rando(adjectives)}-${this.rando(adjectives)}-${this.rando(nouns)}`;
  }
}

export default helpers;
