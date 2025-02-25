// Load blogs when the page loads
document.addEventListener("DOMContentLoaded", loadBlogs);

function addBlog() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter both title and content!");
        return;
    }

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push({ title, content });
    
    localStorage.setItem("blogs", JSON.stringify(blogs));
    
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadBlogs();
}

function loadBlogs() {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.forEach((blog, index) => {
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");

        blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
            
        `;
//<button onclick="deleteBlog(${index})">Delete</button>
        blogList.appendChild(blogPost);
    });
}

function deleteBlog(index) {
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    loadBlogs();
}

