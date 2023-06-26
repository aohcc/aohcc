import React, { useState } from "react"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/30dc5580-1441-11ee-a6b0-17653bd30bd3"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();


    const inputs = e.target.elements;

    const data = {};


    for (let i = 0; i < inputs.length; i++) {

      if (inputs[i].name) {

        data[inputs[i].name] = inputs[i].value;

      }

    }


    fetch(FORM_ENDPOINT, {

      method: 'POST',

      headers: {

        Accept: 'application/json',

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(data),

    })

      .then((response) => {

        if (!response.ok) {

          throw new Error('Form response was not ok');

        }


        setSubmitted(true);

      })

      .catch((err) => {

        // Submit the form manually

        e.target.submit();

      });

  };


  if (submitted) {

    return (

      <>

        <h2>Thank you!</h2>

        <div>We'll be in touch soon.</div>

      </>

    );

  }

  return (
    <>
      <div className="anchor" id="contact"></div>
      <div className="contact-section">
      <h2 className="my-4" id="contact-header">Contact Us</h2>
      <div class="container-fluid">
        <div class="row mx-0 justify-content-center">
          <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3 mb-4">
            <form
              method="POST"
              class="w-100 rounded-1 p-4 border bg-white"
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
            >
              <label class="d-block mb-4">
                <span class="form-label d-block">Your name</span>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </label>

              <label class="d-block mb-4">
                <span class="form-label d-block">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="your.email@example.com"
                  required
                />
              </label>

              <label class="d-block mb-4">
                <span class="form-label d-block">Message</span>
                <textarea
                  name="message"
                  class="form-control"
                  rows="3"
                  placeholder="Send us a message!"
                  required
                ></textarea>
              </label>

              <div class="mb-3">
                <button type="submit" class="btn custom-btn px-3 rounded-3">
                  Contact Us
                </button>
              </div>

              <div class="d-block text-end">
                <div class="small">
                  by
                  <a
                    href="https://herotofu.com"
                    class="text-dark text-decoration-none"
                    target="_blank"
                    > HeroTofu</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
