import { useState } from "react";
import Space from "../components/Space";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber]=useState("");
  const [message, setMessage]=useState("")
  const user = "kahoulau97";
  const domain = "@gmail.com";
  const [copied, setCopied] = useState(false);
  function copyEmail() {
    navigator.clipboard.writeText(user + domain);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  function submitForm() {
    setName("")
    setEmail("")
    setPhoneNumber("")
    setMessage("")
  }
  return (
    <>
      <div id="contact">
        <Space spaceNeeded="h-10" />
        <div className="my-4 mx-auto py-24 flex justify-center lg:mx-30 rounded-3xl">
          <div className="max-w-4xl py-10 px-10 rounded-xl bg-lightgrey">
            <div className="flex justify-center pb-5">
              <h1 className="text-3xl font-bold">Contact Me</h1>
            </div>
            <div className="pb-5">
              <div>
                <p className="inline">
                  Feel free to connect with me for collaborations or
                  opportunities — fill out the form below and I'll get back to
                  you soon. If you prefer a more direct approach, you can email
                  me at {" " + user + domain}.{" "}
                  {copied ? (
                    <ClipboardDocumentCheckIcon className="h-6 w-6 border-1 border-checkgreen rounded-xs inline mb-1" />
                  ) : (
                    <ClipboardDocumentIcon
                      className="h-6 w-6 border-1 border-border rounded-xs hover:border-mutedorange hover:shadow-lg hover:shadow-mutedorange/10 rounded-sm hover:cursor-pointer inline mb-1"
                      onClick={copyEmail}
                    />
                  )}
                </p>
              </div>
            </div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
              onSubmit={submitForm}
            >
              <input
                type="hidden"
                name="access_key"
                value="0697c845-b462-4a77-8f00-b3651f81c4e1"
              ></input>
              <div className="flex-1">
                <label htmlFor="name" className="text-xl">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-1 mt-1 bg-mutedwhite text-charcoal rounded-xs"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full p-1 mt-1 bg-mutedwhite text-charcoal rounded-xs"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="text-xl">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number (optional)"
                  className="w-full p-1 mt-1 bg-mutedwhite text-charcoal rounded-xs"
                  value={phoneNumber}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full p-1 mt-1 bg-mutedwhite text-charcoal rounded-xs"
                  required
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              ></input>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-mutedgrey text-darkslate hover:text-charcoal px-2 rounded-3xl hover:bg-grey hover:cursor-pointer hover:border-1 hover:border-mutedorange border-1 border-mutedgrey"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Space spaceNeeded="h-50" />
      </div>
    </>
  );
};

export default Contact;
