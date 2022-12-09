import { useState } from "react";

const db = {
  email: "diego@test.com",
  password: "123456",
};

export const LoginForm = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [logged, setLogged] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const login = (email: string, password: string) => {
    if (email !== db.email || password !== db.password) {
      setError(true);
      setLogged(false);
    } else {
      setError(false);
      setLogged(true);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login(email!, password!);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
      {logged ? (
        <p>Welcome!</p>
      ) : error ? (
        <p>Invalid email or password</p>
      ) : null}
    </form>
  );
};
