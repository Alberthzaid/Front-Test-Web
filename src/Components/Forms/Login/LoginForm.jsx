import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch.js';
import './LoginForm.css';

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const {result} = await authUser(data);
            console.log(result)

            if (register) { 
                navigate('/dashboard'); 
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-box">
                    <input
                        type="email"
                        {...register('email', { 
                            required: true,
                        })}
                        autoComplete="email"
                    />
                    <label>Email</label>
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className="user-box">
                    <input
                        type="password"
                        {...register('password', { required:true })}
                        autoComplete="current-password"
                    />
                    <label>Password</label>
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>

                <button type="submit" className='a' disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>

            <p>Don't have an account? <a href="/register" className="a2">Sign up!</a></p>
        </div>
    );
};
