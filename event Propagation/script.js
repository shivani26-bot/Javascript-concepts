const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// event bubbling
// div.addEventListener("click", function () {
//   alert("div");
// });

// button.addEventListener("click", function () {
//   alert("button");
// });

// form.addEventListener("click", function () {
//   alert("form");
// });

// div.addEventListener("click", func);

// button.addEventListener("click", func);

// form.addEventListener("click", func);
// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// }

// achieving event capturing
// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   {
//     capture: true, // event bubbles up from target to parent nodes
//   }
// );

// button.addEventListener(
//   "click",
//   function () {
//     alert("button");
//   },
//   {
//     capture: true, // event bubbles up from target to parent nodes
//   }
// );

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true, // event bubbles up from target to parent nodes
//   }
// );

// div.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("div");
// });

// button.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("button");
// });

// form.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("form");
// });

// div.addEventListener("click", function (e) {
//   alert("div");
// });

// button.addEventListener("click", function (e) {
//   alert("button");
// });

// form.addEventListener("click", function (e) {
//   e.stopPropagation();
//   //   stop the propagation as we reach the form
//   alert("form");
// });

// event delegation
// document.querySelector(".products").addEventListener("click", (event) => {
//   console.log(event.target.closest("SPAN"));
//   const spanElement = event.target.closest("SPAN");
//   if (spanElement) {
//     window.location.href = "/" + spanElement.className;
//   }
// });
// when you click on the <b> element inside the span (in the case of the "mobile" element), event.target is the <b> tag, not the span
// To fix this, you need to ensure that the event looks for the span whether you click on the span directly or on its child element.

// Q7.
// div.addEventListener("click", function () {
//   alert("div");
// });

// button.addEventListener("click", function () {
//   alert("button");
// });

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );
