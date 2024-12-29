# Document Version Viewer

A React-based web application that allows users to view and compare different versions of documents with an interactive slider interface.

## 🚀 Features

- Smooth version switching with a draggable slider
- Maintains scroll position between version changes
- Maintains center focus when switching versions
- Responsive design for all screen sizes
- Modern, clean user interface

## 🛠️ Installation

1. Clone the repository:

bash
git clone https://github.com/bwjoik/scrollable-doc-version.git
cd scrollable-doc-version

2. Install dependencies:
bash
npm install
3. Start the development server:
bash
npm start

The application will open in your default browser at `http://localhost:3000`.

## 📁 Project Structure
frontend/README.md
src/
├── App.js # Main application component
├── App.css # Styles for the application
├── index.js # Entry point
└── public/
└── documents/ # Document versions (HTML files)

## 🔧 Usage

1. Place your document versions in the `public/documents/` directory as HTML files:
   - version-1.html
   - version-2.html
   - version-3.html
   etc.

2. Use the slider to switch between different versions of the document.

3. The document viewer will maintain the center position of your content when switching versions.

## 🎨 Customization

### Modifying the Number of Versions

To change the number of available versions, update the `max` attribute in the slider input:
jsx
<input
type="range"
min="1"
max="5" // Change this number to match your versions
value={version}
onChange={handleSliderChange}
className="slider"
/>

### Styling

The application's appearance can be customized by modifying `App.css`. Key style classes include:
- `.slider-container`: Controls the slider area styling
- `.document-container`: Controls the document viewer area
- `.document-viewer`: Controls the document display

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update the `homepage` in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

2. Deploy the application:

```bash
npm run deploy
```

### Deploy to Netlify

1. Create a `netlify.toml` file
2. Connect your repository to Netlify
3. Deploy through Netlify's interface or CLI

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- React.js community
- Create React App team
- All contributors

## 📫 Support

For support, email your@email.com or create an issue in the repository.
json
{
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}

