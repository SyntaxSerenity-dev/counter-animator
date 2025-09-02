/**
 * ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                                                                                                                   ║
 * ║  ███████╗██╗   ██╗███╗   ██╗████████╗ █████╗ ██╗  ██╗███████╗█████╗██████╗ █████╗███╗   ██╗██╗████████╗██╗   ██╗  ║
 * ║  ██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██╔══██╗╚██╗██╔╝██╔════╝██╔══╝██╔══██╗██╔══╝████╗  ██║██║╚══██╔══╝╚██╗ ██╔╝  ║
 * ║  ███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║ ╚███╔╝ ███████╗█████╗██████╔╝█████╗██╔██╗ ██║██║   ██║    ╚████╔╝   ║
 * ║  ╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║ ██╔██╗ ╚════██║██╔══╝██╔══██╗██╔══╝██║╚██╗██║██║   ██║     ╚██╔╝    ║
 * ║  ███████║   ██║   ██║ ╚████║   ██║   ██║  ██║██╔╝ ██╗███████║█████╗██║  ██║█████╗██║ ╚████║██║   ██║      ██║     ║
 * ║  ╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚════╝╚═╝  ╚═╝╚════╝╚═╝  ╚═══╝╚═╝   ╚═╝      ╚═╝     ║
 * ║                                R E L I A B I L I T Y   I N   E V E R Y   L I N E                                  ║
 * ║                                              O F   C O D E                                                        ║
 * ║                                                                                                                   ║
 * ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * File: counterAnimator.js
 *
 * Description:
 *
 *  Advanced counter animation library that provides smooth, performant number counting animations with intelligent
 *  formatting and UX optimizations. Features automatic number format detection, multiple easing functions, responsive
 *  design, and comprehensive localization support. The system automatically detects number formats from HTML content,
 *  provides preset configurations for different regions, and includes advanced features like number abbreviation and
 *  custom formatting options.
 *
 *  Key Features:
 *
 *  - Intelligent number format detection and parsing
 *  - Multiple easing functions with visual effects
 *  - Automatic intersection observer for scroll-triggered animations
 *  - Comprehensive localization support (Angola, Brazil, US, Europe)
 *  - Number abbreviation for large values (1K, 1M, 1B)
 *  - Custom formatting with separators and decimal places
 *  - Visual effects during animation (scale, color interpolation)
 *  - Preset configurations for common use cases
 *
 * Structure:
 *
 *  - Configuration Management (defaults, number formatting options)
 *  - Easing Functions (linear, bounce, elastic, dramatic, wave effects)
 *  - Element Setup (automatic detection and configuration)
 *  - Intersection Observer (scroll-triggered animations)
 *  - Animation Engine (requestAnimationFrame based)
 *  - Number Parsing (intelligent format detection)
 *  - Formatting System (custom and preset formats)
 *  - Visual Effects (scale, color interpolation)
 *  - Utility Methods (reset, pause, destroy)
 *  - Factory Functions (createCounterAnimator, animateCounters)
 *
 * Dependencies:
 *
 *  - Intersection Observer API (for automatic triggering)
 *  - requestAnimationFrame for smooth animations
 *  - Modern browser support for ES6+ features
 *  - CSS transforms for visual effects
 *  - Performance API for timing (optional)
 *
 * @package counterAnimator/src
 * @category Script Animation
 * @version 2.1.0
 * @since 2024-09-15
 * @license MIT
 * @author syntax serenity <fs.developerfullstack@gmail.com>
*/
class CounterAnimator {
 /**
     * PURPOSE OF THE FUNCTION: Initializes the CounterAnimator instance with configuration options and sets up the animation system.
     * DESCRIPTION:
     *    - Creates a new CounterAnimator instance with merged default and custom options
     *    - Sets up easing functions with enhanced visual effects and performance optimizations
     *    - Initializes internal state management for animated elements and observers
     *    - Automatically starts the system if autoStart is enabled
     *    - Configures number formatting options with intelligent defaults
     * 
     * DEPENDENCIES:
     *    - ES6 class constructor syntax
     *    - Object spread operator for configuration merging
     *    - Set data structure for animated elements tracking
     *    - Intersection Observer API (optional)
     * 
     * @param {Object} options Configuration object to override default settings
     * @return {CounterAnimator} Returns the initialized CounterAnimator instance
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 constructor(options = {}) {
      // DEFAULT SETTINGS
     this.defaults = {
         selector: '.counter', // CSS element selector
         duration: 2000, // Animation duration in ms
         effect: 'easeOutCubic', // Effect type
         startValue: 0, // Initial value
         delay: 0, // Delay between elements
         formatNumber: true, // format numbers (1,000)
            
         // Number formatting options
         numberFormat: {
             style: 'standard', // 'standard', 'currency', 'percent'
             locale: 'pt-AO', // Location
             thousandsSeparator: ' ', // Thousands separator (' ', ',', '.')
             decimalSeparator: ',', // Decimal separator (',', '.')
             decimals: 0, // Number of decimal places
             showDecimals: false, // Show decimals even if it is 0
             abbreviate: false, // Abbreviate large numbers (1M, 1K, etc.)
             abbreviations: {
                 thousand: 'K',
                 million: 'M',
                 billion: 'B',
                 trillion: 'T'
             },
             // Configuration for decimal detection
             inputDecimalSeparator: 'auto', // 'auto', ',', '.' - separator used in HTML
             smartDetection: true // Intelligent format detection
         },
            
         separator: ',', // Thousands separator (deprecated - usar numberFormat)
         prefix: '', // Prefix (ex: "$")
         suffix: '', // Suffix (ex: "+", "%")
         onStart: null, // Callback at the beginning
         onUpdate: null, // Callback during update
         onComplete: null, // Callback at the end
         observerOptions: {
             threshold: 0.3,
             rootMargin: '0px 0px -50px 0px'
         },
         autoStart: true, // Automatically start when visible
         triggerOnce: true // Run only once
     };
 
     // Merge settings
     this.config = { ...this.defaults, ...options };
        
     // Easing functions available with more visual differences
     this.easingFunctions = {
         linear: t => t,
         slow: t => Math.pow(t, 4), // Very slow at first
         fast: t => 1 - Math.pow(1 - t, 0.3), // Very fast at the beginning
         bounce: t => {
             // More pronounced bounce effect
             const n1 = 7.5625;
             const d1 = 2.75;
             if (t < 1 / d1) {
                 return n1 * t * t;
             } else if (t < 2 / d1) {
                 return n1 * (t -= 1.5 / d1) * t + 0.75;
             } else if (t < 2.5 / d1) {
                 return n1 * (t -= 2.25 / d1) * t + 0.9375;
             } else {
                 return n1 * (t -= 2.625 / d1) * t + 0.984375;
             }
         },
         elastic: t => {
             // More visible elastic effect
             if (t === 0) return 0;
             if (t === 1) return 1;
             const c4 = (2 * Math.PI) / 3;
             return t < 0.5
                 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c4)) / 2
                 : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c4)) / 2 + 1;
         },
         steps: t => Math.floor(t * 5) / 5, // Step animation
         smooth: t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, // Soft
         dramatic: t => t < 0.8 ? 0 : (t - 0.8) / 0.2, // Dramatic pause
         wave: t => Math.sin(t * Math.PI * 2) * 0.1 + t // Wave effect
     };
 
     this.animatedElements = new Set();
     this.observer = null;
        
     if (this.config.autoStart) {
         this.init();
     }
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Initializes the counter animation library and sets up all necessary components.
     * DESCRIPTION:
     *    - Sets up DOM elements for animation by extracting numeric values and formatting information
     *    - Configures intersection observer for automatic animation triggering when elements become visible
     *    - Prepares the system for both manual and automatic animation execution
     *    - Handles fallback for browsers without Intersection Observer support
     * 
     * DEPENDENCIES:
     *    - setupElements() for DOM element configuration
     *    - setupObserver() for intersection observer setup
     *    - Intersection Observer API (with fallback)
     *    - DOM querying and manipulation
     * 
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 init() {
     this.setupElements();
     if (this.config.autoStart) {
         this.setupObserver();
     }
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Configures DOM elements for counter animation by extracting and storing necessary data.
     * DESCRIPTION:
     *    - Queries DOM for elements matching the configured selector
     *    - Extracts numeric values from element text content using intelligent parsing
     *    - Automatically detects prefixes and suffixes from the original text
     *    - Stores configuration data in element dataset for animation processing
     *    - Prepares elements for both automatic and manual animation triggering
     * 
     * DEPENDENCIES:
     *    - document.querySelectorAll for element selection
     *    - extractNumber() for intelligent number parsing
     *    - extractPrefix() and extractSuffix() for text analysis
     *    - Element dataset API for data storage
     * 
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     * @link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 setupElements() {
     const elements = document.querySelectorAll(this.config.selector);
     
     elements.forEach(element => {
         // Extract element value
         const text = element.textContent.trim();
         const numericValue = this.extractNumber(text);
         const originalText = text; 
         // Store data in the element
         element.dataset.originalText = originalText;
         element.dataset.targetValue = numericValue;
         element.dataset.animated = 'false'; 
         // Automatically detect prefix and suffix
         const prefix = this.config.prefix || this.extractPrefix(text);
         const suffix = this.config.suffix || this.extractSuffix(text);
         
         element.dataset.prefix = prefix;
         element.dataset.suffix = suffix;
     });
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Sets up intersection observer for automatic animation triggering when elements become visible.
     * DESCRIPTION:
     *    - Creates Intersection Observer to monitor element visibility in the viewport
     *    - Automatically triggers animations when elements intersect with the viewport
     *    - Provides fallback for browsers without Intersection Observer support
     *    - Configures observer options for optimal triggering behavior
     *    - Manages element observation lifecycle for performance optimization
     * 
     * DEPENDENCIES:
     *    - Intersection Observer API (with fallback)
     *    - animateElement() for animation execution
     *    - Configuration options (threshold, rootMargin)
     *    - Browser compatibility detection
     * 
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     * @link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 setupObserver() {
     if (!window.IntersectionObserver) {
         // Fallback for unsupported browsers
         this.animateAll();
         return;
     } 
     this.observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting && entry.target.dataset.animated === 'false') {
                 this.animateElement(entry.target);
                 
                 if (this.config.triggerOnce) {
                     this.observer.unobserve(entry.target);
                 }
             }
         });
     }, this.config.observerOptions); 
     // Observe all elements
     document.querySelectorAll(this.config.selector).forEach(element => {
         this.observer.observe(element);
     });
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Animates a specific DOM element with counter animation using requestAnimationFrame.
     * DESCRIPTION:
     *    - Executes smooth counter animation for a single element using performance-optimized timing
     *    - Applies easing functions for natural animation progression
     *    - Updates element content in real-time during animation
     *    - Triggers callback functions at start, update, and completion stages
     *    - Applies visual effects during animation for enhanced user experience
     *    - Ensures precise final value display and cleanup
     * 
     * DEPENDENCIES:
     *    - requestAnimationFrame for smooth animation timing
     *    - Easing functions for animation progression
     *    - formatValue() for number formatting
     *    - addVisualEffect() and removeVisualEffect() for visual enhancements
     *    - Performance API for timing (optional)
     * 
     * @param {HTMLElement} element The DOM element to animate
     * @param {Object} customConfig Optional custom configuration to override defaults
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 animateElement(element, customConfig = {}) {
     if (element.dataset.animated === 'true' && this.config.triggerOnce) {
         return;
     } 
     const config = { ...this.config, ...customConfig };
     const targetValue = parseFloat(element.dataset.targetValue);
     const startValue = config.startValue;
     const prefix = element.dataset.prefix || '';
     const suffix = element.dataset.suffix || '';
     
     element.dataset.animated = 'true';
     this.animatedElements.add(element); 
     // Start callback
     if (config.onStart) {
         config.onStart(element, targetValue);
     } 
     const startTime = performance.now();
     const easingFunction = this.easingFunctions[config.effect] || this.easingFunctions.easeOutCubic; 
     const animate = (currentTime) => {
         const elapsed = currentTime - startTime;
         const progress = Math.min(elapsed / config.duration, 1);
         const easedProgress = easingFunction(progress);
         
         const currentValue = startValue + (targetValue - startValue) * easedProgress;
         const formattedValue = this.formatValue(currentValue, config);
         
         element.textContent = prefix + formattedValue + suffix; 
         // Update callback
         if (config.onUpdate) {
             config.onUpdate(element, currentValue, progress);
         } 
         // Add visual effect during animation
         this.addVisualEffect(element, progress); 
         if (progress < 1) {
             requestAnimationFrame(animate);
         } else {
             // Ensure accurate final value
             const finalValue = this.formatValue(targetValue, config);
             element.textContent = prefix + finalValue + suffix;
             
             // Completion callback
             if (config.onComplete) {
                 config.onComplete(element, targetValue);
             } 
             // Remove visual effect
             this.removeVisualEffect(element);
         }
     }; 
     requestAnimationFrame(animate);
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Animates all matching elements with optional staggered delays for sequential animation.
     * DESCRIPTION:
     *    - Animates all elements matching the configured selector simultaneously or sequentially
     *    - Applies configurable delays between elements for staggered animation effects
     *    - Supports custom configuration overrides for batch operations
     *    - Uses setTimeout for precise delay timing between element animations
     *    - Ideal for creating wave-like animation effects across multiple counters
     * 
     * DEPENDENCIES:
     *    - document.querySelectorAll for element selection
     *    - animateElement() for individual element animation
     *    - setTimeout for delay management
     *    - Configuration options (delay, customConfig)
     * 
     * @param {Object} customConfig Optional custom configuration to override defaults
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 animateAll(customConfig = {}) {
     const elements = document.querySelectorAll(this.config.selector);
     const config = { ...this.config, ...customConfig };
     
     elements.forEach((element, index) => {
         setTimeout(() => {
             this.animateElement(element, config);
         }, index * config.delay);
     });
 }
   
 /**
      * PURPOSE OF THE FUNCTION: Resets all animated counters to their original state and prepares them for re-animation.
      * DESCRIPTION:
      *    - Restores all elements to their original text content before animation
      *    - Clears animation state flags to allow re-animation
      *    - Removes visual effects applied during previous animations
      *    - Clears internal tracking of animated elements
      *    - Re-establishes intersection observer for automatic triggering
      *    - Useful for dynamic content updates or page state resets
      * 
      * DEPENDENCIES:
      *    - document.querySelectorAll for element selection
      *    - removeVisualEffect() for cleanup
      *    - Intersection Observer API for re-observation
      *    - Element dataset management
      * 
      * @return void
      * 
      * @link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe
      * @author syntax serenity <fs.developerfullstack@gmail.com>
  */
 reset() {
      const elements = document.querySelectorAll(this.config.selector);
      
      elements.forEach(element => {
          element.textContent = element.dataset.originalText || '0';
          element.dataset.animated = 'false';
          this.removeVisualEffect(element);
      }); 
      this.animatedElements.clear(); 
      if (this.observer) {
          elements.forEach(element => {
              this.observer.observe(element);
          });
      }
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Pauses all ongoing counter animations and maintains current state.
     * DESCRIPTION:
     *    - Stops all active animations while preserving current counter values
     *    - Maintains visual effects and animation state for later resumption
     *    - Logs pause status for debugging and user feedback
     *    - Note: Full pause implementation requires storing requestAnimationFrame references
     *    - Useful for user interaction or performance optimization scenarios
     * 
     * DEPENDENCIES:
     *    - console.log for status reporting
     *    - requestAnimationFrame reference management (future enhancement)
     *    - Animation state preservation
     * 
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 pause() {
     // Implementação em desenvolvimento
     console.log('Animações pausadas');
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Completely destroys the CounterAnimator instance and cleans up all resources.
     * DESCRIPTION:
     *    - Disconnects intersection observer to stop all automatic triggering
     *    - Clears internal tracking of animated elements to free memory
     *    - Removes all event listeners and observers
     *    - Prepares the instance for garbage collection
     *    - Essential for preventing memory leaks in single-page applications
     *    - Should be called before removing the instance or page unload
     * 
     * DEPENDENCIES:
     *    - Intersection Observer API (disconnect)
     *    - Set data structure for memory cleanup
     *    - Browser garbage collection optimization
     * 
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 destroy() {
     if (this.observer) {
         this.observer.disconnect();
     }
     this.animatedElements.clear();
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Extracts numeric values from text content using intelligent format detection and parsing.
     * DESCRIPTION:
     *    - Analyzes text content to identify and extract numeric values
     *    - Supports multiple number formats including different decimal separators
     *    - Uses intelligent detection for automatic format recognition
     *    - Handles various international number formatting conventions
     *    - Provides fallback parsing for backward compatibility
     *    - Essential for accurate animation value calculation
     * 
     * DEPENDENCIES:
     *    - parseNumberWithKnownFormat() for specified format parsing
     *    - smartNumberDetection() for automatic format recognition
     *    - Regular expressions for pattern matching
     *    - parseFloat for numeric conversion
     * 
     * @param {string} text The text content to extract numbers from
     * @return {number} Returns the extracted numeric value or 0 if none found
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 extractNumber(text) {
     const cleanText = text.trim();
     const config = this.config.numberFormat;
     
     // If the user specified the Decimal separator
     if (config.inputDecimalSeparator !== 'auto') {
         return this.parseNumberWithKnownFormat(cleanText, config.inputDecimalSeparator);
     }
     
     // Intelligent automatic detection
     if (config.smartDetection) {
         return this.smartNumberDetection(cleanText);
     }
     
     // Standard method (backward compatibility)
     const matches = cleanText.match(/-?\d+([.,]\d+)?/);
     return matches ? parseFloat(matches[0].replace(',', '.')) : 0;
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Intelligently detects and parses number formats from text content using pattern analysis.
     * DESCRIPTION:
     *    - Analyzes text patterns to determine the correct number format automatically
     *    - Counts separators to distinguish between decimal and thousands separators
     *    - Handles mixed separator scenarios with intelligent logic
     *    - Provides robust parsing for international number formats
     *    - Falls back to standard parsing for simple cases
     *    - Essential for accurate number extraction without manual format specification
     * 
     * DEPENDENCIES:
     *    - Regular expressions for separator counting
     *    - parseWithCommaSeparator() for comma-based parsing
     *    - parseWithDotSeparator() for dot-based parsing
     *    - parseWithMixedSeparators() for complex scenarios
     * 
     * @param {string} text The text content to analyze for number format
     * @return {number} Returns the parsed numeric value or 0 if parsing fails
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 smartNumberDetection(text) {
     // Remove non-numeric characters except commas, periods and signs
     const cleanText = text.replace(/[^\d.,-]/g, '');
     
     // Simple cases without separators
     if (!/[.,]/.test(cleanText)) {
         return parseFloat(cleanText) || 0;
     }
     
     // Count commas and periods
     const commaCount = (cleanText.match(/,/g) || []).length;
     const dotCount = (cleanText.match(/\./g) || []).length;
     
     // Cases with only one type of separator
     if (commaCount > 0 && dotCount === 0) {
         return this.parseWithCommaSeparator(cleanText);
     }
     
     if (dotCount > 0 && commaCount === 0) {
         return this.parseWithDotSeparator(cleanText);
     }
     
     // Cases with both separators
     if (commaCount > 0 && dotCount > 0) {
         return this.parseWithMixedSeparators(cleanText);
     }
     
     return 0;
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Parses numbers that use commas as separators, intelligently determining if they are decimal or thousands separators.
     * DESCRIPTION:
     *    - Analyzes comma usage patterns to determine separator function
     *    - Handles single comma scenarios (decimal vs thousands separator)
     *    - Uses digit count analysis to make intelligent decisions
     *    - Supports multiple comma scenarios for thousands separators
     *    - Provides fallback logic for edge cases
     *    - Essential for accurate parsing of comma-based number formats
     * 
     * DEPENDENCIES:
     *    - Regular expressions for comma counting
     *    - String splitting and manipulation
     *    - parseFloat for numeric conversion
     *    - Digit length analysis logic
     * 
     * @param {string} text The text containing comma-separated numbers
     * @return {number} Returns the parsed numeric value
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 parseWithCommaSeparator(text) {
     const commaCount = (text.match(/,/g) || []).length;
     
     // If there is only one comma, it can be decimal or thousands
     if (commaCount === 1) {
         const parts = text.split(',');
         const beforeComma = parts[0];
         const afterComma = parts[1];
         
         // If the part after the comma has 1-2 digits, it is probably decimal
         if (afterComma.length <= 2 && beforeComma.length <= 3) {
             return parseFloat(beforeComma + '.' + afterComma);
         }
         
         // If the part after the comma has 3 digits, it is probably Thousands separator
         if (afterComma.length === 3) {
             return parseFloat(beforeComma + afterComma);
         }
         
         // Default: treat as decimal if <= 2 digits after comma
         if (afterComma.length <= 2) {
             return parseFloat(beforeComma + '.' + afterComma);
         }
     }
     
     // Multiple commas = thousands separators
     return parseFloat(text.replace(/,/g, ''));
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Parses numbers that use dots as separators, intelligently determining if they are decimal or thousands separators.
     * DESCRIPTION:
     *    - Analyzes dot usage patterns to determine separator function
     *    - Handles single dot scenarios (decimal vs thousands separator)
     *    - Uses digit count analysis to make intelligent decisions
     *    - Supports multiple dot scenarios for thousands separators
     *    - Provides fallback logic for complex dot patterns
     *    - Essential for accurate parsing of dot-based number formats
     * 
     * DEPENDENCIES:
     *    - Regular expressions for dot counting
     *    - String splitting and manipulation
     *    - parseFloat for numeric conversion
     *    - lastIndexOf for position analysis
     * 
     * @param {string} text The text containing dot-separated numbers
     * @return {number} Returns the parsed numeric value
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 parseWithDotSeparator(text) {
     const dotCount = (text.match(/\./g) || []).length;
     
     // If there is only one point, it can be decimal or thousands
     if (dotCount === 1) {
         const parts = text.split('.');
         const beforeDot = parts[0];
         const afterDot = parts[1];
         
         // If the part after the period has 1-2 digits, it is probably decimal
         if (afterDot.length <= 2 && beforeDot.length <= 3) {
             return parseFloat(text);
         }
         
         // If the part after the period has 3 digits, it is probably Thousands separator
         if (afterDot.length === 3) {
             return parseFloat(beforeDot + afterDot);
         }
         
         // Default: Treat as decimal
         return parseFloat(text);
     }
     
     // Multiple periods = thousands separators, last can be decimal
     const lastDotIndex = text.lastIndexOf('.');
     const beforeLastDot = text.substring(0, lastDotIndex).replace(/\./g, '');
     const afterLastDot = text.substring(lastDotIndex + 1);
     
     // If the last part has 1-2 digits, it is probably decimal
     if (afterLastDot.length <= 2) {
         return parseFloat(beforeLastDot + '.' + afterLastDot);
     }
     
     // Otherwise, they are all thousands separators.
     return parseFloat(text.replace(/\./g, ''));
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Parses numbers with mixed comma and dot separators, intelligently determining decimal and thousands separators.
     * DESCRIPTION:
     *    - Analyzes text with both comma and dot separators
     *    - Determines decimal separator based on last occurrence position
     *    - Handles complex international number formats
     *    - Provides robust parsing for mixed separator scenarios
     *    - Supports various regional formatting conventions
     *    - Essential for accurate parsing of complex number formats
     * 
     * DEPENDENCIES:
     *    - lastIndexOf for position analysis
     *    - String manipulation and replacement
     *    - parseFloat for numeric conversion
     *    - Position-based logic for separator determination
     * 
     * @param {string} text The text containing mixed comma and dot separators
     * @return {number} Returns the parsed numeric value
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 parseWithMixedSeparators(text) {
     const lastCommaIndex = text.lastIndexOf(',');
     const lastDotIndex = text.lastIndexOf('.');
     
     // Determine which is the Decimal separator (the last one)
     if (lastCommaIndex > lastDotIndex) {
         // Comma is decimal, periods are thousands separators
         const beforeComma = text.substring(0, lastCommaIndex).replace(/\./g, '');
         const afterComma = text.substring(lastCommaIndex + 1);
         return parseFloat(beforeComma + '.' + afterComma);
     } else {
         // Period is decimal, commas are thousands separators
         const beforeDot = text.substring(0, lastDotIndex).replace(/,/g, '');
         const afterDot = text.substring(lastDotIndex + 1);
         return parseFloat(beforeDot + '.' + afterDot);
     }
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Parses numbers with a known decimal separator format for precise number extraction.
     * DESCRIPTION:
     *    - Uses specified decimal separator to accurately parse number formats
     *    - Automatically determines thousands separator based on decimal separator
     *    - Handles cases with and without decimal parts
     *    - Provides reliable parsing for known format specifications
     *    - Essential for consistent number parsing in controlled environments
     *    - Supports both comma and dot decimal separator conventions
     * 
     * DEPENDENCIES:
     *    - lastIndexOf for decimal separator position
     *    - Regular expressions for thousands separator removal
     *    - parseFloat for numeric conversion
     *    - String manipulation for parts separation
     * 
     * @param {string} text The text containing the number to parse
     * @param {string} decimalSeparator The known decimal separator (',' or '.')
     * @return {number} Returns the parsed numeric value
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 parseNumberWithKnownFormat(text, decimalSeparator) {
     const thousandsSeparator = decimalSeparator === ',' ? '.' : ',';
     
     // Find the last occurrence of the Decimal separator
     const lastDecimalIndex = text.lastIndexOf(decimalSeparator);
     
     if (lastDecimalIndex === -1) {
         // No Decimal separator, just remove thousands separators
         return parseFloat(text.replace(new RegExp(`\\${thousandsSeparator}`, 'g'), ''));
     }
     
     // Separate whole and decimal parts
     const integerPart = text.substring(0, lastDecimalIndex).replace(new RegExp(`\\${thousandsSeparator}`, 'g'), '');
     const decimalPart = text.substring(lastDecimalIndex + 1);
     return parseFloat(integerPart + '.' + decimalPart);
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Extracts prefix characters from text content that appear before numeric values.
     * DESCRIPTION:
     *    - Identifies and extracts non-numeric characters at the beginning of text
     *    - Preserves currency symbols, text labels, and other prefixes
     *    - Uses regular expressions for accurate pattern matching
     *    - Handles edge cases with negative numbers and special characters
     *    - Essential for maintaining text formatting during animations
     *    - Supports various prefix types (currency, labels, symbols)
     * 
     * DEPENDENCIES:
     *    - Regular expressions for pattern matching
     *    - String manipulation for extraction
     *    - Negative number handling logic
     * 
     * @param {string} text The text content to extract prefix from
     * @return {string} Returns the extracted prefix string or empty string if none
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 extractPrefix(text) {
     const match = text.match(/^([^\d-]*)/);
     return match ? match[1] : '';
 } 
 
 /**
     * PURPOSE OF THE FUNCTION: Extracts suffix characters from text content that appear after numeric values.
     * DESCRIPTION:
     *    - Identifies and extracts non-numeric characters at the end of text
     *    - Preserves units, percentages, and other suffix indicators
     *    - Uses regular expressions for accurate pattern matching
     *    - Handles various suffix types (%, +, units, text labels)
     *    - Essential for maintaining text formatting during animations
     *    - Supports international suffix conventions
     * 
     * DEPENDENCIES:
     *    - Regular expressions for pattern matching
     *    - String manipulation for extraction
     *    - End-of-string pattern recognition
     * 
     * @param {string} text The text content to extract suffix from
     * @return {string} Returns the extracted suffix string or empty string if none
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 extractSuffix(text) {
     const match = text.match(/([^\d]*)$/);
     return match ? match[1] : '';
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Formats numeric values according to configuration settings with support for abbreviations and custom formatting.
     * DESCRIPTION:
     *    - Applies number formatting based on configuration options
     *    - Supports number abbreviation for large values (1K, 1M, 1B)
     *    - Handles custom formatting with separators and decimal places
     *    - Provides fallback to simple formatting when disabled
     *    - Ensures consistent output format across all animations
     *    - Essential for proper display of animated counter values
     * 
     * DEPENDENCIES:
     *    - abbreviateNumber() for large number abbreviation
     *    - formatCustomNumber() for detailed formatting
     *    - Configuration options (formatNumber, numberFormat)
     *    - Math.round for value rounding
     * 
     * @param {number} value The numeric value to format
     * @param {Object} config The configuration object containing formatting options
     * @return {string} Returns the formatted number string
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 formatValue(value, config) {
     const format = config.numberFormat;
     
     // If not to format, returns simple value
     if (!config.formatNumber) {
         return Math.round(value).toString();
     } 
 
     // Abbreviation of large numbers
     if (format.abbreviate) {
         return this.abbreviateNumber(value, format);
     } 
 
     // Custom formatting
     return this.formatCustomNumber(value, format);
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Abbreviates large numbers using standard notation (K, M, B, T) for better readability.
     * DESCRIPTION:
     *    - Converts large numbers to abbreviated format (e.g., 1000000 → 1M)
     *    - Supports multiple abbreviation levels (thousand, million, billion, trillion)
     *    - Maintains decimal precision for abbreviated values
     *    - Preserves negative signs and applies proper formatting
     *    - Uses configuration-based abbreviation symbols
     *    - Essential for displaying large statistics in compact format
     * 
     * DEPENDENCIES:
     *    - formatCustomNumber() for final formatting
     *    - Configuration abbreviations (K, M, B, T)
     *    - Math operations for value division
     *    - Absolute value calculation for threshold checking
     * 
     * @param {number} value The numeric value to abbreviate
     * @param {Object} format The formatting configuration object
     * @return {string} Returns the abbreviated number string
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 abbreviateNumber(value, format) {
     const abs = Math.abs(value);
     const sign = value < 0 ? '-' : '';
     
     if (abs >= 1000000000000) {
         const abbreviated = (value / 1000000000000);
         return sign + this.formatCustomNumber(abbreviated, {...format, showDecimals: true, decimals: 1}) + format.abbreviations.trillion;
     } else if (abs >= 1000000000) {
         const abbreviated = (value / 1000000000);
         return sign + this.formatCustomNumber(abbreviated, {...format, showDecimals: true, decimals: 1}) + format.abbreviations.billion;
     } else if (abs >= 1000000) {
         const abbreviated = (value / 1000000);
         return sign + this.formatCustomNumber(abbreviated, {...format, showDecimals: true, decimals: 1}) + format.abbreviations.million;
     } else if (abs >= 1000) {
         const abbreviated = (value / 1000);
         return sign + this.formatCustomNumber(abbreviated, {...format, showDecimals: true, decimals: 1}) + format.abbreviations.thousand;
     }
     
     return this.formatCustomNumber(value, format);
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Formats numbers with custom separators, decimal places, and thousands formatting.
     * DESCRIPTION:
     *    - Applies custom number formatting with configurable separators
     *    - Handles thousands separators for improved readability
     *    - Manages decimal places with optional zero padding
     *    - Supports different international formatting conventions
     *    - Ensures consistent formatting across all number displays
     *    - Essential for proper number presentation in various locales
     * 
     * DEPENDENCIES:
     *    - addThousandsSeparator() for thousands formatting
     *    - Number.toFixed() for decimal precision
     *    - String manipulation for decimal part handling
     *    - Configuration options (decimals, showDecimals, separators)
     * 
     * @param {number} value The numeric value to format
     * @param {Object} format The formatting configuration object
     * @return {string} Returns the custom formatted number string
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 formatCustomNumber(value, format) {
     let rounded = value;
     
     // Round based on decimal places
     if (format.decimals > 0 || format.showDecimals) {
         rounded = Number(value.toFixed(format.decimals));
     } else {
         rounded = Math.round(value);
     } 
     // Separate whole and decimal parts
     let [integerPart, decimalPart] = rounded.toString().split('.');
     
     // Formatting the integer part with thousands separators
     if (Math.abs(rounded) >= 1000 && format.thousandsSeparator) {
         integerPart = this.addThousandsSeparator(integerPart, format.thousandsSeparator);
     } 
     // Final number assembly
     let formattedNumber = integerPart; 
     // Add decimal part if necessary
     if (format.showDecimals || (format.decimals > 0 && decimalPart)) {
         const decimal = decimalPart || '0'.repeat(format.decimals);
         const paddedDecimal = decimal.padEnd(format.decimals, '0');
         formattedNumber += format.decimalSeparator + paddedDecimal;
     } 
     return formattedNumber;
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Adds thousands separators to number strings for improved readability.
     * DESCRIPTION:
     *    - Inserts separators every three digits from right to left
     *    - Preserves negative signs during formatting
     *    - Uses configurable separator characters (space, comma, dot)
     *    - Handles edge cases like single digits and negative numbers
     *    - Essential for displaying large numbers in human-readable format
     *    - Supports international formatting conventions
     * 
     * DEPENDENCIES:
     *    - Regular expressions for digit grouping
     *    - String manipulation for separator insertion
     *    - Negative sign preservation logic
     *    - Configurable separator character
     * 
     * @param {string} numberString The number string to format
     * @param {string} separator The separator character to use
     * @return {string} Returns the formatted number string with separators
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 addThousandsSeparator(numberString, separator) {
     // Temporarily removes negative sign
     const isNegative = numberString.startsWith('-');
     const cleanNumber = isNegative ? numberString.slice(1) : numberString;
     
     // Add thousands separators from right to left
     const formatted = cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
     
     return isNegative ? '-' + formatted : formatted;
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Provides predefined number formatting configurations for common international locales and use cases.
     * DESCRIPTION:
     *    - Returns a collection of pre-configured formatting options for different regions
     *    - Includes formats for Angola, Brazil, United States, and European conventions
     *    - Provides specialized formats for currency, percentages, and abbreviated numbers
     *    - Enables quick setup without manual configuration
     *    - Supports common business and localization requirements
     *    - Essential for rapid deployment in multi-region applications
     * 
     * DEPENDENCIES:
     *    - Static method implementation
     *    - Object literal with formatting configurations
     *    - International formatting standards
     *    - Regional formatting conventions
     * 
     * @return {Object} Returns an object containing preset formatting configurations
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 static getPresetFormats() {
     return {
         // Angolan standard format
         'pt-ao': {
             thousandsSeparator: ' ',
             decimalSeparator: ',',
             decimals: 0,
             showDecimals: false,
             abbreviate: false
         },
         
         // Angolan monetary format
         'currency-ao': {
             thousandsSeparator: ' ',
             decimalSeparator: ',',
             decimals: 2,
             showDecimals: true,
             abbreviate: false
         },
         
         // American format
         'en-us': {
             thousandsSeparator: ',',
             decimalSeparator: '.',
             decimals: 0,
             showDecimals: false,
             abbreviate: false
         },
         
         // American currency format
         'currency-us': {
             thousandsSeparator: ',',
             decimalSeparator: '.',
             decimals: 2,
             showDecimals: true,
             abbreviate: false
         },
         
         // Brazilian format
         'pt-br': {
             thousandsSeparator: '.',
             decimalSeparator: ',',
             decimals: 0,
             showDecimals: false,
             abbreviate: false
         },
         
         // Brazilian monetary format
         'currency-br': {
             thousandsSeparator: '.',
             decimalSeparator: ',',
             decimals: 2,
             showDecimals: true,
             abbreviate: false
         },
         
         // European format
         'eu': {
             thousandsSeparator: '.',
             decimalSeparator: ',',
             decimals: 0,
             showDecimals: false,
             abbreviate: false
         },
         
         // Short format
         'abbreviated': {
             thousandsSeparator: ' ',
             decimalSeparator: ',',
             decimals: 1,
             showDecimals: false,
             abbreviate: true
         },
         
         // Percentage format
         'percentage': {
             thousandsSeparator: ' ',
             decimalSeparator: ',',
             decimals: 1,
             showDecimals: true,
             abbreviate: false
         }
     };
 }
 
 /**
     * PURPOSE OF THE FUNCTION: Applies visual effects to elements during counter animation for enhanced user experience.
     * DESCRIPTION:
     *    - Adds subtle scale effects using sine wave interpolation for natural movement
     *    - Applies color interpolation between two specified colors during animation
     *    - Uses CSS transforms for hardware-accelerated visual effects
     *    - Provides smooth transitions between visual states
     *    - Enhances animation perception without being distracting
     *    - Essential for creating engaging and polished counter animations
     * 
     * DEPENDENCIES:
     *    - CSS transforms for scale effects
     *    - CSS transitions for smooth state changes
     *    - interpolateColor() for color transitions
     *    - Math.sin for natural movement patterns
     * 
     * @param {HTMLElement} element The DOM element to apply visual effects to
     * @param {number} progress The animation progress value (0 to 1)
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/transform
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/transition
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 addVisualEffect(element, progress) {
     // Subtle scaling effect during animation
     const scale = 1 + Math.sin(progress * Math.PI) * 0.05;
     element.style.transform = `scale(${scale})`;
     element.style.transition = 'transform 0.1s ease';
     
     // Color effect
     if (progress < 1) {
         element.style.color = this.interpolateColor('#2d5016', '#6b8e23', progress);
     }
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Removes all visual effects from elements after animation completion.
     * DESCRIPTION:
     *    - Clears CSS transforms and color modifications applied during animation
     *    - Restores elements to their original visual state
     *    - Ensures clean appearance after animation completion
     *    - Prevents visual artifacts from persisting
     *    - Essential for maintaining consistent element styling
     *    - Called automatically when animations complete
     * 
     * DEPENDENCIES:
     *    - Element style manipulation
     *    - CSS property reset
     *    - Animation completion detection
     * 
     * @param {HTMLElement} element The DOM element to remove visual effects from
     * @return void
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 removeVisualEffect(element) {
     element.style.transform = '';
     element.style.color = '';
 }
   
 /**
     * PURPOSE OF THE FUNCTION: Interpolates between two hex colors based on progress value for smooth color transitions.
     * DESCRIPTION:
     *    - Converts hex colors to RGB components for mathematical interpolation
     *    - Calculates intermediate color values based on animation progress
     *    - Provides smooth color transitions during counter animations
     *    - Supports any two hex color values for flexible theming
     *    - Returns RGB color string for CSS compatibility
     *    - Essential for creating dynamic visual feedback during animations
     * 
     * DEPENDENCIES:
     *    - Hex to RGB conversion logic
     *    - Mathematical interpolation calculations
     *    - RGB color string formatting
     *    - Progress value validation
     * 
     * @param {string} color1 The starting hex color (e.g., '#2d5016')
     * @param {string} color2 The ending hex color (e.g., '#6b8e23')
     * @param {number} progress The interpolation progress (0 to 1)
     * @return {string} Returns the interpolated RGB color string
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
     * @author syntax serenity <fs.developerfullstack@gmail.com>
 */
 interpolateColor(color1, color2, progress) {
     const hex1 = color1.replace('#', '');
     const hex2 = color2.replace('#', '');
     
     const r1 = parseInt(hex1.substr(0, 2), 16);
     const g1 = parseInt(hex1.substr(2, 2), 16);
     const b1 = parseInt(hex1.substr(4, 2), 16);
     
     const r2 = parseInt(hex2.substr(0, 2), 16);
     const g2 = parseInt(hex2.substr(2, 2), 16);
     const b2 = parseInt(hex2.substr(4, 2), 16);
     
     const r = Math.round(r1 + (r2 - r1) * progress);
     const g = Math.round(g1 + (g2 - g1) * progress);
     const b = Math.round(b1 + (b2 - b1) * progress);
     
     return `rgb(${r}, ${g}, ${b})`;
 }
}
   
/**
 * PURPOSE OF THE FUNCTION: Factory function that creates and returns a new CounterAnimator instance with specified options.
 * DESCRIPTION:
 *    - Provides a convenient way to create CounterAnimator instances without using the 'new' keyword
 *    - Accepts configuration options and passes them to the constructor
 *    - Returns a fully configured CounterAnimator instance
 *    - Enables functional programming style usage
 *    - Useful for creating multiple instances with different configurations
 *    - Essential for simplified API usage and better developer experience
 * 
 * DEPENDENCIES:
 *    - CounterAnimator class constructor
 *    - Object parameter passing
 *    - Instance creation and return
 * 
 * @param {Object} options Configuration options for the CounterAnimator instance
 * @return {CounterAnimator} Returns a new CounterAnimator instance
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * @author syntax serenity <fs.developerfullstack@gmail.com>
*/
function createCounterAnimator(options) { return new CounterAnimator(options);}
   
/**
 * PURPOSE OF THE FUNCTION: Quick animation function that creates a CounterAnimator and immediately starts animating all matching elements.
 * DESCRIPTION:
 *    - Provides a one-line solution for quick counter animations
 *    - Creates a CounterAnimator instance with specified options
 *    - Automatically starts animation for all matching elements
 *    - Returns the animator instance for further control
 *    - Ideal for simple use cases without complex configuration
 *    - Essential for rapid prototyping and simple implementations
 * 
 * DEPENDENCIES:
 *    - CounterAnimator class
 *    - createCounterAnimator() function
 *    - animateAll() method
 *    - Configuration merging
 * 
 * @param {string} selector CSS selector for elements to animate (defaults to '.counter')
 * @param {Object} options Configuration options for the animation
 * @return {CounterAnimator} Returns the CounterAnimator instance for further control
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
 * @author syntax serenity <fs.developerfullstack@gmail.com>
*/
function animateCounters(selector = '.counter', options = {}) {
 const animator = new CounterAnimator({
     selector,
     ...options,
     autoStart: false
 });
 animator.animateAll();
 return animator;
}
   
/**
 * PURPOSE OF THE SECTION: Exports the CounterAnimator library for use in different JavaScript environments.
 * DESCRIPTION:
 *    - Provides CommonJS module export for Node.js environments
 *    - Exports all public functions and classes for external usage
 *    - Ensures compatibility with both module and global script loading
 *    - Enables flexible integration in various project setups
 *    - Maintains backward compatibility with different loading methods
 *    - Essential for library distribution and integration
 * 
 * DEPENDENCIES:
 *    - module.exports for CommonJS compatibility
 *    - Environment detection for appropriate export method
 *    - Multiple export targets for flexibility
 * 
 * @link https://nodejs.org/api/modules.html#modules_module_exports
 * @author syntax serenity <fs.developerfullstack@gmail.com>
*/
if (typeof module !== 'undefined' && module.exports) {
 module.exports = { CounterAnimator, createCounterAnimator, animateCounters };
}
   
/**
 * PURPOSE OF THE SECTION: Comprehensive usage examples demonstrating various CounterAnimator configurations and use cases.
 * DESCRIPTION:
 *    - Provides practical examples for different animation scenarios
 *    - Demonstrates configuration options and preset formats
 *    - Shows integration patterns for various project types
 *    - Includes examples for international formatting and localization
 *    - Essential for developers to understand library capabilities
 *    - Serves as both documentation and implementation reference
 * 
 * DEPENDENCIES:
 *    - CounterAnimator class and methods
 *    - Preset format configurations
 *    - Configuration object examples
 *    - Real-world usage patterns
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * @author syntax serenity <fs.developerfullstack@gmail.com>
*/

 // Exemplo de uso expandido:
 /*
 // Uso básico com formatação padrão angolana
 const animator = new CounterAnimator({
     selector: '.stat-number',
     duration: 2000,
     effect: 'bounce'
 });
 
 // Uso com formatação monetária
 const moneyAnimator = new CounterAnimator({
     selector: '.price-counter',
     duration: 1500,
     effect: 'smooth',
     prefix: 'Kz ',
     numberFormat: CounterAnimator.getPresetFormats()['currency-ao']
 });
 
 // Uso com números abreviados
 const bigNumbersAnimator = new CounterAnimator({
     selector: '.big-stats',
     duration: 2500,
     effect: 'elastic',
     numberFormat: {
         abbreviate: true,
         thousandsSeparator: ' ',
         decimalSeparator: ',',
         decimals: 1,
         abbreviations: {
             thousand: 'K',
             million: 'M',
             billion: 'B',
             trillion: 'T'
         }
     }
 });
 
 // Uso com formatação personalizada
 const customAnimator = new CounterAnimator({
     selector: '.custom-counter',
     duration: 3000,
     effect: 'dramatic',
     numberFormat: {
         thousandsSeparator: '.',
         decimalSeparator: ',',
         decimals: 2,
         showDecimals: true,
         abbreviate: false
     },
     onComplete: (element, value) => {
         console.log(`Finalizado: ${value}`);
     }
 });
 
 // Formatos predefinidos disponíveis:
 const formats = CounterAnimator.getPresetFormats();
 console.log(formats['pt-ao']);        // Formato angolano padrão
 console.log(formats['currency-ao']);  // Formato monetário angolano  
 console.log(formats['abbreviated']);  // Números abreviados (1M, 1K)
 console.log(formats['en-us']);        // Formato americano
 console.log(formats['pt-br']);        // Formato brasileiro
 
 // Uso da função simplificada com formatos
 animateCounters('.counter', {
     effect: 'bounce',
     duration: 2000,
     numberFormat: CounterAnimator.getPresetFormats()['abbreviated']
 });
 
 // Exemplo para valores monetários grandes
 animateCounters('.revenue-counter', {
     effect: 'smooth',
     duration: 3000,
     prefix: 'Kz ',
     numberFormat: {
         thousandsSeparator: ' ',
         decimalSeparator: ',',
         decimals: 0,
         abbreviate: true,
         abbreviations: {
             thousand: 'K',
             million: 'M',
             billion: 'B'
         }
     }
 });
 */