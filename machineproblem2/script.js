// Restaurant data
const restaurants = [
    {
        name: "Golden Fries",
        image: "https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg",
        address: "235 Glendale Ave.",
        city: "Meriden City",
        phone: "490 49 4000",
        website: "goldenfries.com",
        category: "AMERICAN",
        hours: "10AM to 10PM",
        price: "$5.99",
        description: [
            "Crispy golden fries served with your choice of seasoning. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum."
        ]
    },
    {
        name: "Classic Burger",
        image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        address: "120 Main Street",
        city: "Meriden City",
        phone: "490 49 5000",
        website: "classicburger.com",
        category: "AMERICAN",
        hours: "11AM to 11PM",
        price: "$8.99",
        description: [
            "Juicy beef patty with fresh toppings and a toasted bun. Phasellus imperdiet, nulla et dictum interdum.",
            "Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit."
        ]
    },
    {
        name: "Prime Steak",
        image: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        address: "85 Premium Way",
        city: "Meriden City",
        phone: "490 49 6000",
        website: "primesteak.com",
        category: "STEAKHOUSE",
        hours: "5PM to 11PM",
        price: "$25.99",
        description: [
            "Grilled to perfection, served with a side of garlic butter. Nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
            "Maeceans nisi est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."
        ]
    },
    {
        name: "Eggs Benedict",
        image: "https://www.allrecipes.com/thmb/QVMaPhXnj1HQ70C7Ka9WYtuipHg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg",
        address: "30 Morning Lane",
        city: "Meriden City",
        phone: "490 49 7000",
        website: "eggsbenedict.com",
        category: "FRENCH",
        hours: "7AM to 3PM",
        price: "$12.99",
        description: [
            "Poached eggs on an English muffin topped with hollandaise sauce. Praesent convallis uma a lacus interdum ut hendrerit risus congue.",
            "Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis."
        ]
    }
];

// DOM Elements
const restaurantContainer = document.getElementById('restaurant-container');
const overlay = document.getElementById('overlay');
const detailModal = document.getElementById('detail-modal');

// Generate restaurant cards
function renderRestaurants() {
    restaurantContainer.innerHTML = restaurants.map((restaurant, index) => `
        <div class="restaurant-card" data-id="${index}">
            <h3>${restaurant.name}</h3>
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <button class="learn-more" aria-label="Learn more about ${restaurant.name}">Learn More</button>
        </div>
    `).join('');
    
    // Add event listeners to all learn more buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.restaurant-card');
            const restaurantId = card.getAttribute('data-id');
            showDetails(restaurantId);
        });
    });
}

function showDetails(id) {
    const restaurant = restaurants[id];

    // Ensure modal and overlay exist
    if (!detailModal || !overlay) return;

    // Set modal content properly
    detailModal.innerHTML = `
        <button class="close-btn" aria-label="Close details">&times;</button>
        <div class="detail-content">
            <img class="detail-image" src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <div class="contact-info">
                <p><strong>Address:</strong> ${restaurant.address}, ${restaurant.city}</p>
                <p><strong>Phone:</strong> ${restaurant.phone}</p>
                <p><strong>Website:</strong> <a href="https://${restaurant.website}" target="_blank">${restaurant.website}</a></p>
            </div>
            <div class="meta-info">
                <span><strong>Category:</strong> ${restaurant.category}</span>
                <span><strong>Open:</strong> ${restaurant.hours}</span>
                <span><strong>Price:</strong> ${restaurant.price}</span>
            </div>
            <div class="description">
                ${restaurant.description.map(p => `<p>${p}</p>`).join('')}
            </div>
        </div>
    `;

    // Show modal and overlay
    document.body.classList.add('modal-open');
    overlay.classList.add('active');
    detailModal.classList.add('active');

    // Close modal when clicking close button
    const closeBtn = detailModal.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeDetails);

    // Close modal when clicking outside (overlay)
    overlay.addEventListener('click', closeDetails);

    // Close modal with ESC key
    document.addEventListener('keydown', handleKeyDown);
}


// Handle keyboard events
function handleKeyDown(e) {
    if (e.key === 'Escape') {
        closeDetails();
    }
}

// Close details modal
function closeDetails() {
    document.body.classList.remove('modal-open');
    overlay.classList.remove('active');
    detailModal.classList.remove('active');
    document.removeEventListener('keydown', handleKeyDown);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
    
    // Main menu button functionality
    document.getElementById('main-menu').addEventListener('click', () => {
        alert('Main menu functionality would go here');
    });
});