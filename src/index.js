import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "JOJO",
  alttitle: "Alternative",
  averagescore: 10.1,
  image: "public/jojo.png",
  overwiev:
    "JoJo's Bizarre Adventure (яп. ジョジョの奇妙な冒険 Дзёдзё но кимё:на бо:кэн, «Невероятные приключения ДжоДжо»)"
};
function Image(props) {
  console.log("Image", props);
  return <img src={props.image} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log(props);
//   const {
//     data: { title, alttitle, averagescore, image, overwiev }
//   } = props;
//   console.log("MovieItem", props);
//   return (
//     <div>
//       <Image src={image} alt={alttitle} />
//       <p>{title}</p>
//       <p>{averagescore}</p>
//     </div>
//   );
// }
class MovieItem extends React.Component {
  render() {
    console.log(this);
    const {
      data: { title, alttitle, averagescore, image, overwiev }
    } = this.props;
    return (
      <div>
        <Image src={image} alt={alttitle} />
        <p>{title}</p>
        <p>{averagescore}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// Назначить Мувиайтему дату из конст
// Destruct в Мувиайтеме для лаконичности
// Вівести изображение и создать функцию изображения
// Дать консол лог для обоих функций
// создать класс для Мувиайтема
