# 🚀 CounterAnimator.js

> **Advanced counter animation library with intelligent number formatting and international localization support**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/SyntaxSerenity-dev/counter-animator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/author-syntax%20serenity-green.svg)](mailto:fs.developerfullstack@gmail.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [📖 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🎨 Animation Effects](#-animation-effects)
- [🔧 Advanced Methods](#-advanced-methods)
- [📱 Practical Examples](#-practical-examples)
- [🌍 International Formats](#-international-formats)
- [📊 Performance](#-performance)
- [🌐 Compatibility](#-compatibility)
- [📝 Changelog](#-changelog)
- [📄 License](#-license)

---

## 🎯 Overview

**CounterAnimator.js** is a modern JavaScript library that creates smooth and engaging counter animations with intelligent number formatting. It automatically detects number formats, provides international localization support, and includes advanced features like number abbreviation and custom formatting options.

### 🎯 What makes CounterAnimator special?

- **🔄 Intelligent**: Automatically detects number formats from HTML content
- **⚡ Performant**: Uses requestAnimationFrame and optimized parsing
- **🌍 International**: Supports multiple regional formatting conventions
- **📱 Responsive**: Works seamlessly with Intersection Observer API
- **🎨 Flexible**: Multiple easing functions and visual effects
- **🔢 Smart**: Abbreviates large numbers (1K, 1M, 1B) automatically

---

## ✨ Features

### 🚀 Performance

- ✅ **RequestAnimationFrame** for smooth animations
- ✅ **Intersection Observer** for automatic triggering
- ✅ **Optimized parsing** with intelligent format detection
- ✅ **Memory management** with automatic cleanup

### 🎨 Smart UX

- ✅ **Automatic format detection** from HTML content
- ✅ **Visual effects** during animation (scale, color)
- ✅ **Multiple easing functions** (bounce, elastic, dramatic)
- ✅ **Staggered animations** for multiple elements

### 🌍 Internationalization

- ✅ **Multiple regional formats** (Angola, Brazil, US, Europe)
- ✅ **Automatic separator detection** (comma, dot, space)
- ✅ **Currency and percentage** formatting support
- ✅ **Number abbreviation** for large values

### 🔧 Development

- ✅ **Zero dependencies** - Works natively
- ✅ **Factory functions** for easy instantiation
- ✅ **Debug mode** for development
- ✅ **Simple API** and intuitive usage

---

## 🚀 Installation

### 1. Direct Download

```html
<!-- Add JavaScript -->
<script src="path/to/counterAnimator.js"></script>
```

### 2. As ES6 Module

```javascript
import {
  CounterAnimator,
  createCounterAnimator,
  animateCounters
} from "./counterAnimator.js";
```

### 3. Via CDN (when available)

```html
<script src="https://cdn.example.com/counterAnimator.js"></script>
```

---

## 📖 Quick Start

### 🎯 Step 1: Basic Usage

```javascript
// Simple initialization
const animator = new CounterAnimator();

// Or use factory function
const animator = createCounterAnimator();

// Quick animation function
animateCounters(".counter");
```

### 🎯 Step 2: HTML

```html
<!-- Basic counter -->
<div class="counter">1,000</div>

<!-- With custom settings -->
<div class="counter" data-duration="3000" data-effect="bounce">2,500</div>

<!-- Currency counter -->
<div class="counter" data-prefix="Kz " data-suffix=" +">15,000</div>
```

### 🎯 Step 3: Advanced Configuration

```javascript
const animator = new CounterAnimator({
  selector: ".counter",
  duration: 2000,
  effect: "bounce",
  formatNumber: true,
  numberFormat: CounterAnimator.getPresetFormats()["pt-ao"]
});
```

**🎉 Done!** Your counters now have smooth animations with intelligent formatting.

---

## ⚙️ Configuration

### 🔧 Complete Configuration

```javascript
const animator = new CounterAnimator({
  // Basic settings
  selector: ".counter", // CSS selector for elements
  duration: 2000, // Animation duration in ms
  effect: "easeOutCubic", // Easing function
  startValue: 0, // Starting value for animation
  delay: 0, // Delay between elements (ms)
  formatNumber: true, // Enable number formatting

  // Number formatting options
  numberFormat: {
    style: "standard", // 'standard', 'currency', 'percent'
    locale: "pt-AO", // Regional locale
    thousandsSeparator: " ", // Thousands separator
    decimalSeparator: ",", // Decimal separator
    decimals: 0, // Decimal places
    showDecimals: false, // Always show decimals
    abbreviate: false, // Enable abbreviation (1K, 1M)
    abbreviations: {
      thousand: "K",
      million: "M",
      billion: "B",
      trillion: "T"
    },
    inputDecimalSeparator: "auto", // Auto-detect format
    smartDetection: true // Intelligent format detection
  },

  // Legacy options (deprecated)
  separator: ",", // Thousands separator
  prefix: "", // Text prefix
  suffix: "", // Text suffix

  // Callbacks
  onStart: null, // Animation start callback
  onUpdate: null, // Animation update callback
  onComplete: null, // Animation complete callback

  // Observer options
  observerOptions: {
    threshold: 0.3, // Visibility threshold
    rootMargin: "0px 0px -50px 0px" // Observer margin
  },

  // Behavior
  autoStart: true, // Start automatically
  triggerOnce: true // Animate only once
});
```

### 🎨 Predefined Formats

#### 1. **Angolan Standard** (Default)

```javascript
CounterAnimator.getPresetFormats()["pt-ao"];
// Result: { thousandsSeparator: ' ', decimalSeparator: ',', decimals: 0 }
```

#### 2. **Angolan Currency**

```javascript
CounterAnimator.getPresetFormats()["currency-ao"];
// Result: { thousandsSeparator: ' ', decimalSeparator: ',', decimals: 2, showDecimals: true }
```

#### 3. **US Standard**

```javascript
CounterAnimator.getPresetFormats()["en-us"];
// Result: { thousandsSeparator: ',', decimalSeparator: '.', decimals: 0 }
```

#### 4. **Brazilian Format**

```javascript
CounterAnimator.getPresetFormats()["pt-br"];
// Result: { thousandsSeparator: '.', decimalSeparator: ',', decimals: 0 }
```

#### 5. **European Format**

```javascript
CounterAnimator.getPresetFormats()["eu"];
// Result: { thousandsSeparator: '.', decimalSeparator: ',', decimals: 0 }
```

#### 6. **Abbreviated Numbers**

```javascript
CounterAnimator.getPresetFormats()["abbreviated"];
// Result: { abbreviate: true, decimals: 1, showDecimals: false }
```

---

## 🎨 Animation Effects

### 📍 Available Effects

| Effect     | Description       | Visual Behavior              |
| ---------- | ----------------- | ---------------------------- |
| `linear`   | Constant speed    | Smooth, uniform progression  |
| `slow`     | Slow start        | Very gradual acceleration    |
| `fast`     | Fast start        | Quick initial movement       |
| `bounce`   | Bouncy effect     | Elastic, playful animation   |
| `elastic`  | Elastic effect    | Stretchy, rubber-like motion |
| `steps`    | Stepped animation | Discrete value changes       |
| `smooth`   | Smooth curve      | Natural, flowing motion      |
| `dramatic` | Dramatic pause    | Pause then quick finish      |
| `wave`     | Wave effect       | Subtle oscillating motion    |

### 🎯 HTML with Data Attributes

```html
<!-- Bounce effect -->
<div class="counter" data-effect="bounce">1,000</div>

<!-- Elastic effect with custom duration -->
<div class="counter" data-effect="elastic" data-duration="3000">2,500</div>

<!-- Dramatic effect -->
<div class="counter" data-effect="dramatic">5,000</div>
```

### ⚙️ Per-Element Configuration

```html
<div
  class="counter"
  data-effect="bounce"
  data-duration="2500"
  data-delay="0.3"
  data-start-value="0"
>
  10,000
</div>
```

**📝 Note:** Per-element configurations override global settings.

---

## 🔧 Advanced Methods

### ➕ Add Elements Dynamically

```javascript
// Add by CSS selector
animator.addElements(".new-counters");

// Add NodeList
const elements = document.querySelectorAll(".my-counters");
animator.addElements(elements);

// Add single element
const element = document.getElementById("my-counter");
animator.addElements(element);

// Add with custom configuration
animator.addElements(".counters", {
  effect: "bounce",
  duration: 1500,
  delay: 0.1
});
```

### ➖ Remove Elements

```javascript
// Remove by selector
animator.removeElements(".counters-to-remove");

// Remove NodeList
const elements = document.querySelectorAll(".counters");
animator.removeElements(elements);

// Remove single element
const element = document.getElementById("counter");
animator.removeElements(element);
```

### 🔄 State Management

```javascript
// Reset all counters
animator.reset();

// Pause animations
animator.pause();

// Destroy instance
animator.destroy();
```

### 📞 Animation Callbacks

```javascript
const animator = new CounterAnimator({
  onStart: (element, targetValue) => {
    console.log("Animation started for:", element, "Target:", targetValue);
    element.classList.add("animating");
  },

  onUpdate: (element, currentValue, progress) => {
    console.log("Progress:", progress, "Current value:", currentValue);
    // Custom update logic
  },

  onComplete: (element, finalValue) => {
    console.log("Animation completed:", finalValue);
    element.classList.remove("animating");
    element.classList.add("completed");
  }
});
```

---

## 📱 Practical Examples

### 🛍️ 1. E-commerce Statistics

```html
<div class="stats-grid">
  <div class="stat-item">
    <div class="counter" data-effect="bounce">15,000</div>
    <p>Happy Customers</p>
  </div>

  <div class="stat-item">
    <div class="counter" data-effect="elastic" data-prefix="Kz ">2,500,000</div>
    <p>Revenue Generated</p>
  </div>

  <div class="stat-item">
    <div class="counter" data-effect="dramatic" data-suffix="%">98.5</div>
    <p>Satisfaction Rate</p>
  </div>
</div>
```

```javascript
const statsAnimator = new CounterAnimator({
  selector: ".counter",
  duration: 2500,
  effect: "bounce",
  formatNumber: true,
  numberFormat: CounterAnimator.getPresetFormats()["pt-ao"]
});
```

### 📊 2. Dashboard Metrics

```html
<div class="dashboard">
  <div class="metric">
    <h3>Total Users</h3>
    <div class="counter" data-effect="smooth">125,430</div>
  </div>

  <div class="metric">
    <h3>Active Sessions</h3>
    <div class="counter" data-effect="wave">8,742</div>
  </div>

  <div class="metric">
    <h3>Conversion Rate</h3>
    <div class="counter" data-effect="elastic" data-suffix="%">12.8</div>
  </div>
</div>
```

```javascript
const dashboardAnimator = new CounterAnimator({
  selector: ".counter",
  duration: 2000,
  effect: "smooth",
  staggerDelay: 200,
  formatNumber: true,
  numberFormat: CounterAnimator.getPresetFormats()["en-us"]
});
```

### 🎯 3. Landing Page Impact

```html
<div class="hero-stats">
  <div class="hero-stat">
    <div class="counter" data-effect="dramatic" data-prefix="+">1,000,000</div>
    <p>Users Worldwide</p>
  </div>

  <div class="hero-stat">
    <div class="counter" data-effect="bounce" data-suffix=" Countries">150</div>
    <p>Global Reach</p>
  </div>

  <div class="hero-stat">
    <div class="counter" data-effect="elastic" data-suffix="%">99.9</div>
    <p>Uptime</p>
  </div>
</div>
```

```javascript
const heroAnimator = new CounterAnimator({
  selector: ".counter",
  duration: 3000,
  effect: "dramatic",
  staggerDelay: 300,
  formatNumber: true,
  numberFormat: CounterAnimator.getPresetFormats()["abbreviated"]
});
```

### 💰 4. Financial Data

```html
<div class="financial-summary">
  <div class="financial-item">
    <h4>Monthly Revenue</h4>
    <div class="counter" data-effect="smooth" data-prefix="$">45,678.90</div>
  </div>

  <div class="financial-item">
    <h4>Growth Rate</h4>
    <div class="counter" data-effect="elastic" data-suffix="%">23.5</div>
  </div>

  <div class="financial-item">
    <h4>Total Assets</h4>
    <div class="counter" data-effect="bounce" data-prefix="$">2,345,678</div>
  </div>
</div>
```

```javascript
const financialAnimator = new CounterAnimator({
  selector: ".counter",
  duration: 2000,
  effect: "smooth",
  formatNumber: true,
  numberFormat: CounterAnimator.getPresetFormats()["currency-us"]
});
```

---

## 🌍 International Formats

### 📍 Regional Formatting

#### **Angola (pt-AO)**

```javascript
// Format: 1 234 567,89
{
    thousandsSeparator: ' ',
    decimalSeparator: ',',
    decimals: 0,
    showDecimals: false
}
```

#### **Brazil (pt-BR)**

```javascript
// Format: 1.234.567,89
{
    thousandsSeparator: '.',
    decimalSeparator: ',',
    decimals: 0,
    showDecimals: false
}
```

#### **United States (en-US)**

```javascript
// Format: 1,234,567.89
{
    thousandsSeparator: ',',
    decimalSeparator: '.',
    decimals: 0,
    showDecimals: false
}
```

#### **Europe (eu)**

```javascript
// Format: 1.234.567,89
{
    thousandsSeparator: '.',
    decimalSeparator: ',',
    decimals: 0,
    showDecimals: false
}
```

### 🔢 Number Abbreviation

```javascript
// Large numbers automatically abbreviated
const bigNumbersAnimator = new CounterAnimator({
  selector: ".big-counter",
  numberFormat: {
    abbreviate: true,
    thousandsSeparator: " ",
    decimalSeparator: ",",
    decimals: 1,
    abbreviations: {
      thousand: "K",
      million: "M",
      billion: "B",
      trillion: "T"
    }
  }
});

// Results:
// 1,500 → 1.5K
// 2,500,000 → 2.5M
// 1,000,000,000 → 1.0B
```

---

## 📊 Performance

### 🚀 Automatic Optimizations

- **RequestAnimationFrame**: Smooth animation timing
- **Intersection Observer**: Efficient visibility detection
- **Smart Parsing**: Intelligent number format detection
- **Memory Management**: Automatic cleanup and resource management
- **Optimized Formatting**: Efficient string manipulation

### ⚡ Optimization Tips

#### For many counters:

```javascript
const animator = new CounterAnimator({
  staggerDelay: 100,
  duration: 1500,
  effect: "smooth"
});
```

#### For mobile devices:

```javascript
const animator = new CounterAnimator({
  duration: 1000,
  effect: "linear",
  formatNumber: false // Disable complex formatting on mobile
});
```

#### For fast animations:

```javascript
const animator = new CounterAnimator({
  duration: 800,
  effect: "fast",
  staggerDelay: 50
});
```

### 🔍 Debug and Troubleshooting

```javascript
// Enable debug mode (if available)
const animator = new CounterAnimator({
  debug: true
});

// Check observed elements
console.log("Observed elements:", animator.observedElements);

// Check current configuration
console.log("Current config:", animator.config);
```

---

## 🌐 Compatibility

### ✅ Supported Browsers

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 51+             |
| Firefox | 55+             |
| Safari  | 12.1+           |
| Edge    | 79+             |
| Opera   | 38+             |

### 🔧 APIs Used

- **Intersection Observer API** - Visibility detection
- **requestAnimationFrame** - Smooth animations
- **ES6 Classes** - Modern JavaScript features
- **String manipulation** - Format detection and parsing
- **Regular Expressions** - Pattern matching

---

## 📝 Changelog

### v1.0.0 (2024-12-19)

- 🎉 **Initial release**
- ✨ **Intelligent number format detection**
- ✨ **International localization support**
- ✨ **Multiple easing functions** (9 different effects)
- ✨ **Automatic Intersection Observer** integration
- ✨ **Number abbreviation** for large values
- ✨ **Preset formats** for common regions
- ✨ **Factory functions** for easy usage
- ✨ **Visual effects** during animation
- ✨ **Comprehensive configuration** options

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ **Free to use** in personal and commercial projects
- ✅ **Modify** and **distribute** as you wish
- ✅ **Sell** products that include this library
- ⚠️ **Include** the original copyright notice
- 🚫 **No warranty** - use at your own risk

---

## 👨‍💻 Author

**Syntax Serenity**

- 📧 Email: [fs.developerfullstack@gmail.com](mailto:fs.developerfullstack@gmail.com)
- 🌐 Website: [https://syntaxserenity.dev](https://syntaxserenity.dev)
- 🐙 GitHub: [@SyntaxSerenity-dev](https://github.com/SyntaxSerenity-dev)

---

## 🤝 Contributing

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📞 Support

For support and questions:

- 📧 **Email**: [fs.developerfullstack@gmail.com](mailto:fs.developerfullstack@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/SyntaxSerenity-dev/counter-animator/issues)

---

⭐ **If this project helped you, consider giving it a star!**

---

**Made with ❤️ by Syntax Serenity**
