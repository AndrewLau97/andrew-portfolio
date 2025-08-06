import Space from "../components/Space";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <Space spaceNeeded="h-10" />
        <div className="my-4 mx-auto py-24 flex justify-center lg:mx-30 rounded-3xl">
          <div className="max-w-4xl py-10 px-10 rounded-xl bg-lightgrey">
            <div className="flex justify-center pb-5">
            <h1>Contact Me</h1>
            </div>
            <div className="pb-5">
              <p>
                If you would like to email me directly, my email address is
                kahoulau97@gmail.com
              </p>
              <p>
                Or if you prefer, you can use the contact form below to send a
                message instead.
              </p>
            </div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
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
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              ></input>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <Space spaceNeeded="h-50" />
      </div>
    </>
  );
};

export default Contact;
