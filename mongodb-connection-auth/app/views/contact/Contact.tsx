import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="text-white space-y-10 mt-10  w-full lg:w-2/3 p-10 px-20 bg-black/10 mx-auto">
        <h1 className="text-center font-bold text-3xl">Get In Touch With Me</h1>
        
        <div className="">
          <form action="https://formspree.io/f/xgebnkkg" method="POST" className="space-y-6 ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="mx-auto block bg-transparent p-2 w-full  rounded-md border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              required
              className="mx-auto block bg-transparent p-2 w-full  rounded-md border"
            />
            <textarea
              name="message"
              id=""

              cols={30}
              rows={10}
              className="mx-auto block bg-transparent p-2 w-full rounded-md border"
            ></textarea>
            <button type="submit" className="block mx-auto  bg-gradient-to-r from-purple-600 to-blue-800 hover:scale-105  hover:shadow-lg duration-500 px-6 py-3 rounded-lg ">Submit</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
