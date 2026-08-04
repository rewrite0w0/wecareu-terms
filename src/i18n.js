// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 각 언어별 번역 리소스
export const resources = {
	ko: {
		translation: {
			terms: {
				title: "개인정보 처리방침",
				policyInfo: {
					intro:
						"본 개인정보처리방침은 [Lameditech] (이하 '회사')가 제공하는 [wecareu] (이하 '앱')에 적용됩니다.",
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
				storagePolicy: {
					title: "6. 데이터 보관 정책 및 삭제 절차",
					a: "ㄱ. [데이터 보관 정책] 본 앱은 순수 온디바이스(On-device) 방식으로 동작하며, 이용자의 개인 정보 및 헬스케어 데이터를 별도의 외부 서버에 저장하거나 보관하지 않습니다. 모든 데이터는 이용자의 기기 내에만 안전하게 저장됩니다.",
					b: "ㄴ. [데이터 삭제 절차] 본 앱은 외부 서버에 이용자 데이터를 저장하지 않으므로, 회사가 이용자의 데이터를 임의로 보유하거나 삭제할 수 없습니다. 이용자는 앱을 삭제(생체 데이터 및 앱 데이터 캐시 삭제 포함)함으로써 기기 내에 저장된 모든 데이터를 즉시 완전히 삭제할 수 있습니다.",
				},
				dataProcessing: {
					title: "7. 개인정보 및 민감한 사용자 데이터 처리 정보",
					a: "ㄱ. [안전한 처리 절차] 회사는 이용자의 개인 정보 및 민감한 건강 데이터를 외부 서버로 전송, 공유, 판매하지 않으며 기기 내부에서만 안전하게 처리합니다.",
					b: "ㄴ. [오류 및 서비스 품질 개선 데이터 수집] 회사는 앱의 안정성 향상 및 오류 수집을 위해 제3자 서비스인 Sentry 및 Firebase Crashlytics를 사용합니다. 이 과정에서 수집되는 데이터는 기기 정보, 앱 크래시 로그 등 비식별 개인정보(익명 데이터)에 한정되며, 이용자의 이름, 연락처, 민감한 헬스케어 데이터 등 식별 가능한 개인정보는 절대 포함되지 않습니다.",
					c: "ㄷ. [타사 개인정보처리방침 링크] 수집된 오류 로그는 각 서비스 제공업체의 보안 규정에 따라 안전하게 관리됩니다. (Sentry 개인정보처리방침: https://sentry.io/privacy/ , Google Crashlytics 개인정보처리방침: https://firebase.google.com/support/privacy)",
				},
				subTitle: "2024년 02월 01일부터 시행. 2026년 7월 1일 개정.",
				lang: "한국어",
			},
		},
	},

	en: {
		translation: {
			terms: {
				title: "Privacy Policy",
				policyInfo: {
					intro:
						"This Privacy Policy applies to [wecareu] (hereinafter referred to as the 'App') provided by [Lameditech] (hereinafter referred to as the 'Company').",
				},
				privacy: {
					title: "1. Privacy Protection",
					a: "A. Users must manage their devices securely to protect their personal information.",
					b: "B. The Company strives to protect users' personal information and does not provide user information to third parties.",
				},
				service: {
					title: "2. Service Use",
					a: "A. Users must use this service only for legitimate purposes and must not infringe upon the rights of others.",
					b: "B. If any illegal activity is discovered during the use of the service, the user bears full responsibility.",
				},
				serviceChange: {
					title: "3. Provision and Modification of Services",
					a: "A. The Company does its best to provide this service to users and may change the service content after prior notice if necessary.",
				},
				limited: {
					title: "4. Limitation of Liability",
					a: "A. The Company strives to provide normal services but does not accept liability for any damages or problems resulting from the use of the service.",
				},
				termsChange: {
					title: "5. Modification of Terms",
					a: "Notifications will be made through the website or application.",
				},
				storagePolicy: {
					title: "6. Data Retention Policy and Deletion Procedure",
					a: "A. [Data Retention Policy] This App operates purely on an on-device basis and does not store or retain users' personal information and healthcare data on any external server. All data is securely stored only within the user's device.",
					b: "B. [Data Deletion Procedure] Since this App does not store user data on external servers, the Company cannot arbitrarily hold or delete user data. Users can immediately and completely delete all data stored in the device by deleting the App (including deleting biometric data and app data cache).",
				},
				dataProcessing: {
					title:
						"7. Processing Information of Personal and Sensitive User Data",
					a: "A. [Secure Processing Procedure] The Company does not transmit, share, or sell users' personal information and sensitive health data to external servers, and processes them securely only within the device.",
					b: "B. [Data Collection for Errors and Service Quality Improvement] The Company uses third-party services, Sentry and Firebase Crashlytics, to improve app stability and collect error logs. The data collected during this process is limited to non-personally identifiable information (anonymous data) such as device information and app crash logs, and never includes identifiable personal information such as the user's name, contact information, or sensitive healthcare data.",
					c: "C. [Third-Party Privacy Policy Links] Collected error logs are managed securely according to the privacy regulations of each service provider. (Sentry Privacy Policy: https://sentry.io/privacy/ , Google Crashlytics Privacy Policy: https://firebase.google.com/support/privacy)",
				},
				subTitle: "Effective as of February 01, 2024. Revised on July 1, 2026.",
				lang: "English",
			},
		},
	},
	es: {
		translation: {
			terms: {
				title: "Política de Privacidad",
				policyInfo: {
					intro:
						"Esta Política de Privacidad se aplica a [wecareu] (en adelante, la 'Aplicación') proporcionada por [Lameditech] (en adelante, la 'Empresa').",
				},
				privacy: {
					title: "1. Protección de la Privacidad",
					a: "A. Los usuarios deben administrar sus dispositivos de manera segura para proteger su información personal.",
					b: "B. La Empresa se esfuerza por proteger la información personal de los usuarios y no proporciona información de los usuarios a terceros.",
				},
				service: {
					title: "2. Uso del Servicio",
					a: "A. Los usuarios deben utilizar este servicio únicamente para fines legítimos y no deben infringir los derechos de los demás.",
					b: "B. Si se descubre alguna actividad ilegal durante el uso del servicio, el usuario asume la responsabilidad total.",
				},
				serviceChange: {
					title: "3. Prestación y Modificación de Servicios",
					a: "A. La Empresa hace todo lo posible para proporcionar este servicio a los usuarios y puede cambiar el contenido del servicio previo aviso si es necesario.",
				},
				limited: {
					title: "4. Limitación de Responsabilidad",
					a: "A. La Empresa se esfuerza por proporcionar servicios normales, pero no se hace responsable de los daños o problemas resultantes del uso del servicio.",
				},
				termsChange: {
					title: "5. Modificación de los Términos",
					a: "Las notificaciones se realizarán a través del sitio web o de la aplicación.",
				},
				storagePolicy: {
					title:
						"6. Política de Retención de Datos y Procedimiento de Eliminación",
					a: "A. [Política de Retención de Datos] Esta Aplicación funciona exclusivamente de forma local en el dispositivo (On-device) y no almacena ni conserva la información personal ni los datos de salud de los usuarios en ningún servidor externo. Todos los datos se almacenan de forma segura únicamente dentro del dispositivo del usuario.",
					b: "B. [Procedimiento de Eliminación de Datos] Dado que esta Aplicación no almacena datos de usuario en servidores externos, la Empresa no puede retener ni eliminar los datos del usuario de forma arbitraria. Los usuarios pueden eliminar de forma inmediata y completa todos los datos almacenados en el dispositivo eliminando la Aplicación (incluida la eliminación de datos biométricos y el caché de datos de la aplicación).",
				},
				dataProcessing: {
					title:
						"7. Información sobre el Procesamiento de Datos Personales y Sensibles del Usuario",
					a: "A. [Procedimiento de Procesamiento Seguro] La Empresa no transmite, comparte ni vende la información personal ni los datos de salud sensibles de los usuarios a servidores externos, y los procesa de forma segura únicamente dentro del dispositivo.",
					b: "B. [Recopilación de Datos para Errores y Mejora de la Calidad del Servicio] La Empresa utiliza servicios de terceros, Sentry y Firebase Crashlytics, para mejorar la estabilidad de la aplicación y recopilar registros de errores. Los datos recopilados durante este proceso se limitan a información no identificable personalmente (datos anónimos), como la información del dispositivo y los registros de fallos de la aplicación, y nunca incluyen información personal identificable como el nombre del usuario, información de contacto o datos de salud sensibles.",
					c: "C. [Enlaces a las Políticas de Privacidad de Terceros] Los registros de errores recopilados se gestionan de forma segura de acuerdo con las normas de privacidad de cada proveedor de servicios. (Política de privacidad de Sentry: https://sentry.io/privacy/ , Política de privacidad de Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"Efectivo a partir del 01 de febrero de 2024. Revisado el 1 de julio de 2026.",

				lang: "Español",
			},
		},
	},
	ja: {
		translation: {
			terms: {
				title: "プライバシーポリシー",
				policyInfo: {
					intro:
						"本プライバシーポリシーは、[Lameditech]（以下「当社」）が提供する[wecareu]（以下「アプリ」）に適用されます。",
				},
				privacy: {
					title: "1. 個人情報の保護",
					a: "イ. 利用者は、個人情報を保護するために端末を安全に管理する必要があります。",
					b: "ロ. 当社は利用者の個人情報を保護するために最善を尽くし、第三者に利用者情報を提供しません。",
				},
				service: {
					title: "2. サービスの利用",
					a: "イ. 利用者は、本サービスを正当な目的のためにのみ利用しなければならず、他人の権利を侵害してはなりません。",
					b: "ロ. サービス利用中に違法な行為が発見された場合、その責任は全面的に利用者にあります。",
				},
				serviceChange: {
					title: "3. サービスの提供および変更",
					a: "イ. 当社は利用者に本サービスを提供するために最善を尽くし、必要な場合は事前告知の上、サービス内容を変更することがあります。",
				},
				limited: {
					title: "4. 免責事項",
					a: "イ. 当社は正常なサービス提供のために努力しますが、サービス利用により生じた損害や問題について一切の責任を負いません。",
				},
				termsChange: {
					title: "5. 規約の変更",
					a: "ウェブサイトまたはアプリケーションを通じて公知されます。",
				},
				storagePolicy: {
					title: "6. データ保管方針および削除手続き",
					a: "イ. 【データ保管方針】本アプリは完全にオンデバイス（端末内）方式で動作し、利用者の個人情報およびヘルスケアデータを外部のサーバーに保存または保管しません。すべてのデータは利用者の端末内にのみ安全に保存されます。",
					b: "ロ. 【データ削除手続き】本アプリは外部サーバーに利用者データを保存しないため、当社が利用者のデータを任意に保有または削除することはできません。利用者は、アプリを削除（生体データおよびアプリデータのキャッシュ削除を含む）することにより、端末内に保存されたすべてのデータを即座に完全に削除できます。",
				},
				dataProcessing: {
					title: "7. 個人情報および機密性の高いユーザーデータの処理情報",
					a: "イ. 【安全な処理手続き】当社は、利用者の個人情報および機密性の高い健康データを外部サーバーに送信、共有、販売することはなく、端末内部でのみ安全に処理します。",
					b: "ロ. 【エラーおよびサービス品質向上のためのデータ収集】当社は、アプリの安定性向上およびエラー収集のために、第三者サービスであるSentryおよびFirebase Crashlyticsを使用しています。この過程で収集されるデータは、端末情報やアプリのクラッシュログなどの非識別個人情報（匿名データ）に限定され、利用者の氏名、連絡先、機密性の高いヘルスケアデータなど、個人を特定できる情報は一切含まれません。",
					c: "ハ. 【他社プライバシーポリシーのリンク】収集されたエラーログは、各サービスプロバイダーのセキュリティ規定に従って安全に管理されます。（Sentryプライバシーポリシー: https://sentry.io/privacy/ 、Google Crashlyticsプライバシーポリシー: https://firebase.google.com/support/privacy）",
				},
				subTitle: "2024年2月1日施行。2026年7月1日改定。",
				lang: "日本語",
			},
		},
	},
	zh: {
		translation: {
			terms: {
				title: "隐私政策",
				policyInfo: {
					intro:
						"本隐私政策适用于由 [Lameditech]（以下简称“公司”）提供的 [wecareu]（以下简称“应用”）。",
				},
				privacy: {
					title: "1. 个人信息保护",
					a: "一、 用户必须妥善管理其设备以保护个人信息。",
					b: "二、 公司致力于保护用户的个人信息，不会向第三方提供用户信息。",
				},
				service: {
					title: "2. 服务使用",
					a: "一、 用户必须仅出于正当目的使用本服务，不得侵犯他人的合法权益。",
					b: "二、 在使用服务过程中若发现任何违法行为，一切责任由用户自行承担。",
				},
				serviceChange: {
					title: "3. 服务的提供与变更",
					a: "一、 公司将尽最大努力向用户提供本服务，如有必要，可在事先通知后变更服务内容。",
				},
				limited: {
					title: "4. 免责声明",
					a: "一、 公司努力提供正常的服务，但对因使用本服务而引起的任何损害或问题不承担任何责任。",
				},
				termsChange: {
					title: "5. 条款的变更",
					a: "将通过网站或应用程序进行公示。",
				},
				storagePolicy: {
					title: "6. 数据保留政策与删除程序",
					a: "一、 【数据保留政策】本应用纯粹以纯端侧（On-device）方式运行，不会在任何外部服务器上存储或保留用户的个人信息和医疗健康数据。所有数据仅安全地存储在用户的设备内部。",
					b: "二、 【数据删除程序】由于本应用不在外部服务器上存储用户数据，公司无法任意保留或删除用户数据。用户可以通过删除应用（包括删除生物识别数据和应用数据缓存）来立即且完全删除存储在设备中的所有数据。",
				},
				dataProcessing: {
					title: "7. 个人信息及敏感用户数据的处理信息",
					a: "一、 【安全处理程序】公司不会将用户的个人信息及敏感健康数据传输、共享或销售给外部服务器，仅在设备内部进行安全处理。",
					b: "二、 【错误及服务质量改进的数据收集】为了提高应用的稳定性并收集错误日志，公司使用了第三方服务 Sentry 和 Firebase Crashlytics。在此过程中收集的数据仅限于设备信息、应用崩溃日志等非个人身份识别信息（匿名数据），绝对不包含用户姓名、联系方式或敏感医疗健康数据等可识别的个人信息。",
					c: "三、 【第三方隐私政策链接】收集的错误日志将根据各服务提供商的安全隐私规定进行安全管理。（Sentry 隐私政策：https://sentry.io/privacy/ ，Google Crashlytics 隐私政策：https://firebase.google.com/support/privacy）",
				},
				subTitle: "自2024年02月01日起施行。2026年7月1日修订。",
				lang: "中文",
			},
		},
	},
	pt: {
		translation: {
			terms: {
				title: "Política de Privacidade",
				policyInfo: {
					intro:
						"Esta Política de Privacidade aplica-se ao [wecareu] (doravante denominado 'Aplicativo') fornecido pela [Lameditech] (doravante denominada 'Empresa').",
				},
				privacy: {
					title: "1. Proteção de Privacidade",
					a: "A. O usuário deve gerenciar seu dispositivo de forma segura para proteger suas informações pessoais.",
					b: "B. A Empresa se esforça para proteger as informações pessoais dos usuários e não fornece informações dos usuários a terceiros.",
				},
				service: {
					title: "2. Uso do Serviço",
					a: "A. O usuário deve usar este serviço apenas para fins legítimos e não deve infringir os direitos de terceiros.",
					b: "B. Se qualquer atividade ilegal for descoberta durante o uso do serviço, o usuário assumirá total responsabilidade.",
				},
				serviceChange: {
					title: "3. Prestação e Alteração de Serviços",
					a: "A. A Empresa faz o seu melhor para fornecer este serviço aos usuários e pode alterar o conteúdo do serviço mediante aviso prévio, se necessário.",
				},
				limited: {
					title: "4. Limitação de Responsabilidade",
					a: "A. A Empresa se esforça para fornecer serviços normais, mas não assume responsabilidade por quaisquer danos ou problemas resultantes do uso do serviço.",
				},
				termsChange: {
					title: "5. Alteração dos Terminos",
					a: "As notificações serão feitas através do site ou aplicativo.",
				},
				storagePolicy: {
					title: "6. Política de Retenção de Dados e Procedimento de Exclusão",
					a: "A. [Política de Retenção de Dados] Este Aplicativo opera puramente em uma base local no dispositivo (On-device) e não armazena ou retém informações pessoais e dados de saúde dos usuários em nenhum servidor externo. Todos os dados são armazenados de forma segura apenas no dispositivo do usuário.",
					b: "B. [Procedimento de Exclusão de Dados] Como este Aplicativo não armazena dados do usuário em servidores externos, a Empresa não pode reter ou excluir os dados do usuário de forma arbitrária. Os usuários podem excluir imediata e completamente todos os dados armazenados no dispositivo excluindo o Aplicativo (incluindo a exclusão de dados biométricos e cache de dados do aplicativo).",
				},
				dataProcessing: {
					title:
						"7. Informações sobre o Processamento de Dados Pessoais e Sensíveis do Usuário",
					a: "A. [Procedimento de Processamento Seguro] A Empresa não transmite, compartilha ou vende informações pessoais e dados de saúde sensíveis dos usuários para servidores externos, processando-os com segurança apenas dentro do dispositivo.",
					b: "B. [Coleta de Dados para Erros e Melhoria da Qualidade do Serviço] A Empresa utiliza serviços de terceiros, Sentry e Firebase Crashlytics, para melhorar a estabilidade do aplicativo e coletar logs de erros. Os dados coletados durante este processo limitam-se a informações não identificáveis pessoalmente (dados anônimos), como informações do dispositivo e logs de falhas do aplicativo, e nunca incluem informações pessoais identificáveis, como o nome do usuário, informações de contato ou dados de saúde sensíveis.",
					c: "C. [Links para Políticas de Privacidade de Terceiros] Os logs de erros coletados são gerenciados de forma segura de acordo com as regulamentações de privacidade de cada provedor de serviços. (Política de Privacidade do Sentry: https://sentry.io/privacy/ , Política de Privacidade do Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"Efetivo a partir de 01 de fevereiro de 2024. Revisado em 1 de julho de 2026.",
				lang: "Português",
			},
		},
	},
	ar: {
		translation: {
			terms: {
				title: "سياسة الخصوصية",
				policyInfo: {
					intro:
						"تنطبق سياسة الخصوصية هذه على [wecareu] (المشار إليه فيما يلي باسم 'التطبيق') المقدم من [Lameditech] (المشار إليها فيما يلي باسم 'الشركة').",
				},
				privacy: {
					title: "1. حماية الخصوصية",
					a: "أ. يجب على المستخدمين إدارة أجهزتهم بأمان لحماية معلوماتهم الشخصية.",
					b: "ب. تبذل الشركة قصارى جهدها لحماية المعلومات الشخصية للمستخدمين ولا تقدم معلومات المستخدمين لأطراف ثالثة.",
				},
				service: {
					title: "2. استخدام الخدمة",
					a: "أ. يجب على المستخدمين استخدام هذه الخدمة للأغراض المشروعة فقط وعدم انتهاك حقوق الآخرين.",
					b: "ب. في حالة اكتشاف أي نشاط غير قانوني أثناء استخدام الخدمة، يتحمل المستخدم المسؤولية الكاملة.",
				},
				serviceChange: {
					title: "3. تقديم الخدمات وتعديلها",
					a: "أ. تبذل الشركة قصارى جهدها لتقديم هذه الخدمة للمستخدمين ويجوز لها تغيير محتوى الخدمة بعد إشعار مسبق إذا لزم الأمر.",
				},
				limited: {
					title: "4. تحديد المسؤولية",
					a: "أ. تبذل الشركة جهدها لتقديم خدمات طبيعية ولكنها لا تتحمل المسؤولية عن أي أضرار أو مشكلات ناتجة عن استخدام الخدمة.",
				},
				termsChange: {
					title: "5. تعديل الشروط",
					a: "سيتم الإعلان عن الإخطارات من خلال الموقع الإلكتروني أو التطبيق.",
				},
				storagePolicy: {
					title: "6. سياسة الاحتفاظ بالبيانات وإجراءات الحذف",
					a: "أ. [سياسة الاحتفاظ بالبيانات] يعمل هذا التطبيق بالكامل على أساس محلي داخل الجهاز (On-device) ولا يقوم بتخزين أو الاحتفاظ بالمعلومات الشخصية للمستخدمين وبيانات الرعاية الصحية على أي خادم خارجي. يتم تخزين جميع البيانات بأمان داخل جهاز المستخدم فقط.",
					b: "ب. [إجراءات حذف البيانات] نظراً لأن هذا التطبيق لا يخزن بيانات المستخدم على خوادم خارجية، فلا يمكن للشركة الاحتفاظ ببيانات المستخدم أو حذفها بشكل تعسفي. يمكن للمستخدمين حذف جميع البيانات المخزنة في الجهاز فوراً وبشكل كامل عن طريق حذف التطبيق (بما في ذلك حذف البيانات الحيوية وذاكرة التخزين المؤقت لبيانات التطبيق).",
				},
				dataProcessing: {
					title: "7. معلومات معالجة البيانات الشخصية والحساسة للمستخدم",
					a: "أ. [إجراءات المعالجة الآمنة] لا تقوم الشركة بنقل المعلومات الشخصية للمستخدمين وبياناتهم الصحية الحساسة أو مشاركتها أو بيعها إلى خوادم خارجية، وتقوم بمعالجتها بأمان داخل الجهاز فقط.",
					b: "ب. [جمع البيانات للأخطاء وتحسين جودة الخدمة] تستخدم الشركة خدمات الطرف الثالث، Sentry و Firebase Crashlytics، لتحسين استقرار التطبيق وجمع سجلات الأخطاء. تقتصر البيانات التي يتم جمعها خلال هذه العملية على معلومات غير محددة للهوية الشخصية (بيانات مجهولة) مثل معلومات الجهاز وسجلات تعطل التطبيق، ولا تشمل أبداً معلومات شخصية محددة للهوية مثل اسم المستخدم أو معلومات الاتصال أو بيانات الرعاية الصحية الحساسة.",
					c: "ج. [روابط سياسة الخصوصية الخاصة بطرف ثالث] يتم إدارة سجلات الأخطاء التي يتم جمعها بأمان وفقاً للوائح الخصوصية والأمان الخاصة بكل مزود خدمة. (سياسة خصوصية Sentry: https://sentry.io/privacy/ ، سياسة خصوصية Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"يسري المفعول اعتباراً من 01 فبراير 2024. تم التعديل في 1 يوليو 2026.",
				lang: "العربية",
			},
		},
	},
	"ar-gulf": {
		translation: {
			terms: {
				title: "سياسة الخصوصية",
				policyInfo: {
					intro:
						'تنطبق سياسة الخصوصية هذه على تطبيق [wecareu] (المشار إليه فيما يلي بـ "التطبيق") المقدم من شركة [Lameditech] (المشار إليها فيما يلي بـ "الشركة").',
				},
				privacy: {
					title: "١. حماية المعلومات الشخصية",
					a: "أ. يجب على المستخدم إدارة جهازه بأمان لحماية معلوماته الشخصية.",
					b: "ب. تبذل الشركة قصارى جهدها لحماية المعلومات الشخصية للمستخدمين ولا تقدم معلومات المستخدم لأطراف ثالثة.",
				},
				service: {
					title: "٢. استخدام الخدمة",
					a: "أ. يجب على المستخدمين استخدام هذه الخدمة للأغراض المشروعة فقط وعدم التعدي على حقوق الآخرين.",
					b: "ب. في حالة اكتشاف أي أنشطة غير قانونية أثناء استخدام الخدمة، يتحمل المستخدم المسؤولية الكاملة.",
				},
				serviceChange: {
					title: "٣. تقديم الخدمات وتعديلها",
					a: "أ. تبذل الشركة أقصى جهدها لتقديم هذه الخدمة للمستخدمين، وقد تقوم بتعديل محتوى الخدمة عند الحاجة بعد إشعار مسبق.",
				},
				limited: {
					title: "٤. حدود المسؤولية",
					a: "أ. تسعى الشركة لضمان تقديم الخدمة بشكل طبيعي، ولكنها لا تتحمل المسؤولية عن أي أضرار أو مشاكل تنشأ عن استخدام الخدمة.",
				},
				termsChange: {
					title: "٥. تغيير الشروط والأحكام",
					a: "سيتم الإعلان عن التغييرات عبر الموقع الإلكتروني أو التطبيق.",
				},
				storagePolicy: {
					title: "٦. سياسة حفظ البيانات وإجراءات الحذف",
					a: "أ. [سياسة حفظ البيانات] يعمل هذا التطبيق بالكامل على الجهاز (On-device) ولا يقوم بتخزين أو الاحتفاظ بالمعلومات الشخصية والبيانات الصحية للمستخدم على خوادم خارجية مستقلة. يتم حفظ جميع البيانات بآمان داخل جهاز المستخدم فقط.",
					b: "ب. [إجراءات حذف البيانات] نظراً لأن التطبيق لا يخزن بيانات المستخدم على خوادم خارجية، فإن الشركة لا يمكنها الاحتفاظ ببيانات المستخدم أو حذفها بشكل 임의ي. يمكن للمستخدم حذف جميع البيانات المخزنة على الجهاز فوراً وبشكل كامل عن طريق إزالة التطبيق (بما في ذلك مسح البيانات الحيوية والذاكرة المؤقتة).",
				},
				dataProcessing: {
					title: "٧. معالجة البيانات الشخصية والحساسة للمستخدم",
					a: "أ. [إجراءات المعالجة الآمنة] لا تقوم الشركة بنقل أو مشاركة أو بيع المعلومات الشخصية والبيانات الصحية الحساسة للمستخدم إلى خوادم خارجية، وتتم معالجتها بآمان داخل الجهاز فقط.",
					b: "ب. [جمع البيانات للأخطاء وتحسين جودة الخدمة] تستخدم الشركة خدمات أطراف ثالثة مثل Sentry و Firebase Crashlytics لجمع سجلات الأخطاء وتحسين استقرار التطبيق. البيانات المجمعة مجهولة الهوية ولا تتضمن معلومات شخصية يمكن التعرف عليها.",
					c: "ج. [روابط سياسة الخصوصية للأطراف الثالثة] يتم إدارة سجلات الأخطاء المجمعة بآمان وفقاً للوائح الأمنية لكل ميزود خدمة. (سياسة خصوصية Sentry: https://sentry.io/privacy/ ، سياسة خصوصية Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle: "يسري اعتباراً من ١ فبراير ٢٠٢٤. تم التعديل في ١ يوليو ٢٠٢٦.",
				lang: "العربية (الخليج)",
			},
		},
	},
	de: {
		translation: {
			terms: {
				title: "Datenschutzerklärung",
				policyInfo: {
					intro:
						"Diese Datenschutzerklärung gilt für [wecareu] (im Folgenden als 'App' bezeichnet), bereitgestellt von [Lameditech] (im Folgenden als 'Unternehmen' bezeichnet).",
				},
				privacy: {
					title: "1. Schutz der Privatsphäre",
					a: "A. Nutzer müssen ihre Geräte sicher verwalten, um ihre persönlichen Daten zu schützen.",
					b: "B. Das Unternehmen bemüht sich, die persönlichen Daten der Nutzer zu schützen, und gibt keine Nutzerdaten an Dritte weiter.",
				},
				service: {
					title: "2. Nutzung des Dienstes",
					a: "A. Nutzer dürfen diesen Dienst nur für rechtmäßige Zwecke nutzen und dürfen die Rechte anderer nicht verletzen.",
					b: "B. Wenn während der Nutzung des Dienstes illegale Aktivitäten festgestellt werden, trägt der Nutzer die volle Verantwortung.",
				},
				serviceChange: {
					title: "3. Bereitstellung und Änderung von Diensten",
					a: "A. Das Unternehmen tut sein Bestes, um diesen Dienst für die Nutzer bereitzustellen, und kann den Inhalt des Dienstes im Bedarfsfall nach vorheriger Ankündigung ändern.",
				},
				limited: {
					title: "4. Haftungsbeschränkung",
					a: "A. Das Unternehmen bemüht sich um die Bereitstellung ordnungsgemäßer Dienste, übernimmt jedoch keine Haftung für Schäden oder Probleme, die aus die Nutzung des Dienstes resultieren.",
				},
				termsChange: {
					title: "5. Änderung der Bedingungen",
					a: "Benachrichtigungen erfolgen über die Website oder die Anwendung.",
				},
				storagePolicy: {
					title: "6. Richtlinie zur Datenspeicherung und Löschungsverfahren",
					a: "A. [Richtlinie zur Datenspeicherung] Diese App arbeitet rein lokal auf dem Gerät (On-Device) und speichert oder hält die personenbezogenen Daten und Gesundheitsdaten der Nutzer auf keinem externen Server vor. Alle Daten werden sicher ausschließlich auf dem Gerät des Nutzers gespeichert.",
					b: "B. [Verfahren zur Datenlöschung] Da diese App keine Nutzerdaten auf externen Servern speichert, kann das Unternehmen Nutzerdaten nicht willkürlich aufbewahren oder löschen. Nutzer können alle auf dem Gerät gespeicherten Daten sofort und vollständig löschen, indem sie die App löschen (einschließlich des Löschens von biometrischen Daten und des App-Datencaches).",
				},
				dataProcessing: {
					title:
						"7. Informationen zur Verarbeitung personenbezogener und sensibler Nutzerdaten",
					a: "A. [Sicheres Verarbeitungsverfahren] Das Unternehmen überträgt, teilt oder verkauft die personenbezogenen Daten und sensiblen Gesundheitsdaten der Nutzer nicht an externe Server und verarbeitet sie sicher nur innerhalb des Geräts.",
					b: "B. [Datenerfassung für Fehler und Verbesserung der Dienstqualität] Das Unternehmen nutzt die Drittanbieterdienste Sentry und Firebase Crashlytics, um die App-Stabilität zu verbessern und Fehlerprotokolle zu erfassen. Die während dieses Prozesses erfassten Daten beschränken sich auf nicht personenidentifizierbare Informationen (anonyme Daten) wie Geräteinformationen und App-Absturzprotokolle und enthalten niemals identifizierbare personenbezogene Daten wie den Namen des Nutzers, Kontaktinformationen oder sensible Gesundheitsdaten.",
					c: "C. [Links zu Datenschutzerklärungen von Drittanbietern] Die erfassten Fehlerprotokolle werden gemäß den Datenschutzbestimmungen des jeweiligen Dienstanbieters sicher verwaltet. (Sentry-Datenschutzerklärung: https://sentry.io/privacy/ , Google Crashlytics-Datenschutzerklärung: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"In Kraft seit dem 01. Februar 2024. Geändert am 1. Juli 2026.",
				lang: "Deutsch",
			},
		},
	},
	// 폴란드어 (Poland)
	pl: {
		translation: {
			terms: {
				title: "Polityka Prywatności",
				policyInfo: {
					intro:
						"Niniejsza Polityka Prywatności ma zastosowanie do aplikacji [wecareu] (zwanej dalej „Aplikacją”) dostarczanej przez [Lameditech] (zwaną dalej „Firmą”).",
				},
				privacy: {
					title: "1. Ochrona Danych Osobowych",
					a: "a. Użytkownik musi bezpiecznie zarządzać swoim urządzeniem, aby chronić swoje dane osobowe.",
					b: "b. Firma dokłada wszelkich starań, aby chronić dane osobowe użytkowników i nie udostępnia ich stronom trzecim.",
				},
				service: {
					title: "2. Korzystanie z Usługi",
					a: "a. Użytkownicy muszą korzystać z niniejszej Usługi wyłącznie w zgodnych z prawem celach i nie mogą naruszać praw innych osób.",
					b: "b. W przypadku wykrycia nielegalnych działań podczas korzystania z Usługi, wyłączną odpowiedzialność ponosi użytkownik.",
				},
				serviceChange: {
					title: "3. Świadczenie i Modyfikacja Usług",
					a: "a. Firma dokłada starań, aby świadczyć Usługę i w razie potrzeby może zmienić jej treść po uprzednim powiadomieniu.",
				},
				limited: {
					title: "4. Ograniczenie Odpowiedzialności",
					a: "a. Firma dąży do zapewnienia prawidłowego świadczenia Usługi, ale nie ponosi odpowiedzialności za szkody wynikające z korzystania z Usługi.",
				},
				termsChange: {
					title: "5. Zmiany w Regulaminie",
					a: "Powiadomienia o zmianach będą publikowane za pośrednictwem strony internetowej lub aplikacji.",
				},
				storagePolicy: {
					title: "6. Polityka Przechowywania Danych i Procedura Usuwania",
					a: "a. [Polityka Przechowywania Danych] Ta Aplikacja działa wyłącznie w trybie na urządzeniu (On-device) i nie przechowuje danych osobowych ani danych zdrowotnych na zewnętrznych serwerach. Wszystkie dane są bezpiecznie zapisywane wyłącznie w urządzeniu użytkownika.",
					b: "b. [Procedura Usuwania Danych] Ponieważ Aplikacja nie przechowuje danych na serwerach zewnętrznych, Firma nie może samodzielnie przechowywać ani usuwać danych użytkownika. Użytkownik może natychmiast i całkowicie usunąć dane, odinstalowując Aplikację (w tym czyszcząc dane biometryczne i pamięć podręczną).",
				},
				dataProcessing: {
					title:
						"7. Przetwarzanie Danych Osobowych i Wrażliwych Danych Użytkownika",
					a: "a. [Procedura Bezpiecznego Przetwarzania] Firma nie przesyła, nie udostępnia ani nie sprzedaje danych osobowych i wrażliwych danych zdrowotnych użytkownika na serwery zewnętrzne i przetwarza je bezpiecznie wyłącznie wewnątrz urządzenia.",
					b: "b. [Zbieranie Danych w Celu Poprawy Błędów i Jakości] Firma korzysta z usług stron trzecich (Sentry i Firebase Crashlytics) w celu poprawy stabilności aplikacji. Gromadzone dane ograniczają się do anonimowych informacji o urządzeniu i logach błędów, wykluczając dane osobowe, takie jak imię i nazwisko czy dane zdrowotne.",
					c: "c. [Linki do Polityk Prywatności Zewnętrznych Dostawców] Zebrane logi są bezpiecznie zarządzane zgodnie z przepisami dostawców. (Polityka prywatności Sentry: https://sentry.io/privacy/ , Polityka prywatności Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle: "Obowiązuje od 1 lutego 2024 r. Zmieniono 1 lipca 2026 r.",
				lang: "Polski",
			},
		},
	},
	// 조지아어 (Georgia)
	ka: {
		translation: {
			terms: {
				title: "კონფიდენციალურობის პოლიტიკა",
				policyInfo: {
					intro:
						"წინამდებარე კონფიდენციალურობის პოლიტიკა ვრცელდება [Lameditech]-ის (შემდგომში „კომპანია“) მიერ მოწოდებულ აპლიკაციაზე [wecareu] (შემდგომში „აპლიკაცია“).",
				},
				privacy: {
					title: "1. პერსონალური მონაცემების დაცვა",
					a: "ა. მომხმარებელმა უსაფრთხოდ უნდა მართოს თავისი მოწყობილობა პერსონალური მონაცემების დასაცავად.",
					b: "ბ. კომპანია ყველაფერს აკეთებს მომხმარებლის მონაცემების დასაცავად და არ გადასცემს მათ მესამე პირებს.",
				},
				service: {
					title: "2. მომსახურებით სარგებლობა",
					a: "ა. მომხმარებელმა უნდა გამოიყენოს ეს მომსახურება მხოლოდ კანონიერი მიზნებისთვის და არ უნდა დაარღვიოს სხვათა უფლებები.",
					b: "ბ. მომსახურების გამოყენებისას უკანონო ქმედებების გამოვლენისას, სრული პასუხისმგებლობა ეკისრება მომხმარებელს.",
				},
				serviceChange: {
					title: "3. მომსახურების მიწოდება და ცვლილება",
					a: "ა. კომპანია ყველაფერს აკეთებს მომსახურების უზრუნველსაყოფად და საჭიროების შემთხვევაში, წინასწარი შეტყობინებით, შეცვლის შინაარსს.",
				},
				limited: {
					title: "4. პასუხისმგებლობის შეზღუდვა",
					a: "ა. კომპანია ცდილობს უზრუნველყოს სტაბილური მომსახურება, თუმცა არ იღებს პასუხისმგებლობას გამოყენების შედეგად წარმოშობილ ზიანზე.",
				},
				termsChange: {
					title: "5. პირობების ცვლილება",
					a: "ცვლილებების შესახებ შეტყობინება გამოქვეყნდება ვებგვერდზე ან აპლიკაციაში.",
				},
				storagePolicy: {
					title: "6. მონაცემთა შენახვის პოლიტიკა და წაშლის პროცედურა",
					a: "ა. [მონაცემთა შენახვის პოლიტიკა] ეს აპლიკაცია მუშაობს ლოკალურად მოწყობილობაზე (On-device) და არ ინახავს მომხმარებლის პერსონალურ და ჯანმრთელობის მონაცემებს გარეგან სერვერებზე. ყველა მონაცემი უსაფრთხოდ ინახება მხოლოდ მომხმარებლის მოწყობილობაში.",
					b: "ბ. [მონაცემთა წაშლის პროცედურა] ვინაიდან აპლიკაცია არ ინახავს მონაცემებს გარეგან სერვერებზე, კომპანიას არ შეუძლია მათი წაშლა. მომხმარებელს შეუძლია მონაცემების სრული წაშლა აპლიკაციის წაშლით (ბიომეტრიული და ქეშ მონაცემების ჩათვლით).",
				},
				dataProcessing: {
					title: "7. პერსონალური და სენსიტიური მონაცემების დამუშავება",
					a: "ა. [უსაფრთხო დამუშავება] კომპანია არ გადასცემს ან ყიდის მომხმარებლის ჯანმრთელობისა და პერსონალურ მონაცემებს გარეგან სერვერებზე. დამუშავება ხდება მხოლოდ მოწყობილობის შიგნით.",
					b: "ბ. [შეცდომების შეგროვება და ხარისხის გაუმჯობესება] კომპანია იყენებს Sentry-სა და Firebase Crashlytics-ს შეცდომების შესაგროვებლად. ეს მონაცემები ანონიმურია და არ შეიცავს პერსონალურ ან ჯანმრთელობის იდენტიფიცირებად ინფორმაციას.",
					c: "გ. [მესამე მხარის პოლიტიკის ბმულები] შეგროვებული ლოგები იმართება პროვაიდერების უსაფრთხოების წესების შესაბამისად. (Sentry: https://sentry.io/privacy/ , Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"ძალაშია 2024 წლის 1 თებერვლიდან. რედაქტირებულია 2026 წლის 1 ივლისს.",
				lang: "ქართული",
			},
		},
	},
	// 우즈베크어 (Uzbekistan - Latn)
	uz: {
		translation: {
			terms: {
				title: "Muxfiylik Siyosati",
				policyInfo: {
					intro:
						"Ushbu Maxfiylik siyosati [Lameditech] (keyingi o'rinlarda 'Kompaniya') tomonidan taqdim etilgan [wecareu] (keyingi o'rinlarda 'Ilova') ilovasiga nisbatan qo'llaniladi.",
				},
				privacy: {
					title: "1. Shaxsiy Ma'lumotlarni Himoya Qilish",
					a: "a. Foydalanuvchi shaxsiy ma'lumotlarini xavfsiz saqlash uchun qurilmasini xavfsiz boshqarishi kerak.",
					b: "b. Kompaniya foydalanuvchilarning shaxsiy ma'lumotlarini ҳimoya qilishga harakat qiladi va ularni uchinchi shaxslarga bermaydi.",
				},
				service: {
					title: "2. Xizmatdan Foydalanish",
					a: "a. Foydalanuvchilar ushbu Xizmatdan faqat qonuniy maqsadlarda foydalanishlari va boshqalarning huquqlarini buzmasliklari kerak.",
					b: "b. Xizmatdan foydalanish paytida noqonuniy harakatlar aniqlansa, to'liq javobgarlik foydalanuvchi zimmasida bo'ladi.",
				},
				serviceChange: {
					title: "3. Xizmatlarni Taqdim Etish va O'zgartirish",
					a: "a. Kompaniya ushbu Xizmatni taqdim etish uchun barcha imkoniyatlarni ishga soladi va zarurat tug'ilganda oldindan ogohlantirish orqali xizmat mazmunini o'zgartirishi mumkin.",
				},
				limited: {
					title: "4. Javobgarlik Cheklanishi",
					a: "a. Kompaniya xizmat ko'rsatishni ta'minlashga harakat qiladi, ammo xizmatdan foydalanish natijasida kelib chiqqan zararlar uchun javobgarlikni o'z zimmasiga olmaydi.",
				},
				termsChange: {
					title: "5. Shartlarning O'zgarishi",
					a: "O'zgarishlar haqida veb-sayt yoki ilova orqali e'lon qilinadi.",
				},
				storagePolicy: {
					title: "6. Ma'lumotlarni Saqlash Siyosati va O'chirish Tartibi",
					a: "a. [Ma'lumotlarni Saqlash Siyosati] Ushbu Ilova faqat qurilmaning o'zida (On-device) ishlaydi va foydalanuvchining shaxsiy va salomatlik ma'lumotlarini tashqi serverlarda saqlamaydi. Barcha ma'lumotlar faqat foydalanuvchi qurilmasida saqlanadi.",
					b: "b. [Ma'lumotlarni O'chirish Tartibi] Ilova ma'lumotlarni tashqi serverlarda saqlamagani uchun Kompaniya ularni o'chira olmaydi. Foydalanuvchi ilovani o'chirish orqali barcha ma'lumotlarni darhol to'liq o'chirib tashlashi mumkin.",
				},
				dataProcessing: {
					title: "7. Shaxsiy va Maxfiy Ma'lumotlarni Qayta Ishlash",
					a: "a. [Xavfsiz Qayta Ishlash] Kompaniya foydalanuvchining shaxsiy va salomatlik ma'lumotlarini tashqi serverlarga uzatmaydi, sotmaydi va faqat qurilma ichida xavfsiz qayta ishlaydi.",
					b: "b. [Xatoliklarni Yig'ish] Kompaniya ilovani yaxshilash va xatoliklarni yig'ish uchun Sentry va Firebase Crashlytics xizmatlaridan foydalanadi. Yig'ilgan ma'lumotlar anonim bo'lib, shaxsni tasdiqlovchi ma'lumotlarni o'z ichiga olmaydi.",
					c: "c. [Tashqi Havolalar] Yig'ilgan jurnallar provayderlarning xavfsizlik qoidalariga muvofiq boshqariladi. (Sentry: https://sentry.io/privacy/ , Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"2024-yil 1-fevraldan kuchga kirgan. 2026-yil 1-julda tahrirlangan.",
				lang: "O'zbekcha",
			},
		},
	},
	// 카자흐어 (Kazakhstan)
	kk: {
		translation: {
			terms: {
				title: "Купиялылық саясаты",
				policyInfo: {
					intro:
						"Осы Құпиялылық саясаты [Lameditech] (бұдан әрі «Компания») ұсынатын [wecareu] (бұдан әрі «Қолданба») қолданбасына қолданылады.",
				},
				privacy: {
					title: "1. Жеке деректерді қорғау",
					a: "a. Пайдаланушы жеке деректерін қорғау үшін құрылғысын қауіпсіз басқаруы керек.",
					b: "b. Компания пайдаланушылардың жеке деректерін қорғауға тырысады және оларды үшінші тұлғаларға бермейді.",
				},
				service: {
					title: "2. Қызметті пайдалану",
					a: "a. Пайдаланушылар бұл қызметті тек заңды мақсаттарда пайдалануы тиіс және басқалардың құқықтарын бұзбауы керек.",
					b: "b. Қызметті пайдалану кезінде заңсыз әрекеттер анықталса, барлық жауапкершілік пайдаланушыға жүктеледі.",
				},
				serviceChange: {
					title: "3. Қызметтерді ұсыну және өзгерту",
					a: "a. Компания бұл қызметті ұсыну үшін барлық мүмкіндіктерді жасайды және қажет болған жағдайда алдын ала ескерту арқылы өзгерте алады.",
				},
				limited: {
					title: "4. Жауапкершілікті шектеу",
					a: "a. Компания қызметтің дұрыс көрсетілуін қамтамасыз етуге тырысады, бірақ пайдаланудан туындаған залалдар үшін жауап бермейді.",
				},
				termsChange: {
					title: "5. Шарттардың өзгеруі",
					a: "Өзгерістер туралы хабарландыру веб-сайт немесе қолданба арқылы жасалады.",
				},
				storagePolicy: {
					title: "6. Деректерді сақтау саясаты және жою процедурасы",
					a: "a. [Деректерді сақтау саясаты] Бұл қолданба тек құрылғыда (On-device) жұмыс істейді және жеке немесе денсаулық деректерін сыртқы серверлерде сақтамайды. Барлық деректер тек құрылғыда қауіпсіз сақталады.",
					b: "b. [Деректерді жою процедурасы] Қолданба сыртқы серверлерде деректерді сақтамайтындықтан, Компания оларды жоя алмайды. Пайдаланушы қолданбаны жою арқылы барлық деректерді дереу толық жоя алады.",
				},
				dataProcessing: {
					title: "7. Жеке және сезімтал деректерді өңдеу",
					a: "a. [Қауіпсіз өңдеу] Компания жеке және денсаулық деректерін сыртқы серверлерге жібермейді немесе сатпайды және оларды тек құрылғы ішінде өңдейді.",
					b: "b. [Қателерді жинау] Қолданбаның тұрақтылығын арттыру үшін Sentry және Firebase Crashlytics қызметтері қолданылады. Жиналған деректер анонимді болып табылады және жеке басты анықтайтын мағлұматтарды камтымайды.",
					c: "c. [Үшінші тарап саясаттарының сілтемелері] Жиналған журналдар провайдерлердің қауіпсіздік ережелеріне сәйкес басқарылады. (Sentry: https://sentry.io/privacy/ , Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"2024 жылғы 1 ақпаннан бастап күшіне енеді. 2026 жылғы 1 шілдеде қайта қаралған.",
				lang: "Қазақ тілі",
			},
		},
	},
	// 인도네시아어 (Indonesia)
	id: {
		translation: {
			terms: {
				title: "Kebijakan Privasi",
				policyInfo: {
					intro:
						"Kebijakan Privasi ini berlaku untuk aplikasi [wecareu] (selanjutnya disebut 'Aplikasi') yang disediakan oleh [Lameditech] (selanjutnya disebut 'Perusahaan').",
				},
				privacy: {
					title: "1. Perlindungan Informasi Pribadi",
					a: "a. Pengguna harus mengelola perangkat mereka dengan aman untuk melindungi informasi pribadi mereka.",
					b: "b. Perusahaan berupaya melindungi informasi pribadi pengguna dan tidak memberikan informasi pengguna kepada pihak ketiga.",
				},
				service: {
					title: "2. Penggunaan Layanan",
					a: "a. Pengguna harus menggunakan Layanan ini hanya untuk tujuan yang sah dan tidak boleh melanggar hak orang lain.",
					b: "b. Jika tindakan ilegal terdeteksi selama penggunaan Layanan, pengguna bertanggung jawab penuh atas tindakan tersebut.",
				},
				serviceChange: {
					title: "3. Penyediaan dan Perubahan Layanan",
					a: "a. Perusahaan melakukan yang terbaik untuk menyediakan Layanan ini dan dapat mengubah konten Layanan setelah pemberitahuan sebelumnya jika diperlukan.",
				},
				limited: {
					title: "4. Batasan Tanggung Jawab",
					a: "a. Perusahaan berusaha untuk memastikan penyediaan layanan yang normal, tetapi tidak bertanggung jawab atas kerusakan atau masalah yang timbul dari penggunaan Layanan.",
				},
				termsChange: {
					title: "5. Perubahan Syarat dan Ketentuan",
					a: "Pemberitahuan mengenai perubahan akan disampaikan melalui situs web atau aplikasi.",
				},
				storagePolicy: {
					title: "6. Kebijakan Penyimpanan Data dan Prosedur Penghapusan",
					a: "a. [Kebijakan Penyimpanan Data] Aplikasi ini beroperasi sepenuhnya secara On-device dan tidak menyimpan data pribadi serta data kesehatan pada server eksternal terpisah. Semua data disimpan secara aman hanya di dalam perangkat pengguna.",
					b: "b. [Prosedur Penghapusan Data] Karena Aplikasi tidak menyimpan data pengguna pada server eksternal, Perusahaan tidak dapat menyimpan atau menghapus data pengguna secara sewenang-wenang. Pengguna dapat langsung menghapus semua data dengan menghapus instalasi Aplikasi (termasuk data biometrik dan cache).",
				},
				dataProcessing: {
					title: "7. Pemrosesan Data Pribadi dan Data Sensitif Pengguna",
					a: "a. [Prosedur Pemrosesan Aman] Perusahaan tidak mengirimkan, membagikan, atau menjual informasi pribadi dan data kesehatan sensitif pengguna ke server eksternal, dan memprosesnya secara aman hanya di dalam perangkat.",
					b: "b. [Pengumpulan Data untuk Kesalahan dan Peningkatan Kualitas] Perusahaan menggunakan layanan pihak ketiga, Sentry dan Firebase Crashlytics, untuk mengumpulkan log kesalahan. Data yang dikumpulkan bersifat anonim dan tidak mencakup data pribadi yang dapat diidentifikasi.",
					c: "c. [Tautan Kebijakan Privasi Pihak Ketiga] Log kesalahan dikelola dengan aman sesuai dengan peraturan keamanan masing-masing penyedia layanan. (Kebijakan Privasi Sentry: https://sentry.io/privacy/ , Kebijakan Privasi Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle: "Berlaku mulai 1 Februari 2024. Direvisi pada 1 Juli 2026.",
				lang: "Bahasa Indonesia",
			},
		},
	},
	// 베트남어 (Vietnam)
	vi: {
		translation: {
			terms: {
				title: "Chính Sách Bảo Mật",
				policyInfo: {
					intro:
						"Chính sách bảo mật này áp dụng cho ứng dụng [wecareu] (sau đây gọi là 'Ứng dụng') do [Lameditech] (sau đây gọi là 'Công ty') cung cấp.",
				},
				privacy: {
					title: "1. Bảo Vệ Thông Tin Cá Nhân",
					a: "a. Người dùng phải quản lý thiết bị của mình một cách an toàn để bảo vệ thông tin cá nhân.",
					b: "b. Công ty nỗ lực bảo vệ thông tin cá nhân của người dùng và không cung cấp thông tin người dùng cho bên thứ ba.",
				},
				service: {
					title: "2. Sử Dụng Dịch Vụ",
					a: "a. Người dùng chỉ được sử dụng Dịch vụ này cho các mục đích hợp pháp và không được xâm phạm quyền lợi của người khác.",
					b: "b. Nếu phát hiện hành vi vi phạm pháp luật trong quá trình sử dụng Dịch vụ, người dùng sẽ chịu toàn bộ trách nhiệm.",
				},
				serviceChange: {
					title: "3. Cung Cấp và Thay Đổi Dịch Vụ",
					a: "a. Công ty cố gắng hết sức để cung cấp Dịch vụ này và có thể thay đổi nội dung Dịch vụ sau khi thông báo trước nếu cần thiết.",
				},
				limited: {
					title: "4. Giới Hạn Trách Nhiệm",
					a: "a. Công ty nỗ lực đảm bảo việc cung cấp dịch vụ bình thường, nhưng không chịu trách nhiệm cho bất kỳ thiệt hại hoặc sự cố nào phát sinh từ việc sử dụng Dịch vụ.",
				},
				termsChange: {
					title: "5. Thay Đổi Điều Khoản",
					a: "Thông báo về việc thay đổi sẽ được đăng tải thông qua trang web hoặc ứng dụng.",
				},
				storagePolicy: {
					title: "6. Chính Sách Lưu Trữ Dữ Liệu và Quy Trình Xóa",
					a: "a. [Chính Sách Lưu Trữ Dữ Liệu] Ứng dụng này hoạt động hoàn toàn trên thiết bị (On-device) và không lưu trữ thông tin cá nhân cũng như dữ liệu sức khỏe trên máy chủ bên ngoài. Tất cả dữ liệu chỉ được lưu trữ an toàn trên thiết bị của người dùng.",
					b: "b. [Quy Trình Xóa Dữ Liệu] Vì Ứng dụng không lưu trữ dữ liệu trên máy chủ bên ngoài, Công ty không thể tùy ý lưu giữ hoặc xóa dữ liệu của người dùng. Người dùng có thể xóa hoàn toàn tất cả dữ liệu bằng cách gỡ cài đặt Ứng dụng (bao gồm xóa dữ liệu sinh trắc học và bộ nhớ tạm).",
				},
				dataProcessing: {
					title: "7. Xử Lý Thông Tin Cá Nhân và Dữ Liệu Nhạy Cảm",
					a: "a. [Quy Trình Xử Lý An Toàn] Công ty không truyền, chia sẻ hoặc bán thông tin cá nhân và dữ liệu sức khỏe nhạy cảm của người dùng sang máy chủ bên ngoài và chỉ xử lý an toàn bên trong thiết bị.",
					b: "b. [Thu Thập Dữ Liệu Lỗi và Cải Tiến Chất Lượng] Công ty sử dụng dịch vụ của bên thứ ba là Sentry và Firebase Crashlytics để thu thập nhật ký lỗi. Dữ liệu thu thập được là vô danh và không bao gồm thông tin cá nhân có thể định danh.",
					c: "c. [Liên Kết Chính Sách Bảo Mật Của Bên Thứ Ba] Nhật ký lỗi thu thập được quản lý an toàn theo quy định bảo mật của từng nhà cung cấp. (Chính sách bảo mật Sentry: https://sentry.io/privacy/ , Chính sách bảo mật Google Crashlytics: https://firebase.google.com/support/privacy)",
				},
				subTitle:
					"Có hiệu lực từ ngày 01 tháng 02 năm 2024. Sửa đổi ngày 01 tháng 07 năm 2026.",
				lang: "Tiếng Việt",
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
