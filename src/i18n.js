// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 각 언어별 번역 리소스
const resources = {
        // 영어
        en: {
                translation: {
                        terms: {
                                title: "Privacy Policy",
                                policyInfo: {
                                        intro: "This privacy policy applies to the [wecareu] app (hereinafter referred to as 'the App') provided by [Lameditech] (hereinafter referred to as 'the Company').",
                                },
                                privacy: {
                                        title: "1. Privacy Protection",
                                        a: "a. Users must manage their devices safely to protect personal information.",
                                        b: "b. The company strives to protect users' personal information and does not provide user information to third parties.",
                                },
                                service: {
                                        title: "2. Service Usage",
                                        a: "a. Users must use this service only for legitimate purposes and must not infringe on others' rights.",
                                        b: "b. If illegal activities are discovered during service use, the responsibility lies entirely with the user.",
                                },
                                serviceChange: {
                                        title: "3. Service Provision and Changes",
                                        a: "a. The company strives to provide this service to users and may change service content with prior notice when necessary.",
                                },
                                limited: {
                                        title: "4. Limitation of Liability",
                                        a: "a. The company strives to provide normal service but is not responsible for damages or problems caused by service use.",
                                },
                                termsChange: {
                                        title: "5. Changes to Terms",
                                        a: "Will be announced through the website or application.",
                                },
                                subTitle: "These terms are effective from February 1, 2024.",
                        },
                },
        },
        // 한국어
        ko: {
                translation: {
                        terms: {
                                title: "개인정보 처리방침",
                                policyInfo: {
                                        intro: "본 개인정보처리방침은 [Lameditech] (이하 '회사')가 제공하는 [wecareu] (이하 '앱')에 적용됩니다.",
                                },
                                privacy: {
                                        title: "1. 개인 정보 보호",
                                        a: "ㄱ. 이용자는 개인 정보를 보호하기 위해 기기를 안전하게 관리해야 합니다.",
                                        b: "ㄴ. 회사는 이용자의 개인 정보를 보호하기 위해 노력하며, 제3자에게 이용자 정보를 제공하지 않습니다.",
                                },
                                service: {
                                        title: "2. 서비스 이용",
                                        a: "ㄱ. 이용자는 본 서비스를 정당한 목적으로만 이용해야 하며, 타인의 권리를 침해해서는 안 됩니다.",
                                        b: "ㄴ. 서비스 이용 중 불법적인 행위가 발견될 경우, 책임은 전적으로 이용자에게 있습니다.",
                                },
                                serviceChange: {
                                        title: "3. 서비스 제공 및 변경",
                                        a: "ㄱ. 회사는 이용자에게 본 서비스를 제공하기 위해 최선을 다하며, 필요한 경우 사전 공지 후 서비스 내용을 변경할 수 있습니다.",
                                },
                                limited: {
                                        title: "4. 책임 한계",
                                        a: "ㄱ. 회사는 정상적인 서비스 제공을 위해 노력하지만, 서비스 이용으로 인한 손해나 문제에 대해 책임을 지지 않습니다.",
                                },
                                termsChange: {
                                        title: "5. 약관의 변경",
                                        a: "웹사이트나 애플리케이션을 통해 공지됩니다.",
                                },
                                subTitle: "본 약관은 2024년 02월 01일부터 시행됩니다.",
                        },
                },
        },
        // 일본어
        ja: {
                translation: {
                        terms: {
                                title: "個人情報保護方針",
                                policyInfo: {
                                        intro: "本個人情報保護方針は、[Lameditech]（以下「会社」）が提供する[wecareu]（以下「アプリ」）に適用されます。",
                                },
                                privacy: {
                                        title: "1. 個人情報保護",
                                        a: "a. 利用者は個人情報を保護するため、デバイスを安全に管理する必要があります。",
                                        b: "b. 会社は利用者の個人情報保護に努め、第三者に利用者情報を提供しません。",
                                },
                                service: {
                                        title: "2. サービス利用",
                                        a: "a. 利用者は本サービスを正当な目的でのみ利用し、他人の権利を侵害してはなりません。",
                                        b: "b. サービス利用中に違法行為が発見された場合、責任は完全に利用者にあります。",
                                },
                                serviceChange: {
                                        title: "3. サービス提供及び変更",
                                        a: "a. 会社は利用者に本サービスを提供するため最善を尽くし、必要に応じて事前通知の上でサービス内容を変更することができます。",
                                },
                                limited: {
                                        title: "4. 責任制限",
                                        a: "a. 会社は正常なサービス提供に努めますが、サービス利用による損害や問題について責任を負いません。",
                                },
                                termsChange: {
                                        title: "5. 規約の変更",
                                        a: "ウェブサイトやアプリケーションを通じて通知されます。",
                                },
                                subTitle: "本規約は2024年2月1日から施行されます。",
                        },
                },
        },
        // 중국어
        "zh-CN": {
                translation: {
                        terms: {
                                title: "隐私政策",
                                policyInfo: {
                                        intro: "本隐私政策适用于[Lameditech]（以下简称“公司”）提供的[wecareu]（以下简称“应用”）。",
                                },
                                privacy: {
                                        title: "1. 隐私保护",
                                        a: "a. 用户必须安全管理设备以保护个人信息。",
                                        b: "b. 公司努力保护用户的个人信息，不会向第三方提供用户信息。",
                                },
                                service: {
                                        title: "2. 服务使用",
                                        a: "a. 用户只能出于合法目的使用本服务，不得侵犯他人权利。",
                                        b: "b. 如果在服务使用过程中发现非法活动，责任完全由用户承担。",
                                },
                                serviceChange: {
                                        title: "3. 服务提供和变更",
                                        a: "a. 公司努力向用户提供本服务，必要时可能会在事先通知后更改服务内容。",
                                },
                                limited: {
                                        title: "4. 责任限制",
                                        a: "a. 公司努力提供正常服务，但对服务使用造成的损害或问题不承担责任。",
                                },
                                termsChange: {
                                        title: "5. 条款变更",
                                        a: "将通过网站或应用程序公告。",
                                },
                                subTitle: "本条款自2024年2月1日起生效。",
                        },
                },
        },
        // 스페인어
        es: {
                translation: {
                        terms: {
                                title: "Política de privacidad",
                                policyInfo: {
                                        intro: "Esta política de privacidad se aplica a la aplicación [wecareu] (en adelante, la 'App') proporcionada por [Lameditech] (en adelante, la 'Empresa').",
                                },
                                privacy: {
                                        title: "1. Protección de privacidad",
                                        a: "a. Los usuarios deben gestionar sus dispositivos de forma segura para proteger la información personal.",
                                        b: "b. La empresa se esfuerza por proteger la información personal de los usuarios y no proporciona información del usuario a terceros.",
                                },
                                service: {
                                        title: "2. Uso del servicio",
                                        a: "a. Los usuarios deben usar este servicio solo para fines legítimos y no deben infringir los derechos de otros.",
                                        b: "b. Si se descubren actividades ilegales durante el uso del servicio, la responsabilidad recae completamente en el usuario.",
                                },
                                serviceChange: {
                                        title: "3. Provisión y cambios del servicio",
                                        a: "a. La empresa se esfuerza por proporcionar este servicio a los usuarios y puede cambiar el contenido del servicio con aviso previo cuando sea necesario.",
                                },
                                limited: {
                                        title: "4. Limitación de responsabilidad",
                                        a: "a. La empresa se esfuerza por proporcionar un servicio normal pero no es responsable de daños o problemas causados por el uso del servicio.",
                                },
                                termsChange: {
                                        title: "5. Cambios en los términos",
                                        a: "Se anunciará a través del sitio web o la aplicación.",
                                },
                                subTitle: "Estos términos son efectivos desde el 1 de febrero de 2024.",
                        },
                },
        },
        // 포르투갈어
        "pt-BR": {
                translation: {
                        terms: {
                                title: "Política de Privacidade",
                                policyInfo: {
                                        intro: "Esta política de privacidade se aplica ao aplicativo wecareu (doravante denominado 'App') fornecido pela Lameditech (doravante denominada 'Empresa').",
                                },
                                privacy: {
                                        title: "1. Proteção de privacidade",
                                        a: "a. Os usuários devem gerenciar seus dispositivos com segurança para proteger informações pessoais.",
                                        b: "b. A empresa se esforça para proteger as informações pessoais dos usuários e não fornece informações do usuário a terceiros.",
                                },
                                service: {
                                        title: "2. Uso do serviço",
                                        a: "a. Os usuários devem usar este serviço apenas para fins legítimos e não devem infringir os direitos de outros.",
                                        b: "b. Se atividades ilegais forem descobertas durante o uso do serviço, a responsabilidade recai completamente sobre o usuário.",
                                },
                                serviceChange: {
                                        title: "3. Provisão e mudanças do serviço",
                                        a: "a. A empresa se esforça para fornecer este serviço aos usuários e pode alterar o conteúdo do serviço com aviso prévio quando necessário.",
                                },
                                limited: {
                                        title: "4. Limitação de responsabilidade",
                                        a: "a. A empresa se esforça para fornecer serviço normal, mas não é responsável por danos ou problemas causados pelo uso do serviço.",
                                },
                                termsChange: {
                                        title: "5. Mudanças nos termos",
                                        a: "Será anunciado através do site ou aplicativo.",
                                },
                                subTitle: "Estes termos são efetivos a partir de 1º de fevereiro de 2024.",
                        },
                },
        },
};

i18n
        // 브라우저 언어 감지 플러그인 사용
        .use(LanguageDetector)
        // i18next를 react-i18next에 연결
        .use(initReactI18next)
        .init({
                resources: resources,
                // 감지된 언어가 지원 목록에 없을 경우, 이 언어를 사용 (필수)
                fallbackLng: "en",
                // 디버깅: 개발 중 콘솔에 로그를 남겨줌
                debug: true,
                interpolation: {
                        escapeValue: false, // React는 이미 XSS 방어 기능이 있으므로 false로 설정
                },
        });

export default i18n;
