'use client';

import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';
interface FormValues {
  name: string;
  phone: string;
  email: string;
  line?: string;
  message?: string;
  option?:string;
}

export default function ContactForm() {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      line: '',
      message: '',
      option: 'Option 1'
    },
    validationSchema: Yup.object({
      name: Yup.string().max(5, '請輸入正確姓名格式').required('姓名為必填欄位。'),
      phone: Yup.string().max(10, '請輸入正確手機格式').required('手機為必填欄位。'),
      email: Yup.string().email('錯誤的Email格式').required('Email為必填欄位'),
      line: Yup.string().max(10, '請輸入正確Line帳號格式'),
      message: Yup.string().max(400, '文字敘述上限400字').required('需求說明為必填欄位。')
    }),
    onSubmit: async (values) => {
      //  const queryParams: FormValues = {
      //   name: values.name,
      //   phone: values.phone,
      //   email: values.email,
      //   line: values.line,
      //   message: values.message
      // };
    console.log("123",values)
    }
  });
  const OnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-wrap flex-row rounded-lg w-full min-h-screen"
      >
        <div className="flex flex-col w-full text-[#1b1b1b] px-5">
            <div className='flex gap-x-10 px-20'>
            {/* Name input field */}
            <div className="w-1/2 pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">聯絡姓名</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.name && formik.errors.name ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
              </span>
            </div>
            {/* Phone input field */}
            <div className="w-1/2 pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">聯絡電話</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.phone && formik.errors.phone ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
              </span>
            </div>
            </div>
            <div className='flex gap-x-10 px-20'>          
            {/* Line input field */}
            <div className="w-1/2 pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">Line ID</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="line"
                onChange={formik.handleChange}
                value={formik.values.line}
                onBlur={formik.handleBlur}
              />
            </div>
             {/* Email input field */}
            <div className="w-1/2 pb-4 mb-10">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">電子信箱</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-2 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sansCjk text-[10px] tracking-wide ${
                  formik.touched.email && formik.errors.email ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </span>
            </div>
            </div>
             {/* radio field */}
              <div className="w-1/2 pb-4 mb-10 px-20">
              <label htmlFor="email" className="block pb-2">
                <span className="font-syne text-[18px] mr-2">諮詢項目</span>
              </label>
              </div>
          </div>
      </form>
      <button
        type="submit"
        className="flex items-center justify-center bg-[#1b1b1b]  my-14 md:my-0 p-4 w-1/2 lg:w-1/4 xl:w-1/6 rounded-xl group"
        onClick={OnSubmit}
      >
        <div className="w-0 group-hover:w-10 h-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-x-2 duration-1000" />
        <p className="font-syne font-bold text-white text-[14px] lg:text-[16px] translate-x-0 transform transition-transform group-hover:translate-x-3 md:group-hover:translate-x-6 duration-1000">
          送出
        </p>
      </button>
    </>
  );
}
