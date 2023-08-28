import React from 'react';

const TermsAndCondition = () => {
    return (
        <div className="flex items-start flex-col">
      <div className="py-32">
        <span className=" text-3xl pl-16 text-[#ddc861]">Terms And Conditions</span>
      </div>
      <div className="flex flex-col text-black px-28 py-10 bg-white gap-5 text-xl">
        <div className=" flex flex-col items-start gap-5">
          <span className=" text-2xl font-semibold text-[#ddc861]">
          Terms And Conditions
          </span>
          <span className="text-xl">
            Flux Group, Inc., (<span className="font-bold">“Flux”</span>,{" "}
            <span className="font-bold">“we”</span>,{" "}
            <span className="font-bold">“our”</span> or{" "}
            <span className="font-bold">“us”</span> as used here, will refer to
            Flux Group, Inc. and its parents, subsidiaries, and affiliates)
            respects your privacy (<span className="font-bold">“you”</span>). We
            recognize the importance of your personally identifiable information
            and any other information that could reasonably relate to you (
            <span className="font-bold">“Personal Information”</span>).
          </span>          
        </div>        
        <span>This Privacy Policy includes the following sections:</span>
        <div className="flex flex-col gap-2">
          <span>1. Information We Collect</span>
          <span>2. Unsubscribing From Email</span>
          <span>3. How We Use Personal Information</span>
          <span>4. How We Disclose Personal Information</span>
          <span>5. Your Access to and Control Over Information</span>
        </div>
        <span className='text-[#ddc861]'>1. Trademarks</span>
        <span>We collect Personal Information both directly from you, and from third parties. Where applicable, we indicate whether and why you must provide us with your Personal Information, as well as the consequences of failing to do so. If you do not provide Personal Information when requested, you may not be able to benefit from our service if that information is necessary to provide you with the service or if we are legally required to collect it.</span>  
        <span className='text-[#ddc861]'>2. Other Intellectual Property Rights</span>    
        <span>This website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), (together the “Content”) are owned by Flux, its licensors, or other providers of such material, and are protected by U.S., Canadian, and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You hereby acknowledge that the Content is protected by all copyright, trade-mark, and other applicable intellectual property laws. Your use of the website does not grant or transfer to you any ownership or other rights in the Content, and except as expressly provided, nothing herein or within the website shall be construed as conferring on you or any other person any license under any of Flux’s or any third party’s intellectual property rights, including, without limitation, any right to download, display, reproduce, distribute, modify, edit, alter or enhance any of the Content in any manner whatsoever other than as expressly set out herein. Any rights not expressly granted to you in these Terms of Use are expressly reserved by Flux. For greater certainty, you agree that you will not take any action that is inconsistent with Flux ownership of the website and/or Flux ownership of, or any third party’s ownership of, any Content.</span>
        <span className='text-[#ddc861]'>Your Permission to use the Website</span>          
        <span>These terms permit you to use our website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website or any Content, except as follows:</span>
        <span>&#8226; Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</span>
        <span>&#8226; You may store files that are automatically cached by your web browser for display enhancement purposes.</span>
        <span>&#8226; You may print or download one copy of a reasonable number of pages of our website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</span>
      </div>
    </div>
    );
};

export default TermsAndCondition;