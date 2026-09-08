let currentStep = 1;


/* =========================
   ПОКАЗАТЬ НУЖНЫЙ ШАГ
========================= */

function showStep(step) {


    // Скрываем все шаги

    document
        .querySelectorAll(".form-step")
        .forEach(item => {

            item.classList.remove("active-step");

        });



    // Показываем нужный шаг

    const formStep =
        document.querySelector(`#form-step-${step}`);


    if (formStep) {

        formStep.classList.add("active-step");

    }



    // Убираем активность со всех индикаторов

    document
        .querySelectorAll(".step")
        .forEach(item => {

            item.classList.remove("active");

        });



    // Активируем текущий и предыдущие шаги

    for (let i = 1; i <= step; i++) {


        const indicator =
            document.querySelector(
                `#step-indicator-${i}`
            );


        if (indicator) {

            indicator.classList.add("active");

        }

    }



    currentStep = step;



    // Прокрутка вверх

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


}



/* =========================
   СЛЕДУЮЩИЙ ШАГ
========================= */

function nextStep(step) {


    const currentFormStep =
        document.querySelector(
            `#form-step-${step}`
        );


    if (!currentFormStep) {

        return;

    }



    // Проверяем обязательные поля

    const requiredFields =
        currentFormStep.querySelectorAll(
            "[required]"
        );


    for (const field of requiredFields) {


        if (!field.checkValidity()) {


            field.reportValidity();


            return;

        }


    }



    // Проверка совпадения паролей

    if (step === 1) {


        const passwordField =
            document.querySelector(
                '[name="password"]'
            );


        const confirmPasswordField =
            document.querySelector(
                '[name="confirmPassword"]'
            );



        if (

            passwordField &&
            confirmPasswordField &&

            passwordField.value !==
            confirmPasswordField.value

        ) {


            alert(
                "Пароли не совпадают."
            );


            return;

        }


    }



    // Переходим дальше

    showStep(step + 1);


}



/* =========================
   ПРЕДЫДУЩИЙ ШАГ
========================= */

function previousStep(step) {


    showStep(step - 1);


}



/* =========================
   ОТПРАВКА РЕГИСТРАЦИИ
========================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        const registrationForm =
            document.getElementById(
                "registrationForm"
            );



        if (!registrationForm) {

            return;

        }



        registrationForm.addEventListener(

            "submit",

            function (event) {


                event.preventDefault();



                alert(

                    "Регистрация успешно завершена!\n\n" +

                    "На вашу электронную почту будет отправлено письмо " +

                    "для подтверждения аккаунта."

                );


            }

        );
       function openLoginModal() {
  document.getElementById("loginModal").classList.add("active");
}

function closeLoginModal() {
  document.getElementById("loginModal").classList.remove("active");
}


function toggleLoginPassword() {

  const password = document.getElementById("loginPassword");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }

}


/* Закрытие при нажатии на фон */

window.addEventListener("click", function(event) {

  const modal = document.getElementById("loginModal");

  if (event.target === modal) {
    closeLoginModal();
  }

});


    }

);
