import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;




const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send form email
      const reponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("reponse", reponse);

      // Send auto-reply
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE,
        {
          name: formData.fullName,
          email: formData.email,
        },
        PUBLIC_KEY // ← Add this
      );


      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please check your credentials or try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="w-full mt-2 bg-white py-16 px-6 md:px-16 lg:px-24 -mt-4">
      <div className="mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-snug">
            Start your journey with <br /> GSN today!
          </h2>
          <p className="text-[15px] font-ubuntu font-normal text-[#1A1A1A] mt-8 leading-relaxed max-w-[480px]">
            Whether you’re ready to join, have a question, or simply want to explore how GSN can support your growth - we’re here to listen. Reach out and take the first step toward meaningful connections and purpose-driven collaboration.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-[#d2dce4] rounded-2xl p-8 shadow-md">
          <h3 className="text-[30px] font-ubuntu font-bold text-[#1A1A1A] mb-6">
            Schedule your meeting.
          </h3>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {["fullName", "email", "phone", "subject", "message"].map((field) => {
                const isTextArea = field === "message";
                const placeholderMap = {
                  fullName: "Full Name *",
                  email: "Email *",
                  phone: "Phone Number *",
                  subject: "Subject *",
                  message: "Message *",
                };

                const inputClass =
                  "w-full p-4 rounded-md border focus:outline-none text-[#1A1A1A]" +
                  (errors[field] ? " border-red-500" : " border-gray-400");

                return isTextArea ? (
                  <div key={field}>
                    <textarea
                      name={field}
                      placeholder={placeholderMap[field]}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`${inputClass} h-[120px]`}
                      required
                    />
                    {errors[field] && (
                      <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                    )}
                  </div>
                ) : (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={placeholderMap[field]}
                      value={formData[field]}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                    {errors[field] && (
                      <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#f2c063] text-[#1A1A1A] font-ubuntu font-bold px-6 py-2 rounded-xl hover:opacity-90 disabled:opacity-50"
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
