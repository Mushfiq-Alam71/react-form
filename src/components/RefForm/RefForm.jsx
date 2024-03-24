import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="text"
          placeholder="Write your name"
          name="name"
        />
        <br />
        <input
          ref={emailRef}
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <br />
        <input
          ref={passwordRef}
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

export default RefForm;
