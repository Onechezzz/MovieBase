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
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

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
        <button
          type="button"
          onClick={() => {
            console.log("state =", this.state);
            this.setState({
              show: true
            });
          }}
        >
          show
        </button>
        {this.state.show ? <p>{overwiev}</p> : null}
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

//создать конструктор и супер
//создать кнопку
//Прописать стейт в конструкторе
//Прописать условие при котором кнопка показывает содержимое
//онклик на изменение состояния
