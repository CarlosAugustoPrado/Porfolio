// app/components/PageScroller/PageScroller.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function PageScroller({ children }) {
	const mainRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const sections = gsap.utils.toArray(".section");
			let isAnimating = false;
			let currentIndex = 0;

			const handleWheel = (e) => {
				e.preventDefault();

				console.log("🖱️ Evento de scroll detectado!", e.deltaY);

				if (isAnimating) return;

				isAnimating = true;
				const direction = e.deltaY > 0 ? 1 : -1;
				let nextIndex = currentIndex + direction;

				if (nextIndex >= 0 && nextIndex < sections.length) {
					currentIndex = nextIndex;
					gsap.to(window, {
						scrollTo: { y: sections[currentIndex], autoKill: false },
						duration: 1.2,
						ease: "power3.inOut",
						onComplete: () => {
							isAnimating = false;
						},
					});
				} else {
					isAnimating = false;
				}
			};

			window.addEventListener("wheel", handleWheel, { passive: false });
			return () => window.removeEventListener("wheel", handleWheel);
		}, mainRef);

		return () => ctx.revert();
	}, []);

	return <main ref={mainRef}>{children}</main>;
}
