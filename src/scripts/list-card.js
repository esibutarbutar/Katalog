import data from '../public/data/DATA.json';

class RestaurantCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const restaurants = data.restaurants;
        const cardGrid = document.createElement('div');
        cardGrid.className = 'card-grid';

        const cardStyle = `
            .card {
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                position: relative;
            }

            .background-image {
                width: 100%;
                height: 300px;
                background-size: cover;
                background-position: center;
                position: relative;
            }

            .city-overlay {
                position: absolute;
                background-color: #D1BB9E;
                color: white;
                padding: 15px 50px;
                border-radius: 5px;
                font-size: 14px;
            }

            .content {
                padding: 20px;
            }

            .content h4 {
                font-size: 20px;
                margin-bottom: 10px;
                text-align: center;
            }

            .content p {
                font-size: 14px;
                margin-bottom: 10px;
            }

            .content p.rating {
                font-size: 16px;
                color: #A4907C;
                margin-bottom: 10px;
            }

            .card-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 20px;
            }
        `;

        const style = document.createElement('style');
        style.textContent = cardStyle;
        cardGrid.appendChild(style);

        restaurants.forEach((restaurant, index) => { 
            const card = document.createElement('div');
            card.className = 'card';

            const background = document.createElement('div');
            background.className = 'background-image';
            background.style.backgroundImage = `url(${restaurant.pictureId})`;

            const cityOverlay = document.createElement('div');
            cityOverlay.className = 'city-overlay';
            cityOverlay.textContent = restaurant.city;
            cityOverlay.setAttribute('tabindex', '0'); // Menambahkan tabindex ke city

            const content = document.createElement('div');
            content.className = 'content';

            const title = document.createElement('h4');
            title.textContent = restaurant.name;
            title.setAttribute('tabindex', '0'); // Menambahkan tabindex ke judul

            const description = document.createElement('p');
            description.textContent = restaurant.description;
            description.setAttribute('tabindex', '0'); // Menambahkan tabindex ke deskripsi

            const rating = document.createElement('p');
            rating.textContent = `Rating: ${restaurant.rating}`;
            rating.classList.add('rating');
            rating.setAttribute('tabindex', '0'); // Menambahkan tabindex ke rating

            content.appendChild(rating);
            content.appendChild(title);
            content.appendChild(description);

            card.appendChild(background);
            background.appendChild(cityOverlay); // Menambahkan overlay ke dalam gambar
            card.appendChild(content);

            cardGrid.appendChild(card);
        });

        this.appendChild(cardGrid);
    }
}

customElements.define('restaurant-card', RestaurantCard);
