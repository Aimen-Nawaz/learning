import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  }

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  }
  
  const handleMessageChange = (e) => {
    const message = e.target.value;
    setMessage(message);
  }

  const send = (e) => {
    e.preventDefault();
    console.log("Message sent!", name, email, message);
    alert("Message sent! " + name + " " + email + " " + message);
  }

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    console.log("Form reset!");
  }
  const hover = () => {
    console.log("send messaage button hovered!")
  }


  return (
    <section className="contact">
      <form onSubmit={send} onReset={reset}>
        <h2>Contact us</h2>

        <input value={name} type="text" placeholder="your name" onChange={handleNameChange} />
        <input value={email} type="email" placeholder="your email eg: youremail@example.com" onChange={handleEmailChange} />
        <textarea value={message} rows="5" placeholder="message" onChange={handleMessageChange}></textarea>
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit">Send Message</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;