# Dynamic-Table-of-Contents - [https://sajaym.github.io/Dynamic-Table-of-Contents/](#DEMO)
---

# Dynamic Table of Contents Documentation

This documentation provides an overview of the dynamic table of contents code and explains how to use its features and attributes.

## Table of Contents
- [Introduction](#introduction)
- [Usage](#usage)
- [Features](#features)
  - [Automatic ID Generation](#automatic-id-generation)
  - [Manual ID Assignment](#manual-id-assignment)
  - [Custom TOC Text](#custom-toc-text)
  - [Hierarchical Structure](#hierarchical-structure)
  - [Smooth Scrolling](#smooth-scrolling)
  - [Active Link Highlighting](#active-link-highlighting)
  - [URL Updating](#url-updating)
- [Example](#example)
- [Customization](#customization)
- [Browser Compatibility](#browser-compatibility)

## Introduction
The dynamic table of contents code automatically generates a table of contents based on the headings (`<h2>`, `<h3>`, and `<h4>`) present in the main article content. It provides a convenient way for users to navigate through the different sections of the article and enhances the overall user experience.

## Usage
To use the dynamic table of contents code, follow these steps:

1. Include the necessary HTML structure in your document:
   ```html
   <div class="container">
     <nav class="table-of-contents">
       <h2>Table of Contents</h2>
       <ul id="toc-list"></ul>
     </nav>
     <main>
       <div id="main-article-content">
         <!-- Your article content goes here -->
       </div>
     </main>
   </div>
   ```

2. Add your article content inside the `<div id="main-article-content">` element, using the appropriate heading tags (`<h2>`, `<h3>`, and `<h4>`) to structure your content.

3. Include the CSS styles (`styles.css`) in your document's `<head>` section.

4. Include the JavaScript code (`dynamic-table-of-content.js`) at the end of your document's `<body>` section.

5. Customize the CSS styles and JavaScript code as needed to fit your specific requirements.

## Features

### Automatic ID Generation
By default, the code automatically generates IDs for the headings based on their text content. It converts the text to lowercase, replaces non-alphanumeric characters with hyphens, and appends a numeric suffix if multiple headings have the same text.

### Manual ID Assignment
If you want to manually assign IDs to specific headings, you can do so by adding an `id` attribute to the heading element. The code will prioritize the manually assigned ID over the automatically generated one.

Example:
```html
<h2 id="custom-id">Heading with Custom ID</h2>
```

### Custom TOC Text
By default, the text displayed in the table of contents is derived from the heading's text content. However, you can specify a custom text to be used in the table of contents by adding a `data-toc-text` attribute to the heading element.

Example:
```html
<h3 data-toc-text="Custom TOC Text">Heading with Custom TOC Text</h3>
```

### Hierarchical Structure
The code automatically generates a hierarchical structure in the table of contents based on the heading levels. `<h2>` headings are considered as main sections, while `<h3>` and `<h4>` headings are treated as subsections and nested accordingly.

### Smooth Scrolling
When a user clicks on a table of contents item, the page smoothly scrolls to the corresponding section of the article. This behavior is achieved using the `scroll-behavior: smooth;` CSS property.

### Active Link Highlighting
As the user scrolls through the page, the table of contents item corresponding to the currently visible section is highlighted with a green color. This helps the user keep track of their position within the article.

### URL Updating
The code updates the URL with the ID of the currently active section as the user scrolls or clicks on a table of contents item. This allows for bookmarking and sharing specific sections of the article.

## Example
Here's an example of how to structure your article content with headings:

```html
<div id="main-article-content">
  <h2>Introduction</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  <h2>Main Topic</h2>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <h3>Subtopic 1</h3>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

  <h3 id="custom-subtopic-id">Subtopic 2</h3>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

  <h4 data-toc-text="Custom Subsubtopic Text">Subsubtopic</h4>
  <p>Excepteur sint occaecat cupidatat non proident.</p>

  <h2>Conclusion</h2>
  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

In this example:
- The "Introduction", "Main Topic", and "Conclusion" headings will be treated as main sections.
- "Subtopic 1" and "Subtopic 2" will be treated as subsections under "Main Topic".
- "Subtopic 2" has a manually assigned ID of "custom-subtopic-id".
- "Subsubtopic" will be nested under "Subtopic 2" and will display the text "Custom Subsubtopic Text" in the table of contents.

## Customization
You can customize the appearance and behavior of the table of contents by modifying the CSS styles in `styles.css`. Feel free to adjust the colors, fonts, spacing, and other properties to match your website's design.

## Browser Compatibility
The code utilizes modern web technologies and has been tested in the latest versions of major browsers, including Chrome, Firefox, Safari, and Edge. However, it's always recommended to test the code in your target browsers to ensure compatibility.

---

This documentation provides a comprehensive overview of the dynamic table of contents code and its features. You can use it as a reference when implementing the code on your website and customizing it to your specific needs.
