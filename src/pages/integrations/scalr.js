import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Scalr"
      description="Scalr Cloud Management Platform offers a unified API and web interface for developers and IT users to access and manage infrastructure resources distributed across numerous public and private clouds, such as Amazon Web Services and OpenStack. Scalr delivers the balance required between development autonomy and IT control."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/scalr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Scalr Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(165, 37, 42, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Scalr Cloud Management Platform offers a unified API and web interface for developers and IT users to access and manage infrastructure resources distributed across numerous public and private clouds, such as Amazon Web Services and OpenStack. Scalr delivers the balance required between development autonomy and IT control.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Webhook Event</div>
  <div>A Scalr Webhook Event</div>
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
          <title>Scalr</title>
          <meta name="description" content="Scalr Cloud Management Platform offers a unified API and web interface for developers and IT users to access and manage infrastructure resources distributed across numerous public and private clouds, such as Amazon Web Services and OpenStack. Scalr delivers the balance required between development autonomy and IT control." />
        </>
      ),
    },
  };
}
