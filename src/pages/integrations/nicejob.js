import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="NiceJob"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/nicejob.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        NiceJob Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(130, 24, 167, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">NiceJob is a platform that helps you get more customer reviews and build a great reputation online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Person Created or Updated</div>
  <div>Triggers when a new person is created or an existing person is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Review Created or Updated</div>
  <div>Triggers when a new review is created or an existing review is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a new Booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Case</div>
  <div>Creates a new case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates a new employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Person</div>
  <div>Creates a new Person or updates an exisitng person with the given email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Visit</div>
  <div>Creates a new visit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Contact</div>
  <div>Enrolls a contact into a NiceJob campaign, defaulting to the Get Reviews campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person</div>
  <div>Find a person with a specific email address.</div>
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
          <title>NiceJob</title>
        </>
      ),
    },
  };
}
