import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coherent"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coherent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coherent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(234, 191, 5, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coherent is a web application specifically designed to manage coworking and shared workspaces and to connect their communities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Cancelled</div>
  <div>Triggers when a booking is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Received</div>
  <div>Triggers when an invoice is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Member</div>
  <div>Triggers when a new team member joins an organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Sent</div>
  <div>Triggers when an invoice is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organisation Sign-Up</div>
  <div>Triggers when a new organisation signs up for a workspace.</div>
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
          <title>Coherent</title>
        </>
      ),
    },
  };
}
