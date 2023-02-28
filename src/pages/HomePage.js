import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    author: "Jan Kowalski",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta cum earum commodi totam. Nulla neque aliquid obcaecati, optio perferendis sit dolorum quis, nobis deserunt blanditiis nemo tempore repudiandae doloremque.",
  },
  {
    id: 2,
    author: "Jan Nowak",
    title: "Why do we use it?",
    content:
      "Omnis odit ipsum tenetur ratione voluptate officiis ex vitae cumque sapiente, nesciunt atque optio repellendus accusamus rem. Sunt distinctio minus, eligendi alias debitis, praesentium vel dolorum suscipit a omnis rem fuga reiciendis, numquam veniam aut officia delectus tempore.",
  },
  {
    id: 3,
    author: "Jan Wiśniewski",
    title: "Where does it come from?",
    content:
      "Tempora illo earum magnam distinctio nemo quam, similique quas maiores repudiandae officiis, eum est eos reiciendis quos voluptatibus necessitatibus harum ea beatae nam. Modi id dolorem vitae consequatur alias saepe tempora, cumque voluptas sint similique possimus?",
  },
];

const HomePage = () => {
  const articleList = articles.map((aritlce) => (
    <Article key={aritlce.id} {...aritlce} />
  ));

  return <div className="home">{articleList}</div>;
};

export default HomePage;
