# Image Slider Website

This project is a simple image slider that displays images based on selected defocus values. The images are named according to the pattern `light_off_defocused_image_%s.png`, where `%s` represents the defocus value.

## Project Structure

```
image-slider-website
├── src
│   ├── index.html         # Main HTML document for the website
│   ├── styles
│   │   └── style.css      # Styles for the website and image slider
│   ├── scripts
│   │   └── slider.js      # JavaScript functionality for the image slider
│   └── images
│       └── light_off_defocused_image_%s.png  # Images for the slider
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd image-slider-website
   ```

2. **Install dependencies** (if any):
   ```
   npm install
   ```

3. **Open the project**:
   Open `src/index.html` in your web browser to view the image slider.

## Usage

- Use the slider to select different defocus values.
- The corresponding image will be displayed based on the selected value.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.