# iTab (Chrome New Tab)

![iTab](/project_img.png)

## Demo

Visit [itab-alihamas.vercel.app](https://itab-alihamas.vercel.app) for iTab demo.

## Features

- Shows the current time in both 12-hour and 24-hour formats, ensuring you always know the time in your preferred style.
- Displays a dynamic greeting message that changes based on the time of day (Good Morning, Good Afternoon, Good Evening, Good Night), along with the user's name for a personalized touch.
- Integrates a Google search bar directly on the homepage, allowing for quick and easy web searches without needing to navigate to another page.
- Offers a shortcut section where users can add and delete shortcuts to their favorite websites or web applications, enhancing productivity and convenience.

## Add Extension

To use this as an extension in your chrome browser, follow these steps:

1. Navigate to [demo website](https://itab-alihamas.vercel.app/extension.zip) and download exntension.

2. Extract the contents of the `extension.zip` file.

3. Open [chrome extensions page](chrome://extensions/) in your browser.

4. Toggle the `Developer Mode` option in the top right corner of the Chrome Extensions page.

5. Click the `Load Unpacked` button in the top left corner and select the etracted folder of `extension.zip`.

6. Once the extension is uploaded successfully, it will appear in your list of extensions, and you are ready to go!.

### Precautions

- Make sure you keep the extracted folder in a location where it won't be moved or deleted, as Chrome will need to access these files to run the extension.
- If you encounter any issues, try refreshing the extensions page or restarting your browser.
- If the problem persists, please open an issue on the GitHub repository under the [Issues tab](https://github.com/ali-hamas/iTab/issues).

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/ali-hamas/iTab.git
   ```

2. Open the project directory:

   ```bash
   cd iTab
   ```

3. Install Dependencies:

   ```bash
    npm install
   ```

4. Start developement server:

   ```bash
   npm run dev
   ```

## Usage

You can use this project as a learning resource to:

- Study how to structure and style a web page.
- Learn how to get the current time and format it in both 12-hour and 24-hour formats using React.
- Understand how to implement a Google search bar within a React application.
- Discover how to save items to local storage and retrieve them, enabling persistent user preferences.

Feel free to modify and adapt it to your needs. If you have any suggestions for improvements, please share them!

## Contribute

Contributions are welcome! Feel free to open issues and pull requests to improve this project.

1. Fork the repository.
2. Create a new branch for your feature or bugfix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add feature'.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request.
