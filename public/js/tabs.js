/**
 * A possible component handler interface using the revealing module design
 * pattern.
 * @author Addy Osmani (addyo@google.com)
 */
var componentHandler = function() {
  'use strict';

  var registeredComponents_ = [];
  var createdComponents_ = [];


  /**
   * Searches registered components for a class we are interested in using.
   * Optionally replaces a match with passed object if specified.
   * @param {string} name The name of a class we want to use.
   * @param {object} opt_replace Optional object to replace match with.
   * @return {Object | false}
   * @private
   */
  function findRegisteredClass_(name, opt_replace) {
    for (var i = 0; i < registeredComponents_.length; i++) {
      if (registeredComponents_[i].className === name) {
        if (opt_replace !== undefined) {
          registeredComponents_[i] = opt_replace;
        }
        return registeredComponents_[i];
      }
    }
    return false;
  }


  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   * @param {string} jsClass the programatic name of the element class we need
   * to create a new instance of.
   * @param {string} cssClass the name of the CSS class elements of this type
   * will have.
   */
  function upgradeDomInternal(jsClass, cssClass) {
    if (cssClass === undefined) {
      var registeredClass = findRegisteredClass_(jsClass);
      if (registeredClass) {
        cssClass = registeredClass.cssClass;
      }
    }

    var elements = document.querySelectorAll('.' + cssClass);
    for (var n = 0; n < elements.length; n++) {
      upgradeElementInternal(elements[n], jsClass);
    }
  }


  /**
   * Upgrades a specific element rather than all in the DOM.
   * @param {HTMLElement} element The element we wish to upgrade.
   * @param {string} jsClass The name of the class we want to upgrade
   * the element to.
   */
  function upgradeElementInternal(element, jsClass) {
    // Only upgrade elements that have not already been upgraded.
    if (element.getAttribute('data-upgraded') === null) {
      // Upgrade element.
      element.setAttribute('data-upgraded', '');
      var registeredClass = findRegisteredClass_(jsClass);
      if (registeredClass) {
        createdComponents_.push(new registeredClass.classConstructor(element));
      } else {
        // If component creator forgot to register, try and see if
        // it is in global scope.
        createdComponents_.push(new window[jsClass](element));
      }
    }
  }


  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   * @param {object} config An object containting:
   * {constructor: Constructor, classAsString: string, cssClass: string}
   */
  function registerInternal(config) {
    var newConfig = {
      'classConstructor': config.constructor,
      'className': config.classAsString,
      'cssClass': config.cssClass
    };

    var found = findRegisteredClass_(config.classAsString, newConfig);

    if (!found) {
      registeredComponents_.push(newConfig);
    }
    
    upgradeDomInternal(config.classAsString);
  }


  // Now return the functions that should be made public with their publicly
  // facing names...
  return {
    upgradeDom: upgradeDomInternal,
    upgradeElement: upgradeElementInternal,
    register: registerInternal
  };
}();








/**
 * Material Design Tabs
 * @param {HTMLElement} element The element that will be upgraded.
 */
function MaterialTabs(element) {
  'use strict';

  // Example private variable. Uses underscore notation to denote private var.
  this.element_ = element;

  // Other private vars can go here as needed...

  // Initialize instance.
  this.init();
}

/**
 * Store constants in one place so they can be updated easily.
 * @enum {string}
 * @private
 */
MaterialTabs.prototype.Constant_ = {
  /**
   * Name should be descriptive so no comment needed.
   */
  MEANING_OF_LIFE: '42',
  SPECIAL_WORD: 'HTML5',
  ACTIVE_CLASS: 'active'
};

/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 * @enum {string}
 * @private
 */
MaterialTabs.prototype.CssClasses_ = {
  /**
   * Class names should use camelCase and be prefixed with the word "material"
   * to minimize conflict with 3rd party systems.
   */
  SHOW: 'materialShow',
  /**
   * Explain what the class is for.
   */
  HIDE: 'materialHidden'
};


/**
 * Handle clicks to a tabs component
 * @private
 */
MaterialTabs.prototype.initTabs_ = function(e) {
  'use strict';
  
  // Select element tabs, document panels
  this.tabs_   = this.element_.querySelectorAll('.tab');
  this.panels_ = document.querySelectorAll('.panel');

  // Create new tabs for each tab element
  for (var i=0; i < this.tabs_.length; i++) {
    new MaterialTab(this.tabs_[i], this); 
  }
};

/**
 * Reset tab state, dropping active classes
 * @private
 */
MaterialTabs.prototype.resetTabState_ = function() {
  for (var k=0; k < this.tabs_.length; k++) {
    this.tabs_[k].classList.remove('active');
  }  
};

/**
 * Reset panel state, droping active classes
 * @private
 */
MaterialTabs.prototype.resetPanelState_ = function() {
  for (var j=0; j < this.panels_.length; j++) {
    this.panels_[j].classList.remove('active');
  } 
};

function MaterialTab (tab, ctx) {  
  if (tab) {
    var link = tab.querySelector('a');
    
    link.addEventListener('click', function(e){
      e.preventDefault();
      var href = link.href.split('#')[1];
      var panel = document.querySelector('#' + href);
      ctx.resetTabState_();
      ctx.resetPanelState_();
      tab.classList.add('active');
      panel.classList.add('active');
    });   
    
  }
};


MaterialTabs.prototype.init = function() {
  if (this.element_) {
    this.initTabs_();
  }
}


window.addEventListener('load', function() {
  // On document ready, the component registers itself. It can assume
  // componentHandler is available in the global scope.
  componentHandler.register({
    constructor: MaterialTabs,
    classAsString: 'MaterialTabs',
    cssClass: 'MaterialTabs'
  });
});