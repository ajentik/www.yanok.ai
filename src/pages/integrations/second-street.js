import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Second Street"
      description="Upland Second Street is a Saas audience engagement platform that allows its customers to create interactive promotions to engage and grow their audience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/second-street.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Second Street Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 116, 219, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Upland Second Street is a Saas audience engagement platform that allows its customers to create interactive promotions to engage and grow their audience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Segmented User</div>
  <div>Triggers when a user subscribes to your segmented audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a user subscribes to your opt-in audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribe</div>
  <div>Triggers when a user unsubscribes from your opt-in audience.</div>
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
          <title>Second Street</title>
          <meta name="description" content="Upland Second Street is a Saas audience engagement platform that allows its customers to create interactive promotions to engage and grow their audience." />
        </>
      ),
    },
  };
}
