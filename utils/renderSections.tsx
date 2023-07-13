import Intro from '@/components/Intro';
import WorkFeaturedList from '@/components/WorkFeaturedList';
import WorkOtherList from '@/components/WorkOtherList';

export const renderSections = (sections: any) => {
  return sections.map((section: any) => {
    // console.log(section);
    const sectionId = section?.sys?.contentType?.sys?.id;

    if (!sectionId) return null;

    switch (sectionId) {
      case 'intro':
        return <Intro key={sectionId} {...section.fields} />;
      case 'workList':
        if (section.fields.featuredWork) {
          return (
            <WorkFeaturedList
              key={sectionId + section.fields.cmsName}
              {...section.fields}
            />
          );
        }

        return (
          <WorkOtherList
            key={sectionId + section.fields.cmsName}
            {...section.fields}
          />
        );
      default:
        return null;
    }
  });
};
