import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crowlingo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crowlingo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crowlingo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 18, 18, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crowlingo provides NLP services to find insights and relationships in text of 100+ different languages.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Models</div>
  <div>Triggers when you get the list of your models.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Classify</div>
  <div>Use your classification model on your text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Concepts Extraction</div>
  <div>Extract multilingual concepts linked to a knowledge base.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Custom Concepts Extraction</div>
  <div>Extract multilingual concepts linked to a knowledge base.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Detect Languages</div>
  <div>Detect the language of your text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Duckling Entities Extraction</div>
  <div>Extract structured numeric or temporal entities from your text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entities Extraction</div>
  <div>Extract 18 different types of entities in a text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Extract Article</div>
  <div>Extract every important information from a webpage (title, content, main image ...)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">FAQ Search</div>
  <div>Search for the most similar sentences</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Key Phrases Extraction</div>
  <div>Extract the key phrases of your text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phrase Matcher</div>
  <div>Match a word or expression in your text without worrying about translations or variations</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Summarize</div>
  <div>Extract a summary from your text</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Syntax Analysis</div>
  <div>Extract the syntax of your text (POS Tagging, Lemmas, grammatical features ...)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Texts Similarity</div>
  <div>Compute the semantic similarity between two texts</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Crowlingo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
