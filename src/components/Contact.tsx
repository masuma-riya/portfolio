import Title from "./Title";
import { FadeIn } from "./FadeIn";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_1i0b9bl", "template_b501t6j", form.current, {
          publicKey: "okdleckEtbWDts7BL",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Your Message sent successfully!");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.error("FAILED...", error.text);
            toast.error("Failed to send message. Please try again.");
          }
        );
    } else {
      console.error("Form ref is null.");
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              >
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      className="focus:outline-designColor contactInput"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      className="focus:outline-designColor contactInput"
                      type="text"
                      name="user_number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    className="focus:outline-designColor contactInput"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    className="focus:outline-designColor contactInput"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    className="focus:outline-designColor contactTextArea"
                    cols={30}
                    rows={8}
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                  <input
                    type="submit"
                    value="Send Message"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
