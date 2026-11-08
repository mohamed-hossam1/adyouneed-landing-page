import React from "react";

export function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26.178" height="26.177" viewBox="0 0 26.178 26.177" aria-hidden className="h-[26px] w-[26px] shrink-0">
      <path d="M25.933,1.657l-.111-.612a.845.845,0,0,0-.68-.68L24.53.254a15.265,15.265,0,0,0-7.786.618A15.6,15.6,0,0,0,9.5,6.221l-.99-.34a4.65,4.65,0,0,0-4.639.958L.747,9.68A2.273,2.273,0,0,0,2.2,13.632l2.765.086a2.747,2.747,0,0,0,.768,2.392l4.34,4.34a2.746,2.746,0,0,0,2.392.768l.086,2.764a2.273,2.273,0,0,0,3.952,1.458l2.841-3.125a4.651,4.651,0,0,0,.958-4.639l-.34-.99a15.543,15.543,0,0,0,5.349-7.243,15.264,15.264,0,0,0,.618-7.786ZM1.883,10.93,5.008,8.088a2.962,2.962,0,0,1,2.954-.61l.456.157A36.2,36.2,0,0,0,5.675,12.05l-3.418-.107a.582.582,0,0,1-.374-1.014Zm16.826,7.295a2.962,2.962,0,0,1-.61,2.954L15.257,24.3a.582.582,0,0,1-1.014-.374l-.107-3.418a36.125,36.125,0,0,0,4.415-2.745Zm1.022-3.538a34.41,34.41,0,0,1-7.247,4.772,1.057,1.057,0,0,1-1.213-.2c.005,0,.039.039-4.34-4.34a1.057,1.057,0,0,1-.2-1.213q.325-.662.678-1.308l4.581,4.581a.844.844,0,1,0,1.194-1.194l-4.9-4.9a34.347,34.347,0,0,1,3.29-4.506,13.574,13.574,0,0,1,12.7-4.453A13.572,13.572,0,0,1,19.731,14.687Zm-4.8-8.578a3.639,3.639,0,1,0,5.148,0,3.644,3.644,0,0,0-5.148,0Zm3.954,3.954a1.951,1.951,0,1,1,0-2.759A1.953,1.953,0,0,1,18.884,10.062ZM1.3,19.758a.844.844,0,0,1,0-1.194L2.391,17.47a.844.844,0,0,1,1.194,1.194L2.492,19.758a.844.844,0,0,1-1.194,0Zm7.461,2.885a.844.844,0,0,1,0,1.194L7.665,24.931a.844.844,0,1,1-1.194-1.194l1.094-1.094a.844.844,0,0,1,1.194,0ZM6.914,20.467,3.2,24.18a.844.844,0,0,1-1.194-1.194L5.72,19.273a.844.844,0,0,1,1.194,1.194Z" transform="translate(-0.001 -0.009)" fill="#42516b" />
    </svg>
  );
}

export function Chevron() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="5.301" height="9.023" viewBox="0 0 5.301 9.023" aria-hidden>
      <path d="M1.781,4.513,5.157,1.138a.495.495,0,0,0,0-.7l-.3-.3a.494.494,0,0,0-.7,0L.144,4.163a.5.5,0,0,0,0,.7L4.159,8.879a.494.494,0,0,0,.7,0l.3-.3a.494.494,0,0,0,0-.7Z" transform="translate(5.301 9.023) rotate(180)" fill="#fff" />
    </svg>
  );
}

export function Arrow({ flip }: { flip?: boolean }) {
  return (
    <div className={`w-[8px] shrink-0 ${flip ? "rotate-180" : ""}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="32" viewBox="0 0 8 32" aria-hidden>
        <path d="M15.553.224a1,1,0,0,1,.894,0L28.211,6.106A1,1,0,0,1,27.764,8H4.236a1,1,0,0,1-.447-1.894Z" transform="translate(8) rotate(90)" fill="#fff" />
      </svg>
    </div>
  );
}

export function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7.885" height="7.885" viewBox="0 0 7.885 7.885" aria-hidden>
      <path d="M6.587,7.085a.5.5,0,0,1-.352-.146L-.654.05a.5.5,0,0,1,0-.7.5.5,0,0,1,.7,0L6.939,6.235a.5.5,0,0,1-.352.85Z" transform="translate(-4452.5 -22191.5)" fill="#fff" />
      <path d="M-.3,7.085a.5.5,0,0,1-.352-.146.5.5,0,0,1,0-.7L6.235-.654a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.7L.05,6.939A.5.5,0,0,1-.3,7.085Z" transform="translate(-4452.5 -22191.5)" fill="#fff" />
    </svg>
  );
}

export function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <article className="relative h-[430px] w-[1024px] max-w-[94vw] rounded-[15.9px] border-b border-white bg-[linear-gradient(to_top,#d8dfff,#fff)] px-[33.39px] py-[36.77px] pl-[36.77px] text-left shadow-[0_-1px_5px_rgba(63,78,136,0.05),0_10px_30px_rgba(63,78,136,0.04)]">
      <div className="absolute left-0 top-[36.77px] h-[49.7px] w-[4.97px] rounded-r-[4.97px] bg-[#bdc5e6]" />
      {children}
    </article>
  );
}

export function CardHeader({ title, subtitle, step }: { title: string; subtitle: string; step: number }) {
  return (
    <div className="flex items-start justify-between">
      <div className="w-[327.9px] max-w-[70%]">
        <div className="text-[21.8625px] font-bold leading-[1.1] text-[#6437fc]">{title}</div>
        <p className="mt-[0.3px] text-[14.31px] leading-[1.5] text-[#42516b]">{subtitle}</p>
      </div>
      <div className="text-[47.7px] font-light leading-none text-[#bdc5e6]">Step {step}</div>
    </div>
  );
}
