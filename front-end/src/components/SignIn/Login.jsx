/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('Email invalido').required('Campo requerido'),
    password: yup.string().required('Campo requerido'),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div style={{ backgroundColor: '#f9fae9' }} className="col-6 d-flex justify-content-center align-items-center">
          <div>
            <svg width="793" height="552" viewBox="0 0 793 552" fill="none">
              <g clipPath="url(#clip0)">
                <path d="M158 551.731C245.261 551.731 316 546.359 316 539.731C316 533.104 245.261 527.731 158 527.731C70.739 527.731 0 533.104 0 539.731C0 546.359 70.739 551.731 158 551.731Z" fill="#E6E6E6" />
                <path d="M120.772 122.419C148.269 110.724 182.517 118.134 215.963 123.277C216.274 117.049 220.047 109.469 216.095 105.124C211.294 99.845 211.736 94.2985 214.625 88.72C222.013 74.455 211.428 59.2763 200.741 46.6553C198.332 43.8171 195.288 41.587 191.855 40.1462C188.422 38.7055 184.698 38.0947 180.985 38.3636L161.188 39.7777C156.37 40.1218 151.773 41.9289 148.01 44.9574C144.248 47.9858 141.5 52.091 140.135 56.7238C135.408 63.153 132.878 69.5644 134.471 75.9423C127.39 80.7812 126.2 86.6221 129.382 93.2068C132.08 97.3527 132.051 101.388 129.259 105.312C125.593 110.315 122.784 115.893 120.949 121.818L120.772 122.419Z" fill="#2F2E41" />
                <path d="M774.209 476.963H213.791C208.807 476.963 204.028 474.983 200.504 471.459C196.98 467.935 195 463.155 195 458.171C398.151 434.561 597.485 434.561 793 458.171C793 463.155 791.02 467.935 787.496 471.459C783.972 474.983 779.193 476.963 774.209 476.963Z" fill="#2F2E41" />
                <path d="M793 459.277L195 458.172L264.306 341.556L264.638 341.004V83.9964C264.637 80.8769 265.252 77.7878 266.445 74.9057C267.639 72.0236 269.389 69.4049 271.595 67.1991C273.8 64.9932 276.419 63.2435 279.301 62.0498C282.183 60.8562 285.272 60.2419 288.392 60.2422H696.292C699.411 60.2419 702.501 60.8562 705.383 62.0498C708.265 63.2435 710.883 64.9932 713.089 67.1991C715.295 69.4049 717.045 72.0236 718.239 74.9057C719.432 77.7878 720.046 80.8769 720.046 83.9964V342.772L793 459.277Z" fill="#3F3D56" />
                <path d="M287.85 76.8223C285.799 76.8246 283.832 77.6405 282.382 79.0911C280.931 80.5416 280.115 82.5084 280.113 84.5598V318.896C280.115 320.948 280.931 322.914 282.382 324.365C283.832 325.815 285.799 326.631 287.85 326.634H700.15C702.201 326.631 704.168 325.815 705.618 324.365C707.069 322.914 707.885 320.948 707.887 318.896V84.5598C707.885 82.5084 707.069 80.5417 705.618 79.0912C704.168 77.6406 702.201 76.8247 700.15 76.8223H287.85Z" fill="white" />
                <path d="M289.578 357.584C288.944 357.585 288.324 357.767 287.79 358.109C287.256 358.451 286.831 358.939 286.565 359.514L265.21 405.939C264.977 406.444 264.876 407 264.914 407.555C264.953 408.11 265.13 408.646 265.43 409.114C265.73 409.582 266.143 409.968 266.631 410.235C267.119 410.501 267.666 410.641 268.222 410.641H717.314C717.879 410.641 718.435 410.497 718.929 410.222C719.423 409.946 719.838 409.549 720.135 409.068C720.432 408.588 720.601 408.039 720.627 407.474C720.652 406.909 720.532 406.348 720.279 405.842L697.067 359.417C696.793 358.865 696.37 358.401 695.846 358.077C695.322 357.753 694.718 357.582 694.102 357.584H289.578Z" fill="#2F2E41" />
                <path d="M492.342 72.9541C495.089 72.9541 497.316 70.7271 497.316 67.98C497.316 65.2328 495.089 63.0059 492.342 63.0059C489.595 63.0059 487.368 65.2328 487.368 67.98C487.368 70.7271 489.595 72.9541 492.342 72.9541Z" fill="white" />
                <path d="M448.2 419.484C447.471 419.485 446.763 419.726 446.184 420.169C445.605 420.613 445.189 421.234 444.998 421.938L439.642 441.834C439.509 442.326 439.492 442.841 439.59 443.341C439.689 443.84 439.902 444.31 440.211 444.714C440.521 445.118 440.919 445.445 441.376 445.671C441.832 445.896 442.334 446.013 442.843 446.013H544.717C545.246 446.013 545.767 445.887 546.237 445.644C546.707 445.402 547.112 445.051 547.418 444.62C547.725 444.19 547.924 443.692 547.999 443.169C548.074 442.645 548.023 442.112 547.85 441.612L540.963 421.716C540.737 421.064 540.314 420.499 539.752 420.099C539.191 419.7 538.519 419.485 537.829 419.484H448.2Z" fill="#2F2E41" />
                <path d="M720.046 337.135V341.556H264.306L264.649 341.004V337.135H720.046Z" fill="#2F2E41" />
                <path d="M707.335 154.75C750.068 154.75 784.71 120.108 784.71 77.3752C784.71 34.6421 750.068 0 707.335 0C664.602 0 629.959 34.6421 629.959 77.3752C629.959 120.108 664.602 154.75 707.335 154.75Z" fill="#BFD732" />
                <path d="M739.39 111.089H675.279C674.107 111.088 672.983 110.622 672.154 109.793C671.325 108.964 670.859 107.84 670.858 106.668V67.98C670.859 66.8078 671.325 65.6839 672.154 64.855C672.983 64.0261 674.107 63.5598 675.279 63.5586H739.39C740.562 63.5598 741.686 64.0261 742.515 64.855C743.344 65.6839 743.81 66.8078 743.811 67.98V106.668C743.81 107.84 743.344 108.964 742.515 109.793C741.686 110.622 740.562 111.088 739.39 111.089ZM675.279 67.9801V106.668H739.393L739.39 67.98L675.279 67.9801Z" fill="white" />
                <path d="M727.231 67.9795H687.438V50.2937C687.438 37.4839 695.806 28.1865 707.334 28.1865C718.863 28.1865 727.231 37.4839 727.231 50.2937L727.231 67.9795ZM691.859 63.5581H722.81V50.2937C722.81 39.8807 716.446 32.608 707.335 32.608C698.223 32.608 691.859 39.8808 691.859 50.2937L691.859 63.5581Z" fill="white" />
                <path d="M707.335 90.6398C709.776 90.6398 711.756 88.6602 711.756 86.2183C711.756 83.7764 709.776 81.7969 707.335 81.7969C704.893 81.7969 702.913 83.7764 702.913 86.2183C702.913 88.6602 704.893 90.6398 707.335 90.6398Z" fill="white" />
                <path d="M653.32 247.149H334.68C333.116 247.147 331.616 246.525 330.51 245.419C329.403 244.313 328.781 242.813 328.779 241.248V162.207C328.781 160.643 329.403 159.143 330.51 158.037C331.616 156.931 333.116 156.308 334.68 156.307H653.32C654.884 156.308 656.384 156.931 657.49 158.037C658.596 159.143 659.219 160.643 659.221 162.207V241.248C659.219 242.813 658.596 244.313 657.49 245.419C656.384 246.525 654.884 247.147 653.32 247.149ZM334.68 158.667C333.741 158.668 332.841 159.041 332.178 159.705C331.514 160.369 331.141 161.269 331.14 162.207V241.248C331.141 242.187 331.514 243.087 332.178 243.751C332.841 244.414 333.741 244.788 334.68 244.789H653.32C654.259 244.788 655.158 244.414 655.822 243.751C656.486 243.087 656.859 242.187 656.86 241.248V162.207C656.859 161.269 656.486 160.369 655.822 159.705C655.158 159.041 654.259 158.668 653.32 158.667L334.68 158.667Z" fill="#E6E6E6" />
                <path fillRule="evenodd" clipRule="evenodd" d="M406 198.871C405.994 183.637 398.499 176.019 383.498 176C368.512 175.996 361.015 183.615 361 198.866C360.988 214.118 368.498 221.721 383.502 221.738C398.489 221.734 405.981 214.119 406 198.871Z" fill="#BFD732" />
                <g filter="url(#filter0_d)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M393.602 198.881C393.6 192.014 390.228 188.58 383.48 188.571C376.74 188.569 373.367 192.004 373.361 198.879C373.355 205.754 376.733 209.181 383.483 209.189C390.224 209.187 393.594 205.755 393.602 198.881Z" fill="#E9EAC0" />
                </g>
                <g filter="url(#filter1_d)">
                  <path d="M396.998 198.896C393.116 202.4 390.166 198.895 390.166 198.895C393.547 195.458 396.998 198.896 396.998 198.896Z" fill="#484848" />
                  <path d="M378.772 194.124C378.772 194.124 379.12 189.523 373.948 189.22V189.221C373.948 189.221 373.983 194.141 378.772 194.124Z" fill="#484848" />
                  <path d="M370.002 198.892C373.372 195.437 376.832 198.892 376.832 198.892C372.954 202.398 370.002 198.892 370.002 198.892Z" fill="#484848" />
                  <path d="M383.481 185.192C386.883 188.614 383.483 192.133 383.483 192.133C380.052 188.179 383.481 185.192 383.481 185.192Z" fill="#484848" />
                  <path d="M378.777 203.695C378.777 203.695 373.936 203.727 373.951 208.599V208.598C373.951 208.598 378.478 208.956 378.777 203.695Z" fill="#484848" />
                  <path d="M388.209 194.108C388.19 189.24 393.033 189.205 393.033 189.205C392.735 194.466 388.209 194.108 388.209 194.108Z" fill="#484848" />
                  <path d="M383.486 212.629C383.486 212.629 386.881 209.106 383.484 205.686V205.687C383.484 205.687 380.057 208.663 383.486 212.629Z" fill="#484848" />
                  <path d="M393.034 208.62C393.034 208.62 393.382 204.019 388.21 203.716V203.717C388.21 203.717 388.243 208.635 393.034 208.62Z" fill="#484848" />
                </g>
                <path d="M439.703 182.671C439.176 182.67 438.655 182.773 438.168 182.974C437.681 183.175 437.239 183.47 436.866 183.842C436.494 184.214 436.198 184.656 435.996 185.142C435.794 185.629 435.691 186.15 435.691 186.677C435.691 187.204 435.794 187.725 435.996 188.211C436.198 188.698 436.494 189.14 436.866 189.512C437.239 189.884 437.681 190.179 438.168 190.38C438.655 190.581 439.176 190.684 439.703 190.683H628.561C629.623 190.683 630.642 190.261 631.393 189.51C632.145 188.758 632.567 187.739 632.567 186.677C632.567 185.614 632.145 184.596 631.393 183.844C630.642 183.093 629.623 182.671 628.561 182.671H439.703Z" fill="#E6E6E6" />
                <path d="M439.703 206.708C438.641 206.708 437.622 207.13 436.87 207.881C436.119 208.633 435.697 209.652 435.697 210.714C435.697 211.777 436.119 212.796 436.87 213.547C437.622 214.298 438.641 214.72 439.703 214.72H520.969C522.032 214.72 523.05 214.298 523.802 213.547C524.553 212.796 524.975 211.777 524.975 210.714C524.975 209.652 524.553 208.633 523.802 207.881C523.05 207.13 522.032 206.708 520.969 206.708H439.703Z" fill="#E6E6E6" />
                <path d="M263.522 208.328L204.619 239.644L203.873 213.547C223.099 210.338 241.39 204.75 258.303 195.653L264.463 180.433C265.134 178.774 266.225 177.319 267.629 176.209C269.033 175.1 270.701 174.375 272.47 174.105C274.238 173.834 276.047 174.029 277.717 174.669C279.388 175.309 280.864 176.372 282 177.755C283.661 179.778 284.492 182.356 284.323 184.969C284.154 187.581 282.999 190.031 281.091 191.824L263.522 208.328Z" fill="#FFB8B8" />
                <path d="M119.598 389.133C119.168 387.557 119.077 385.908 119.33 384.294C119.584 382.68 120.176 381.138 121.067 379.77L134.007 359.912C137.067 355.215 141.763 351.823 147.184 350.393C152.604 348.963 158.363 349.597 163.342 352.173C157.904 361.429 158.662 369.55 165.22 376.606C155.039 381.576 145.63 387.991 137.284 395.651C135.76 396.69 134.01 397.35 132.18 397.575C130.35 397.801 128.492 397.586 126.762 396.948C125.031 396.31 123.479 395.268 122.232 393.909C120.986 392.55 120.083 390.912 119.598 389.133Z" fill="#2F2E41" />
                <path d="M266.205 363.169C264.247 366.432 261.483 369.137 258.178 371.025C254.874 372.912 251.139 373.919 247.334 373.948L161.374 374.599L157.646 352.976L195.672 341.792L163.61 317.187L198.654 276.179L262.304 335.503C266.024 338.97 268.441 343.61 269.151 348.645C269.861 353.681 268.821 358.808 266.205 363.169Z" fill="#2F2E41" />
                <path d="M147.953 511.046H127.821C109.746 387.148 91.3473 262.904 145.716 216.53L209.838 226.969L201.636 281.398L165.847 322.407L147.953 511.046Z" fill="#2F2E41" />
                <path d="M165.649 539.112C164.073 539.542 162.424 539.633 160.81 539.38C159.196 539.127 157.655 538.535 156.286 537.643L134.427 534.705C129.73 531.645 126.338 526.949 124.907 521.529C123.477 516.108 124.111 510.35 126.686 505.371C135.943 510.808 144.063 510.05 151.12 503.491C156.106 513.559 164.321 512.945 172.166 521.426C173.205 522.95 173.865 524.7 174.091 526.53C174.316 528.36 174.101 530.218 173.464 531.948C172.826 533.678 171.784 535.231 170.425 536.477C169.066 537.724 167.428 538.627 165.649 539.112Z" fill="#2F2E41" />
                <path d="M195.672 133.767L158.391 124.82C164.583 112.146 165.093 98.0438 162.119 83.0659L187.47 82.3203C188.264 100.946 190.667 118.347 195.672 133.767Z" fill="#FFB8B8" />
                <path d="M205.918 249.418C178.779 267.911 159.603 250.051 144.97 222.495C147.004 205.633 143.711 185.454 137.614 163.528C134.902 153.857 135.914 143.521 140.451 134.561C144.988 125.6 152.719 118.666 162.119 115.127L194.18 128.548C221.404 150.738 226.762 174.775 216.549 200.126L205.918 249.418Z" fill="#F0EFFF" />
                <path d="M127.821 152.408L97.9969 168.066L150.935 199.381L158.301 217.551C158.793 218.763 159.032 220.063 159.005 221.372C158.978 222.68 158.684 223.969 158.143 225.16C157.601 226.352 156.822 227.42 155.854 228.3C154.886 229.181 153.749 229.855 152.512 230.282C151.106 230.766 149.606 230.919 148.131 230.728C146.656 230.537 145.245 230.006 144.009 229.179C142.773 228.351 141.745 227.249 141.006 225.958C140.268 224.667 139.838 223.222 139.75 221.737L139.005 209.074L71.7216 186.87C69.4547 186.122 67.3877 184.868 65.6772 183.203C63.9667 181.538 62.6576 179.505 61.849 177.259C60.6703 173.985 60.6103 170.413 61.6784 167.101C62.7464 163.789 64.8822 160.925 67.7516 158.956L121.856 121.838L127.821 152.408Z" fill="#FFB8B8" />
                <path d="M157.646 155.39C145.207 149.939 133.896 155.86 119.62 160.609L117.383 121.092C131.559 113.536 145.075 111.499 157.646 117.364L157.646 155.39Z" fill="#F0EFFF" />
                <path d="M172.525 101.894C185.671 101.894 196.327 91.2377 196.327 78.0921C196.327 64.9466 185.671 54.29 172.525 54.29C159.379 54.29 148.723 64.9466 148.723 78.0921C148.723 91.2377 159.379 101.894 172.525 101.894Z" fill="#FFB8B8" />
                <path d="M201 75.0892C177.434 77.3973 159.477 73.5432 148 62.5692V53.7314H199L201 75.0892Z" fill="#2F2E41" />
              </g>
              <defs>
                <filter id="filter0_d" x="362.361" y="177.571" width="42.2416" height="42.6177" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter1_d" x="366.002" y="185.192" width="34.9957" height="35.4366" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <clipPath id="clip0">
                  <rect width="793" height="551.732" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <h1 className={styles.title}>Iniciar sesión</h1>
              <p>
                <label className={styles.label}>
                  Email
                </label>
              </p>
              <p>
                <input className={styles.input} placeholder="Ingrese su email" name="email" type="email" {...register('email')} />
              </p>
              <p>
                <label className={styles.label}>
                  Contraseña
                </label>
              </p>
              <p>
                <input className={styles.input} placeholder="Ingrese su contraseña" name="password" type="password" {...register('password')} />
              </p>
            </div>
            <button className={styles.button} type="submit">INGRESAR</button>
            <p className={styles.p}>
              Eres nuevo?
              {' '}
              <Link to="/test" className={styles.link}>
                Realizar test
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
