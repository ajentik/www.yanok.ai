import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="EASY2"
      description={`EASY2 is an all-in-one software for your digital marketing. Whether funnel, e-mail marketing, online shop member area, etc. with EASY2 you have everything in ONE place.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/easy2.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        EASY2 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(170, 122, 78, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">EASY2 is an all-in-one software for your digital marketing. Whether funnel, e-mail marketing, online shop member area, etc. with EASY2 you have everything in ONE place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact was created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form</div>
  <div>Triggers when a new form is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member was created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates or update a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Member</div>
  <div>Create or update a member</div>
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
          <title>EASY2</title>
          <meta name="description" content={`EASY2 is an all-in-one software for your digital marketing. Whether funnel, e-mail marketing, online shop member area, etc. with EASY2 you have everything in ONE place.`} />
        </>
      ),
    },
  };
}
