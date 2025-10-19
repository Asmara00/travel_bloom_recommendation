// Travel recommendation data
const travelData = {
    "countries": [
        {
            "id": 1,
            "name": "Japan",
            "timezone": "Asia/Tokyo",
            "cities": [
                {
                    "name": "Tokyo",
                    "imageUrl": "https://images.unsplash.com/photo-1540959733332-8a43b8d82583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Experience the vibrant energy of Japan's capital city, where traditional culture meets modern innovation. From the bustling streets of Shibuya to the serene temples of Asakusa, Tokyo offers an unforgettable urban adventure."
                },
                {
                    "name": "Kyoto",
                    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Discover ancient temples, traditional gardens, and geisha culture in Japan's cultural heartland. Kyoto's historic districts and UNESCO World Heritage sites transport visitors to a bygone era of Japanese elegance."
                }
            ]
        },
        {
            "id": 2,
            "name": "Italy",
            "timezone": "Europe/Rome",
            "cities": [
                {
                    "name": "Rome",
                    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Walk through history in the Eternal City, home to ancient ruins, Renaissance art, and delicious cuisine. From the Colosseum to the Vatican, Rome offers an unparalleled journey through Western civilization."
                },
                {
                    "name": "Venice",
                    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Explore the romantic canals and stunning architecture of this unique floating city. Venice's labyrinth of waterways, historic palaces, and artistic treasures create an unforgettable romantic getaway."
                }
            ]
        },
        {
            "id": 3,
            "name": "Thailand",
            "timezone": "Asia/Bangkok",
            "cities": [
                {
                    "name": "Bangkok",
                    "imageUrl": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Experience the vibrant street life, magnificent temples, and delicious street food of Thailand's capital. Bangkok is a city of contrasts where ancient traditions meet modern energy."
                },
                {
                    "name": "Chiang Mai",
                    "imageUrl": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "description": "Discover the cultural heart of Northern Thailand with its ancient temples, night markets, and beautiful mountain scenery. Chiang Mai offers a more relaxed pace amidst rich Lanna culture."
                }
            ]
        }
    ],
    "temples": [
        {
            "id": 1,
            "name": "Angkor Wat",
            "location": "Cambodia",
            "timezone": "Asia/Phnom_Penh",
            "imageUrl": "https://images.unsplash.com/photo-1588417109557-2dd5c2d8648f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "description": "The largest religious monument in the world, this temple complex is a masterpiece of Khmer architecture. Built in the 12th century, Angkor Wat represents the pinnacle of classical Khmer art and architecture."
        },
        {
            "id": 2,
            "name": "Taj Mahal",
            "location": "India",
            "timezone": "Asia/Kolkata",
            "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "description": "An ivory-white marble mausoleum and one of the most iconic symbols of love and architectural beauty. Built by Emperor Shah Jahan in memory of his wife, it's considered the finest example of Mughal architecture."
        },
        {
            "id": 3,
            "name": "Sagrada Familia",
            "location": "Spain",
            "timezone": "Europe/Madrid",
            "imageUrl": "https://images.unsplash.com/photo-1583423230902-
