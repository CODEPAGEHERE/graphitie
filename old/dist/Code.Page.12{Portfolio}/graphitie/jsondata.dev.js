"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch('portfolio.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    displayPortfolioItems(data.categories, 'All');
    document.querySelectorAll('.filter-link').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var category = link.getAttribute('data-category');
        displayPortfolioItems(data.categories, category);
      });
    });
  })["catch"](function (error) {
    return console.error('Error fetching JSON data:', error);
  });
});

function displayPortfolioItems(categories, selectedCategory) {
  var container = document.getElementById('portfolio-items');
  container.innerHTML = '';
  var filteredCategories = selectedCategory === 'All' ? categories : categories.filter(function (category) {
    return category.category === selectedCategory;
  });
  filteredCategories.forEach(function (category) {
    category.projects.forEach(function (project) {
      var projectElement = document.createElement('div');
      projectElement.style.display = 'inline-block';
      projectElement.style.margin = '10px';
      projectElement.innerHTML = "\n                <iframe src=\"".concat(project.iframe, "\" class=\"portfolio-iframe\" style=\"width: 700px; height: 400px; border: 1px solid black; border-radius:30px;margin-top:30px;\"></iframe>\n            ");
      projectElement.addEventListener('click', function () {
        var allIframes = document.querySelectorAll('.portfolio-iframe');
        allIframes.forEach(function (iframe) {
          return iframe.classList.remove('active');
        });
        var activeIframe = projectElement.querySelector('.portfolio-iframe');
        activeIframe.classList.add('active');
        document.getElementById('project-name').textContent = project.name;
        document.getElementById('project-description').textContent = project.description;
      });
      container.appendChild(projectElement);
    });
  });
}