import {render, screen, waitFor} from '@testing-library/react'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event';
import { registerUser } from '../services/auth.service';
import toast from 'react-hot-toast';
import Signup from '../pages/Signup';
import { AxiosError } from 'axios';

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async() => ({
    ...await vi.importActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

vi.mock("react-hot-toast", () => (
    {
        default: {
            success: vi.fn(),
            error: vi.fn(),
        }
    }
))

vi.mock('../services/auth.service.ts', ()=>({
    registerUser: vi.fn()
}))

const renderSignup = () => {
    render(
        <MemoryRouter>
            <Signup/>
        </MemoryRouter>
    )
}

describe('Sign Up Page Test suite', ()=>{
    beforeEach(()=>{
        vi.clearAllMocks();
    })

    test("should render all form fields", ()=>{
        renderSignup()
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
    })

    test("should show success toast message when form is submitted successfully", async() => {
        const user = userEvent.setup()
        renderSignup()

        const nameInput = screen.getByRole('textbox', {name: /name/i});
        await user.type(nameInput, "Name")
        const emailInput = screen.getByRole('textbox', {name: /email/i});
        await user.type(emailInput, "test@email.com")
        const password = screen.getByLabelText(/^password$/i);
        await user.type(password, "Password@123")
        const confirmPasswordInput = screen.getByLabelText(/^confirm password$/i);
        await user.type(confirmPasswordInput, "Password@123")

        await user.click(screen.getByRole('button', { name : /submit/i}))
        expect(toast.success).toHaveBeenCalledTimes(1)
        expect(toast.success).toHaveBeenCalledWith("Registration successful! Please login.")
    })

    test("should show error field message when all fields are empty", async() => {
        const user = userEvent.setup()

        renderSignup()
        await user.click(screen.getByRole('button', { name : /submit/i}))
        expect(await screen.findByText(/Name is Required/i))
        expect(await screen.findByText(/Email is Required/i))
        expect(await screen.findByText(/^Password is Required$/i))
        expect(await screen.findByText(/^Confirm Password is Required$/i))
    })

    test("should show error toast message when user already exists", async()=>{
        const user = userEvent.setup();

        const error = new AxiosError(
        "Conflict",
        "409",
        undefined,
        undefined,
        {
            status: 409,
            statusText: "Conflict",
            headers: {},
            config: {} as any,
            data: "User already exists",
        }
        )

        renderSignup()

        vi.mocked(registerUser).mockRejectedValue(error)

        const nameInput = screen.getByRole('textbox', {name: /name/i});
        await user.type(nameInput, "Name")
        const emailInput = screen.getByRole('textbox', {name: /email/i});
        await user.type(emailInput, "test@email.com")
        const password = screen.getByLabelText(/^password$/i);
        await user.type(password, "Password@123")
        const confirmPasswordInput = screen.getByLabelText(/^confirm password$/i);
        await user.type(confirmPasswordInput, "Password@123")

        await user.click(screen.getByRole('button', { name : /submit/i}))
        
        await waitFor(()=>{
            expect(toast.error).toHaveBeenCalledWith("User already exists")
        })
    })
    
    test("should show error toast message when unhandled error occurs", async()=>{
        const user = userEvent.setup();

        const error = new AxiosError(
        "InternalServerError",
        "500",
        undefined,
        undefined,
        {
            status: 500,
            statusText: "InternalServerError",
            headers: {},
            config: {} as any,
            data: "Something Went Wrong",
        }
        )

        renderSignup()

        vi.mocked(registerUser).mockRejectedValue(error)

        const nameInput = screen.getByRole('textbox', {name: /name/i});
        await user.type(nameInput, "Name")
        const emailInput = screen.getByRole('textbox', {name: /email/i});
        await user.type(emailInput, "test@email.com")
        const password = screen.getByLabelText(/^password$/i);
        await user.type(password, "Password@123")
        const confirmPasswordInput = screen.getByLabelText(/^confirm password$/i);
        await user.type(confirmPasswordInput, "Password@123")

        await user.click(screen.getByRole('button', { name : /submit/i}))
        
        await waitFor(()=>{
            expect(toast.error).toHaveBeenCalledWith("Something went wrong. Please try again.")
        })
    })

})

