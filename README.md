# Dynamic Form based on REST API data with Redux, TypeScript, and Yarn

This project demonstrates how to create a dynamic form based on data fetched from a REST API, using Redux for state management, TypeScript for static typing, and Yarn for package management. The form fields are retrieved from the API when the page loads, and the form data can be submitted back to the API.

## Features

1. Fetch form fields:
- The fields for the form are retrieved from the API using a GET request to `https://ulventech-react-exam.netlify.app/api/form`.

- The response from the API contains an array of form field objects, each with a `fieldName`, `type`, `value`, and `label` property.

- The correct input element is showed for each form field based on its `type` (text, email, number, multiline, or select).

- For select fields, the options are also generated based on the `options` attribute in the field object.

- The data from the form fields is stored in the Redux store

2. Send form data:
 - The form data can be submitted to the API by making a POST request to `https://ulventech-react-exam.netlify.app/api/form`.

The request body contains the form data, including `firstName`, `lastName`, `emailAddress`, a generated `[randomString]`, and optional fields such as `gender`, `age`, and `testimonial`.

- The API's response contains the submitted form data, as well as a success status and message.

- The API response is kept in the Redux store.

## Getting Started

1. Clone the repository:
    git clone https://github.com/gudekipi/REACT_DYNAMIC_FORM.git

2. Navigate to the project directory:
    cd REACT_DYNAMIC_FORM

3.Install the dependencies:
    yarn install

4. Build the app:
    yarn build

5. Start the server:
    yarn start

6. Open your browser to `http://localhost:3000` to view the app.
