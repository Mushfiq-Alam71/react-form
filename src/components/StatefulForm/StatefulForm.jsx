import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="text"
          placeholder="Write your name"
          name="name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="password"
          placeholder="Enter your contact password"
          name="password"
          required
        />
        {error && <p>{error}</p>}
        <br />
        <button className="btn font-bold text-2xl btn-lg">Submit</button>
      </form>
    </div>
  );
};

export default StatefulForm;
