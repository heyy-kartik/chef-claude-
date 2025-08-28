# 🍳 Chef Claude - AI Recipe Generator

A modern React application that generates personalized recipes based on ingredients you have at home. Powered by Hugging Face's Mistral AI and built with React, Vite, and Tailwind CSS.

![Chef Claude Demo](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-blue.svg)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-AI-yellow.svg)

## ✨ Features

- **Smart Ingredient Input**: Add ingredients via button click or Enter key
- **Real-time List**: See your ingredients appear instantly with bullet points
- **AI Recipe Generation**: Get personalized recipes when you have 4+ ingredients
- **Markdown Rendering**: Beautiful recipe display with proper formatting
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Clean interface with Tailwind CSS styling

## 🚀 Demo

1. Add ingredients to your list (e.g., "chicken", "tomatoes", "onions", "garlic")
2. Once you have 4+ ingredients, the "Get a Recipe" button appears
3. Click to generate an AI-powered recipe suggestion
4. View the formatted recipe with ingredients and step-by-step instructions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with Vite
- **Styling**: Tailwind CSS 4.1.11
- **AI Integration**: Hugging Face Inference API
- **AI Model**: Mistral AI (Mixtral-8x7B-Instruct-v0.1)
- **Markdown**: React Markdown for recipe rendering
- **Build Tool**: Vite 7.0.4

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Hugging Face account and API token

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/heyy-kartik/chef-claude-.git
   cd chef-claude
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_HF_ACCESS_TOKEN=your_hugging_face_token_here
   ```
   
   **Get your Hugging Face token:**
   - Visit [Hugging Face Settings](https://huggingface.co/settings/tokens)
   - Create a new token with "Read" permissions
   - Copy and paste it in your `.env` file

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
chef-claude/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Form.jsx          # Main component with ingredient input
│   │   ├── Ingredients.jsx   # Displays ingredient list
│   │   └── ClaudeRecipe.jsx  # Renders AI-generated recipes
│   ├── ai.jsx               # Hugging Face API integration
│   ├── App.jsx              # Root component
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── .env                     # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_HF_ACCESS_TOKEN` | Hugging Face API token | ✅ Yes |

⚠️ **Security Note**: Never commit your `.env` file to version control. The API token should be kept private.

## 🤖 AI Integration

This app uses:
- **Hugging Face Inference API** for AI processing
- **Mistral AI (Mixtral-8x7B-Instruct-v0.1)** model for recipe generation
- **System prompt** optimized for cooking and recipe suggestions
- **Markdown formatting** for structured recipe output

## 🎨 UI Components

### Form Component
- Ingredient input field with validation
- Add button with prevent default form submission
- Enter key support for quick ingredient addition

### Ingredients Component
- Dynamic ingredient list with bullet points
- Conditional "Get Recipe" button (appears at 4+ ingredients)
- Clean typography with custom fonts

### Recipe Component
- Markdown rendering for formatted recipes
- Responsive design for different screen sizes
- Loading states and error handling

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS:
- Flexible layouts that adapt to screen sizes
- Touch-friendly button sizes
- Readable typography across devices

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Add `VITE_HF_ACCESS_TOKEN` to environment variables
   - Deploy automatically

2. **Netlify**
   - Drag and drop the `dist` folder
   - Configure environment variables in site settings

3. **GitHub Pages**
   - Use GitHub Actions for automated deployment
   - Configure base URL in `vite.config.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kartik** - [@heyy-kartik](https://github.com/heyy-kartik)

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the AI inference API
- [Mistral AI](https://mistral.ai/) for the powerful language model
- [React](https://reactjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Akshay Saini](https://www.youtube.com/@akshaymarch7) for the React learning journey

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/heyy-kartik/chef-claude-/issues) page
2. Create a new issue with detailed description
3. Include your environment details and error messages

## 🔮 Future Enhancements

- [ ] Recipe favoriting and saving
- [ ] Dietary restrictions and preferences
- [ ] Recipe difficulty levels
- [ ] Cooking time estimates
- [ ] Nutritional information
- [ ] Recipe sharing functionality
- [ ] Multiple cuisine options
- [ ] Ingredient substitution suggestions

---

⭐ **Star this repository if you found it helpful!**