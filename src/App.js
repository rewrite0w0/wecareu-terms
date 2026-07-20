import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { resources } from "./i18n";

function App() {
	// i18next의 hook을 사용합니다.
	const { t, i18n } = useTranslation();

	const currentLang = i18n.language?.substring(0, 2) || "ko";
	// 언어 변경 함수
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const LANGUAGE_LIST = Object.keys(resources);
	const currentTerms =
		resources[currentLang]?.translation?.terms ||
		resources["ko"]?.translation?.terms ||
		{};
	const sectionKeys = Object.keys(currentTerms).filter(
		(key) => !["title", "policyInfo", "subTitle", "lang"].includes(key),
	);

	return (
		<div className="container">
			<header className="header">
				<div className="logo-section">
					<img src="/logo192.png" alt="WeCareU Logo" className="logo" />
					<h1>{t("terms.title")}</h1>
				</div>
				<div className="language-switcher">
					{LANGUAGE_LIST?.map((lang, i) => {
						return (
							<button
								className={i18n.language === lang ? "active" : ""}
								onClick={() => changeLanguage(lang)}
								key={i}
							>
								{lang}
							</button>
						);
					})}
				</div>
			</header>
			<p className="policy-intro">{t("terms.policyInfo.intro")}</p>

			<main className="policy-content">
				{/* 하드코딩 섹션들을 싹 걷어내고 i18n 구조를 따라 동적 렌더링합니다. */}
				{sectionKeys.map((sectionKey) => {
					const sectionData = currentTerms[sectionKey] || {};

					// 해당 조항 안에서 'title'을 제외한 본문 문항 키들(['a', 'b', 'c'] 등) 추출
					const itemKeys = Object.keys(sectionData).filter(
						(key) => key !== "title",
					);

					return (
						<section key={sectionKey}>
							<h2>{sectionData.title}</h2>
							{itemKeys.map((itemKey) => (
								<p key={itemKey}>{sectionData[itemKey]}</p>
							))}
						</section>
					);
				})}
			</main>

			<footer className="footer">
				<p>{t("terms.subTitle")}</p>
			</footer>
		</div>
	);
}

export default App;
