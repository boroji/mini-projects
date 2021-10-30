const reviews = [
  {
    firstName: "Angela",
    review: "This is a perfect match for me big time. i thought i have lost it.",
    star: "../03-review-flipper/img/review-40.svg",
    filterStar: 4.0,
  },
  {
    firstName: "Justin",
    review:
      "went into this knowing very little, came out way better! few sections I already knew, the html/css stuff. but I now have a better grasp on figma and am taking daily challenges using what I learned in this course. highly recommend.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Saket",
    review: "So far so good",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Chirag",
    review: "Fast paced",
    star: "../03-review-flipper/img/review-45.svg",
    filterStar: 4.5,
  },
  {
    firstName: "Greg",
    review:
      "So far, the course just name checks a lot of concepts and doesn't really teach much. One lecture shows a gantt chart for a project as an example for journey mapping, although these are completely different concepts. Another lecture mentions a money back guarantee as a type of business model, which doesn't make sense.",
    star: "../03-review-flipper/img/review-20.svg",
    filterStar: 2.0,
  },
  {
    firstName: "Jonathan",
    review: "This course is so amazing and well explained..",
    star: "../03-review-flipper/img/review-45.svg",
    filterStar: 4.5,
  },
  {
    firstName: "Brook",
    review:
      "Long but thorough, I like how the instructor explained things. Seems very down to earth and humorous times.",
    star: "../03-review-flipper/img/review-45.svg",
    filterStar: 4.5,
  },
  {
    firstName: "Pratham",
    review:
      "This has to be one of the best course on Udemy for UI UX. Not only you learn the fundamentals of UI UX, but also build a good foundation about Web Design and Frontend Development. As an instructor, Hossein did an amazing job explaining the concepts and the beautiful notes he provided were very handy too. I would definitely recommend this course to someone who is interested in UI UX Design and Development and also wants to build a solid foundation in this field. Thank you Hossein :)",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Sofia",
    review: "Rápido y concreto",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Vivian",
    review:
      "It is so amazing, I learn a lot in this course. Thank You so much for such a great course.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Omar",
    review:
      "Hossein seems to absolutely know exactly what it is that a newbie like me needs to know, and nothing I don't. I wish I took this course instead of wasting so many countless hours on others. As someone trying to learn UX/UI/Front-End, this is brilliant for my feeble mind. Super logical course structure and flow. Would give ten stars if I could. Thanks Mr. Hossein.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Martina",
    review:
      "Great course, a lot of technical details and in the same time great overview from webdesign world.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Ben",
    review: "So far there is very little detail and only surface-level information.",
    star: "../03-review-flipper/img/review-20.svg",
    filterStar: 2.0,
  },
  {
    firstName: "Ahmed",
    review:
      "By the quality of the course, anyone can tell that the instructor put in a lot of thoughts and efforts to develop the course curriculum and the materials.",
    star: "../03-review-flipper/img/review-40.svg",
    filterStar: 4.0,
  },
  {
    firstName: "Christian",
    review:
      "Se você é do Brasil e está procurando um curso de introdução a area de front-end, atualizado e bem estruturado, este é o curso! Hossein ensina muito bem, não há nenhuma enrolação em seus vídeos e o conteúdo é destrinchado do inicio ao fim, fora a oportunidade de aprender inglês junto. Thank u Hossein, amazing course.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Roberto",
    review: "The best course I attended on this subject.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Burcu",
    review:
      "I thought I might get bored as I knew some of the context and used them professionally, but I was pleasantly surprised. So far very energetic and informative.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Ajay",
    review:
      "This course is well optimized, categorized that even beginners could understand. Overall a great package.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Joanna",
    review:
      "I must admire, the section about JS is perfect. Explained in the most clear way Ive ever seen or experienced. I love the fact there are neat and tidy pdf presentation available, which I could downloaded on my iPad and made my own notes to understand even more the presented concept (and write down ideas how to use some methods in my own projects). Projects are as well designed in a nice and modern manner and could be a good start of amazing portfolio. The only thing which made me to give 4.5 out of 5 stars is that sometimes Hossein sounds a bit.. boring? Like I feel there is not enough excitement(?) in a voice and way of explaining, even tho the content is great :) I recommend to anyone, who is like me more in front-end web development and care about good design skills as well.",
    star: "../03-review-flipper/img/review-45.svg",
    filterStar: 4.5,
  },
  {
    firstName: "Faleke",
    review:
      "This course is the best Web Designers course I have seen on the web period. Almost immediate feedback from the tutor on all my queries! It really expanded my understanding of design principles and application of those principles for someone coming from a backend developer role. Thank you Hossein for making this an awesome course with interesting commentary!! This was worth my money! More content expected.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Jesús",
    review:
      "It was an excellent choice, now I can have a high-level view on product and process development.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Madhavi",
    review:
      "This course is very very interesting and the learning experience is great! Hossein Boroji is an excellent instructor.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Sandeep",
    review: "Nice course of UI UX Responsive design",
    star: "../03-review-flipper/img/review-35.svg",
    filterStar: 3.5,
  },
  {
    firstName: "Sumit",
    review: "Yes, Matched my needs",
    star: "../03-review-flipper/img/review-30.svg",
    filterStar: 3.0,
  },
  {
    firstName: "Ebru",
    review:
      "Awesome course! I have already had some knowledge on the coding side of web development but I felt that I needed some UX/UI point of view, so I ended up at Hossein's course and I couldn't be more happier! He expanded my imagination with especially the SVG section and the 10 great projects at the end. I also got to brush up on my skills of CSS & JavaScript with his elaborately structured teaching style. I will definitely keep the notes I received from this course by my side while working on further projects. I definitely recommend! Thanks a lot, Hossein!",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "David",
    review:
      "Thought the theory may be a bit boring but I have found it interesting so far. Very well delivered by the lecturer",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Ebe",
    review:
      "In this course, I got the kind of frontend development designs I have never come across before in the projects. If you're looking for new type of designs produced with good css and javascript, this is the course for you.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Hkbu",
    review:
      "Great efforts have been spent on the course materials. A unique course that covers everything needed for web designer, in my view.",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
  {
    firstName: "Jose",
    review: "I guess a little more samples would be great!",
    star: "../03-review-flipper/img/review-40.svg",
    filterStar: 4.0,
  },
  {
    firstName: "Jessica",
    review:
      "This course is great, i'm a front end developer who has had to learn web design/UI design for my current job. This course explains everything with good detail and has lots of mini projects to complete so you can get a better understanding of what you're being taught. I recommend this course 100%!",
    star: "../03-review-flipper/img/review-50.svg",
    filterStar: 5.0,
  },
];

const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  displayAllReviews(reviews);
  const filterReviews = reviews.reduce(function (accumulateReviews, currentReview) {
    if (!accumulateReviews.includes(currentReview.filterStar)) {
      accumulateReviews.push(currentReview.filterStar);
    }
    return accumulateReviews;
  }, []);

  console.log(filterReviews);
});

function displayAllReviews(reviewVariable) {
  let allReviews = reviewVariable.map(function (singleReview) {
    return `
    <section class="shadow-light margin-bottom-24">
      <article>
        <img src="${singleReview.star}" alt="${singleReview.star}" />
        <p class="h5-english padding-top-16">${singleReview.firstName}</p>
        <p class="caption-english">Review #: ${reviews.indexOf(singleReview) + 1}</p>
        <p class="body-english">${singleReview.review}</p>
      </article>
    </section>`;
  });
  allReviews = allReviews.join("");
  container.innerHTML = allReviews;
}
