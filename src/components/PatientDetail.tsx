

type data = 
{
    name: string;
    caretaker: string;
    email: string;
    date: string;
    symptoms: string;
}

export default function PatientDetail({data}: {data: data}) {
  return (
    <div className="grid grid-cols-1 gap-6">
            
            <div className="bg-white shadow-md mt-5 p-4 rounded-md space-y-1.5">
                <h3 className=" font-bold text-2xl capitalize">{data.name}</h3>
                <p className=" text-xl text-gray-600">
                        {data.caretaker}
                </p>
                <p className="text-sm text-gray-600">
                        {data.email}
                </p>
                
                <p className="text-sm text-gray-600">
                        {data.date}
                </p>
    
                <p className="text-sm text-gray-600">
                        {data.symptoms}
                </p>
            
    
            </div>
        </div>
  )
}
