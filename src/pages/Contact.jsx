/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/




import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { validateEmail } from "../utlis/helpers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phoneNum: "",
  });
  const [userMessage, setMessage] = useState("");
  const [emailValid, setValidEmail] = useState("");
  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setEmailValid("Invalid email");
      } else {
        setEmailValid("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage("Required field");
      } else {
        setUserMessage("");
      }
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserMessage("Email sent!");
    setFormState({
      email: "",
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      message: "",
    });
    handleMsgClear();
  };

  const handleMsgClear = () => {
    setTimeout(() => {
      setUserMessage("");
      setEmailValid("");
    }, 2500);
  };

  return (

<div class="mb-16">
     
      <div class="w-full bg-gray-100 px-10 pt-10">
         <div class="container mx-auto">
            <div role="list" aria-label="Behind the scenes People "
               class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
               <div role="listitem"
                  class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div class="rounded overflow-hidden shadow-md bg-white">
                     <div class="absolute -mt-20 w-full flex justify-center">
                        <div class="h-32 w-32">
                           <img src="/assets/images/tonyPic.jpeg" alt="Display Picture of Anthony Xavier" role="img"
                              class="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                     </div>
                     <div class="px-6  mt-16">
                        <h1 class="font-bold text-3xl text-center mb-1">Mustapha <span
                              class="text-green-600">Kromah</span></h1>
                        <p class="text-gray-800 text-sm text-center">Full-Stack Developer</p>
                        <p class="text-center text-gray-600 text-base pt-3 font-normal">I worked on the back-end
                           elements, such as the routes and creating the memories functionality!</p>
                        
                        <div class="w-full flex justify-center pt-5 pb-5">
                           <a href="https://github.com/staph103" class="mx-5">
                              <div aria-label="Github" role="img">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="rgb(150, 162, 177)" stroke-linejoin="round" class="feather feather-github">
                                    <path
                                       d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                 </svg>
                              </div>
                           </a>
                           <a href="javascript:void(0)" class="mx-5">
                              <div aria-label="Twitter" role="img">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="rgb(150, 162, 177)" stroke-linejoin="round" class="feather feather-twitter">
                                    <path
                                       d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                    </path>
                                 </svg>
                              </div>
                           </a>
                           <a href="javascript:void(0)" class="mx-5">
                              <div aria-label="LinkedIn" role="img">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"
                                    fill="rgb(150, 162, 177)" class="feather feather-linkedin">
                                    <path
                                       d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                    </path>
                                 </svg>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
</div>

<section class="" id="contact">
   <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mb-4">
         <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p class="text-base font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
               Contact
            </p>
            <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-800 text-3xl sm:text-5xl">
               Let's Talk!
            </h2>
            <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-800 dark:text-slate-600">We'd love to hear from you.
            </p>
         </div>
      </div>
      <div class="flex items-stretch justify-center">
         <div class="grid md:grid-cols-2">
            <div class="h-full pr-6">
               <p class="mt-3 mb-12 text-lg text-gray-800">
                  We value your interest in exploring the world with <span class="text-green-600">TravelMate</span>. If
                  you have any questions, inquiries,
                  or would like to customize your dream travel experience, our dedicated team is here to assist you.
                  Feel free to reach out to us via the contact form below, and we'll get back to you as soon as
                  possible. Your journey begins with us, and we look forward to creating unforgettable memories
                  together. Safe travels!
               </p>
               <ul class="mb-6 md:mb-0">
                  <li class="flex">
                     <div class="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-6 w-6">
                           <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                           <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                           </path>
                        </svg>
                     </div>
                     <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-800">Our Address
                        </h3>
                        <p class="text-gray-600 dark:text-slate-600">Philadelphia</p>
                        <p class="text-gray-600 dark:text-slate-600">Pennsylvania, United States</p>
                     </div>
                  </li>
                  <li class="flex">
                     <div class="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-6 w-6">
                           <path
                              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                           </path>
                           <path d="M15 7a2 2 0 0 1 2 2"></path>
                           <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                     </div>
                     <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-800">Contact
                        </h3>
                        <p class="text-gray-600 dark:text-slate-600">Mobile: +1 (215) 898-5000</p>
                        <p class="text-gray-600 dark:text-slate-600">Mail: customerservice@<a href="/"
                              class="text-green-600">travelmate</a>.com</p>
                     </div>
                  </li>
                  <li class="flex">
                     <div class="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-6 w-6">
                           <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                           <path d="M12 7v5l3 3"></path>
                        </svg>
                     </div>
                     <div class="ml-4 mb-4">
                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-800">Working
                           hours</h3>
                        <p class="text-gray-600 dark:text-slate-600">Monday - Friday: 08:00 - 17:00</p>
                        <p class="text-gray-600 dark:text-slate-600">Saturday &amp; Sunday: 08:00 - 12:00</p>
                     </div>
                  </li>
               </ul>
            </div>
            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
               <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
            </div>
         </div>
      </div>
   </div>
</section>








    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        /> */}
      {/* </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                onBlur={handleValidation}
                onChange={handleInputChange}
                value={formState.firstName}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                onBlur={handleValidation}
                onChange={handleInputChange}
                value={formState.lastName}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                onBlur={handleValidation}
                onChange={handleInputChange}
                value={formState.company}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                onBlur={handleValidation}
                onChange={handleInputChange}
                value={formState.email}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {emailValid && <div className="text-red-500">{emailValid}</div>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phoneNum"
                onChange={handleInputChange}
                value={formState.phoneNum}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                onChange={handleInputChange}
                onBlur={handleValidation}
                value={formState.message}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        {userMessage && (
          <div className="error">
            <p
              className={
                userMessage === "Email sent!"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {userMessage}
            </p>
          </div>
        )}
        <div className="mt-10">
          <button
            disabled={
              !(
                formState.email &&
                formState.firstName &&
                formState.lastName &&
                formState.message &&
                !emailValid &&
                !userMessage
              )
            }
            onClick={handleFormSubmit}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
</div>


)}