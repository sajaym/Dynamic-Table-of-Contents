// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the main article content element
  const mainContent = document.getElementById('main-article-content');
  
  // Get all the heading elements (h2, h3, h4) within the main content
  const headings = mainContent.querySelectorAll('h2, h3, h4');
  
  // Get the table of contents list element
  const tocList = document.getElementById('toc-list');
  
  // Create an object to keep track of the count of each generated ID
  let idCount = {};

  // Iterate over each heading element
  headings.forEach(function(heading) {
    // Get the text content of the heading, or use the data-toc-text attribute if available
    const text = heading.getAttribute('data-toc-text') || heading.textContent;
    
    // Get the ID of the heading, or generate one if not provided
    let id = heading.id;
    
    // If the heading doesn't have an ID
    if (!id) {
      // Generate an ID based on the heading text
      id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      // If the generated ID already exists, append a count to make it unique
      if (idCount[id]) {
        idCount[id]++;
        id += '-' + idCount[id];
      } else {
        idCount[id] = 1;
      }
      
      // Set the generated ID on the heading element
      heading.id = id;
    }

    // Create a list item element for the table of contents
    const li = document.createElement('li');
    
    // Create an anchor element for the list item
    const a = document.createElement('a');
    
    // Set the text content of the anchor to the heading text
    a.textContent = text;
    
    // Set the href attribute of the anchor to the heading ID
    a.href = '#' + id;
    
    // Append the anchor to the list item
    li.appendChild(a);

    // If the heading is an h3 or h4
    if (heading.tagName === 'H3' || heading.tagName === 'H4') {
      // Get the last child element of the table of contents list
      let parentList = tocList.lastElementChild;
      
      // If the last child is not a sublist or doesn't exist
      if (!parentList || !parentList.classList.contains('toc-sublist')) {
        // Create a new unordered list element for the sublist
        parentList = document.createElement('ul');
        
        // Add the 'toc-sublist' class to the sublist
        parentList.classList.add('toc-sublist');
        
        // Append the sublist to the table of contents list
        tocList.appendChild(parentList);
      }
      
      // Append the list item to the sublist
      parentList.appendChild(li);
    } else {
      // If the heading is an h2, append the list item directly to the table of contents list
      tocList.appendChild(li);
    }
  });

  // Get all the anchor elements within the table of contents list
  const tocLinks = tocList.querySelectorAll('a');

  // Function to set the active link based on the current scroll position
  function setActiveLink() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Initialize variables for the active link and minimum distance
    let activeLink = null;
    let minDistance = Infinity;

    // Iterate over each table of contents link
    tocLinks.forEach(function(link) {
      // Get the target element that the link points to
      const target = document.querySelector(link.hash);
      
      // Get the vertical position of the target element
      const targetPosition = target.offsetTop;
      
      // Calculate the absolute distance between the scroll position and the target position
      const distance = Math.abs(scrollPosition - targetPosition);

      // If the current distance is smaller than the minimum distance
      if (distance < minDistance) {
        // Update the minimum distance and active link
        minDistance = distance;
        activeLink = link;
      }
    });

    // Remove the 'active' class from all table of contents links
    tocLinks.forEach(function(link) {
      link.parentElement.classList.remove('active');
    });

    // If an active link is found
    if (activeLink) {
      // Add the 'active' class to the parent list item of the active link
      activeLink.parentElement.classList.add('active');
      
      // Update the URL hash with the active link's hash using replaceState
      history.replaceState(null, null, activeLink.hash);
    }
  }

  // Iterate over each table of contents link
  tocLinks.forEach(function(link) {
    // Add a click event listener to the link
    link.addEventListener('click', function(e) {
      // Prevent the default link behavior
      e.preventDefault();
      
      // Get the target element that the link points to
      const target = document.querySelector(link.hash);
      
      // Smoothly scroll to the target element
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Update the URL hash with the clicked link's hash using pushState
      history.pushState(null, null, link.hash);
      
      // Call the setActiveLink function to update the active link
      setActiveLink();
    });
  });

  // Add a scroll event listener to the window
  window.addEventListener('scroll', setActiveLink);
  
  // Call the setActiveLink function initially to set the active link on page load
  setActiveLink();
});
