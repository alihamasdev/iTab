import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useApp from '../context/Context';

const Name = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setName } = useApp();

  const onSubmit = (data) => {
    localStorage.setItem('name', data.name);
    setName(data.name);
  };
  return (
    <>
      <form className="w-4.5/5 md:w-1/3 flex-center gap-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="relative w-full">
          <input
            type="text"
            required
            id="name-input"
            className={`bg-transparent p-2 font-poppins text-2xl md:text-4xl capitalize border-transparent border-b-2 w-full transition duration-300 outline-0 focus:ring-0 focus:ring-transparent focus:border-transparent focus:border-b-white peer/field ${errors.name ? 'border-b-red-500 focus:border-b-red-500' : 'border-b-white/60'}`}
            {...register('name', {
              required: { value: true, message: 'Name is required' },
              minLength: { value: 3, message: 'Name must contain 3 letters' },
              maxLength: { value: 15, message: 'Name can only contain 15 letters' },
            })}
          />
          {errors.name && <p className="absolute left-1.5 -bottom-6 text-xs md:text-sm text-red-500">{errors.name.message}</p>}
          <label
            htmlFor="name-input"
            className="text-2xl md:text-4xl text-white/60 absolute-y-center left-1.5 cursor-text transition-all duration-300 peer-focus/field:text-lg peer-focus/field:-top-2 peer-valid/field:-top-2 peer-valid/field:text-lg">
            Name
          </label>
        </div>
        <button type="submit" className="size-10 min-w-10 rounded-full glassmorphism flex-center">
          <img src="https://cdn-icons-png.flaticon.com/128/724/724954.png" className="size-5 invert" />
        </button>
      </form>
    </>
  );
};

export default Name;
