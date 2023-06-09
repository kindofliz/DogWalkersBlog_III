// Function to generate the breeds API URL with a random page number
function getBreedsApiUrl() {
    const randomPage = Math.floor(Math.random() * 17); // Generates a random number between 0 and 17
    const apiKey = "live_Wn1h9mwueIQbRa63sGloPbSDC8Y44UPhgCkPRt2tfQjRI8lJR9QcXJ2cvybFFIbq";
    return `https://api.thedogapi.com/v1/breeds?limit=10&page=${randomPage}&api_key=${apiKey}`;
}
console.log(getBreedsApiUrl())

// API endpoint URLs
const breedsApiUrl = getBreedsApiUrl();
const catFactsApiUrl = "https://meowfacts.herokuapp.com/?count=3";

// Function to make an API call
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// API call 1 - Fetch list of dog breeds
fetchData(breedsApiUrl)
    .then(data => {
        console.log(data);
        // Add the data to the page dynamically
        addBreedsData(data);
    });

// API call 2 - Fetch 3 cat facts
fetchData(catFactsApiUrl)
    .then(data => {
        console.log(data);
        // Add the data to the page dynamically
        addCatFacts(data);
    });


// Function to add dog breeds data to the page
function addBreedsData(data) {
    const breedsSection = document.getElementById("breedsSection");

    data.forEach(breed => {
        // Generate HTML content dynamically based on the breed data
        const content = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${breed.image.url}" class="card-img-top" alt="dog">
                        <div class="card-body">
                            <h5 class="card-title">${breed.name}</h5>
                                <p class="card-text">
                                    <b>Breed Group:</b> ${breed.breed_group}<br />
                                    <b>Bred For:</b> ${breed.bred_for}<br />
                                    <b>Origin:</b> ${breed.origin}<br />
                                    <b>Height (cm):</b> ${breed.height.metric}<br />
                                    <b>Weight (kg):</b> ${breed.weight.metric}<br />
                                    <b>Life Span:</b> ${breed.life_span}<br />
                                    <b>Temperament:</b> ${breed.temperament}<br />
                                </p>
                        </div>
                    </div>
                </div>
        `;

        breedsSection.innerHTML += content;
    });
}


// Function to add cat facts to the page
function addCatFacts(facts) {
    const catFactsCarouselInner = document.querySelector("#catFactsSection .carousel-inner");

    facts.data.forEach((fact, index) => {
        // Create a new carousel item
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        // Create a paragraph element with the cat fact
        const paragraph = document.createElement("p");
        paragraph.textContent = fact;
        paragraph.classList.add("text-center");

        // Append the paragraph to the carousel item
        carouselItem.appendChild(paragraph);

        // Add the "active" class to the first carousel item
        if (index === 0) {
            carouselItem.classList.add("active");
        }

        // Append the carousel item to the carousel inner container
        catFactsCarouselInner.appendChild(carouselItem);
    });
}


