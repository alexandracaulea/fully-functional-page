import axios from "axios";
import { form, loaderAnimation, displaySuccessText } from "./elements";
import { openModal } from "./modal";
import displayResults from "./utils";

export default function handleFormSubmit(e) {
  // proxy needed to make the request
  const proxy = "https://polar-caverns-16644.herokuapp.com/";

  // prevent the "normal" form submission
  e.preventDefault();

  // show the animation while getting back the response from the server
  loaderAnimation.classList.add("show-animation");

  // inputState object holds the value of each for field
  const inputState = {
    bon_numar: form.querySelector("input[name=bon_numar]").value,
    prenume: form.querySelector("input[name=prenume]").value,
    nume: form.querySelector("input[name=nume]").value,
    telefon: form.querySelector("input[name=telefon]").value,
    email: form.querySelector("input[name=email]").value,
    acord_regulament: Array.from(form.querySelectorAll("input[type='radio']")).filter((elem) => elem.checked)[0].value,
  };

  // create a formData object
  let formData = new FormData();
  formData.set("bon_numar", inputState["bon_numar"]);
  formData.set("prenume", inputState["prenume"]);
  formData.set("nume", inputState["nume"]);
  formData.set("telefon", inputState["telefon"]);
  formData.set("email", inputState["email"]);
  formData.set("acord_regulament", inputState["acord_regulament"]);
  formData.set("apikey", `${process.env.API_KEY}`);

  // send the post request
  axios
    .post(`${proxy}${process.env.API_URL}`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((response) => {
      // after I've received the response from the server remove the hide the loader animation
      loaderAnimation.classList.remove("show-animation");
      const { status, errors } = response.data;
      // if the status is 0, open the modal and display the results
      if (status == 0) {
        openModal();
        displayResults(errors);
      }
      // if the status is 1, reset the form and show a message
      if (status == 1) {
        form.reset();
        displaySuccessText.classList.add("success");
      }
    })
    .catch((error) => {
      // If there is any error show in the console
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
}
