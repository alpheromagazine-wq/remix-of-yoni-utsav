import { PRODUCT_DETAILS } from "@/constants/product";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export function Problems() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-red-100 text-primary text-sm font-semibold px-4 py-2 rounded-full">🤔 क्या आप भी Face कर रही हैं?</span>
            <h2 className="text-[1.5rem] md:text-4xl font-bold leading-[1.3]">
              ये Problems <span className="text-gradient inline-block pr-[5px]">Common हैं</span>
              <span className="inline-block"> , </span>
              <br />
              पर
              <span className="text-gradient">Ignore नहीं करनी चाहिए</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Delivery के बाद looseness?</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Intimate area में dryness?</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Darkening की समस्या?</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Unpleasant odour?</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Intimacy में confidence नहीं?</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-5 h-5 text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <span className="font-medium">Infections बार-बार?</span>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              ये सब <span className="font-semibold text-foreground">normal है</span>, खासकर शादी के बाद या delivery के बाद। पर इसका
              <span className="text-primary font-semibold">आसान solution</span> है...
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-3xl"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-xl shadow-red-500/30 border border-primary/50">
              <div className="text-center mb-6">
                <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">✅ The Solution</span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="text-gradient">ReYoni</span> के साथ
                  <br />
                  सब कुछ बदल जाएगा!
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">Natural tightening 2 weeks में</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">Long-lasting freshness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">Darkening में visible reduction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">pH balance restore</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">Confidence 10x boost</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-red rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-3.5 h-3.5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">Partner को surprise करें</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/5 rounded-xl text-center">
                <p className="text-sm text-muted-foreground mb-2">{PRODUCT_DETAILS.discountPercent}% OFF + Free Shipping</p>
                <button onClick={openOrderDialog} className="btn-primary w-full cursor-pointer">
                  अभी Try करें →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
