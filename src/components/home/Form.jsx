import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_24wvktf";
const TEMPLATE_ID = "template_1lrafh2"; // Contact Us template
const AUTO_REPLY_TEMPLATE = "template_6kl9fo7"; // Auto-reply template
const USER_ID = "xdPRdxRGgQeOV7BAK"; // Replace with your EmailJS public key

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    // ✅ Send Contact Email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        // ✅ Send Auto-Reply
        return emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE, {
          to_name: formData.fullName,
          to_email: formData.email,
        });
      })
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        alert("Something went wrong. Please try again later.");
      });
  };

  const handleReEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* ✅ Left Side Text */}
        <div className="flex-1">
          <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-snug">
            Start your journey with <br /> GSN today !
          </h2>
          <p className="text-[15px] font-ubuntu font-normal text-[#1A1A1A] mt-8 leading-relaxed max-w-[480px]">
            Whether you’re ready to join, have a question, or simply want to
            explore how GSN can support your growth - we’re here to listen.
            Reach out and take the first step toward meaningful connections and
            purpose-driven collaboration.
          </p>
        </div>

        {/* ✅ Right Side Form */}
        <div className="flex-1 bg-[#d2dce4] rounded-2xl p-8 shadow-md">
          <h3 className="text-[30px] font-ubuntu font-bold text-[#1A1A1A] mb-6">
            Schedule your meeting.
          </h3>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-gray-400 focus:outline-none text-[#1A1A1A]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-gray-400 focus:outline-none text-[#1A1A1A]"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-gray-400 focus:outline-none text-[#1A1A1A]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-gray-400 focus:outline-none text-[#1A1A1A]"
                required
              />
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-gray-400 focus:outline-none text-[#1A1A1A] h-[120px]"
                required
              ></textarea>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#f2c063] text-[#1A1A1A] font-ubuntu font-bold px-6 py-2 rounded-xl hover:opacity-90"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center mt-6">
              <p className="text-[#1A1A1A] text-[18px] font-ubuntu mb-6">
                ✅ Your response has been recorded successfully!
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleReEdit}
                  className="border border-[#f2c063] text-[#1A1A1A] font-ubuntu font-bold px-6 py-2 rounded-xl hover:bg-[#f2c063] hover:text-black transition"
                >
                  Re-Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
