import React from "react";

const Footer = () => {
  return (
    <header className="bg-[#111] py-16">
      <div className="flex pb-10 justify-center">
        <div className="flex gap-4 items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 23.4667L30 16.5333"
              stroke="white"
              strokeWidth="2.26667"
              strokeLinecap="round"
            ></path>
            <path
              d="M36.001 20.0001L28.001 20.0001"
              stroke="white"
              strokeWidth="2.26667"
              strokeLinecap="round"
            ></path>
            <path
              d="M34 16.5333L30 23.4667"
              stroke="white"
              strokeWidth="2.26667"
              strokeLinecap="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.26667 0C1.91025 0 0 1.91025 0 4.26667V35.7333C0 38.0897 1.91025 40 4.26667 40H33.6C37.1346 40 40 37.1346 40 33.6V28.2C40 27.6109 39.5224 27.1334 38.9333 27.1334H26.9337C24.5772 27.1334 22.667 25.2231 22.667 22.8667V17.1334C22.667 14.777 24.5772 12.8667 26.9337 12.8667H38.9333C39.5224 12.8667 40 12.3891 40 11.8V6.4C40 2.86538 37.1346 0 33.6 0H4.26667Z"
              fill="white"
            ></path>
          </svg>
          <svg
            width="70"
            height="18"
            viewBox="0 0 70 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.79339 14.468H7.15339C7.69739 14.468 8.22539 14.38 8.73739 14.204C9.24939 14.028 9.70539 13.74 10.1054 13.34C10.5054 12.924 10.8254 12.388 11.0654 11.732C11.3054 11.076 11.4254 10.276 11.4254 9.332C11.4254 8.468 11.3374 7.692 11.1614 7.004C11.0014 6.3 10.7294 5.7 10.3454 5.204C9.96139 4.708 9.44939 4.332 8.80939 4.076C8.18539 3.804 7.40939 3.668 6.48139 3.668H3.79339V14.468ZM0.0253906 0.5H7.41739C8.52139 0.5 9.54539 0.676 10.4894 1.028C11.4494 1.38 12.2734 1.908 12.9614 2.612C13.6654 3.316 14.2094 4.196 14.5934 5.252C14.9934 6.308 15.1934 7.548 15.1934 8.972C15.1934 10.22 15.0334 11.372 14.7134 12.428C14.3934 13.484 13.9054 14.396 13.2494 15.164C12.6094 15.932 11.8014 16.54 10.8254 16.988C9.86539 17.42 8.72939 17.636 7.41739 17.636H0.0253906V0.5Z"
              fill="white"
            ></path>
            <path
              d="M16.8305 9.044C16.8785 8.244 17.0785 7.58 17.4305 7.052C17.7825 6.524 18.2305 6.1 18.7745 5.78C19.3185 5.46 19.9265 5.236 20.5985 5.108C21.2865 4.964 21.9745 4.892 22.6625 4.892C23.2865 4.892 23.9185 4.94 24.5585 5.036C25.1985 5.116 25.7825 5.284 26.3105 5.54C26.8385 5.796 27.2705 6.156 27.6065 6.62C27.9425 7.068 28.1105 7.668 28.1105 8.42V14.876C28.1105 15.436 28.1425 15.972 28.2065 16.484C28.2705 16.996 28.3825 17.38 28.5425 17.636H25.0865C25.0225 17.444 24.9665 17.252 24.9185 17.06C24.8865 16.852 24.8625 16.644 24.8465 16.436C24.3025 16.996 23.6625 17.388 22.9265 17.612C22.1905 17.836 21.4385 17.948 20.6705 17.948C20.0785 17.948 19.5265 17.876 19.0145 17.732C18.5025 17.588 18.0545 17.364 17.6705 17.06C17.2865 16.756 16.9825 16.372 16.7585 15.908C16.5505 15.444 16.4465 14.892 16.4465 14.252C16.4465 13.548 16.5665 12.972 16.8065 12.524C17.0625 12.06 17.3825 11.692 17.7665 11.42C18.1665 11.148 18.6145 10.948 19.1105 10.82C19.6225 10.676 20.1345 10.564 20.6465 10.484C21.1585 10.404 21.6625 10.34 22.1585 10.292C22.6545 10.244 23.0945 10.172 23.4785 10.076C23.8625 9.98 24.1665 9.844 24.3905 9.668C24.6145 9.476 24.7185 9.204 24.7025 8.852C24.7025 8.484 24.6385 8.196 24.5105 7.988C24.3985 7.764 24.2385 7.596 24.0305 7.484C23.8385 7.356 23.6065 7.276 23.3345 7.244C23.0785 7.196 22.7985 7.172 22.4945 7.172C21.8225 7.172 21.2945 7.316 20.9105 7.604C20.5265 7.892 20.3025 8.372 20.2385 9.044H16.8305ZM24.7025 11.564C24.5585 11.692 24.3745 11.796 24.1505 11.876C23.9425 11.94 23.7105 11.996 23.4545 12.044C23.2145 12.092 22.9585 12.132 22.6865 12.164C22.4145 12.196 22.1425 12.236 21.8705 12.284C21.6145 12.332 21.3585 12.396 21.1025 12.476C20.8625 12.556 20.6465 12.668 20.4545 12.812C20.2785 12.94 20.1345 13.108 20.0225 13.316C19.9105 13.524 19.8545 13.788 19.8545 14.108C19.8545 14.412 19.9105 14.668 20.0225 14.876C20.1345 15.084 20.2865 15.252 20.4785 15.38C20.6705 15.492 20.8945 15.572 21.1505 15.62C21.4065 15.668 21.6705 15.692 21.9425 15.692C22.6145 15.692 23.1345 15.58 23.5025 15.356C23.8705 15.132 24.1425 14.868 24.3185 14.564C24.4945 14.244 24.5985 13.924 24.6305 13.604C24.6785 13.284 24.7025 13.028 24.7025 12.836V11.564Z"
              fill="white"
            ></path>
            <path
              d="M33.7797 3.308H30.3717V0.5H33.7797V3.308ZM30.3717 5.228H33.7797V17.636H30.3717V5.228Z"
              fill="white"
            ></path>
            <path
              d="M36.0792 5.228H39.2952V6.908H39.3432C39.7912 6.268 40.3272 5.772 40.9512 5.42C41.5912 5.068 42.3192 4.892 43.1352 4.892C43.9192 4.892 44.6312 5.044 45.2712 5.348C45.9272 5.652 46.4232 6.188 46.7592 6.956C47.1272 6.412 47.6232 5.932 48.2472 5.516C48.8872 5.1 49.6392 4.892 50.5032 4.892C51.1592 4.892 51.7672 4.972 52.3272 5.132C52.8872 5.292 53.3672 5.548 53.7672 5.9C54.1672 6.252 54.4792 6.716 54.7032 7.292C54.9272 7.852 55.0392 8.532 55.0392 9.332V17.636H51.6312V10.604C51.6312 10.188 51.6152 9.796 51.5832 9.428C51.5512 9.06 51.4632 8.74 51.3192 8.468C51.1752 8.196 50.9592 7.98 50.6712 7.82C50.3992 7.66 50.0232 7.58 49.5432 7.58C49.0632 7.58 48.6712 7.676 48.3672 7.868C48.0792 8.044 47.8472 8.284 47.6712 8.588C47.5112 8.876 47.3992 9.212 47.3352 9.596C47.2872 9.964 47.2632 10.34 47.2632 10.724V17.636H43.8552V10.676C43.8552 10.308 43.8472 9.948 43.8312 9.596C43.8152 9.228 43.7432 8.892 43.6152 8.588C43.5032 8.284 43.3032 8.044 43.0152 7.868C42.7432 7.676 42.3352 7.58 41.7912 7.58C41.6312 7.58 41.4152 7.62 41.1432 7.7C40.8872 7.764 40.6312 7.9 40.3752 8.108C40.1352 8.3 39.9272 8.588 39.7512 8.972C39.5752 9.34 39.4872 9.828 39.4872 10.436V17.636H36.0792V5.228Z"
              fill="white"
            ></path>
            <path
              d="M60.2772 11.444C60.2772 11.94 60.3252 12.428 60.4212 12.908C60.5172 13.372 60.6772 13.796 60.9012 14.18C61.1412 14.548 61.4532 14.844 61.8372 15.068C62.2212 15.292 62.7012 15.404 63.2772 15.404C63.8532 15.404 64.3332 15.292 64.7172 15.068C65.1172 14.844 65.4292 14.548 65.6532 14.18C65.8932 13.796 66.0612 13.372 66.1572 12.908C66.2532 12.428 66.3012 11.94 66.3012 11.444C66.3012 10.948 66.2532 10.46 66.1572 9.98C66.0612 9.5 65.8932 9.076 65.6532 8.708C65.4292 8.34 65.1172 8.044 64.7172 7.82C64.3332 7.58 63.8532 7.46 63.2772 7.46C62.7012 7.46 62.2212 7.58 61.8372 7.82C61.4532 8.044 61.1412 8.34 60.9012 8.708C60.6772 9.076 60.5172 9.5 60.4212 9.98C60.3252 10.46 60.2772 10.948 60.2772 11.444ZM56.8692 11.444C56.8692 10.452 57.0212 9.556 57.3252 8.756C57.6292 7.94 58.0612 7.252 58.6212 6.692C59.1812 6.116 59.8532 5.676 60.6372 5.372C61.4212 5.052 62.3012 4.892 63.2772 4.892C64.2532 4.892 65.1332 5.052 65.9172 5.372C66.7172 5.676 67.3972 6.116 67.9572 6.692C68.5172 7.252 68.9492 7.94 69.2532 8.756C69.5572 9.556 69.7092 10.452 69.7092 11.444C69.7092 12.436 69.5572 13.332 69.2532 14.132C68.9492 14.932 68.5172 15.62 67.9572 16.196C67.3972 16.756 66.7172 17.188 65.9172 17.492C65.1332 17.796 64.2532 17.948 63.2772 17.948C62.3012 17.948 61.4212 17.796 60.6372 17.492C59.8532 17.188 59.1812 16.756 58.6212 16.196C58.0612 15.62 57.6292 14.932 57.3252 14.132C57.0212 13.332 56.8692 12.436 56.8692 11.444Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
      <div className="m-auto max-w-screen-xl px-8 flex justify-between items-baseline">
        <p className="text-[16px] tracking-none leading-[20.8px] font-bold text-white">
          © 2024 Daimo
        </p>
        <div>
          <nav className="flex gap-8 md:gap-16">
            <a href="/blog">
              <p className="text-[16px] tracking-[1px] leading-[20.8px] font-semibold text-white">
                Blog
              </p>
            </a>
            <a target="_blank" href="https://github.com/daimo-eth/daimo">
              <p className="text-[16px] tracking-[1px] leading-[20.8px] font-semibold text-white">
                Github
              </p>
            </a>
            <a href="#faq">
              <p className="text-[16px] tracking-[1px] leading-[20.8px] font-semibold text-white">
                FAQ
              </p>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Footer;
