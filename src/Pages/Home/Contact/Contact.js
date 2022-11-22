import React from "react";
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col py-10 items-center sm:justify-center bg-gray-50" style={{background:`url(${appointment})`}}>
        <div>
            <h3 className="text-xl font-bold text-primary text-center">Contact Us</h3>
            <h2 className="text-3xl text-gray-200 text-center">Stay connected with us</h2>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden sm:max-w-lg">

          <form>
            {/* Input Fuild for Full Name */}
            <div>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  className="block w-full mt-1 py-2 px-4 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>


            {/* Input Fuild for Email */}
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  className="block w-full mt-1 py-2 px-4 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>

            {/* Input Fuild for Password */}
            <div className="mt-4">
              <div className="flex flex-col items-start">
              <textarea className="textarea textarea-success h-32 w-full" placeholder="Your Message"></textarea>
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center mt-4">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
