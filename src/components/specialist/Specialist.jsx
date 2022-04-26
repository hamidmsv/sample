import React from "react";
import specialist from "../../assets/img/specialist.png";

function Specialist(props) {
  return (
    <section className="specialist-section d-flex flex-row justify-content-around mt-5 pt-5 px-5 w-100">
      <div className="specialist-left d-flex flex-column justify-content-start">
        <span className="text-left fw-bolder mb-2" style={{ color: "#3734A9" }}>
          Why Choose Us
        </span>
        <h3 className="fw-bolder mt-2 mb-4 fs-2" style={{ lineHeight: "50px" }}>
          Specialist aiding clients <br />
          on financial challenges
        </h3>
        <p className="fs-5" style={{ color: "#757095" }}>
          End-to-end payments and financial management in a<br /> single
          solution. Meet the right platform to help realize.
        </p>

        <div className="specialist-items d-flex flex-column mt-2">
          <div className="d-inline-flex justify-content-around my-2">
            <span className="me-3">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#FF7F5C" />
                <path
                  d="M47.4 29.8V27.4H43.9234C43.6484 26.8203 43.1797 26.3516 42.6 26.0766V22.6H40.2V25.8H36.2V22.6H33.8V25.8H29.8V22.6H27.4V26.0719C26.8172 26.3485 26.3484 26.8172 26.0719 27.4H22.6V29.8H25.8V33.8H22.6V36.2H25.8V40.2H22.6V42.6H26.0719C26.3484 43.1828 26.8172 43.6516 27.4 43.9281V47.4H29.8V44.2H33.8V47.4H36.2V44.2H40.2V47.4H42.6V43.9234C43.1797 43.6484 43.6484 43.1797 43.9234 42.6H47.4V40.2H44.2V36.2H47.4V33.8H44.2V29.8H47.4ZM41.8 33.8V41.4C41.8 41.5063 41.7578 41.6078 41.6828 41.6828C41.6078 41.7578 41.5062 41.8 41.4 41.8H28.6C28.3797 41.8 28.2 41.6203 28.2 41.4V28.6C28.2 28.3797 28.3797 28.2 28.6 28.2H41.4C41.5062 28.2 41.6078 28.2422 41.6828 28.3172C41.7578 28.3922 41.8 28.4938 41.8 28.6V33.8Z"
                  fill="white"
                />
              </svg>
            </span>

            <div className="d-flex flex-column">
              <h4 className="fs-5">First Working Process</h4>
              <p style={{ color: "#757095" }}>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
          </div>

          <div className="d-inline-flex justify-content-around my-2">
            <span className="me-3">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#3734A9" />
                <path
                  d="M27 42.4796C27.1891 42.6687 27.2937 42.9265 27.2922 43.1937C27.2906 43.4609 27.1812 43.7156 26.9906 43.903C26.7984 44.089 26.5406 44.1905 26.2734 44.1859C26.0062 44.1812 25.7515 44.0702 25.5687 43.8765C24.1641 42.4406 23.1015 40.7046 22.4641 38.8001C22.3781 38.547 22.3953 38.2704 22.5156 38.0313C22.6344 37.7907 22.8437 37.6094 23.0984 37.5266C23.3515 37.4423 23.6297 37.4641 23.8672 37.586C24.1047 37.7095 24.2844 37.9204 24.3641 38.1767C24.9063 39.7907 25.8078 41.2626 27 42.4799L27 42.4796ZM46.9 37.5232C46.6484 37.4388 46.3734 37.4591 46.1359 37.5779C45.8984 37.6982 45.7187 37.9076 45.6359 38.1591C45.0953 39.781 44.1937 41.2576 43 42.4795C42.8109 42.6686 42.7062 42.9264 42.7078 43.1936C42.7094 43.4608 42.8187 43.7155 43.0094 43.903C43.2016 44.0889 43.4594 44.1905 43.7266 44.1858C43.9938 44.1811 44.2484 44.0702 44.4312 43.8764C45.8375 42.4405 46.8984 40.7045 47.5359 38.8C47.6234 38.5469 47.6047 38.2688 47.4859 38.0281C47.3656 37.7891 47.1547 37.6062 46.9 37.5234L46.9 37.5232ZM32.5 23.764C34.1594 23.3859 35.8812 23.3859 37.5408 23.764C37.8017 23.8343 38.0814 23.7937 38.3127 23.6546C38.5455 23.514 38.7111 23.2859 38.772 23.0218C38.833 22.7578 38.783 22.4796 38.6361 22.2531C38.4877 22.0249 38.2548 21.8671 37.9877 21.8155C36.0361 21.3702 34.008 21.3702 32.0565 21.8155C31.5689 21.9749 31.2815 22.478 31.3908 22.9796C31.5002 23.4812 31.9705 23.8171 32.4799 23.7593L32.5 23.764ZM22.9688 17.9516C25.2719 17.9407 27.15 19.7969 27.1688 22.1C27.1688 24.4203 25.2876 26.3 22.9688 26.3C20.6485 26.3 18.7688 24.4203 18.7688 22.1C18.786 19.7969 20.6641 17.9408 22.9688 17.9516ZM22.9688 19.9516C22.1047 19.9735 21.3376 20.5094 21.0204 21.3141C20.7047 22.1172 20.9016 23.0328 21.5188 23.636C22.1376 24.2406 23.0579 24.4141 23.8532 24.0797C24.65 23.7438 25.1672 22.9641 25.1688 22.1C25.1532 20.9 24.1688 19.9391 22.9688 19.9516ZM23.9766 30.7108L25.9157 28.7999H26.5235C26.9985 28.7936 27.4563 28.9764 27.7954 29.3061C28.136 29.6374 28.3297 30.0889 28.336 30.5639V32.8561C28.336 33.4077 28.7844 33.8561 29.336 33.8561C29.8891 33.8561 30.336 33.4077 30.336 32.8561V30.5639C30.3204 28.4733 28.6157 26.7889 26.5235 26.7998H25.5079C25.2454 26.7998 24.9954 26.9045 24.8079 27.0873L22.9672 28.8951L21.1266 27.0873H21.1282C20.9422 26.9045 20.6906 26.7998 20.4282 26.7998H19.4C17.3141 26.7952 15.6157 28.478 15.6 30.5639V32.8561C15.6 33.4077 16.0485 33.8561 16.6 33.8561C17.1516 33.8561 17.6 33.4077 17.6 32.8561V30.5639C17.6125 29.5811 18.4172 28.7936 19.4 28.7998H20.0078L21.9516 30.7123C22.5157 31.2623 23.4157 31.2608 23.9766 30.7076L23.9766 30.7108ZM51.2314 22.0952C51.2314 24.4155 49.3517 26.2952 47.0314 26.2952C44.7126 26.2952 42.8314 24.4155 42.8314 22.0952C42.8314 19.7764 44.7126 17.8952 47.0314 17.8952C49.3517 17.8952 51.2314 19.7764 51.2314 22.0952ZM49.2314 22.0952C49.2533 21.2014 48.7314 20.3843 47.9111 20.0264C47.0908 19.6702 46.1361 19.8452 45.4954 20.4702C44.8564 21.0952 44.6579 22.0452 44.9954 22.8733C45.3329 23.7014 46.1376 24.2436 47.0314 24.2436C48.2329 24.2577 49.2173 23.2968 49.2313 22.0952H49.2314ZM50.6002 26.8H49.572C49.3095 26.8 49.058 26.9047 48.872 27.0875L47.0314 28.8953L45.1908 27.0875H45.1923C45.0048 26.9047 44.7548 26.8 44.4923 26.8H43.4767C41.3845 26.7891 39.6798 28.4734 39.6642 30.5641V32.8563C39.6642 33.4078 40.1111 33.8563 40.6642 33.8563C41.2158 33.8563 41.6642 33.4078 41.6642 32.8563V30.5641C41.6704 30.0891 41.8642 29.6375 42.2048 29.3063C42.5439 28.9766 43.0017 28.7938 43.4767 28.8H44.0845L46.0283 30.7078C46.5876 31.2438 47.4689 31.2438 48.0283 30.7078L49.9798 28.8H50.6002C51.0752 28.7938 51.5314 28.9766 51.872 29.3063C52.2111 29.6375 52.4064 30.0891 52.4127 30.5641V32.8563C52.4127 33.4078 52.8596 33.8563 53.4127 33.8563C53.9642 33.8563 54.4127 33.4078 54.4127 32.8563V30.5641C54.397 28.4734 52.6908 26.7891 50.6002 26.8H50.6002ZM30.8002 42.292C30.7798 40.5889 31.7892 39.0404 33.3564 38.3748C34.9236 37.7076 36.7392 38.0545 37.9516 39.2514C39.1625 40.4482 39.5313 42.2592 38.8844 43.8342C38.2375 45.4107 36.7032 46.4404 35 46.4404C32.6969 46.4513 30.8172 44.5951 30.8 42.292H30.8002ZM32.8002 42.292C32.7767 43.1858 33.2986 44.0061 34.1189 44.3639C34.9392 44.7217 35.8939 44.5483 36.5346 43.9232C37.1752 43.2982 37.3752 42.3482 37.0377 41.5201C36.7002 40.6904 35.8955 40.1482 35.0002 40.1482C33.8017 40.1342 32.8174 41.0936 32.8002 42.292ZM38.5566 46.9952H37.5409C37.2784 46.9968 37.0268 47.0999 36.8409 47.2843L35.0003 49.0921L33.1596 47.2843C32.9737 47.0999 32.7221 46.9968 32.4596 46.9952H31.444C29.3534 46.9843 27.6471 48.6686 27.6315 50.7593V53.0515C27.6315 53.6046 28.08 54.0515 28.6315 54.0515C29.1846 54.0515 29.6315 53.6046 29.6315 53.0515V50.7593C29.6393 50.2858 29.8331 49.8327 30.1722 49.503C30.5128 49.1718 30.9706 48.989 31.444 48.9952H32.0518L33.9956 50.9077C34.555 51.4436 35.4378 51.4436 35.9956 50.9077L37.9394 48.9999H38.5487C39.0222 48.9937 39.48 49.1765 39.819 49.5062C40.1597 49.8374 40.3534 50.289 40.3597 50.764V53.0562C40.3597 53.6077 40.8081 54.0562 41.3597 54.0562C41.9128 54.0562 42.3597 53.6077 42.3597 53.0562V50.7593C42.3456 48.6718 40.644 46.989 38.5566 46.9952Z"
                  fill="white"
                />
              </svg>
            </span>

            <div className="d-flex flex-column">
              <h4 className="fs-5">First Working Process</h4>
              <p style={{ color: "#757095" }}>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
          </div>

          <div className="d-inline-flex justify-content-around my-2">
            <span className="me-3">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#00E1F0" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.5874 18.3084C29.6842 18.3116 29.781 18.3297 29.8713 18.3658C29.9615 18.4002 30.0452 18.4527 30.119 18.5151C30.1928 18.5791 30.2535 18.6562 30.3011 18.7398C30.3487 18.8252 30.3799 18.917 30.3963 19.0138C30.411 19.109 30.411 19.2074 30.393 19.3026C30.3749 19.3977 30.3405 19.4896 30.2913 19.5733C30.1928 19.7406 30.0353 19.8719 29.8516 19.9375C25.1774 21.6979 21.8485 26.2115 21.8485 31.5123C21.8485 35.1036 23.3775 38.3276 25.8171 40.5897C25.9172 40.6833 25.9943 40.8014 26.0402 40.931C26.0845 41.0606 26.0977 41.2 26.0763 41.3362L25.0099 48.1663L38.1072 51.5853L38.7356 46.7717C38.7503 46.6568 38.7897 46.5436 38.8504 46.4436C38.9111 46.3435 38.9931 46.2565 39.0883 46.1909C39.1835 46.1236 39.2934 46.0777 39.4082 46.0564C39.5231 46.0334 39.6412 46.0367 39.756 46.0613L43.6722 46.9538L44.3432 42.8555C44.3596 42.7587 44.3925 42.6636 44.4417 42.5783C44.4909 42.4929 44.5532 42.4158 44.6287 42.3519C44.7042 42.2879 44.7911 42.237 44.883 42.2042C44.9749 42.1697 45.075 42.1533 45.1734 42.1533H47.9608L46.3842 34.6656C46.371 34.6 46.3645 34.5311 46.3661 34.4638L46.5105 30.1605C46.0167 25.6177 43.0619 21.8146 39.008 20.1082C38.9047 20.0672 38.8112 20.0048 38.7324 19.9261C38.6537 19.8473 38.5897 19.7538 38.547 19.6521C38.5044 19.5504 38.483 19.4388 38.483 19.3273C38.483 19.2157 38.506 19.1058 38.5487 19.0024C38.5913 18.9007 38.6553 18.8072 38.7341 18.7284C38.8128 18.6513 38.908 18.589 39.0113 18.548C39.1147 18.5069 39.2262 18.4873 39.3362 18.4889C39.4477 18.4905 39.5576 18.5151 39.6594 18.5594C44.2844 20.5069 47.6461 24.8544 48.1875 30.0406C48.1908 30.0783 48.1924 30.1177 48.1908 30.1554L48.0464 34.4176L49.815 42.8192C49.8412 42.9406 49.8379 43.0686 49.81 43.19C49.7805 43.3114 49.7247 43.4246 49.646 43.5214C49.5672 43.6182 49.4671 43.697 49.3556 43.7511C49.2424 43.8053 49.1193 43.8331 48.9946 43.8331H45.8857L45.1868 48.1104C45.1687 48.2236 45.126 48.3319 45.0653 48.4287C45.003 48.5255 44.9226 48.6075 44.8275 48.6715C44.7323 48.7355 44.624 48.7798 44.5125 48.8011C44.4009 48.8225 44.2828 48.8192 44.1712 48.7946L40.2829 47.9086L39.6513 52.7516C39.6365 52.8698 39.5955 52.983 39.5332 53.0847C39.4708 53.1864 39.3871 53.2734 39.2887 53.339C39.1903 53.4046 39.0771 53.4505 38.9606 53.4702C38.8441 53.4899 38.7227 53.485 38.6079 53.4555L23.8537 49.6033C23.7536 49.577 23.6601 49.5327 23.5764 49.472C23.4927 49.4113 23.4205 49.3358 23.3648 49.2505C23.309 49.1652 23.268 49.0684 23.2466 48.9667C23.2253 48.8666 23.222 48.7616 23.2384 48.6599L24.3557 41.5115C21.7783 38.9636 20.1754 35.4215 20.1754 31.5151C20.1754 25.5104 23.9521 20.3704 29.2663 18.3687C29.3713 18.3277 29.4829 18.308 29.5944 18.3112L29.5874 18.3084Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.619 16.52C36.729 16.52 36.8389 16.5413 36.9406 16.584C37.0423 16.6266 37.1358 16.689 37.213 16.7661C37.2901 16.8432 37.3524 16.9367 37.3951 17.0384C37.4377 17.1402 37.459 17.2501 37.459 17.36V29.7416C39.1801 30.7063 40.3482 32.5471 40.3482 34.6506C40.3482 36.4257 39.518 38.0138 38.2252 39.0459L40.1841 42.437C40.2416 42.5322 40.2776 42.6388 40.2941 42.7487C40.3088 42.8587 40.3039 42.9719 40.2744 43.0785C40.2465 43.1851 40.1973 43.2869 40.13 43.3755C40.0627 43.4641 39.9774 43.5379 39.8823 43.5937C39.7871 43.6494 39.6788 43.6855 39.5689 43.6987C39.459 43.7134 39.3458 43.7052 39.2391 43.6757C39.1325 43.6462 39.0308 43.5953 38.9438 43.528C38.8569 43.4591 38.783 43.3738 38.7289 43.277L36.7716 39.8891C36.1351 40.1401 35.4427 40.278 34.7192 40.278C31.6201 40.278 29.092 37.7498 29.092 34.6508C29.092 32.5475 30.2601 30.7051 31.9812 29.7418V17.3602C31.9812 17.2503 32.0025 17.1404 32.0452 17.0387C32.0878 16.937 32.1502 16.8434 32.2273 16.7663C32.3044 16.6892 32.3979 16.6269 32.4996 16.5842C32.6013 16.5416 32.7113 16.5202 32.8212 16.5202L36.619 16.52ZM35.779 18.2H33.6626V29.1284C34.0055 29.0628 34.3599 29.0283 34.7208 29.0283C35.0818 29.0283 35.4361 29.0628 35.779 29.1284L35.779 18.2ZM34.7209 30.708C32.529 30.708 30.7735 32.4635 30.7735 34.6521C30.7735 36.844 32.529 38.5994 34.7209 38.5994C36.9078 38.5994 38.6682 36.8439 38.6682 34.6521C38.6682 32.4651 36.9078 30.708 34.7209 30.708Z"
                  fill="white"
                />
              </svg>
            </span>

            <div className="d-flex flex-column">
              <h4 className="fs-5">First Working Process</h4>
              <p style={{ color: "#757095" }}>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="specialist-right d-flex flex-column justify-content-center align-items-center">
        <img src={specialist} />
      </div>
    </section>
  );
}

export default Specialist;
