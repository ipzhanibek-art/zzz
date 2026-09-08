let currentStep = 1;

function showStep(step) {
  document.querySelectorAll(".form-step").forEach(item => {
    item.classList.remove("active-step");
  });

  const formStep = document.querySelector(`#form-step-${step}`);

  if (formStep) {
    formStep.classList.add("active-step");
  }

  document.querySelectorAll(".step").forEach(item => {
    item.classList.remove("active");
  });

  for (let i = 1; i <= step; i++) {
    const indicator = document.querySelector(`#step-indicator-${i}`);

    if (indicator) {
      indicator.classList.add("active");
    }
  }

  currentStep = step;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function nextStep(step) {
  const currentFormStep =
    document.querySelector(`#form-step-${step}`);

  if (!currentFormStep) return;

  const requiredFields =
    currentFormStep.querySelectorAll("[required]");

  for (const field of requiredFields) {

    if (!field.checkValidity()) {
      field.reportValidity();
      return;
    }

  }


  if (step === 1) {

    const passwordField =
      document.querySelector('[name="password"]');

    const confirmPasswordField =
      document.querySelector('[name="confirmPassword"]');


    if (
      passwordField &&
      confirmPasswordField &&
      passwordField.value !== confirmPasswordField.value
    ) {

      alert("Пароли не совпадают.");

      return;

    }

  }


  showStep(step + 1);
}


function previousStep(step) {
  showStep(step - 1);
}


document.addEventListener("DOMContentLoaded", () => {

  const registrationForm =
    document.getElementById("registrationForm");


  if (registrationForm) {

    registrationForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        alert(
          "Регистрация завершена! На вашу электронную почту будет отправлено письмо для подтверждения аккаунта."
        );

      }
    );

  }

});
