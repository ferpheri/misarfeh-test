"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Modal from "@/components/Modal";

// Define the structure of the form elements
interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  elements: FormElements;
}

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "موبایل",
    description: "(+۹۸) ۹۳۹ ۸۳۷ ۳۵۷۰",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "misarfehapp@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "آدرس",
    description: "ایران , شیراز",
  },
];

const Contact = () => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    message: "",
    isError: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = (form: ContactFormElement) => {
    const errors: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    } = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };
    if (!form.elements.firstName.value.trim()) {
      errors.firstName = ".لطفاً نام خود را وارد کنید";
    }
    if (!form.elements.lastName.value.trim()) {
      errors.lastName = ".لطفاً نام خانوادگی خود را وارد کنید";
    }
    if (!form.elements.email.value.trim()) {
      errors.email = ".لطفاً ایمیل خود را وارد کنید";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.elements.email.value
      )
    ) {
      errors.email = ".ایمیل وارد شده معتبر نیست";
    }
    // if (!form.elements.phone.value.trim()) {
    //   errors.phone = ".لطفاً شماره تماس خود را وارد کنید";
    // }

    if (!form.elements.message.value.trim()) {
      errors.message = ".لطفاً پیام خود را وارد کنید";
    }
    return errors;
  };

  const sendEmail = (
    e: React.FormEvent<HTMLFormElement>,
    setModalInfo: Function,
    resetForm: Function
  ) => {
    e.preventDefault();

    const form = e.currentTarget as ContactFormElement; // Type assertion here
    const errors = validateForm(form);
    setFormError(errors);

    if (Object.values(errors).some((error) => error !== "")) {
      // Check for any errors
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_8j17xy9",
        "template_d8abiz5",
        form,
        "vk6Cbi8MUMXP67gQ_"
      )
      .then(
        (result) => {
          setModalInfo({
            show: true,
            title: "موفق!",
            message: "پیام شما با موفقیت ارسال شد!",
            isError: false,
          });
          resetForm(form);
        },
        (error) => {
          setModalInfo({
            show: true,
            title: "خطا",
            message: "پیام ارسال نشد. لطفا دوباره تلاش کنید.",
            isError: true,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCloseModal = () => {
    setModalInfo({ ...modalInfo, show: false });
  };

  const resetForm = (form: ContactFormElement) => {
    form.reset();
    setFormError({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const renderErrorMessage = (message: string) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 mt-1 text-sm text-red-600 justify-end"
    >
      {message}
      <FaExclamationCircle className="animate-pulse" />
    </motion.div>
  );

  return (
    <>
      <section className="py-6 lg:py-0">
        <div className="container p-4 mx-auto mt-12">
          <div className="flex flex-col lg:justify-around lg:flex-row gap-[30px] text-right">
            {/* info */}
            <div className="flex  items-center justify-center lg:justify-start order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-black/80">{item.title}</h3>
                      <p className="text-xl">{item.description}</p>
                    </div>
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[rgb(0,2,22)] text-green-700 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* form */}
            <div className="lg:w-2/5 order-2 lg:order-none">
              <form
                action=""
                className="flex flex-col gap-6 p-10 bg-[rgb(0,2,22)] rounded-xl"
                onSubmit={(e) => sendEmail(e, setModalInfo, resetForm)}
              >
                <h3 className="text-4xl text-green-700">شروع همکاری</h3>
                <p className="text-white/60" style={{ direction: "rtl" }}>
                  اگر سوالی دارید، لطفاً با من تماس بگیرید. من اینجا هستم تا به
                  شما کمک کنم و منتظر همکاری با شما هستم. لطفاً جزئیات و پیام
                  خودتون رو در قسمت زیر وارد کنید و من در اسرع وقت با شما تماس
                  می گیرم .
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="lastName"
                      className="text-right"
                      placeholder="نام خانوادگی"
                    />
                    {formError.lastName &&
                      renderErrorMessage(formError.lastName)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="firstName"
                      className="text-right"
                      placeholder="نام"
                    />
                    {formError.firstName &&
                      renderErrorMessage(formError.firstName)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="email"
                      className="text-right"
                      placeholder="آدرس ایمیل"
                    />
                    {formError.email && renderErrorMessage(formError.email)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="tel"
                      name="phone"
                      className="text-right"
                      placeholder="شماره تماس"
                    />
                    {formError.phone && renderErrorMessage(formError.phone)}
                  </div>
                </div>

                {/* textarea */}
                <div className="relative flex flex-col">
                  <Textarea
                    className="h-[200px] resize-none text-right"
                    name="message"
                    placeholder="پیام شما"
                  ></Textarea>
                  {formError.message && renderErrorMessage(formError.message)}
                </div>
                <Button
                  className="mx-auto min-w-[150px] mt-6 flex items-center justify-center gap-4"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    "ارسال پیام"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        isError={modalInfo.isError}
        message={modalInfo.message}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Contact;
