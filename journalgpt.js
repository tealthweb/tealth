// Function to dynamically create pages
function createPages(numPages) {
    const flipbook = document.querySelector('.flipbook');
    
    for (let i = 1; i <= numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.classList.add('journal-page');
        pageDiv.id = `page${i}`;
        pageDiv.setAttribute('contenteditable', 'true');
        
        const pageTitle = document.createElement('h3');
        pageTitle.innerText = `Page ${i}`;
        
        const pageContent = document.createElement('p');
        pageContent.innerText = 'Type your thoughts here...';
        
        pageDiv.appendChild(pageTitle);
        pageDiv.appendChild(pageContent);
        flipbook.appendChild(pageDiv);
    }

    // Initialize the first page to be visible
    document.getElementById('page1').classList.add('active');
}

// Call the function to create 100 pages
createPages(100);

// Flipbook Navigation
let currentPage = 1;
const totalPages = 100;  // Since we are now creating 100 pages dynamically

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
});

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
});

// Customization for the journal cover
document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        document.getElementById('journal-cover').style.backgroundColor = selectedColor;
    });
});

// Function to Update Journal Name
document.getElementById('update-name-btn').addEventListener('click', function() {
    const userName = document.getElementById('user-name-input').value;
    if (userName) {
        document.getElementById('journal-name').innerText = `${userName}'s`;
    } else {
        alert('Please enter your name.');
    }
});
