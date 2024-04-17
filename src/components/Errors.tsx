

export default function Errors({children} :{children: React.ReactNode}) {
  return (
        
    <div className="bg-red-100 border-dotted border-2 flex-col flex border-red-400 m-5 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error</strong>
      <span className="block sm:inline">{children}</span>
    </div>
  )
}
