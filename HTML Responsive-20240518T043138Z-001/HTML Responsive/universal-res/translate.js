(function () {
    window.loadJS = window.loadJS || 0;

    var scripts = document.getElementsByTagName("script");
    var selfScript = scripts[scripts.length - 1];
    var scriptSrc = selfScript.src;
    console.log("Script loaded: " + scriptSrc);
    window.loadJS++;
})();

document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            "intro-title": "Introduction",
            "intro-text":
                "Welcome to our website! Here at ELANG TECH, we pride ourselves on being at the forefront of open-source technology solutions. Our platform serves as a testament to our unwavering commitment to innovation, collaboration, and knowledge sharing.",
            "intro-text2":
                "Within these digital corridors, professionals from diverse backgrounds converge to unravel the complexities of open-source technologies. Whether you're a seasoned developer, an aspiring enthusiast, or a curious explorer, our community-driven platform offers a wealth of resources to fuel your journey.",
            "intro-text3":
                "Driven by a passion for excellence and a dedication to our users, we strive to create an inclusive environment where every voice is heard, every question finds an answer, and every problem is met with a collaborative spirit. Join us as we embark on a journey of discovery, where possibilities are limitless, and the future of open-source technology is shaped by the collective efforts of our community.",
            "goals-title": "Our Goals",
            "goals-text":
                "Our goal at ELANG TECH is to foster a vibrant and inclusive community dedicated to advancing open-source technology. We aim to provide a platform where professionals, enthusiasts, and learners can come together to explore, innovate, and collaborate. Through our commitment to excellence and user satisfaction, we aspire to empower individuals to harness the full potential of open-source solutions. Join us as we strive to create a future where knowledge is freely shared, boundaries are transcended, and technology serves as a force for positive change.",
            "partners-title": "Our Partners",
            "services-title": "Our Services",
            service1title: "Professional Consultation",
            service1content:
                "Unlock insights from seasoned professionals who offer personalized guidance and consultation tailored to your unique needs and challenges.",
            service2title: "Community Collaboration",
            service2content:
                "Engage in collaborative projects and discussions within our vibrant community, where ideas flourish, solutions emerge, and connections thrive.",
            service3title: "Technical Support",
            service3content:
                "Access timely technical support and troubleshooting assistance from our dedicated team of experts, ensuring seamless navigation through technological complexities.",
            service4title: "Knowledge Sharing",
            service4content:
                "Participate in knowledge-sharing initiatives, workshops, and webinars curated to broaden your understanding and proficiency in open-source technologies.",
            oservicetitle: "Other Services",
            oservicecontent:
                "In addition to our core services, we also offer specialized solutions to further meet your needs. Our team of experts is dedicated to providing you with innovative and tailored solutions that drive success for your business. Whether you require data analysis, web development, cloud computing, or digital marketing services, we have the expertise to help you achieve your goals.",
            "ourteam-title": "Our Team"
        },
        id: {
            "intro-title": "Pengenalan",
            "intro-text":
                "Selamat datang di situs kami! Di ELANG TECH, kami bangga menjadi yang terdepan dalam solusi teknologi open-source. Platform kami merupakan bukti komitmen kami yang tak tergoyahkan terhadap inovasi, kolaborasi, dan berbagi pengetahuan.",
            "intro-text2":
                "Dalam koridor digital ini, para profesional dari berbagai latar belakang berkumpul untuk mengurai kompleksitas teknologi open-source. Baik Anda seorang pengembang berpengalaman, penggemar pemula, atau penjelajah yang penasaran, platform kami yang didorong oleh komunitas menawarkan banyak sumber daya untuk mendukung perjalanan Anda.",
            "intro-text3":
                "Didorong oleh semangat untuk keunggulan dan dedikasi kepada pengguna kami, kami berupaya menciptakan lingkungan yang inklusif di mana setiap suara didengar, setiap pertanyaan menemukan jawaban, dan setiap masalah dihadapi dengan semangat kolaboratif. Bergabunglah dengan kami dalam perjalanan penemuan, di mana kemungkinan tak terbatas, dan masa depan teknologi open-source dibentuk oleh upaya kolektif komunitas kami.",
            "goals-title": "Tujuan Kami",
            "goals-text":
                "Tujuan kami di ELANG TECH adalah untuk menumbuhkan komunitas yang dinamis dan inklusif yang didedikasikan untuk memajukan teknologi open-source. Kami bertujuan menyediakan platform di mana para profesional, penggemar, dan pelajar dapat bersatu untuk menjelajah, berinovasi, dan berkolaborasi. Melalui komitmen kami terhadap keunggulan dan kepuasan pengguna, kami bercita-cita memberdayakan individu untuk memanfaatkan potensi penuh solusi open-source. Bergabunglah dengan kami saat kami berusaha menciptakan masa depan di mana pengetahuan dibagikan secara bebas, batasan dilampaui, dan teknologi berfungsi sebagai kekuatan untuk perubahan positif.",
            "partners-title": "Partner Kami",
            "services-title": "Jasa Kami",

            service1title: "Konsultasi Profesional",
            service1content:
                "Dapatkan wawasan dari para profesional berpengalaman yang menawarkan panduan dan konsultasi yang dipersonalisasi sesuai dengan kebutuhan dan tantangan unik Anda.",
            service2title: "Kolaborasi Komunitas",
            service2content:
                "Ikut dalam proyek kolaboratif dan diskusi di dalam komunitas kami yang bersemangat, di mana ide-ide berkembang, solusi muncul, dan hubungan berkembang.",
            service3title: "Dukungan Teknis",
            service3content:
                "Akses dukungan teknis yang tepat waktu dan bantuan pemecahan masalah dari tim ahli kami, memastikan navigasi yang lancar melalui kompleksitas teknologi.",
            service4title: "Berbagi Pengetahuan",
            service4content:
                "Ikut serta dalam inisiatif berbagi pengetahuan, lokakarya, dan webinar yang disusun untuk memperluas pemahaman dan kecakapan Anda dalam teknologi sumber terbuka.",
            oservicetitle: "Layanan Lainnya",
            oservicecontent:
                "Selain layanan inti kami, kami juga menawarkan solusi khusus untuk memenuhi kebutuhan Anda lebih lanjut. Tim ahli kami berdedikasi untuk menyediakan solusi inovatif dan dipersonalisasi yang mendorong kesuksesan bisnis Anda. Baik Anda memerlukan analisis data, pengembangan web, komputasi awan, atau layanan pemasaran digital, kami memiliki keahlian untuk membantu Anda mencapai tujuan Anda.",
            "ourteam-title": "Tim Kami"
            // udah kapok gweh
        }
    };

    const idButton = document.getElementById("idButton");
    const enButton = document.getElementById("enButton");

    const setLanguage = (lang) => {
        Object.keys(translations[lang]).forEach((id) => {
            const element = document.getElementById(id);
            element.classList.add("fadeIn"); // Add fadeIn animation class
            setTimeout(() => {
                element.innerText = translations[lang][id];
            }, 500); // Wait for the animation to finish (500ms)
        });
        idButton.classList.toggle("active", lang === "id");
        enButton.classList.toggle("active", lang === "en");
    };

    idButton.addEventListener("click", () => setLanguage("id"));
    enButton.addEventListener("click", () => setLanguage("en"));

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") || "en";
    setLanguage(lang);
});
