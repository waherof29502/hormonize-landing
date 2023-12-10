import {useState,useEffect} from 'react'

export default function useScrollProcess() {
  const [completion,setCompletion] =useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
        const currentProcess = window.scrollY;
        const scrollHeight = document.body.scrollHeight -window.innerHeight;

        if(scrollHeight){
            const completionValue = Number((currentProcess / scrollHeight).toFixed(2)) * 100;
            setCompletion(completionValue);
        }
    }
    // Attach the event listener
    window.addEventListener('scroll', updateScrollCompletion);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  },[])
  return completion;
}
