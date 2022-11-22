import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({treatment,setTreatment,selectedDate,refetch}) => {
    const {name, slots, price} =treatment;  // appointment option
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
      event.preventDefault();
      const form = event.target;
      const slot = form.slot.value;
      const patientName = form.patientName.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking = {
        appointmentDate: date,
        treatment: name,
        patientName,
        slot,
        email,
        phone,
        price
      }

      fetch('https://doctors-portal-server-six-nu.vercel.app/bookings', {
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          setTreatment(null)
          toast.success('Booking Confirm');
          refetch();
        }
        else{
          setTreatment(null)
          toast.error(data.message);
        }
      })
      
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
                <input type="text" disabled value={date} className="input w-full input-bordered"  />
                <select name='slot' className="select select-bordered w-full">
                    {
                        slots.map((slot,idx) => <option key={idx} value={slot}>{slot}</option>)
                    }
                </select>
                <input name='patientName' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input className="btn btn-accent w-full mx-w-xs input-bordered" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;