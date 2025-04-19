import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="smpl"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smpl.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        smpl Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 53, 201, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Smpl is a member management platform for modern subscription-based businesses. Whether you\'re running a coworking business, a makerspace, or a gallery, smpl seamlessly automates your member billing and invoicing, meeting room reservations, and communication in one place. Get started with smpl and be up and running within minutes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Member Cancelled</div>
  <div>Triggers when a member is deactivated from smpl</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Payment Failed</div>
  <div>Triggers when a member\'s payment has failed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Payment Success</div>
  <div>Triggers when a member\'s payment is successful</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member signs up</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation</div>
  <div>Triggers when a new reservation is created</div>
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
          <title>smpl</title>
          <meta name="description" content={}/>re running a coworking business, a makerspace, or a gallery, smpl seamlessly automates your member billing and invoicing, meeting room reservations, and communication in one place. Get started with smpl and be up and running within minutes.' />
        </>
      ),
    },
  };
}
