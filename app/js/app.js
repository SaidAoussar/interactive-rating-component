console.log("hello world");

const card = document.querySelector(".card");
const rating = document.querySelector(".rating");
const thankyou = document.querySelector(".thankyou");
const thankyou__text = document.querySelector(".thankyou__text");

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let checkboxes = document.querySelector("input[type='checkbox']:checked");
  if (checkboxes?.value) {
    console.log("count : ", checkboxes.value);
    rating.classList.add("hide");
    thankyou.classList.remove("hide");
    card.classList.remove("container--pall");
    card.classList.add("container--py");
    card.classList.add("container--px");
    thankyou__text.innerHTML = `You selected ${checkboxes.value} out of 5`;
  } else {
    console.log("choose rating");
  }
});

function selectOne(checkbox) {
  console.log("hi");
  let checkboxes = document.querySelectorAll(".chk-btn");

  checkboxes.forEach((element) => {
    if (element !== checkbox) element.checked = false;
  });
}
