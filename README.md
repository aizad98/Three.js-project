## Interactive 3D Landing Page with Three.js
An interactive landing page built with **Three.js**, featuring a dynamic and responsive 3D surface. The project uses advanced techniques 
like raycasting, GSAP animations, and dat.GUI for a customizable and interactive user experience,inspired bu a youtube video ,a big shoutout to Chris Courses.

## Table of Contents
- [Features](#features)
- [Video Demo](#VideoDemo)
- [Technologies Used](#TechnologiesUsed)
- [Project Structure](#ProjectStructure)
- [Installation & setup](#Installation&setup)
- [Usage](#Usage)
- [Customization](#Customization)
- [Contributing](#Contributing)
- [Contact](#contact)
- 
## Features:🌟
- **Interactive 3D Surface**: A dynamic surface that responds to user interactions.
- **Raycasting for Interactivity**: Changes the color of the surface from dark blue to white when the mouse hovers over it, reverting to normal on mouse exit.
- **GSAP Animations**: Smooth hover effects to transition colors back to normal.
- **dat.GUI Integration**: Real-time control over the height and width of the 3D surface.
- **Orbital Control**: Allows users to navigate and interact with the 3D scene with ease.
- **Vite.js for Fast Development**: Efficient and fast project setup with Vite.js.

## 📽️ Video Demo
Check out the live demo of this project on the youtube channel of chris course ,
[![Watch the demo](https://img.youtube.com/vi/YK1Sw_hnm58/0.jpg)](https://www.youtube.com/watch?v=YK1Sw_hnm58)

## Technologies Used :🛠️
- **Three.js**: For rendering 3D graphics in the browser.
- **Vite.js**: For fast development and bundling.
- **JavaScript (ES6+)**: Core scripting for interactions and logic.
- **GSAP**: For hover animations to smoothly transition surface colors.
- **npm**: Project management and package running.
- **dat.GUI**: Allows for tweaking height and width of the 3D surface in real-time.
- **Raycaster**: Detects mouse interactions and changes the landing page's color.
- **Orbital Control**: For smooth and intuitive control of the camera around the 3D scene.

## Project Structure:📂
bash
Copy code
├── **.index.html**       # Main HTML file
├── **.styles.css**       # CSS for layout and design
├── **.main.js**         # JavaScript logic for Three.js and GSAP
├── **.package.json**     # Project dependencies
├── **.vite.config.js**   # Vite configuration
└── **.README.md**        # Project documentation

 ## Installation & Setup :⚙️
 **Prerequisites**

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

Run the following command to check if Node.js and npm are installed:
node -v
npm -v

**1)Clone the repository:**
git clone https://github.com/aizad98/3d-interactive-landing-page.git

**2)Navigate to the project directory:**
cd 3d-interactive-landing-page.

**3)Install the dependencies using npm:**
npm install

**4)Run the project using Vite:**
npm run dev
Open http://localhost:3000 to view the landing page in your browser.

## 📖 Usage:
Once the project is running, interact with the 3D surface by hovering your mouse over it.
As the mouse touches the surface, the color will change from dark blue to white. 
Use the dat.GUI controls to adjust the height and width of the surface dynamically. 
The page will respond to mouse movements and input through orbital control.

## 🔧##Customization :
- **3D Surface:** Modify the geometry, material, or color in main.js to change the look and feel of the 3D surface.
- **Raycasting Behavior:** Customize the interaction response to mouse movements by adjusting the raycaster settings in main.js.
- **dat.GUI Options:** Add more parameters or controls in main.js for further customization.
- **Animations:** Use GSAP to fine-tune the color transitions and hover effects.

## 🤝 Contributing
Feel free to submit issues or pull requests. Contributions are welcome!

## 🤝 Contact Me:
Feel free to contact me on email: abobakardawood901@gmail.com



