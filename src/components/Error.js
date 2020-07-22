import React from "react";

const Error = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p>404</p>
        <small style={{ fontSize: 16, fontWeight: 200, lineHeight: "30px" }}>
          Sorry, the page or question you're looking for doesn't exist.
          <br />
          Why don't you go back to <a href="/">Home</a> and have fun voting more
          questions ? It's fun :)
          <br />
        </small>
      </div>
    </div>
  );
};
export default Error;
