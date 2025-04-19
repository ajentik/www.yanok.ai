import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Writesonic Bulk"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/writesonic-bulk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Writesonic Bulk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(85, 97, 229, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Writesonic Bulk is an AI content generator.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Blog Ideas</div>
  <div>Article/blog ideas that you can use to generate more traffic, leads, and sales for your business.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Blog Intros</div>
  <div>Enticing article/blog introductions that capture the attention of the audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Blog Outlines</div>
  <div>Detailed article outlines that help you write better content on a consistent basis.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Content Rephraser</div>
  <div>Rephrase your content in a different voice and style to appeal to different readers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Content Shortner</div>
  <div>Short your content in a different voice and style to appeal to different readers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Facebook Ads</div>
  <div>Facebook ad copies that make your ads truly stand out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Google Ads</div>
  <div>Quality ads that rank in the search results and drive more traffic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Landing Page Headlines</div>
  <div>Unique and catchy headlines that are perfect for your product or service.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Product Descriptions</div>
  <div>Authentic product descriptions that will compel, inspire, and influence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sentence Expander</div>
  <div>Expand short sentences into more descriptive and interesting ones.</div>
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
          <title>Writesonic Bulk</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
