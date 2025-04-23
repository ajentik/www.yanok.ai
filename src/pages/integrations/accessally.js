import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AccessAlly"
      description={`AccessAlly makes it easy to build courses, memberships, and digital products on Wordpress so you have the power and flexibility you need to sell more, teach better, and engage longer.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/accessally.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AccessAlly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 165, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AccessAlly makes it easy to build courses, memberships, and digital products on Wordpress so you have the power and flexibility you need to sell more, teach better, and engage longer.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">AccessAlly Custom Operation Trigger</div>
  <div>Triggers when an AccessAlly Zapier Custom Operation is run.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Opts in via an AccessAlly Form</div>
  <div>Triggers when a client submits an AccessAlly form. The exact information is dependent on the AccessAlly Form setup, but usually includes name and email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Successfully Makes a Purchase</div>
  <div>Triggers when a client makes a successful purchase.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Submits Preliminary Order Form Information</div>
  <div>Triggers when a client submits name and email information on an order form. This can be used to start an abandoned cart automation / sequence.</div>
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
          <title>AccessAlly</title>
          <meta name="description" content={`AccessAlly makes it easy to build courses, memberships, and digital products on Wordpress so you have the power and flexibility you need to sell more, teach better, and engage longer.`} />
        </>
      ),
    },
  };
}
