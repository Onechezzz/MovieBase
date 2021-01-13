import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
  return <img width="100%" src={props.image} alt={props.alt} />;
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
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverwiev = () => {
    // console.log("state =", this.state);
    this.setState({
      show: !this.state.show
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverwiev}>
            {this.state.show ? "hide" : "show"}
          </button>
          {this.state.show ? <p>{overwiev}</p> : null}
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "styleLike" : ""}
          >
            Like
          </button>
        </div>
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

//Добавить скрытие овервью
//Перенести функцию отдельно
//Сделать кнопку лайка
//Стили применяются при смене стейта
//Создать CSS
//Подключить импорт
