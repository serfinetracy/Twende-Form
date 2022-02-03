document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.querySelector("#login");
    const signUpForm = document.querySelector("signUp");

    document.querySelector("#linkSignUp").addEventListener("click", (event) => {
        event.preventDefault();
        loginForm,classList,add("form--hidden");
        signUpForm,classList,remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", (event) => {
        event.preventDefault();
        loginForm,classList,remove("form--hidden");
        signUpForm,classList,add("form--hidden");
    });
});