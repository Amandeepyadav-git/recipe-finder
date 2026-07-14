# Find Your Recipe - Tasty Recipe Finder

A modern web application that helps you discover and explore delicious recipes with detailed ingredients and cooking instructions.

## 🎯 Overview

**Tasty Recipe Finder** is a user-friendly recipe discovery platform that combines healthy eating with culinary exploration. It features a clean, intuitive interface for browsing recipes, learning about our cooking philosophy, and finding inspiration for your next meal.

## ✨ Features

- **🏠 Home Page**: Welcome screen with motivational quotes about healthy cooking
- **🔍 Recipe Search**: Search for recipes by name and get detailed cooking instructions
- **📋 Recipe Details**: View ingredients, measurements, and step-by-step instructions
- **🖼️ Image Gallery**: Interactive carousel showcasing food photography
- **ℹ️ About Section**: Learn about our philosophy and approach to cooking
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Modern UI**: Clean, attractive design with smooth interactions

## 🗂️ Project Structure

```
Find-Your-Recipe/
├── index.html          # Home page with introduction
├── about.html          # About page with company values
├── recipe.html         # Recipe search and display page
├── script.js           # JavaScript for functionality and interactions
├── style.css           # CSS styling for all pages
└── README.md           # Project documentation
```

## 📄 Pages

### 1. **Home Page** (`index.html`)
- Hero section with motivational tagline: "Healthy Cooking, Happy Cooking"
- Call-to-action button to start exploring recipes
- Food imagery to inspire users
- Navigation to all sections

### 2. **About Page** (`about.html`)
- Four value cards showcasing:
  - Passionate Food Creation
  - Taste like Home
  - As Healthy as Nature
  - Happiness In Bites
- Detailed descriptions of cooking philosophy
- Visual representations with professional images

### 3. **Recipe Page** (`recipe.html`)
- Search input for recipe queries
- Recipe results display with:
  - Meal name and cuisine origin
  - Complete ingredient list with measurements
  - Detailed cooking steps
- Image carousel featuring food photography
- Navigation buttons for gallery browsing

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox layouts
- **Vanilla JavaScript**: Core functionality without dependencies
- **TheMealDB API**: Free recipe database API
- **Font Awesome 7.0.0**: Icon library for UI elements

## 🔌 API Integration

The application uses the **TheMealDB API** to fetch recipe data:

```javascript
https://www.themealdb.com/api/json/v1/1/search.php?s={search_query}
```

### API Response Processing:
- Extracts meal information (name, area, category)
- Collects up to 20 ingredients with measurements
- Parses cooking instructions into readable steps

## 🎨 Design Features

- **Color Scheme**:
  - Light background: `rgb(244, 252, 227)`
  - Green accent: `rgb(131, 186, 124)`
  - Brown accent: `rgb(209, 128, 73)`

- **Typography**: Clean, readable fonts with responsive sizing
- **Navigation Bar**: Persistent navbar with:
  - Brand logo and title
  - Navigation links (Home, About, Recipe)
  - Quick "Browse Recipe" button

## 📋 Key Functionality

### Recipe Search
```javascript
- User enters search query
- Fetches data from TheMealDB API
- Displays meal name, origin, and category
- Lists all ingredients with measurements
- Shows cooking instructions in numbered steps
```

### Image Gallery
```javascript
- Auto-positioned carousel with multiple food images
- Previous/Next navigation buttons
- Smooth transitions between slides
- Responsive image display
```

### Interactive Elements
- Search button triggers recipe lookup
- Blur overlay during input focus
- Smooth transitions and animations
- Error handling for failed searches

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API and external resources)

### Installation

1. **Clone or download the repository:**
```bash
git clone <repository-url>
cd Find-Your-Recipe
```

2. **Open the application:**
```bash
# Simply open index.html in your browser
open index.html
```

Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. **Access the application:**
- Open `http://localhost:8000` (or your chosen port)

## 💻 Usage

1. **Home**: Click "Start Exploring" or "Browse Recipe" to access the recipe search
2. **Search**: Enter any dish name (e.g., "Pizza", "Biryani", "Pasta")
3. **View Results**: See ingredients, measurements, and cooking steps
4. **Browse Images**: Navigate through the food gallery using arrow buttons
5. **Learn More**: Visit the About page to understand our cooking philosophy

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Landing page with introduction and CTAs |
| `about.html` | Information about cooking philosophy and values |
| `recipe.html` | Recipe search interface and results display |
| `script.js` | API integration, recipe processing, gallery controls |
| `style.css` | All styling for responsive layout and design |

## 🔧 Customization

### Change Branding
- Modify `<title>` tags in HTML files
- Update brand name in navbar (`<p>Tasty Recipe Finder</p>`)
- Change color values in `style.css`

### Update Social Links
- Modify contact links in footer sections
- Update email and social media URLs in footer

### Add More Images
- Add image URLs to the carousel in `recipe.html`
- Add `.slides` class to maintain functionality

## 🐛 Known Features & Limitations

- **Search Accuracy**: Depends on TheMealDB database availability
- **No Recipe Filtering**: Basic search only (no category or cuisine filters)
- **Offline Mode**: Requires internet connection for API calls
- **Storage**: No local recipe saving functionality
- **User Accounts**: No user authentication system

## 📦 External Resources

- **Font Awesome Icons**: CDN-hosted icon library
- **Food Images**: External image sources (Brave Search CDN)
- **Recipe Database**: TheMealDB (free, open-source)

## 📄 License

© 2025 YourFoodSite. All Rights Reserved.
Unauthorized copying or sharing of recipes without prior written permission is prohibited.

## 👥 Contact & Support

- **Email**: Contact via link in footer
- **Instagram**: Connect with us on social media
- **Website**: Find more recipes and updates on our site

## 🎓 Future Enhancements

- [ ] Recipe favorites/bookmarks
- [ ] Advanced filtering by cuisine, ingredient, or dietary restrictions
- [ ] User accounts and recipe history
- [ ] Recipe rating and reviews system
- [ ] Shopping list generation
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Nutritional information display

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements.

## ❤️ Acknowledgments

- TheMealDB for providing the recipe API
- Font Awesome for icons
- All contributors and users

---

**Happy Cooking! 🍳**
