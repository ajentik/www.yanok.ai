import SolutionsLayout from '@/components/SolutionsLayout';

export default function Page() {
  return (
    <SolutionsLayout 
      title="Communication Solutions Powered by Yanok Platform"
      description="Enhance your communication with Yanok's AI-driven platform, offering automated news updates, language translation, speech recognition, and more."
    >
      <div dangerouslySetInnerHTML={{ __html: `# Communication Solutions Powered by Yanok Platform

## 1. Automated News Updates

**Description:** Streamline news publication for breaking news, financial updates, sports events, and internal announcements.

**Process:**
- AI scans multiple sources for relevant information
- Automatically curates and disseminates content to designated audiences
- Delivers updates through chosen channels

**Output:** Timely, relevant, and accurate news updates delivered to recipients\' preferred platforms.

**KPIs:**
- 40% reduction in time to publish following an event
- 25% increase in readership reach
- 92% accuracy rate of published content
- 20% increase in user engagement on automated articles
- 35% cost savings on content production

## 2. Language Translation

**Description:** Facilitate seamless international communication with AI-powered language translation for text and speech.

**Process:**
- Text and speech are translated across multiple languages
- Supports international communications and customer support
- Enhances various marketing initiatives

**Output:** Smooth global communication with reduced translation errors, higher customer satisfaction, and broader market reach.

**KPIs:**
- 30% reduction in translation errors
- 40% time saved on translation processes
- 35% increase in customer satisfaction in non-native English-speaking markets
- 25% increase in international user engagement
- 20% market expansion rate

## 3. Speech Recognition and Generation

**Description:** Improve customer service and accessibility with advanced speech recognition and generation capabilities.

**Process:**
- Recognizes user voice commands accurately
- Generates natural-sounding responses
- Enhances customer service operations and accessibility

**Output:** Efficient customer service, increased content accessibility, and enhanced user experience.

**KPIs:**
- 25% reduction in customer service handling time
- 95% accuracy of speech recognition
- 22% increase in user engagement with voice-generated content
- 18% improvement in accessibility scores
- 30% cost savings in customer service operations

## 4. Scriptwriting and Storytelling

**Description:** Boost creative storytelling with AI-assisted scriptwriting tools for media, articles, and games.

**Process:**
- Generates narratives and develops media content
- Scripts character dialogues
- Provides structure and suggests story developments

**Output:** Streamlined scriptwriting process leading to higher engagement metrics and audience captivation.

**KPIs:**
- 35% reduction in time to first draft completion
- 28% improvement in engagement metrics for content
- 25% cost savings in scriptwriting
- 30% increase in viewer/player/readership ratings
- 40% increase in creative output volume

## 5. Project Management Communication

**Description:** Optimize project management communication for timely completion and optimal resource allocation.

**Process:**
- Updates on project tasks and resource allocation
- Adjusts project timelines
- Utilizes AI suggestions for better project management

**Output:** Efficient project management with higher rates of on-time and on-budget project completion.

**KPIs:**
- 20% increase in projects completed on time and on budget
- 15% improvement in resource utilization
- 25% rise in employee satisfaction with project management
- 18% reduction in project overruns
- 20% improvement in insights from AI suggestions for benchmarking` }} />
    </SolutionsLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Communication Solutions Powered by Yanok Platform</title>
          <meta name="description" content="Enhance your communication with Yanok's AI-driven platform, offering automated news updates, language translation, speech recognition, and more." />
        </>
      ),
    },
  };
}
