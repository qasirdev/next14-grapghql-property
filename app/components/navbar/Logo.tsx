'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div className="inline-block">
      <Image
        unoptimized // <- for image caching, else error
        onClick={() => router.push('/')}
        className="hidden md:block mb-2 cursor-pointer" 
        src="/images/logo.png" 
        height="100" 
        width="100" 
        alt="Logo" 
      />
      <a className="hidden md:block text-[#1a0dab] text-xs cursor-pointer" target="_blank" href="https://github.com/qasirdev/next14-grapghql-property">by using Nextjs, GraphQl</a>
    </div>

   );
}
 
export default Logo;
