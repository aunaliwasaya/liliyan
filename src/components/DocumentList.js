import React from "react";

function DocumentList() {
  const documentData = [
    {
      fileName: "Financial_report.xls",
      dataSource: "Excel Engine",
      status: "Not Vectorized",
    },
    {
      fileName: "Sales_data.csv",
      dataSource: "CSV Engine",
      status: "Vectorized",
    },
    {
      fileName: "Marketing_plan.docx",
      dataSource: "Word Processor",
      status: "Vectorized",
    },
    {
      fileName: "Inventory_list.xlsx",
      dataSource: "Excel Engine",
      status: "Vectorized",
    },
    {
      fileName: "Annual_budget.pdf",
      dataSource: "PDF Processor",
      status: "Vectorized",
    },
  ];

  return (
    <>
     {/* Heading */}
                  <div className="flex justify-between">
      <div className="ml-6 flex flex-col justify-center mb-14">
        <h2 className="font-bold text-[32px]">Document / Data List</h2>
        <p>Lorem ipsum dolor sit amet Maecenas rutru.</p>
      </div>
      <div>
        {/* button */}
      <svg className="cursor-pointer" width="176" height="43" viewBox="0 0 176 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="175" height="42" rx="9.5" stroke="#0056B3"/>
<g clip-path="url(#clip0_366_3181)">
<path d="M39.4873 27.9975H36.3211C34.8738 27.9949 33.8303 26.9564 33.8226 25.5092C33.8201 25.0039 33.8201 24.4986 33.8226 23.9933C33.8252 23.4728 34.14 23.1377 34.625 23.1351C35.1099 23.1326 35.4273 23.4678 35.4324 23.9883C35.4349 24.5012 35.4299 25.0166 35.4349 25.532C35.44 26.0703 35.7549 26.3851 36.2982 26.3851H42.7144C43.2553 26.3851 43.5726 26.0703 43.5777 25.532C43.5803 25.0191 43.5752 24.5037 43.5803 23.9883C43.5828 23.4678 43.9002 23.1351 44.3851 23.1351C44.8701 23.1351 45.19 23.4703 45.1849 23.9933C45.1799 24.651 45.2154 25.3162 45.1342 25.9637C44.9818 27.1519 43.9713 27.9898 42.7678 27.9949C41.6709 28.0025 40.5791 27.9975 39.4873 27.9975Z" fill="#0056B3"/>
<path d="M38.6951 17.7727C38.5732 17.8869 38.4996 17.9504 38.4336 18.0164C37.9182 18.5369 37.4078 19.06 36.8898 19.5754C36.5217 19.9435 36.0113 19.9689 35.6812 19.649C35.3512 19.3291 35.3639 18.801 35.7244 18.4353C36.7756 17.3791 37.8293 16.3254 38.8855 15.2742C39.2588 14.9035 39.7437 14.9035 40.1144 15.2742C41.1783 16.3305 42.2371 17.3893 43.2934 18.4531C43.6412 18.8035 43.6437 19.3316 43.3187 19.6465C42.9937 19.9613 42.4809 19.9461 42.1279 19.5957C41.6023 19.0727 41.0869 18.542 40.5664 18.0164C40.5004 17.9478 40.4268 17.8844 40.3201 17.7853C40.3125 17.9301 40.3049 18.024 40.3049 18.1205C40.3049 19.781 40.3074 21.4441 40.3023 23.1047C40.2998 23.7293 39.7539 24.1 39.1826 23.8766C38.8678 23.7547 38.6951 23.4805 38.6951 23.0793C38.6926 21.4365 38.6926 19.7937 38.6951 18.1484V17.7727Z" fill="#0056B3"/>
</g>
<path d="M62.3408 14.7031H64.7578V23.2021C64.7578 24.1807 64.5469 25.0039 64.125 25.6719C63.7031 26.334 63.1289 26.835 62.4023 27.1748C61.6758 27.5088 60.8496 27.6758 59.9238 27.6758C58.9863 27.6758 58.1514 27.5088 57.4189 27.1748C56.6865 26.835 56.1123 26.334 55.6963 25.6719C55.2803 25.0039 55.0723 24.1807 55.0723 23.2021V14.7031H57.4893V23.2021C57.4893 23.7998 57.5889 24.2891 57.7881 24.6699C57.9873 25.0449 58.2686 25.3232 58.6318 25.5049C58.9951 25.6865 59.4258 25.7773 59.9238 25.7773C60.4277 25.7773 60.8584 25.6865 61.2158 25.5049C61.5791 25.3232 61.8574 25.0449 62.0508 24.6699C62.2441 24.2891 62.3408 23.7998 62.3408 23.2021V14.7031ZM69.0163 19.8184V31.1562H66.6872V17.9902H68.8405L69.0163 19.8184ZM75.1247 22.6484V22.833C75.1247 23.5244 75.0427 24.166 74.8786 24.7578C74.7204 25.3438 74.486 25.8564 74.1755 26.2959C73.8649 26.7295 73.4782 27.0693 73.0153 27.3154C72.5583 27.5557 72.0309 27.6758 71.4333 27.6758C70.8473 27.6758 70.3376 27.5645 69.904 27.3418C69.4704 27.1133 69.1042 26.791 68.8054 26.375C68.5065 25.959 68.2663 25.4756 68.0846 24.9248C67.9089 24.3682 67.777 23.7617 67.6891 23.1055V22.5166C67.777 21.8193 67.9089 21.1865 68.0846 20.6182C68.2663 20.0439 68.5065 19.5488 68.8054 19.1328C69.1042 18.7109 69.4675 18.3857 69.8952 18.1572C70.3288 17.9287 70.8356 17.8145 71.4157 17.8145C72.0192 17.8145 72.5495 17.9287 73.0065 18.1572C73.4694 18.3857 73.8591 18.7139 74.1755 19.1416C74.4919 19.5693 74.7292 20.0791 74.8874 20.6709C75.0456 21.2627 75.1247 21.9219 75.1247 22.6484ZM72.7956 22.833V22.6484C72.7956 22.2266 72.7575 21.8369 72.6813 21.4795C72.6052 21.1162 72.488 20.7998 72.3298 20.5303C72.1716 20.2549 71.9665 20.041 71.7145 19.8887C71.4626 19.7363 71.1579 19.6602 70.8005 19.6602C70.443 19.6602 70.1354 19.7188 69.8776 19.8359C69.6198 19.9531 69.4089 20.1201 69.2448 20.3369C69.0807 20.5537 68.9518 20.8115 68.8581 21.1104C68.7702 21.4033 68.7116 21.7285 68.6823 22.0859V23.5449C68.735 23.9785 68.8376 24.3682 68.9899 24.7139C69.1423 25.0596 69.3649 25.335 69.6579 25.54C69.9567 25.7451 70.3434 25.8477 70.818 25.8477C71.1755 25.8477 71.4802 25.7686 71.7321 25.6104C71.9841 25.4521 72.1891 25.2354 72.3473 24.96C72.5055 24.6787 72.6198 24.3564 72.6901 23.9932C72.7604 23.6299 72.7956 23.2432 72.7956 22.833ZM79.1019 14V27.5H76.7728V14H79.1019ZM80.7237 22.8418V22.6572C80.7237 21.96 80.8233 21.3184 81.0225 20.7324C81.2217 20.1406 81.5118 19.6279 81.8926 19.1943C82.2735 18.7607 82.7393 18.4238 83.2901 18.1836C83.8409 17.9375 84.4678 17.8145 85.1709 17.8145C85.8858 17.8145 86.5186 17.9375 87.0694 18.1836C87.626 18.4238 88.0948 18.7607 88.4756 19.1943C88.8565 19.6279 89.1465 20.1406 89.3457 20.7324C89.545 21.3184 89.6446 21.96 89.6446 22.6572V22.8418C89.6446 23.5332 89.545 24.1748 89.3457 24.7666C89.1465 25.3525 88.8565 25.8652 88.4756 26.3047C88.0948 26.7383 87.6289 27.0752 87.0782 27.3154C86.5274 27.5557 85.8975 27.6758 85.1885 27.6758C84.4854 27.6758 83.8555 27.5557 83.2989 27.3154C82.7422 27.0752 82.2735 26.7383 81.8926 26.3047C81.5118 25.8652 81.2217 25.3525 81.0225 24.7666C80.8233 24.1748 80.7237 23.5332 80.7237 22.8418ZM83.044 22.6572V22.8418C83.044 23.2578 83.085 23.6475 83.167 24.0107C83.2491 24.374 83.375 24.6934 83.545 24.9688C83.7149 25.2441 83.9346 25.4609 84.2041 25.6191C84.4795 25.7715 84.8077 25.8477 85.1885 25.8477C85.5635 25.8477 85.8858 25.7715 86.1553 25.6191C86.4248 25.4609 86.6446 25.2441 86.8145 24.9688C86.9903 24.6934 87.1192 24.374 87.2012 24.0107C87.2832 23.6475 87.3243 23.2578 87.3243 22.8418V22.6572C87.3243 22.2471 87.2832 21.8633 87.2012 21.5059C87.1192 21.1426 86.9903 20.8232 86.8145 20.5479C86.6446 20.2666 86.4219 20.0469 86.1465 19.8887C85.877 19.7246 85.5518 19.6426 85.1709 19.6426C84.7959 19.6426 84.4737 19.7246 84.2041 19.8887C83.9346 20.0469 83.7149 20.2666 83.545 20.5479C83.375 20.8232 83.2491 21.1426 83.167 21.5059C83.085 21.8633 83.044 22.2471 83.044 22.6572ZM96.3904 25.4785V21.0928C96.3904 20.7705 96.3347 20.4922 96.2234 20.2578C96.112 20.0234 95.9421 19.8418 95.7136 19.7129C95.4851 19.584 95.195 19.5195 94.8435 19.5195C94.5329 19.5195 94.2605 19.5723 94.0261 19.6777C93.7976 19.7832 93.6218 19.9326 93.4987 20.126C93.3757 20.3135 93.3142 20.5303 93.3142 20.7764H90.9851C90.9851 20.3838 91.0788 20.0117 91.2663 19.6602C91.4538 19.3027 91.7204 18.9863 92.0661 18.7109C92.4177 18.4297 92.8366 18.21 93.323 18.0518C93.8152 17.8936 94.3659 17.8145 94.9753 17.8145C95.696 17.8145 96.3376 17.9375 96.9001 18.1836C97.4685 18.4238 97.9138 18.7871 98.2361 19.2734C98.5642 19.7598 98.7282 20.3721 98.7282 21.1104V25.2588C98.7282 25.7334 98.7575 26.1406 98.8161 26.4805C98.8806 26.8145 98.9743 27.1045 99.0974 27.3506V27.5H96.7331C96.6218 27.2598 96.5368 26.9551 96.4782 26.5859C96.4196 26.2109 96.3904 25.8418 96.3904 25.4785ZM96.7155 21.708L96.7331 23.0879H95.2654C94.9021 23.0879 94.5827 23.126 94.3073 23.2021C94.032 23.2725 93.8064 23.3779 93.6306 23.5186C93.4548 23.6533 93.323 23.8174 93.2351 24.0107C93.1472 24.1982 93.1032 24.4121 93.1032 24.6523C93.1032 24.8867 93.156 25.0977 93.2614 25.2852C93.3728 25.4727 93.531 25.6221 93.7361 25.7334C93.947 25.8389 94.1931 25.8916 94.4743 25.8916C94.8845 25.8916 95.2419 25.8096 95.5466 25.6455C95.8513 25.4756 96.0886 25.2705 96.2585 25.0303C96.4284 24.79 96.5193 24.5615 96.531 24.3447L97.1989 25.3467C97.1169 25.5869 96.9939 25.8418 96.8298 26.1113C96.6657 26.3809 96.4548 26.6328 96.197 26.8672C95.9392 27.1016 95.6286 27.2949 95.2654 27.4473C94.9021 27.5996 94.4802 27.6758 93.9997 27.6758C93.3845 27.6758 92.8337 27.5527 92.3474 27.3066C91.8611 27.0605 91.4773 26.7236 91.196 26.2959C90.9148 25.8682 90.7741 25.3818 90.7741 24.8369C90.7741 24.333 90.8679 23.8877 91.0554 23.501C91.2429 23.1143 91.5212 22.7891 91.8904 22.5254C92.2595 22.2559 92.7165 22.0537 93.2614 21.9189C93.8122 21.7783 94.4421 21.708 95.1511 21.708H96.7155ZM106.344 25.4785V14H108.682V27.5H106.573L106.344 25.4785ZM100.236 22.8594V22.6748C100.236 21.9482 100.318 21.2891 100.482 20.6973C100.652 20.0996 100.898 19.5869 101.22 19.1592C101.542 18.7314 101.932 18.4004 102.389 18.166C102.852 17.9316 103.376 17.8145 103.962 17.8145C104.531 17.8145 105.026 17.9287 105.448 18.1572C105.875 18.3857 106.239 18.7109 106.537 19.1328C106.842 19.5547 107.085 20.0557 107.267 20.6357C107.449 21.21 107.58 21.8428 107.662 22.5342V23.0352C107.58 23.709 107.449 24.3271 107.267 24.8896C107.085 25.4521 106.842 25.9443 106.537 26.3662C106.239 26.7822 105.875 27.1045 105.448 27.333C105.02 27.5615 104.519 27.6758 103.945 27.6758C103.365 27.6758 102.843 27.5557 102.38 27.3154C101.923 27.0752 101.534 26.7383 101.211 26.3047C100.895 25.8711 100.652 25.3613 100.482 24.7754C100.318 24.1895 100.236 23.5508 100.236 22.8594ZM102.565 22.6748V22.8594C102.565 23.2695 102.6 23.6533 102.67 24.0107C102.741 24.3682 102.855 24.6846 103.013 24.96C103.171 25.2295 103.373 25.4404 103.62 25.5928C103.871 25.7451 104.176 25.8213 104.534 25.8213C104.991 25.8213 105.366 25.7217 105.659 25.5225C105.957 25.3174 106.189 25.0391 106.353 24.6875C106.517 24.3301 106.622 23.9287 106.669 23.4834V22.1035C106.646 21.752 106.584 21.4268 106.485 21.1279C106.391 20.8291 106.256 20.5713 106.08 20.3545C105.911 20.1377 105.7 19.9678 105.448 19.8447C105.196 19.7217 104.897 19.6602 104.551 19.6602C104.194 19.6602 103.889 19.7393 103.637 19.8975C103.385 20.0498 103.18 20.2637 103.022 20.5391C102.864 20.8145 102.746 21.1338 102.67 21.4971C102.6 21.8604 102.565 22.2529 102.565 22.6748ZM117.498 14.7031V27.5H115.081V14.7031H117.498ZM122.657 20.2314V22.1387H116.865V20.2314H122.657ZM123.334 14.7031V16.6104H116.865V14.7031H123.334ZM127.082 17.9902V27.5H124.753V17.9902H127.082ZM124.595 15.5029C124.595 15.1572 124.712 14.8701 124.947 14.6416C125.187 14.4131 125.509 14.2988 125.914 14.2988C126.318 14.2988 126.637 14.4131 126.872 14.6416C127.112 14.8701 127.232 15.1572 127.232 15.5029C127.232 15.8428 127.112 16.127 126.872 16.3555C126.637 16.584 126.318 16.6982 125.914 16.6982C125.509 16.6982 125.187 16.584 124.947 16.3555C124.712 16.127 124.595 15.8428 124.595 15.5029ZM131.578 14V27.5H129.249V14H131.578ZM137.885 27.6758C137.164 27.6758 136.516 27.5586 135.942 27.3242C135.368 27.0898 134.879 26.7646 134.474 26.3486C134.076 25.9268 133.768 25.4375 133.552 24.8809C133.341 24.3184 133.235 23.7148 133.235 23.0703V22.7188C133.235 21.9863 133.341 21.3213 133.552 20.7236C133.762 20.1201 134.061 19.6016 134.448 19.168C134.835 18.7344 135.298 18.4004 135.837 18.166C136.376 17.9316 136.971 17.8145 137.621 17.8145C138.295 17.8145 138.889 17.9287 139.405 18.1572C139.921 18.3799 140.351 18.6963 140.697 19.1064C141.043 19.5166 141.304 20.0088 141.479 20.583C141.655 21.1514 141.743 21.7812 141.743 22.4727V23.4482H134.29V21.8486H139.458V21.6729C139.446 21.3037 139.376 20.9668 139.247 20.6621C139.118 20.3516 138.919 20.1055 138.649 19.9238C138.38 19.7363 138.031 19.6426 137.603 19.6426C137.258 19.6426 136.956 19.7188 136.698 19.8711C136.446 20.0176 136.235 20.2285 136.065 20.5039C135.901 20.7734 135.778 21.0957 135.696 21.4707C135.614 21.8457 135.573 22.2617 135.573 22.7188V23.0703C135.573 23.4688 135.626 23.8379 135.731 24.1777C135.843 24.5176 136.004 24.8135 136.215 25.0654C136.431 25.3115 136.689 25.5049 136.988 25.6455C137.293 25.7803 137.638 25.8477 138.025 25.8477C138.512 25.8477 138.951 25.7539 139.344 25.5664C139.742 25.373 140.088 25.0889 140.381 24.7139L141.55 25.9268C141.35 26.2197 141.081 26.501 140.741 26.7705C140.407 27.04 140.003 27.2598 139.528 27.4297C139.054 27.5938 138.506 27.6758 137.885 27.6758Z" fill="#0056B3"/>
<defs>
<clipPath id="clip0_366_3181">
<rect width="13" height="13" fill="white" transform="translate(33 15)"/>
</clipPath>
</defs>
    </svg>

      </div>
      </div>
    <div className=" bg-[#F3F3F3]  border-[1px] border-[#D8D6D6] rounded w-[80%] pt-10 ml-5"> 

      {/* Table Content */}
      <div className="w-full">
        <div className="flex justify-start font-bold mb-12 ml-10 mr-10">
          <h3 className="w-1/3">File Name</h3>
          <h3 className="w-1/3">Data Source</h3>
          <h3 className="w-1/3">Status</h3>
        </div>
      </div>
      <div className="w-full">
        {/* Render Items Dynamically */}
        {documentData.map((item, index) => (
       <div
       key={index}
       className={`flex justify-start font-bold mb-12 gap-x-4 ml-8   mr-10 py-[2px] rounded border-b-[1px] border-[#D8D6D6] pb-10 ${
         index === documentData.length - 1 ? "last:border-0 mb-0"  : ""
       }`}
     >
       <p className="w-1/3">{item.fileName}</p>
       <p className="w-1/3 font-semibold">{item.dataSource}</p>
       <div className="w-1/3">
         {/* Conditional Styling for Status */}
         <p
           className={`w-[70%] text-center  font-normal py-[2px] rounded  ${
             item.status === "Vectorized"
               ? "bg-[#D0F9EE] text-[#19BA92]"
               : "bg-[#0056B3] text-white"
           }`}
         >
           {item.status}
         </p>
       </div>
     </div>
     
        ))}
      </div>
    </div>


    </>
  );
}

export default DocumentList;
