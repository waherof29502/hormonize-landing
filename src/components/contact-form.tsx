'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PickIcon, ClockIcon } from '@/public/svg';
import Captcha from '@/public/images/captcha.png';
import PicAuthCode from '@/src/components/pic-auth-code';
import Image from 'next/image';
import { useContactFormSubmit } from '@/src/hooks/useSwr';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  line: string;
  picked: string;
  required: string;
  authCode?: string;
  captcha: string;
}
interface FormSubmitValues {
  ContactName: string;
  ContactPhone: string;
  Email: string;
  LineID: string;
  ConsultItem: string;
  Message: string;
}

export default function ContactForm() {
  const [authCode, setAuthCode] = useState('');
  const { trigger } = useContactFormSubmit();
  // 設定生成隨機驗證碼的 logic
  const codeHandler = () => {
    const words = 'QWERTYUIPASDFGHJKLZXCVBNM123456789';
    let code = '';

    // 驗證碼為四碼
    for (let i = 0; i < 4; i++) {
      code += words[Math.floor(Math.random() * 34)];
    }
    setAuthCode(code);
    return code;
  };
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      line: '',
      picked: '',
      required: '',
      authCode: authCode,
      captcha: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(5, '請輸入正確姓名格式').required('聯絡姓名為必填欄位。'),
      phone: Yup.string().max(10, '請輸入正確電話格式').required('聯絡電話為必填欄位。'),
      email: Yup.string().email('請輸入正確的Email格式').required('Email為必填欄位'),
      line: Yup.string().required('Line為必填欄位'),
      picked: Yup.string().required('請選擇諮詢項目'),
      required: Yup.string().required('需求為必填欄位'),
      captcha: Yup.string()
        .transform((value, originalValue) => (originalValue ? originalValue.toUpperCase() : value))
        .oneOf([authCode], '驗證碼不正確')
        .required('')
    }),
    onSubmit: async (values) => {
      const queryParams: FormSubmitValues = {
        ContactName: values.name,
        ContactPhone: values.phone,
        Email: values.email,
        LineID: values.line,
        ConsultItem: values.picked,
        Message: values.required
      };
      await trigger(queryParams);
      router.push('/success');
    }
  });
  const OnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div className="flex flex-col w-[90%] min-h-screen gap-y-10">
      <form onSubmit={formik.handleSubmit} className="flex flex-wrap flex-row rounded-lg w-full">
        {/* 聯絡人資訊區塊 */}
        <div className="flex flex-col w-full text-[#1b1b1b] px-4 gap-y-10 ">
          <div className="flex w-full gap-x-[6rem] 2xl:gap-x-[10rem] px-10 wide:pl-20 wide:pr-[14rem]">
            {/* Name input field */}
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="email" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">聯絡姓名</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-3 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sans text-[1rem] tracking-wide ${
                  formik.touched.name && formik.errors.name ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
              </span>
            </div>
            {/* Phone input field */}
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="email" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">聯絡電話</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-3 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              <span
                className={`font-sans text-[1rem] tracking-wide ${
                  formik.touched.phone && formik.errors.phone ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
              </span>
            </div>
          </div>
          <div className="flex gap-x-[6rem] 2xl:gap-x-[10rem] px-10 wide:pl-20 wide:pr-[14rem]">
            {/* Line input field */}
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="email" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">Line ID</span>
              </label>
              <input
                className="bg-[#F4F4F4] p-3 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="line"
                onChange={formik.handleChange}
                value={formik.values.line}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sans text-[1rem] tracking-wide ${
                  formik.touched.line && formik.errors.line ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.line && formik.errors.line ? formik.errors.line : ''}
              </span>
            </div>
            {/* Email input field */}
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="email" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">電子信箱</span>
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
                className={` font-sans text-[1rem] tracking-wide ${
                  formik.touched.email && formik.errors.email ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </span>
            </div>
          </div>
          {/* 諮詢項目區塊 */}
          <div className="flex flex-col w-full gap-y-5 mt-5 px-10 wide:pl-20 wide:pr-[14rem]">
            {/* Radio field */}
            <label htmlFor="picked" className="block pb-2">
              <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">諮詢項目</span>
            </label>
            <div role="group" aria-labelledby="my-radio-group" className="flex gap-x-10 xl:gap-x-20">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="picked"
                  value="設計委託"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked === '設計委託'}
                  className="hidden-input"
                />
                <PickIcon className="text-[1rem] 2xl:text-[1.25rem] radio-icon" />
                <span className="text-[1rem] 2xl:text-[1.25rem] tracking-[0.6px]">設計委託</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="picked"
                  value="統包服務"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked === '統包服務'}
                  className="hidden-input"
                />
                <PickIcon className="text-[1rem] 2xl:text-[1.25rem] radio-icon" />
                <span className="text-[1rem] 2xl:text-[1.25rem] tracking-[0.6px]">統包服務</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="picked"
                  value="客變協助"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked === '客變協助'}
                  className="hidden-input"
                />
                <PickIcon className="text-[1rem] 2xl:text-[1.25rem] radio-icon" />
                <span className="text-[1rem] 2xl:text-[1.25rem] tracking-[0.6px]">客變協助</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="picked"
                  value="問題諮商"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked === '問題諮商'}
                  className="hidden-input"
                />
                <PickIcon className="text-[1rem] 2xl:text-[1.25rem] radio-icon" />
                <span className="text-[1rem] 2xl:text-[1.25rem] tracking-[0.6px]">問題諮商</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="picked"
                  value="其他"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.picked === '其他'}
                  className="hidden-input"
                />
                <PickIcon className="text-[1rem] 2xl:text-[1.25rem] radio-icon" />
                <span className="text-[1rem] 2xl:text-[1.25rem] tracking-[0.6px]">其他</span>
              </label>
            </div>
            <span
              className={` font-sans text-[1rem] tracking-wide ${
                formik.touched.picked && formik.errors.picked ? 'text-red-400' : ''
              } `}
            >
              {' '}
              {formik.touched.picked && formik.errors.picked ? formik.errors.picked : ''}
            </span>
            {/* Require input field */}
            <div className="flex flex-col w-full py-8">
              <label htmlFor="require" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">需求說明</span>
              </label>
              <input
                className="border-primary border-b-[1px] border-t-0 border-r-0 border-l-0 px-4 py-4 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                type="text"
                name="required"
                placeholder="Write your message.."
                onChange={formik.handleChange}
                value={formik.values.required}
                onBlur={formik.handleBlur}
              />
              <span
                className={` font-sans text-[1rem] tracking-wide ${
                  formik.touched.required && formik.errors.required ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.required && formik.errors.required ? formik.errors.required : ''}
              </span>
            </div>
            {/* 驗證碼 input field */}
            <div className="flex flex-col w-1/2 my-4">
              <label htmlFor="captcha" className="block pb-2">
                <span className="text-[1.25rem] tracking-[0.72px] font-medium font-sans">驗證碼</span>
              </label>
              <div className="w-full flex gap-x-10">
                <input
                  className="bg-[#F4F4F4] p-3 w-full focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-[#1b1b1b] focus:ring-transparent"
                  type="text"
                  name="captcha"
                  onChange={formik.handleChange}
                  value={formik.values.captcha.toUpperCase()}
                  onBlur={formik.handleBlur}
                />
                <div className="w-full">
                  <PicAuthCode code={codeHandler} />
                </div>
              </div>
              <span
                className={`font-sans text-[1rem] tracking-wide ${
                  formik.touched.captcha && formik.errors.captcha ? 'text-red-400' : ''
                } `}
              >
                {' '}
                {formik.touched.captcha && formik.errors.captcha ? formik.errors.captcha : ''}
              </span>
              {/* <Image src={Captcha} alt="captcha" className="w-full h-full aspect-auto"/> */}
            </div>
          </div>
        </div>
      </form>
      <div className="flex w-full items-center px-10 wide:pl-20 wide:pr-[14rem] mt-5">
        <div className="w-full h-full flex items-center gap-x-4 px-6">
          <ClockIcon className="text-[1.5rem] 2xl:text-[2rem] text-primary" />
          <span className="text-primary text-[1.25rem] 2xl:text-[1.25rem] tracking-[0.72px] font-medium leading-[20px]">
            感謝諮詢! 我們收到訊息後將於8小時內回覆您 。
          </span>
        </div>
        <button
          type="submit"
          className="flex justify-center ml-auto w-[14rem] bg-primary hover:bg-[#77A849] py-2  mr-5"
          onClick={OnSubmit}
        >
          <span className="text-white text-[1rem] 2xl:text-[1.5rem] tracking-[0.72px] font-medium ">送出</span>
        </button>
      </div>
    </div>
  );
}
