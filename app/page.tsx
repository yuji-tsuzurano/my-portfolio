/**
 * トップページ（各セクションの組み立て）
 */
import Footer from "@/components/_common/Footer";
import Header from "@/components/_common/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import LearningSection from "@/components/sections/LearningSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
