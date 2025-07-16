import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
        // i18next의 hook을 사용합니다.
        const { t, i18n } = useTranslation();

        // 언어 변경 함수
        const changeLanguage = (lng) => {
                i18n.changeLanguage(lng);
        };

        return (
                <div className="container">
                        <header className="header">
                                <div className="logo-section">
                                        <img
                                                src="/logo192.png"
                                                alt="WeCareU Logo"
                                                className="logo"
                                        />
                                        <h1>{t("terms.title")}</h1>
                                </div>
                                <div className="language-switcher">
                                        <button
                                                className={
                                                        i18n.language === "ko"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("ko")
                                                }
                                        >
                                                한국어
                                        </button>
                                        <button
                                                className={
                                                        i18n.language === "en"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("en")
                                                }
                                        >
                                                English
                                        </button>
                                        <button
                                                className={
                                                        i18n.language === "ja"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("ja")
                                                }
                                        >
                                                日本語
                                        </button>
                                        <button
                                                className={
                                                        i18n.language ===
                                                        "zh-CN"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("zh-CN")
                                                }
                                        >
                                                中文
                                        </button>
                                        <button
                                                className={
                                                        i18n.language === "es"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("es")
                                                }
                                        >
                                                Español
                                        </button>
                                        <button
                                                className={
                                                        i18n.language ===
                                                        "pt-BR"
                                                                ? "active"
                                                                : ""
                                                }
                                                onClick={() =>
                                                        changeLanguage("pt-BR")
                                                }
                                        >
                                                Português
                                        </button>
                                </div>
                        </header>
                        <p className="policy-intro">
                                {t("terms.policyInfo.intro")}
                        </p>
                        <main className="policy-content">
                                {/* 각 섹션을 t() 함수를 통해 불러옵니다. */}
                                <section>
                                        <h2>{t("terms.privacy.title")}</h2>
                                        <p>{t("terms.privacy.a")}</p>
                                        <p>{t("terms.privacy.b")}</p>
                                </section>

                                <section>
                                        <h2>{t("terms.service.title")}</h2>
                                        <p>{t("terms.service.a")}</p>
                                        <p>{t("terms.service.b")}</p>
                                </section>

                                <section>
                                        <h2>
                                                {t("terms.serviceChange.title")}
                                        </h2>
                                        <p>{t("terms.serviceChange.a")}</p>
                                </section>

                                <section>
                                        <h2>{t("terms.limited.title")}</h2>
                                        <p>{t("terms.limited.a")}</p>
                                </section>

                                <section>
                                        <h2>{t("terms.termsChange.title")}</h2>
                                        <p>{t("terms.termsChange.a")}</p>
                                </section>
                        </main>

                        <footer className="footer">
                                <p>{t("terms.subTitle")}</p>
                        </footer>
                </div>
        );
}

export default App;
