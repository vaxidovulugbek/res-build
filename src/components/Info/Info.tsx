import React from "react";
import { useTranslation } from "react-i18next";
import { Text, Title } from "ui/index";
import "./Info.scss";

const Info: React.FC = () => {
	const { t } = useTranslation();
	const s = [
		{
			title: "Rezyume formasini yaratuvchisi ishga joylashishga qanday yordam berishi mumkin?",
		},
	];
	return (
		<section className="section info">
			<div className="container">
				<Title
					className="info__title"
					as="h3"
					weight="medium"
					text="Rezyume formasini yaratuvchisi ishga joylashishga qanday yordam berishi mumkin?"
				/>
				<br />
				<Text
					className="text-gray-600 info__text"
					as="p"
					text="Bizning onlayn rezyume yaratuvchimiz sizga bir necha daqiqada onlayn tarzda professional CV yaratishga yordam beradi! Bu ishga joylashish imkoniyatingizni oshirishning eng oson yo'li."
				/>
				<br />
				<Text
					className="text-gray-600 info__text"
					as="p"
					text="Ko'pchilik ish tajribasini, ko'nikmalarini tavsiflashda va shaxsiy ma'lumotlarni to'ldirishda qiynaladi. Ishga qabul qilish bo'yicha mutaxassislar juda ko'p noto'g'ri va tushunarsiz to'ldirilgan arizalarni olishadi. Ish uchun sifatli rezyumeni taqdim etadigan noyob nomzodlardan biriga aylaning. cvgun bilan bu oson bo'ladi!"
				/>
				<br />
				<Text
					className="text-gray-600 info__text"
					as="p"
					text="Raqobat kuchayib borayotgan bugungi mehnat bozorida erishgan yutuqlaringizning yaxshi tayyorlangan taqdimoti muvaffaqiyatli ishga joylashishning kaliti bo‘lishi mumkin. Ammo rezyume yaratuvchisi ish topishga qanday yordam berishi mumkin? Keling, bir nechta asosiy fikrlarni ko'rib chiqaylik."
				/>
				<br />
				<ul>
					<li className="mb-1">
						<Title
							weight="medium"
							className="text-gray-700 info__subtitle mb-1"
							as="h5"
							text="Format va dizaynni optimallashtirish"
						/>
						<Text
							className="text-gray-600 info__text"
							as="p"
							text="Veb-sayt yaratuvchisi format va ko'rinishni yaratish va sozlashni osonlashtiradi. Bu yerda siz profilingiz va sohangizga mos keladigan to'g'ri shablonni tanlashingiz mumkin. Toza, tuzilgan va vizual jihatdan chiroyli hujjat potentsial ish beruvchida yaxshi taassurot qoldirishini kafolatlaydi va boshqa nomzodlardan ajralib turishingizga yordam beradi."
						/>
					</li>
					<li>
						<Title
							weight="medium"
							className="text-gray-700 info__subtitle mb-1"
							as="h5"
							text="Ish beruvchining talablariga moslashish"
						/>
						<Text
							className="text-gray-600 info__text"
							as="p"
							text="Onlayn rezyumeni yaratuvchisi yordamida siz eng kerakli ko'nikmalar va tajribalarni ta'kidlab, ma'lum bir vakansiyaga osongina moslasha olasiz. Bu nafaqat suhbatga taklifnoma olish imkoniyatingizni oshiradi, balki siz o'z pozitsiyangizni sinchkovlik bilan o'rganib, unga tayyorgarlik ko'rganingizni ko'rsatadi."
						/>
					</li>
				</ul>
				<br />
				<Title
					className="info__title"
					as="h3"
					weight="medium"
					text="Konstruktor - rezyumeni tuzish dasturi."
				/>
				<br />
				<Text
					className="text-gray-600 info__text"
					as="p"
					text="Biz hammamiz bilamizki, ish beruvchi nafaqat ko'nikmalar va martaba bosqichlari tavsifi bilan chiroyli shaklni, balki tajribali mutaxassisni qidiradi. Va haqiqatan ham shunday. Bu sizning professionalligingizni ko'rsatadigan hujjatdir. Bu siz haqingizda birinchi taassurot va tafsilotlarga e'tibor, tashkilotchilik va ishga umumiy munosabatingiz haqida aytib berishning bir usuli. Kichkina, ammo baribir vazifalarga qanday yondashasiz."
				/>
				<br />
				<Text
					className="text-gray-600 info__text"
					as="p"
					text="Maqsadingizga tezroq yaqinlashishingizga yordam beramiz. Davom eting va minglab nomzodlarga yordam bergan HR tomonidan tasdiqlangan shablonlarimiz bilan ko'proq intervyu oling. Siz shunchaki shaxsiy ma'lumotlaringizni kiritishingiz, tegishli shablonni tanlashingiz va yangilangan rezyumeni pdf formatida saqlashingiz kerak."
				/>
			</div>
		</section>
	);
};

export default Info;
