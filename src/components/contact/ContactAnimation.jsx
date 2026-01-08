import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ContactAnimation() {
  return (
    <section className="relative w-full py-16 bg-white-50 flex justify-center">

      <div className="w-full max-w-3xl">
        <DotLottieReact
          src="/animations/Welcome.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

    </section>
  );
}
