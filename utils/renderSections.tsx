import Intro from "@/components/Intro";
import WorkList from "@/components/WorkList";

export const renderSections = (sections: any) => {
  return sections.map((section: any) => {
    const sectionId = section?.sys?.contentType?.sys?.id;
    console.log(sectionId);

    if (!sectionId) return null;

    switch (sectionId) {
      case "intro":
        return <Intro key={sectionId} {...section.fields} />;
      case "workList":
        return <WorkList key={sectionId} {...section.fields} />;
      default:
        return null;
    }
  });
};
