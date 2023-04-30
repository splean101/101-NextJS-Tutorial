import Heading from "@/components/heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
const router = useRouter()

useEffect(()=>{
  setTimeout(()=>{
router.push('/')
  }, 3000)
},[router])

  return (
    <>
      <Heading text="404" tag="h1" />
      <h2>Something is going wrong...</h2>
    </>
  );
};

export default Error;
