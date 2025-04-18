import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DocSend"
      description="DocSend tells you how prospects engage with your sales material after you send it. Know when to follow up, who to follow up with, and what to focus on, enabling you to do business faster."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docsend.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DocSend Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 164, 239, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DocSend tells you how prospects engage with your sales material after you send it. Know when to follow up, who to follow up with, and what to focus on, enabling you to do business faster.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Link Created</div>
  <div>This trigger fires when you create a new link in DocSend.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Space Created</div>
  <div>This trigger fires when you create a new Space in DocSend.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Space Download</div>
  <div>Triggers when you get a new download event in Spaces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Visit</div>
  <div>Triggers when you get a new visit.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>DocSend</title>
          <meta name="description" content="DocSend tells you how prospects engage with your sales material after you send it. Know when to follow up, who to follow up with, and what to focus on, enabling you to do business faster." />
        </>
      ),
    },
  };
}
