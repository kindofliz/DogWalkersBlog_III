//1. MOUSOVER AND 
//2. MOUSEOUT DOM EVENT THAT CHANGES AN ELEMENTS COLOR
const olderPostsHeading = document.getElementById('load-more-btn');

olderPostsHeading.addEventListener('mouseover', () => {
  olderPostsHeading.style.color = 'orange';
});

olderPostsHeading.addEventListener('mouseout', () => {
  olderPostsHeading.style.color = '';
});


//3. LOAD OLDER BLOG POSTS ONLY WHEN CLIKED
const loadMoreBtn = document.getElementById("load-more-btn");
const olderPosts = document.getElementById("older-posts");

loadMoreBtn.addEventListener("click", () => {
  olderPosts.style.display = olderPosts.style.display === "block" ? "none" : "block";
});





