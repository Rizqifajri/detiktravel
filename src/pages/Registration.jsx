import React, { useState } from "react";
import addIcon from "../assets/icons/addicon.png";
import backgroundImg from "../assets/background2.png";

const Registration = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className='h-auto flex items-center justify-center relative overflow-hidden'
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-[#00D1FF] via-[#00d0ffb6] to-transparent'></div>
      <div className='relative flex flex-col items-center w-full max-w-lg p-5'>
        <div className='text-center mb-5 mt-28'>
          <h1 className='text-4xl font-bold text-white'>Registrasi</h1>
          <p className='text-white mt-2'>
            Lengkapi data diri kamu dengan benar
          </p>
        </div>

        <form className='bg-white p-8 md:w-[600px] rounded-lg shadow-md flex flex-col gap-6 w-full'>
          <input
            type='text'
            placeholder='Nama lengkap'
            className='w-full rounded-lg bg-gray-200 border-none p-3'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full rounded-lg bg-gray-200 border-none p-3'
          />
          <input
            type='tel'
            placeholder='Nomor Telepon'
            className='w-full rounded-lg bg-gray-200 border-none p-3'
          />
          <p className='text-sm text-gray-500'>Isi hanya angka</p>
          <textarea
            placeholder='Alasan mengikuti program ini'
            className='w-full rounded-lg bg-gray-200 border-none p-3 h-36'
          />
          <div className='flex items-center gap-4 p-5 rounded-lg'>
            <div className='bg-gray-200 w-[300px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
              <input id='uploadimg' type='file' className='hidden' />
              <label htmlFor='uploadimg' className='font-bold cursor-pointer'>
                <img src={addIcon} alt='Upload' />
              </label>
              <p className='text-gray-500'>
                Upload Foto <span className='text-red-500'>*</span>
              </p>
            </div>
            <ul className='flex flex-col'>
              <li className='text-sm text-gray-500'>
                1. Format file: .png, .jpg, .jpeg
              </li>
              <li className='text-sm text-gray-500'>
                2. Maksimal ukuran file 1MB
              </li>
              <li className='text-sm text-gray-500'>
                3. Disarankan foto mencakup 3:4 badan
              </li>
            </ul>
          </div>
          <input
            type='url'
            placeholder='Link Instagram *'
            className='w-full rounded-lg bg-gray-200 border-none p-3'
          />
          <p className='text-sm text-gray-300'>
            contoh: https://www.instagram.com
          </p>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='terms'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='cursor-pointer'
            />
            <label htmlFor='terms' className='text-sm text-gray-500'>
              Dengan menekan tombol "Daftar",
              <span className='text-[#00D1FF]'>
                Saya menyetujui syarat dan ketentuan
              </span>{" "}
              yang berlaku
            </label>
          </div>
          <button
            type='submit'
            disabled={!isChecked}
            className='w-full bg-[#00D1FF] text-white py-3 rounded-lg font-bold disabled:bg-gray-400'
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
