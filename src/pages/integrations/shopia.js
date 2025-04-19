import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Shopia"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shopia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Shopia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 26, 61, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Content scheduling for blog & social media.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Content Set to Publish</div>
  <div>When content is set to publish, send to your existing software</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Generate Blog Article</div>
  <div>Generate a full blog article using Shopia.ai</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Insta Ad</div>
  <div>Generate an Instagram Ad using AI</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Tweet</div>
  <div>Generate a tweet using AI</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Google Ad</div>
  <div>Generate a Google Ad using AI</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate LinkedIn Ad</div>
  <div>Generate a LinkedIn Ad using AI</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Summarize Emails & Send to Shopia Research</div>
  <div>Send competitor newsletters and emails and add to research</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Twitter Ad</div>
  <div>Generate a Twitter Ad using AI</div>
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
          <title>Shopia</title>
        </>
      ),
    },
  };
}
