### Build a Fully Functional Web Page Code Challenge

I had to convert the Photoshop file provided by the company into a fully functional page.

#### Requirements

1. For this challenge I had to use HTML, CSS and JavaScript.
2. The request sent to the server needed to be HTTP POST form-data.
3. An user should be able to send data to the server using the form.
4. If the user didn't fill all the required values or the values that were sent were wrong, I needed to display a modal window, and show the response sent by the server.

Even if these were not required by the challenge, I decided to:

- Implement a CSS loader, which was displayed to the user while waiting to receive the response from the server.
- If the response received from the server was ok, I decided to not display the modal window but instead show a message to the user that the data sent to the server was ok.
- In my local environment I've decided to use environment variables in order to avoid exposing the URL and the api key provided by the company.
- The code was deployed on Netlify where I also configured the environment variables in order to send data successfully.

#### Installation

1. Clone the repository: `https://github.com/alexandracaulea/fully-functional-page`.
2. Install project dependencies by running: `npm install`.

#### Using this repo

1. For the development run: `npm run dev`.
2. To build run `npm run build`.
