import "../styles/Main.css"

const Main = () => {
  return (
    <div className="">
      <div className="heading-container">
        <h1>Building Digital Product</h1>
        <h1>For Global Users</h1>
      </div>
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="subtext">Subscribe for our beta launch</div>
        <div className="form-container">
          <input
            type="text"
            placeholder="with your e-mail"
            className="input-field"
          />
          <input
            type="text"
            placeholder="and your name"
            className="input-field"
          />
          <button className="submit-button">Grant Access</button>
          <div>You'll be invited soon :)</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
