export default function Form({children, formTitle}) {
    return <div className='h-screen flex justify-center items-center'>
        <div className='w-96 mx-auto bg-gray-50 p-8 rounded-2xl shadow-xs border border-slate-100'>
            <h1 className='text-center font-bold mb-5 text-gray-600'>{formTitle}</h1>
            {children}
        </div>
    </div>
}
