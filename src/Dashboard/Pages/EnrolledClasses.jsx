import useEnrolledClass from "../../hooks/useEnrolledClass";

const EnrolledClasses = () => {
  const { enrolledClass } = useEnrolledClass();
  return (
    <div>
      <h1 className="text-white text-4xl text-center mb-6">Enrolled class </h1>

      <div>
          
          <div className="grid grid-cols-3 gap-5">
            {enrolledClass.map((item) => (
              <div
                key={item._id}
                className="p-4 border border-blue-500 rounded-lg mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-2 rounded-lg"
                />
                <p className="font-bold mb-2">{item.name}</p>
                <p className="text-gray-600">
                  Instructor: {item.instructorName}
                </p>
                <p className="text-gray-600">
                  Available Seats: {item.availableSeats}
                </p>
                
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default EnrolledClasses;
