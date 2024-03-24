const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    // console.log("from submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="text"
          placeholder="Write your name"
          name="name"
        />
        <br />
        <input
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <br />
        <input
          className="text-3xl rounded-lg mb-4 p-2 w-1/2"
          type="text"
          placeholder="Enter your contact number"
          name="phone"
        />
        <br />
        <button className="btn font-bold text-2xl btn-lg">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
