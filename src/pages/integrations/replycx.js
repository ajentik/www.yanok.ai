import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ReplyCX"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/replycx.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ReplyCX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 43, 67, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">It\'s easy to build bots, but hard to get the desired results. This is where ReplyCX steps in, providing a done-for-you service. We build a pipeline of qualified leads, automate your support, without increasing headcount with our no-code chatbot platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Zapier Block Activated</div>
  <div>Triggers when the visitor reaches the "Zapier" block in a conversation.</div>
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
          <title>ReplyCX</title>
          <meta name="description" content={}/>s easy to build bots, but hard to get the desired results. This is where ReplyCX steps in, providing a done-for-you service. We build a pipeline of qualified leads, automate your support, without increasing headcount with our no-code chatbot platform.' />
        </>
      ),
    },
  };
}
