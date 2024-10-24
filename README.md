# Project Title: **Joke Generator**

## Project Description

The **Joke Generator** project addresses the issue of random sadness and the need for a quick mood booster through humor. It provides users with a simple interface to fetch and display random jokes from various categories, ensuring a light-hearted experience. By integrating a joke API, the application generates a sense of joy and positivity, making it a perfect tool for anyone looking to uplift their spirits.

## Features

- Fetch jokes from multiple categories (e.g., Misc, Programming, Dark, Pun, Spooky, Christmas).
- Display jokes in a visually appealing manner.
- Easy-to-use interface with responsive design.
- Dynamic background color changes based on the joke category.

## Setup and Running Instructions

To set up and run the **Joke Generator** project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Steps

1. **Clone the Repository**:
   Open your terminal or command prompt and run the following command to clone the project repository in desired directory:
   ```bash
   git clone <repository-url>

2. **Install Dependencies: Run the following command to install the required packages:***


    ```bash
    npm install
    ```
4. **Start the Development Server: Use this command to run the application:**

    ```bash
    npm start
    ```
The application will be available at http://localhost:3000 in your web browser.

## API Information

This project uses the JokeAPI to fetch random jokes. The API provides jokes in various categories, allowing for filtering based on user preferences. Here are some details on how the API is integrated:

API Overview
Base URL: https://v2.jokeapi.dev/joke/
Features:
Supports multiple joke categories (e.g., Programming, Misc, Dark, etc.).
Allows filtering through blacklist flags to avoid certain types of jokes (e.g., nsfw, sexist).
Returns jokes in JSON format, which can be easily parsed in the application.

## Credits to AI

ChatGPT was used to create HTML and CSS code entirely.
