import { Formik, useFormik } from "formik";

export default function Signup(){
    
    const {values, handleBlur, handleChange} = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
            confirmPassword: '',
        }
    })

    return <form autoComplete="off" className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
            value={values.name}
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Enter your name"
            onBlur={handleBlur}
        />
        <label htmlFor="email">Email</label>
        <input
            value={values.email}
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
        />
        <label htmlFor="password">Password</label>
        <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Enter your password"
            onBlur={handleBlur}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Confirm password"
            onBlur={handleBlur}
        />

        <button type="submit">Submit</button>
    </form>
}