const activate = document.querySelectorAll (".activate")


activate.forEach((activator) => {
    activator.addEventListener("click", () => {
        const active = document.querySelector(".show");
        const rotate = document.querySelector(".rotate");
        const bold = document.querySelector(".bold");

        const question = activator.parentElement;
        question.parentElement.classList.add("show");

        let arrow = question.lastElementChild;
        arrow.classList.add("rotate");

        let title = question.firstElementChild;
        title.classList.add("bold"); 

        if (active) {
        active.classList.remove("show");
        rotate.classList.remove("rotate");
        bold.classList.remove("bold");
        }    
    });
  });