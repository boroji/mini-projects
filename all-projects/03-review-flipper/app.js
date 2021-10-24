const reviews = [
  {
    firstName: "Angela",
    review: "This is a perfect match for me big time. i thought i have lost it.",
    star: "./img/review-40.svg",
  },
  {
    firstName: "Justin",
    review:
      "went into this knowing very little, came out way better! few sections I already knew, the html/css stuff. but I now have a better grasp on figma and am taking daily challenges using what I learned in this course. highly recommend.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Saket",
    review: "So far so good",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Chirag",
    review: "Fast paced",
    star: "./img/review-45.svg",
  },
  {
    firstName: "Greg",
    review:
      "So far, the course just name checks a lot of concepts and doesn't really teach much. One lecture shows a gantt chart for a project as an example for journey mapping, although these are completely different concepts. Another lecture mentions a money back guarantee as a type of business model, which doesn't make sense.",
    star: "./img/review-20.svg",
  },
  {
    firstName: "Jonathan",
    review: "This course is so amazing and well explained..",
    star: "./img/review-45.svg",
  },
  {
    firstName: "Brook",
    review:
      "Long but thorough, I like how the instructor explained things. Seems very down to earth and humorous times.",
    star: "./img/review-45.svg",
  },
  {
    firstName: "Pratham",
    review:
      "This has to be one of the best course on Udemy for UI UX. Not only you learn the fundamentals of UI UX, but also build a good foundation about Web Design and Frontend Development. As an instructor, Hossein did an amazing job explaining the concepts and the beautiful notes he provided were very handy too. I would definitely recommend this course to someone who is interested in UI UX Design and Development and also wants to build a solid foundation in this field. Thank you Hossein :)",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Sofia",
    review: "Rápido y concreto",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Vivian",
    review:
      "It is so amazing, I learn a lot in this course. Thank You so much for such a great course.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Omar",
    review:
      "Hossein seems to absolutely know exactly what it is that a newbie like me needs to know, and nothing I don't. I wish I took this course instead of wasting so many countless hours on others. As someone trying to learn UX/UI/Front-End, this is brilliant for my feeble mind. Super logical course structure and flow. Would give ten stars if I could. Thanks Mr. Hossein.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Martina",
    review:
      "Great course, a lot of technical details and in the same time great overview from webdesign world.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Ben",
    review: "So far there is very little detail and only surface-level information.",
    star: "./img/review-20.svg",
  },
  {
    firstName: "Ahmed",
    review:
      "By the quality of the course, anyone can tell that the instructor put in a lot of thoughts and efforts to develop the course curriculum and the materials.",
    star: "./img/review-40.svg",
  },
  {
    firstName: "Christian",
    review:
      "Se você é do Brasil e está procurando um curso de introdução a area de front-end, atualizado e bem estruturado, este é o curso! Hossein ensina muito bem, não há nenhuma enrolação em seus vídeos e o conteúdo é destrinchado do inicio ao fim, fora a oportunidade de aprender inglês junto. Thank u Hossein, amazing course.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Roberto",
    review: "The best course I attended on this subject.",
    star: "./img/review-50.svg",
  },
  {
    firstName: "Burcu",
    review:
      "I thought I might get bored as I knew some of the context and used them professionally, but I was pleasantly surprised. So far very energetic and informative.",
    star: "./img/review-00.svg",
  },
  {
    firstName: "Ajay",
    review:
      "This course is well optimized, categorized that even beginners could understand. Overall a great package.",
    star: "./img/review-00.svg",
  },
  {
    firstName: "Joanna",
    review:
      "I must admire, the section about JS is perfect. Explained in the most clear way Ive ever seen or experienced. I love the fact there are neat and tidy pdf presentation available, which I could downloaded on my iPad and made my own notes to understand even more the presented concept (and write down ideas how to use some methods in my own projects). Projects are as well designed in a nice and modern manner and could be a good start of amazing portfolio. The only thing which made me to give 4.5 out of 5 stars is that sometimes Hossein sounds a bit.. boring? Like I feel there is not enough excitement(?) in a voice and way of explaining, even tho the content is great :) I recommend to anyone, who is like me more in front-end web development and care about good design skills as well.",
    star: "./img/review-00.svg",
  },
  {
    firstName: "Faleke",
    review:
      "This course is the best Web Designers course I have seen on the web period. Almost immediate feedback from the tutor on all my queries! It really expanded my understanding of design principles and application of those principles for someone coming from a backend developer role. Thank you Hossein for making this an awesome course with interesting commentary!! This was worth my money! More content expected.",
    star: "./img/review-00.svg",
  },
];

const firstName = document.querySelector("article .h5-english");
const reviewText = document.querySelector("article .body-english");
const image = document.querySelector("article img");
const buttons = document.querySelectorAll("button");

let counter = 0;

window.addEventListener("DOMContentLoaded", function () {
  const singleReview = reviews[counter];
  image.src = singleReview.star;
  reviewText.textContent = singleReview.review;
  firstName.textContent = singleReview.firstName;
});
