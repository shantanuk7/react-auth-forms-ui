import { ErrorMessage, Field } from 'formik'

type CustomInputProps = {
   label: string;
   name: string;
   type: string;
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
   const { label, name, type } = props
   return (
      <div className="my-2">
         <label htmlFor={name} className="block text-xs font-medium text-gray-700"> {label} </label>
         <Field
            name={name}
            id={name}
            type={type}
            className="mt-1 w-full rounded-md border border-gray-200 bg-white shadow-sm sm:text-sm p-2"
         />
         <ErrorMessage name={name} component="div" className='text-red-700 text-sm'/> 
      </div>
   )
}

export default CustomInput
