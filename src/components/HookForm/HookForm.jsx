import useInputState from "../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojoni");
  const emailState = useInputState("Rojoni@sojoni.go");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="text"
          placeholder="Write your name"
          name="name"
        /> */}
        <br />
        <input
          {...emailState}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <br />
        <input
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <br />
        <button className="btn font-bold text-2xl btn-lg">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
