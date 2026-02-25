import LoginForm from "../components/LoginForm"

export default function Login() {
    return <div className='h-screen flex justify-center items-center'>
        <div className='w-96 mx-auto bg-gray-50 p-8 rounded-2xl shadow-2xs'>
            <h1 className='text-center font-bold mb-5 text-gray-600'>Login Form</h1>
            <LoginForm/>
        </div>
    </div>
}
