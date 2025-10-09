"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CaseSlide from "./CasesSlide/CasesSlide";

import styles from "./cases-carrousel.module.scss";

export default function CasesCarrousel({ projects }) {
	const [activeIndex, setActiveIndex] = useState(1);
	const totalSlides = projects.length;

	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);
	const paginationBulletsRef = useRef(null);

	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			className={styles.swiperProjects}
			spaceBetween={30}
			loop={true}
			slidesPerView={1}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			onSlideChange={(swiper) => {
				setActiveIndex(swiper.realIndex + 1);
			}}
			onInit={(swiper) => {
				swiper.params.navigation.prevEl = prevButtonRef.current;
				swiper.params.navigation.nextEl = nextButtonRef.current;
				swiper.params.pagination.el = paginationBulletsRef.current;
				swiper.navigation.init();
				swiper.navigation.update();
				swiper.pagination.init();
				swiper.pagination.render();
				swiper.pagination.update();
			}}>
			{projects.map((itemDoArray) => (
				<SwiperSlide key={itemDoArray.id}>
					<CaseSlide project={itemDoArray} />
				</SwiperSlide>
			))}

			<div className={styles.action}>
				<div ref={paginationBulletsRef}></div>
				<div className={styles.paginationNumbers}>
					<span>
						{activeIndex.toString().padStart(2, "0")} / {totalSlides.toString().padStart(2, "0")}
					</span>
				</div>
				<div className={styles.navigation}>
					<button ref={prevButtonRef}>
						<Image src={"/images/icons/icon-arrow-left.svg"} width={20} height={20} alt="Seta para a esquerda" />
					</button>
					<button ref={nextButtonRef}>
						<Image src={"/images/icons/icon-arrow-right-blue.svg"} width={20} height={20} alt="Seta para a direita" />
					</button>
				</div>
			</div>
		</Swiper>
	);
}
