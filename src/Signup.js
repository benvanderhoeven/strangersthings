








const Signup = async () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




try {
    const respone = await fetch ()

return (
    <>
      <h4>Register</h4>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
catch (err) {
  console.log (err)
}
}

export default Signup;